import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'com.kwikify.app',
  appName: 'Kwikifyapp',
  webDir: 'dist/angular-build',
  bundledWebRuntime: false,
  "ios": {
    "contentInset": "always"
  }
};

export default config;
