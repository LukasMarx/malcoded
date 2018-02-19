const { Nuxt, Builder } = require('nuxt');

let nuxtConfig = require('./nuxt.config.js');
nuxtConfig.dev = false;
const nuxt = new Nuxt(nuxtConfig);
const app = require('express')();

app.use(nuxt.render);

app.set('port', process.env.PORT || 8000);
const server = app.listen(app.get('port'), () => {
    console.log('Server started!');
});
