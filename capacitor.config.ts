import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'ionic.e2e.appium',
  appName: 'ionic-e2e-appium',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
