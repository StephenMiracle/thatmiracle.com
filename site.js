require('dotenv').config()


module.exports = {
  title: 'My website',
  domain: process.env.DOMAIN,
  zoneId: process.env.ZONE_ID,
  region: process.env.REGION,
  integrations: {
    storyblok: process.env.GATSBY_STORYBLOK
  }
}