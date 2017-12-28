/*
 * Handler definition for https://serverless.com/
 */
const { Nuxt, Builder } = require('nuxt');

let nuxtConfig = require('./nuxt.config.js');
nuxtConfig.dev = false;
const nuxt = new Nuxt(nuxtConfig);

const awsServerlessExpressMiddleware = require('aws-serverless-express/middleware');
const awsServerlessExpress = require('aws-serverless-express');
const app = require('express')();
const server = awsServerlessExpress.createServer(app);

app.use(awsServerlessExpressMiddleware.eventContext());
app.use(nuxt.render);

module.exports.main = (event, context) => {
  if (event.source === 'serverless-plugin-warmup') {
    console.log('WarmUP - Lambda is warm!');
    return callback(null, 'Lambda is warm!');
  }

  // workaround for double gzip encoding issue
  // HTTP gzip encoding should be done higher-up via something like CloudFront/CloudFlare
  event.headers['Accept-Encoding'] = 'identity';

  console.log('proxying event=', event);

  awsServerlessExpress.proxy(server, event, context);
};
