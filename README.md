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
EXPO_PUBLIC_APP_SLUG=chatwoot-mobile
```

#### How to Obtain Environment Values

##### Firebase Configuration (Push Notifications)

1. **Create a Firebase Project**:
   - Go to [Firebase Console](https://console.firebase.google.com/)
   - Click "Add project" and follow the setup wizard
   - Enable Google Analytics (recommended)

2. **Add Android App**:
   - In Firebase Console, click the Android icon
   - Use package name: `com.chatwoot.app`
   - Download `google-services.json` and place it in the project root
   - Set `EXPO_PUBLIC_ANDROID_GOOGLE_SERVICES_FILE=./google-services.json`

3. **Add iOS App**:
   - In Firebase Console, click the iOS icon
   - Use bundle ID: `com.chatwoot.app`
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

- **EXPO_PUBLIC_APP_SLUG**: This is your app's unique identifier
  - Default: `chatwoot-mobile`
  - You can customize this to match your branding
  - Must be unique across all Expo projects

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
EXPO_PUBLIC_APP_SLUG=chatwoot-mobile

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

# Run with development client
pnpm start

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
