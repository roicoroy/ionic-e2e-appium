import config from './wdio.shared.appium.config';

// ============
// Capabilities
// ============
//
// For all capabilities please check
// http://appium.io/docs/en/writing-running-appium/caps/#general-capabilities
//
config.capabilities = [
  {
    platformName: 'iOS',
    maxInstances: 1,
    "appium:deviceName": "iPhone 13 Pro",
    // "appium:udid": "00008110-001C619102F8801E",
    "appium:platformVersion": "16.4",
    "appium:orientation": "PORTRAIT",
    "appium:automationName": "XCUITest",
    // uk.goiaba.conference
    // The path to the app
    'appium:app': '/Users/ricardobento/Documents/AUTOMATION/webdriverIO/ionic-e2e-appium/tests/apps/conference-Debug-iphonesimulator/App.app',
    'appium:newCommandTimeout': 240,
    'appium:autoWebview': true,
    'appium:noReset': true,
  },
];
config.maxInstances = 1;

exports.config = config;
