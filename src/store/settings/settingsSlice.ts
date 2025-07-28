import { createSlice } from '@reduxjs/toolkit';
import { settingsActions } from './settingsActions';
import * as RootNavigation from '@/utils/navigationUtils';
import { NotificationSettings } from './settingsTypes';
import { Theme } from '@/types/common/Theme';

interface SettingsState {
  baseUrl: string;
  installationUrl: string;
  uiFlags: {
    isSettingUrl: boolean;
    isUpdating: boolean;
    isLocaleSet: boolean;
  };
  notificationSettings: NotificationSettings;
  localeValue: string;
  webSocketUrl: string;
  theme: Theme;
  version: string;
  pushToken: string;
}

// Get Chatwoot URL from environment variable or use default
const getChatwootUrl = () => {
  const envUrl = process.env.EXPO_PUBLIC_CHATWOOT_BASE_URL;
  if (envUrl) {
    // Ensure URL has proper format
    const cleanUrl = envUrl.replace(/\/$/, ''); // Remove trailing slash
    return {
      baseUrl: cleanUrl.replace(/^https?:\/\//, ''), // Remove protocol
      installationUrl: `${cleanUrl}/`,
      webSocketUrl: `wss://${cleanUrl.replace(/^https?:\/\//, '')}/cable`,
    };
  }
  // Default to chat.responpintar.com
  return {
    baseUrl: 'chat.responpintar.com',
    installationUrl: 'https://chat.responpintar.com/',
    webSocketUrl: 'wss://chat.responpintar.com/cable',
  };
};

const { baseUrl, installationUrl, webSocketUrl } = getChatwootUrl();

const initialState: SettingsState = {
  baseUrl,
  installationUrl,
  uiFlags: {
    isSettingUrl: false,
    isUpdating: false,
    isLocaleSet: false,
  },
  localeValue: 'en',
  notificationSettings: {
    account_id: 0,
    all_email_flags: [],
    all_push_flags: [],
    id: 0,
    selected_email_flags: [],
    selected_push_flags: [],
    user_id: 0,
  },
  webSocketUrl,
  theme: 'system',
  version: '',
  pushToken: '',
};
export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    resetSettings: state => {
      state.uiFlags.isSettingUrl = false;
      state.uiFlags.isUpdating = false;
    },
    setLocale: (state, action) => {
      state.localeValue = action.payload;
      state.uiFlags.isLocaleSet = true;
    },
  },
  extraReducers: builder => {
    builder
      .addCase(settingsActions.setInstallationUrl.pending, state => {
        state.uiFlags.isSettingUrl = true;
      })
      .addCase(settingsActions.setInstallationUrl.fulfilled, (state, action) => {
        state.uiFlags.isSettingUrl = false;
        state.installationUrl = action.payload.installationUrl;
        state.baseUrl = action.payload.baseUrl;
        state.webSocketUrl = action.payload.webSocketUrl;
        RootNavigation.navigate('Login');
      })
      .addCase(settingsActions.setInstallationUrl.rejected, state => {
        state.uiFlags.isSettingUrl = false;
        state.installationUrl = '';
        state.baseUrl = '';
      })
      .addCase(settingsActions.getNotificationSettings.fulfilled, (state, action) => {
        state.notificationSettings = action.payload;
      })
      .addCase(settingsActions.updateNotificationSettings.pending, state => {
        state.uiFlags.isUpdating = true;
      })
      .addCase(settingsActions.updateNotificationSettings.fulfilled, (state, action) => {
        state.uiFlags.isUpdating = false;
        state.notificationSettings = action.payload;
      })
      .addCase(settingsActions.updateNotificationSettings.rejected, state => {
        state.uiFlags.isUpdating = false;
      })
      .addCase(settingsActions.getChatwootVersion.fulfilled, (state, action) => {
        const { version } = action.payload;
        state.version = version;
      })
      .addCase(settingsActions.saveDeviceDetails.fulfilled, (state, action) => {
        if (action?.payload?.fcmToken) {
          state.pushToken = action.payload.fcmToken;
        }
      })
      .addCase(settingsActions.saveDeviceDetails.rejected, (state, action) => {
        state.pushToken = '';
      });
  },
});
export const { resetSettings, setLocale } = settingsSlice.actions;
export default settingsSlice.reducer;
