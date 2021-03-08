exports.config = {
  runner: "local",
  framework: "mocha",
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
  },
  sync: false,
  logLevel: "silent",
  deprecationWarnings: true,
  bail: 0,
  path: "/wd/hub",  
  port: 4723,
  waitforTimeout: 10000,
  connectionRetryTimeout: 90000,
  connectionRetryCount: 3,
  reporters: ["spec"],
  maxInstances: 1,
  beforeTest: () => {
    const chai = require("chai");
    const chaiWebdriver = require("chai-webdriverio").default;
    chai.use(chaiWebdriver(browser));
    global.assert = chai.assert;
  },
  specs: ["./test/specs/android-app-test.js"],
  capabilities: [
    {
      deviceOrientation: "portrait",
      captureScreenshots: true,
      app:
        "https://github.com/misto/appium-basic-sample/raw/main/app-debug.apk",
      fullReset: true,
      allowTestPackages: true,
      deviceName: "*",
      platformName: "Android",
    },
  ],
};
