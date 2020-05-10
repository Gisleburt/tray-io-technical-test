module.exports = (phase, { defaultConfig }) => {

  return {
    ...defaultConfig,
    experimental: {
      ...defaultConfig.experimental,
      basePath: '/tray-io-technical-test',
    }
  }
}
