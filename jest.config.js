const path = require('path');

module.exports = {
  testMatch: ["<rootDir>/client/**/*.test.js"],
  setupFilesAfterEnv: './testSetup.js',
  modulePaths: ["<rootDir>/client"]
}