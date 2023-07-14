import type { Options } from "@wdio/types";

export const config: Options.Testrunner = {
  runner: "local",
  autoCompileOpts: {
    autoCompile: true,
    tsNodeOpts: {
      project: "./tsconfig.json",
      transpileOnly: true,
    },
  },
  specs: ["./test/specs/**/*.ts"],
  maxInstances: 10,
  capabilities: [
    {
      browserName: "chrome", // or "firefox", "microsoftedge", "safari"
      "goog:chromeOptions": {
        args: ["--headless"],
      },
    },
  ],
  logLevel: "error",
  bail: 0,
  baseUrl: "http://localhost",
  waitforTimeout: 10000,
  connectionRetryTimeout: 120000,
  connectionRetryCount: 3,
  services: ["chromedriver"],
  framework: "mocha",
  reporters: [
    "spec",
    [
      "allure",
      {
        outputDir: "cache/allure-results",
        disableWebdriverStepsReporting: true,
      },
    ],
  ],
  mochaOpts: {
    ui: "bdd",
    timeout: 60000,
    require: ['mocha.js'],
  },
};
