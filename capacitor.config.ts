import { CapacitorConfig } from '@capacitor/cli';

const config: CapacitorConfig = {
  appId: 'io.ionic.starter',
  appName: 'ionic-e2e-appium',
  webDir: 'www',
  server: {
    androidScheme: 'https'
  }
};

export default config;
