'use strict'

const all = {
  // MongoDB connection options
  mongo: {
    uri: 'mongodb://mongo:27017/ee',
    options: {
      db: {
        safe: true
      }
    }
  },
  sendGrid: {
    apiKey: process.env.SENDGRID_API_KEY || 'sendgrid_api_key'
  }
}

module.exports = all
