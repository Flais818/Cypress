const { defineConfig } = require("cypress");

module.exports = defineConfig({
  allowCypressEnv: false,
  viewportHeight: 1054,
  viewportWidth: 2108,

  e2e: {
    setupNodeEvents(on, config) {
      // implement node event listeners here
    },
  },
});
