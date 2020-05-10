module.exports = (phase, { defaultConfig }) => {
  console.log(process.env.NODE_ENV);
  if(process.env.NODE_ENV === 'deployment') {
    return {
      ...defaultConfig,
      experimental: {
        ...defaultConfig.experimental,
        basePath: '/tray-io-technical-test',
      }
    }
  }

  return defaultConfig;
}
