module.exports = {
  integrations: {
    wawibox: {
      location: '@vue-storefront/wawibox-api/server',
      configuration: {
        api: { 
          url: 'https://api.wawibox.de/api/marketplace/v1/'
        }
      }
    }
  }
};
