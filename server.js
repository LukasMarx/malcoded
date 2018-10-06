const { Nuxt, Builder } = require('nuxt');
const RSS = require('rss');
const request = require('graphql-request').request;

let nuxtConfig = require('./nuxt.config.js');
nuxtConfig.dev = false;
const nuxt = new Nuxt(nuxtConfig);
const app = require('express')();

app.disable('x-powered-by');

const query = `{
     getPublicPosts{
       edges {
         node {
          title
          thumbnail
          releaseDate
          description
          url
        }
      }
    }
  }`;

app.get('/rss', (req, res) => {
  request('https://malcoded.com/v1/api/graphql', query).then(
    data => {
      const feedOptions = {
        title: 'malcoded',
        description: 'Angular, Typescript & more',
        feed_url: 'https://malcoded.com/rss',
        site_url: 'https://malcoded.com',
        image_url: 'http://malcoded.com/dist/icons/icon_120.9qNqsVB8pKj.png',
        managingEditor: 'malcoded.blog@gmail.com (Lukas Marx)',
        language: 'en',
        custom_namespaces: {
          webfeeds: 'http://webfeeds.org/rss/1.0'
        },
        custom_elements: [
          {
            'webfeeds:cover': { _attr: { image: 'https://malcoded.com/malcoded-logo-text-square_1500x500.jpg' } }
          },
          {
            'webfeeds:icon': 'https://malcoded.com/dist/icons/icon_120.9qNqsVB8pKj.png'
          }
        ]
      };
      const feed = new RSS(feedOptions);
      if (data && data.getPublicPosts && data.getPublicPosts.edges) {
        data.getPublicPosts.edges.forEach(edge => {
          const node = edge.node;

          const itemOptions = {
            title: node.title,
            description: node.description,
            url: 'https://malcoded.com/posts/' + node.url,
            guid: 'https://malcoded.com/posts/' + node.url,
            enclosure: {
              url: 'http://malcoded.com/v1/api/assets' + node.thumbnail + '.jpg',
              type: 'image/jpg'
            },
            author: 'Lukas Marx',
            date: node.releaseDate
          };
          feed.item(itemOptions);
        });
      }
      res.set('Content-Type', 'text/xml');
      res.send(feed.xml({ indent: true }));
    },
    err => {
      console.error(err);
      res.sendStatus(404);
    }
  );
});

app.use(nuxt.render);

app.set('port', process.env.PORT || 8000);
const server = app.listen(app.get('port'), () => {
  console.log('Server started!');
});
