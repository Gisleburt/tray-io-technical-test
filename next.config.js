module.exports = (phase, { defaultConfig }) => {
  console.log(`Building for ${process.env.NODE_ENV}`);

  if(process.env.NODE_ENV === 'github') {
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
