// For authoring Nightwatch tests, see
// http://nightwatchjs.org/guide#usage

module.exports = {
  'default': browser => {
    browser
      .url(process.env.VUE_DEV_SERVER_URL)
      .waitForElementVisible('#app', 5000)
      .assert.elementPresent('header')
      .assert.containsText('h1', 'Traveldiaries')
      .assert.elementCount('h1', 1)
      .end()
  }
}
