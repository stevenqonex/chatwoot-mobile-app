<img src="https://user-images.githubusercontent.com/2246121/282256557-1570674b-d142-4198-9740-69404cc6a339.png#gh-light-mode-only" width="100%" alt="Chat dashboard dark mode"/>
<img src="https://user-images.githubusercontent.com/2246121/282256632-87f6a01b-6467-4e0e-8a93-7bbf66d03a17.png#gh-dark-mode-only" width="100%" alt="Chat dashboard"/>

---

# Chatwoot

Mobile app for chatwoot platform. Built with React Native and Expo.

<p>
   <a href="https://github.com/react-native-community/releases/blob/master/CHANGELOG.md"><img src="https://img.shields.io/github/package-json/dependency-version/chatwoot/chatwoot-mobile-app/react-native?color=%2361dafb" alt="Project Dependencies"></a>
   <img src="https://img.shields.io/github/package-json/dependency-version/chatwoot/chatwoot-mobile-app/expo?color=%2361dafb" alt="Expo">
  <img src="https://img.shields.io/discord/647412545203994635" alt="Discord">
  <a href="https://discord.gg/cJXdrwS"><img src="https://img.shields.io/badge/chat-Discord-violet?logo=discord" alt="Chat on Discord"></a>
   <a href="http://makeapullrequest.com"><img src="https://img.shields.io/badge/PRs-welcome-brightgreen.svg" alt="Chat on Discord"></a>
 <img src="https://img.shields.io/github/license/chatwoot/chatwoot-mobile-app" alt="License">
</p>

- **Supported Chatwoot version:** 3.13.0+
- **Supported iOS versions**: 13.4+
- **Supported Android versions**: 6.0+

## Features

- Do not miss out on the new customers
- Follow up on customer conversations on go
- Reply easily with canned responses
- Receive realtime notifications about system activities
- Communicate with other team members via private notes
- Assign statuses to your conversations
  ... and more to come!

## Development Guide

### Prerequisites

Before you begin development, ensure you have the following installed:

- **Node.js** (version 18 or higher)
- **pnpm** (the project uses pnpm as package manager)
- **Expo CLI** (`npm install -g @expo/cli`)
- **React Native development environment**:
  - For iOS: Xcode (macOS only)
  - For Android: Android Studio with Android SDK

### Setup Instructions

#### 1. Clone and Install Dependencies

```bash
# Clone the repository
git clone https://github.com/chatwoot/chatwoot-mobile-app.git
cd chatwoot-mobile-app

# Install dependencies using pnpm
pnpm install
```

#### 2. Environment Configuration

The project uses environment variables for configuration. Create a `.env` file in the root directory with the necessary environment variables:

```bash
# Firebase configuration (for push notifications)
EXPO_PUBLIC_ANDROID_GOOGLE_SERVICES_FILE=./google-services.json
EXPO_PUBLIC_IOS_GOOGLE_SERVICES_FILE=./GoogleService-Info.plist

# Sentry configuration (for error tracking)
EXPO_PUBLIC_SENTRY_PROJECT_NAME=your-sentry-project
EXPO_PUBLIC_SENTRY_ORG_NAME=your-sentry-org

# EAS project ID (for Expo Application Services)
EXPO_PUBLIC_PROJECT_ID=your-eas-project-id

# App configuration
EXPO_PUBLIC_APP_NAME=Your App Name
EXPO_PUBLIC_APP_SLUG=your-app-slug
EXPO_PUBLIC_EXPO_OWNER=your-expo-org

# Bundle identifiers
EXPO_PUBLIC_IOS_BUNDLE_ID=com.yourcompany.yourapp
EXPO_PUBLIC_ANDROID_PACKAGE_NAME=com.yourcompany.yourapp

# Domain configuration
EXPO_PUBLIC_CHATWOOT_DOMAIN=your-domain.com
```

#### How to Obtain Environment Values

##### Firebase Configuration (Push Notifications)

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard
   - Enable Google Analytics (recommended)

2. **Add Android App**:
   - In Firebase Console, click the Android icon
   - Use package name: `com.yourcompany.yourapp` (or your custom `EXPO_PUBLIC_ANDROID_PACKAGE_NAME`)
   - Download `google-services.json` and place it in the project root
   - Set `EXPO_PUBLIC_ANDROID_GOOGLE_SERVICES_FILE=./google-services.json`

3. **Add iOS App**:
   - In Firebase Console, click the iOS icon
   - Use bundle ID: `com.yourcompany.yourapp` (or your custom `EXPO_PUBLIC_IOS_BUNDLE_ID`)
   - Download `GoogleService-Info.plist` and place it in the project root
   - Set `EXPO_PUBLIC_IOS_GOOGLE_SERVICES_FILE=./GoogleService-Info.plist`

4. **Enable Cloud Messaging**:
   - In Firebase Console, go to "Messaging" section
   - Enable Cloud Messaging for both platforms

##### Sentry Configuration (Error Tracking)

1. **Create Sentry Account**:
   - Go to [Sentry.io](https://sentry.io/) and create an account
   - Create a new organization or use existing one

2. **Create Project**:
   - In Sentry dashboard, create a new project
   - Choose "React Native" as the platform
   - Note your organization name and project name

3. **Get Configuration Values**:
   - Organization name: Found in Sentry dashboard URL or settings
   - Project name: The name you gave to your project
   - Set `EXPO_PUBLIC_SENTRY_ORG_NAME=your-org-name`
   - Set `EXPO_PUBLIC_SENTRY_PROJECT_NAME=your-project-name`

##### EAS Project ID (Expo Application Services)

1. **Install EAS CLI**:
   ```bash
   npm install -g @expo/eas-cli
   ```

2. **Login to Expo**:
   ```bash
   eas login
   ```

3. **Initialize EAS**:
   ```bash
   eas init
   ```
   This will create an `eas.json` file and link your project to EAS.

4. **Get Project ID**:
   - The project ID will be automatically generated
   - You can find it in the `eas.json` file or by running:
   ```bash
   eas project:info
   ```
   - Set `EXPO_PUBLIC_PROJECT_ID=your-project-id`

##### App Configuration

- **EXPO_PUBLIC_APP_NAME**: Your app's display name
  - Default: `Chatwoot`
  - This appears on the home screen and app store

- **EXPO_PUBLIC_APP_SLUG**: Your app's unique identifier
  - Default: `chatwoot-mobile`
  - Must be unique across all Expo projects

- **EXPO_PUBLIC_EXPO_OWNER**: Your Expo organization name
  - Default: `chatwoot`
  - Required for EAS builds and app store submissions

- **EXPO_PUBLIC_IOS_BUNDLE_ID**: iOS bundle identifier
  - Default: `com.chatwoot.app`
  - Format: `com.company.appname`
  - Must match Firebase configuration

- **EXPO_PUBLIC_ANDROID_PACKAGE_NAME**: Android package name
  - Default: `com.chatwoot.app`
  - Format: `com.company.appname`
  - Must match Firebase configuration

- **EXPO_PUBLIC_CHATWOOT_DOMAIN**: Your Chatwoot instance domain
  - Default: `app.chatwoot.com`
  - Used for deep linking and associated domains

##### Optional: Chatwoot Backend Configuration

You can set the main Chatwoot backend URL through environment variables to skip the URL configuration screen:

```bash
# Main Chatwoot backend URL (optional - skips URL configuration screen)
EXPO_PUBLIC_CHATWOOT_BASE_URL=https://your-chatwoot-instance.com

# Chatwoot widget configuration (optional)
EXPO_PUBLIC_CHATWOOT_WEBSITE_TOKEN=your-website-token
```

**Note**: 
- If `EXPO_PUBLIC_CHATWOOT_BASE_URL` is set, the app will skip the URL configuration screen and use this URL directly
- If not set, users will need to configure the URL through the app's configuration screen
- The same `EXPO_PUBLIC_CHATWOOT_BASE_URL` is used for both the main app backend and the widget (if configured)

##### Environment File Example

Here's a complete `.env` file example:

```bash
# Firebase Configuration
EXPO_PUBLIC_ANDROID_GOOGLE_SERVICES_FILE=./google-services.json
EXPO_PUBLIC_IOS_GOOGLE_SERVICES_FILE=./GoogleService-Info.plist

# Sentry Configuration
EXPO_PUBLIC_SENTRY_PROJECT_NAME=chatwoot-mobile
EXPO_PUBLIC_SENTRY_ORG_NAME=your-organization

# EAS Configuration
EXPO_PUBLIC_PROJECT_ID=12345678-1234-1234-1234-123456789012

# App Configuration
EXPO_PUBLIC_APP_NAME=Your App Name
EXPO_PUBLIC_APP_SLUG=your-app-slug
EXPO_PUBLIC_EXPO_OWNER=your-expo-org

# Bundle Identifiers
EXPO_PUBLIC_IOS_BUNDLE_ID=com.yourcompany.yourapp
EXPO_PUBLIC_ANDROID_PACKAGE_NAME=com.yourcompany.yourapp

# Domain Configuration
EXPO_PUBLIC_CHATWOOT_DOMAIN=your-domain.com

# Optional: Chatwoot Backend Configuration
# EXPO_PUBLIC_CHATWOOT_BASE_URL=https://your-chatwoot-instance.com
# EXPO_PUBLIC_CHATWOOT_WEBSITE_TOKEN=your-website-token
```

**Note**: For development, you can start with minimal configuration. Firebase and Sentry are optional for basic development but required for production builds.

#### 3. Development Commands

```bash
# Start the development server
pnpm start

# Run on iOS simulator/device
pnpm ios

# Run on Android emulator/device
pnpm android

# Clean and regenerate native code
pnpm generate

# Run tests
pnpm test

# Lint code
pnpm lint

# Run Storybook for component development
pnpm start:storybook
pnpm storybook:ios
pnpm storybook:android
```

#### 4. Building for Production

```bash
# Build for Android
pnpm build:android

# Build for iOS
pnpm build:ios

# Build for both platforms
pnpm build:all

# Build locally (requires EAS CLI)
pnpm build:android:local
pnpm build:ios:local
```

### Project Structure

```
src/
├── components-next/     # UI components
├── screens/            # App screens
├── store/              # Redux store and slices
├── navigation/         # Navigation configuration
├── theme/              # Styling and theming
├── types/              # TypeScript type definitions
├── utils/              # Utility functions
├── services/           # API services
├── hooks/              # Custom React hooks
├── context/            # React Context providers
├── constants/          # Application constants
├── i18n/               # Internationalization
└── assets/             # Local assets
```

### Key Technologies

- **React Native** 0.76.9 with Expo SDK 52
- **TypeScript** with strict mode
- **Redux Toolkit** for state management
- **React Navigation** v6 for navigation
- **Tailwind CSS** via `twrnc` for styling
- **Jest** for testing
- **Storybook** for component development

### Development Workflow

1. **Start Development Server**: `pnpm start`
2. **Run on Device/Simulator**: `pnpm ios` or `pnpm android`
3. **Component Development**: Use Storybook with `pnpm start:storybook`
4. **Testing**: Run tests with `pnpm test`
5. **Code Quality**: Lint code with `pnpm lint`

### Troubleshooting

- **Clean Installation**: If you encounter issues, try `pnpm clean` to clear caches
- **Regenerate Native Code**: Use `pnpm generate` to regenerate native iOS/Android code
- **Check Configuration**: Run `pnpm run:doctor` to check your development environment

For more detailed setup instructions, see the [CONTRIBUTING.md](https://www.chatwoot.com/docs/contributing-guide/mobile-app/setup-guide).

## Branding and Customization Guide

### App Icons and Logos

#### 1. App Icons (Home Screen Icons)

**Location**: `assets/` directory (root level)

**Files to replace**:
- `icon.png` - Main app icon (1024x1024px recommended)
- `adaptive-icon.png` - Android adaptive icon (1024x1024px)
- `splash.png` - Splash screen image (1242x2436px recommended)

**How to change**:
1. Replace these PNG files with your own branded images
2. Keep the same filenames and dimensions
3. Use transparent backgrounds for best results

#### 2. In-App Logo

**Location**: `src/assets/images/logo.png`

**Usage**: This logo appears in the login screen and other places within the app

**How to change**:
1. Replace `src/assets/images/logo.png` with your branded logo
2. Recommended size: 40x40px (the app uses `w-10 h-10` styling)
3. Use PNG format with transparent background

#### 3. App Name

**Location**: `app.config.ts`

```typescript
export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    name: 'Chatwoot', // ← Change this to your app name
    slug: process.env.EXPO_PUBLIC_APP_SLUG || 'chatwoot-mobile',
    // ...
  };
};
```

### Color Scheme and Styling

#### 1. Primary Color System

**Location**: `src/theme/colors/light.ts` and `src/theme/colors/dark.ts`

**Key color categories to customize**:

```typescript
// src/theme/colors/light.ts
module.exports = {
  // Primary brand colors
  blue: {
    50: 'hsl(213, 100%, 96.8%)',
    100: 'hsl(214, 94.6%, 92.7%)',
    200: 'hsl(213, 97.0%, 87.3%)',
    300: 'hsl(212, 96.3%, 79.9%)',
    400: 'hsl(213, 94.0%, 68.1%)',
    500: 'hsl(217, 91.0%, 59.8%)', // ← Your primary brand color
    600: 'hsl(221, 83.2%, 53.3%)', // ← Darker shade
    700: 'hsl(224, 76.5%, 48.0%)',
    800: 'hsl(226, 71.4%, 44.1%)',
    900: 'hsl(224, 64.3%, 33.1%)',
    950: 'hsl(226, 57.0%, 21.0%)',
  },
  
  // Accent colors
  indigo: { /* ... */ },
  violet: { /* ... */ },
  
  // UI colors
  gray: { /* ... */ },
  slate: { /* ... */ },
  
  // Status colors
  green: { /* ... */ },
  red: { /* ... */ },
  yellow: { /* ... */ },
};
```

#### 2. Theme Configuration

**Location**: `src/theme/tailwind.config.ts`

```typescript
export const twConfig = {
  theme: {
    ...defaultTheme,
    extend: {
      colors: { ...chatwootAppColors }, // ← Your custom colors
      fontSize: {
        xs: '12px',
        cxs: '13px',
        md: '15px',
      },
      fontFamily: {
        'inter-normal-20': ['Inter-400-20'],
        'inter-420-20': ['Inter-420-20'],
        'inter-medium-24': ['Inter-500-24'],
        'inter-580-24': ['Inter-580-24'],
        'inter-semibold-20': ['Inter-600-20'],
      },
    },
  },
};
```

#### 3. Splash Screen Colors

**Location**: `app.config.ts`

```typescript
splash: {
  image: './assets/splash.png',
  resizeMode: 'contain',
  backgroundColor: '#ffffff', // ← Change splash background color
  enableFullScreenImage_legacy: true,
},
```

#### 4. Navigation Bar Colors

**Location**: `app.config.ts`

```typescript
androidNavigationBar: { 
  backgroundColor: '#ffffff' // ← Change Android nav bar color
},
```

### Color System Structure

| Category | Purpose | Files |
|----------|---------|-------|
| **Primary Colors** | Brand identity | `blue`, `indigo`, `violet` |
| **UI Colors** | Interface elements | `gray`, `slate`, `mauve` |
| **Status Colors** | Success/error states | `green`, `red`, `yellow` |
| **Accent Colors** | Highlights | `tomato`, `crimson`, `pink` |

### Step-by-Step Branding Process

1. **Replace App Icons**:
   ```bash
   # Replace these files in the root assets/ directory
   assets/icon.png
   assets/adaptive-icon.png
   assets/splash.png
   ```

2. **Replace In-App Logo**:
   ```bash
   # Replace this file
   src/assets/images/logo.png
   ```

3. **Update App Name**:
   ```typescript
   // In app.config.ts
   name: 'Your Company Name',
   ```

4. **Customize Colors**:
   ```typescript
   // In src/theme/colors/light.ts
   blue: {
     500: 'hsl(217, 91.0%, 59.8%)', // ← Your primary brand color
     600: 'hsl(221, 83.2%, 53.3%)', // ← Darker shade
     // ... other shades
   },
   ```

5. **Update Splash Screen**:
   ```typescript
   // In app.config.ts
   splash: {
     backgroundColor: '#your-brand-color',
   },
   ```

### Branding Checklist

- [ ] Replace `assets/icon.png`
- [ ] Replace `assets/adaptive-icon.png`
- [ ] Replace `assets/splash.png`
- [ ] Replace `src/assets/images/logo.png`
- [ ] Update app name in `app.config.ts`
- [ ] Customize primary colors in `src/theme/colors/light.ts`
- [ ] Customize primary colors in `src/theme/colors/dark.ts`
- [ ] Update splash background color
- [ ] Test on both iOS and Android platforms

### Important Notes

- **Image Formats**: Use PNG for logos and icons
- **Dimensions**: Follow the recommended sizes for best results
- **Color Format**: Use HSL format for colors (e.g., `hsl(217, 91.0%, 59.8%)`)
- **Testing**: Test on both iOS and Android devices
- **Dark Mode**: Update both `light.ts` and `dark.ts` color files

## Custom Instance Configuration Guide

### Overview

If you want to use this app with your own custom Chatwoot instance (different name, domain, and branding), you'll need to modify several hardcoded configurations.

### Required Changes for Custom Instance

#### 1. **Environment Variables (`.env`)**

```bash
# App Identity
EXPO_PUBLIC_APP_NAME=Your App Name
EXPO_PUBLIC_APP_SLUG=your-app-slug
EXPO_PUBLIC_EXPO_OWNER=your-expo-org

# Bundle Identifiers
EXPO_PUBLIC_IOS_BUNDLE_ID=com.yourcompany.yourapp
EXPO_PUBLIC_ANDROID_PACKAGE_NAME=com.yourcompany.yourapp

# Domain Configuration
EXPO_PUBLIC_CHATWOOT_DOMAIN=your-domain.com

# Chatwoot Backend
EXPO_PUBLIC_CHATWOOT_BASE_URL=https://your-chatwoot-instance.com
```

#### 2. **App Configuration (`app.config.ts`)**

The `app.config.ts` file now automatically uses environment variables:

```typescript
export default ({ config }: ConfigContext): ExpoConfig => {
  return {
    // App Identity (from environment variables)
    name: process.env.EXPO_PUBLIC_APP_NAME || 'Chatwoot',
    slug: process.env.EXPO_PUBLIC_APP_SLUG || 'chatwoot-mobile',
    
    // Bundle Identifiers (from environment variables)
    ios: {
      bundleIdentifier: process.env.EXPO_PUBLIC_IOS_BUNDLE_ID || 'com.chatwoot.app',
      associatedDomains: [`applinks:${process.env.EXPO_PUBLIC_CHATWOOT_DOMAIN || 'app.chatwoot.com'}`],
    },
    android: {
      package: process.env.EXPO_PUBLIC_ANDROID_PACKAGE_NAME || 'com.chatwoot.app',
      intentFilters: [
        {
          data: [
            {
              host: process.env.EXPO_PUBLIC_CHATWOOT_DOMAIN || 'app.chatwoot.com',
              pathPrefix: '/app/accounts/',
            },
          ],
        },
      ],
    },
    
    // Expo Organization (from environment variables)
    owner: process.env.EXPO_PUBLIC_EXPO_OWNER || 'chatwoot',
  };
};
```

#### 2. **Environment Variables (`.env`)**

```bash
# App Configuration
EXPO_PUBLIC_APP_SLUG=your-app-slug

# Chatwoot Backend Configuration
EXPO_PUBLIC_CHATWOOT_BASE_URL=https://your-chatwoot-instance.com

# Optional: Chatwoot Widget Configuration
EXPO_PUBLIC_CHATWOOT_WEBSITE_TOKEN=your-website-token
```

#### 3. **Firebase Configuration**

When setting up Firebase for push notifications:

- **Android Package Name**: Use `com.yourcompany.yourapp` (same as in `app.config.ts`)
- **iOS Bundle ID**: Use `com.yourcompany.yourapp` (same as in `app.config.ts`)

#### 4. **App Icons and Branding**

Replace all branding assets as described in the [Branding and Customization Guide](#branding-and-customization-guide) above.

### Step-by-Step Customization Process

1. **Set Environment Variables**:
   ```bash
   # Create .env file with all your custom values
   EXPO_PUBLIC_APP_NAME=Your App Name
   EXPO_PUBLIC_APP_SLUG=your-app-slug
   EXPO_PUBLIC_EXPO_OWNER=your-expo-org
   EXPO_PUBLIC_IOS_BUNDLE_ID=com.yourcompany.yourapp
   EXPO_PUBLIC_ANDROID_PACKAGE_NAME=com.yourcompany.yourapp
   EXPO_PUBLIC_CHATWOOT_DOMAIN=your-domain.com
   EXPO_PUBLIC_CHATWOOT_BASE_URL=https://your-chatwoot-instance.com
   ```

2. **App Configuration is Automatic**:
   - The `app.config.ts` file automatically uses your environment variables
   - No manual editing required!

3. **Update Firebase Configuration**:
   - Create new Firebase project
   - Use your custom bundle identifiers from environment variables:
     - Android: `com.yourcompany.yourapp` (from `EXPO_PUBLIC_ANDROID_PACKAGE_NAME`)
     - iOS: `com.yourcompany.yourapp` (from `EXPO_PUBLIC_IOS_BUNDLE_ID`)
   - Download new `google-services.json` and `GoogleService-Info.plist`

4. **Replace Branding Assets**:
   ```bash
   # Replace these files
   assets/icon.png
   assets/adaptive-icon.png
   assets/splash.png
   src/assets/images/logo.png
   ```

5. **Update Colors and Styling**:
   ```bash
   # Edit these files
   src/theme/colors/light.ts
   src/theme/colors/dark.ts
   app.config.ts (splash background color)
   ```

6. **Test Configuration**:
   ```bash
   # Clean and rebuild
   pnpm clean
   pnpm generate
   pnpm start
   ```

### Important Considerations

#### **Bundle Identifier Rules**
- Must be unique across all apps
- Format: `com.company.appname`
- Cannot be changed after app is published
- Must match Firebase configuration

#### **Domain Configuration**
- Your Chatwoot instance must be accessible at the configured domain
- Deep linking requires proper SSL certificates
- Associated domains must be verified in Apple Developer Console

#### **Expo Organization**
- You need your own Expo organization account
- The `owner` field must match your Expo organization name
- Required for EAS builds and app store submissions

#### **Firebase Project**
- Create a new Firebase project for your custom app
- Use your custom bundle identifiers
- Configure push notifications for your domain

### Customization Checklist

- [ ] Update app name in `app.config.ts`
- [ ] Change bundle identifiers (iOS and Android)
- [ ] Update associated domains and deep linking
- [ ] Change Expo owner
- [ ] Set environment variables
- [ ] Create new Firebase project
- [ ] Replace all branding assets
- [ ] Update color scheme
- [ ] Test on both platforms
- [ ] Verify deep linking works
- [ ] Test push notifications

### Example Custom Configuration

Here's an example for a company called "Acme Corp" with domain "support.acme.com":

```bash
# .env
EXPO_PUBLIC_APP_NAME=Acme Support
EXPO_PUBLIC_APP_SLUG=acme-support
EXPO_PUBLIC_EXPO_OWNER=acmecorp
EXPO_PUBLIC_IOS_BUNDLE_ID=com.acmecorp.support
EXPO_PUBLIC_ANDROID_PACKAGE_NAME=com.acmecorp.support
EXPO_PUBLIC_CHATWOOT_DOMAIN=support.acme.com
EXPO_PUBLIC_CHATWOOT_BASE_URL=https://support.acme.com
```

The `app.config.ts` file will automatically use these environment variables - no manual editing required!

## Download Android/iOS application

<p >
  <a href="https://apps.apple.com/app/id1495796682">
    <img alt="Download on the App Store" title="App Store" src="http://i.imgur.com/0n2zqHD.png" width="140">
  </a>

  <a href="https://play.google.com/store/apps/details?id=com.chatwoot.app&hl=en">
    <img alt="Get it on Google Play" title="Google Play" src="http://i.imgur.com/mtGRPuM.png" width="140">
  </a>
</p>

## Testing

To help with testing app updates before they're released, you can:

Sign up to be a beta tester

- [Android](https://play.google.com/apps/testing/com.chatwoot.app) - Open this link from your Android device
- [iOS](https://testflight.apple.com/join/yQ4yoSx4) - Open this link from your iOS device

You can leave the Beta testing program at any time:

- On Android, [click this link](https://play.google.com/apps/testing/com.chatwoot.app) while logged in with your Google Play email address used to opt-in for the Beta program, then click **Leave the program**.
- On iOS, access the `Chatwoot` app page in TestFlight and click **Stop Testing**.

## Feedback & Contributing

Feel free to send us feedback on [X](https://x.com/chatwootapp) or [file an issue](https://github.com/chatwoot/chatwoot-mobile-app/issues).

If you wish to contribute, please take a quick look at the [CONTRIBUTING.md](https://www.chatwoot.com/docs/contributing-guide/mobile-app/setup-guide).

If there's anything you'd like to chat about, please feel free to join our [Discord](https://discord.gg/cJXdrwS) chat!

_Chatwoot_ &copy; 2017-2025, Chatwoot Inc - Released under the MIT License.
