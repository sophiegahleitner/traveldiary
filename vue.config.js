module.exports = {
    pwa: {
        name: 'Traveldiary',
        themeColor: '#78AAC3',
        msTileColor: '#78AAC3',
        workboxOptions: {
            cacheId: 'phrasebook',
            importWorkboxFrom: 'local',
            navigateFallback: 'shell.html',
            navigateFallbackWhitelist: [/^((?!\/404).)*$/]
        }
    }
/*
    pluginOptions: {
    apollo: {
      enableMocks: true,
      enableEngine: true
    }
  }*/
}
