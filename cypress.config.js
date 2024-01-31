const { defineConfig } = require("cypress");

module.exports = defineConfig({
  e2e: {
    baseUrl: "https://www.saucedemo.com/",
    env: {
      nm: "standard_user",
      pwd: "secret_sauce"
    },
    setupNodeEvents(on, config) {
      // implement node event listeners here
      
    },
    defaultCommandTimeout: 5432,
    viewportWidth: 990,
    viewportHeight: 650
  },
});