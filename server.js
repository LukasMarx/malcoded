const { Nuxt, Builder } = require('nuxt');
const RSS = require('rss');
const request = require('graphql-request').request;

let nuxtConfig = require('./nuxt.config.js');
nuxtConfig.dev = false;
const nuxt = new Nuxt(nuxtConfig);
const app = require('express')();

const query = `{
    BlogPosts(orderBy: "releaseDate", descending: true) { 
        nodes {
            title
            thumbnail
            description
            url
            releaseDate
        }
    }
  }`;

app.get('/rss', (req, res) => {
    request('https://malcoded.com/api/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/api', query).then(
        data => {
            const feedOptions = {
                title: 'malcoded',
                description: 'Angular, Typescript & more',
                feed_url: 'https://malcoded.com/rss',
                site_url: 'https://malcoded.com',
                managingEditor: 'malcoded.blog@gmail.com (Lukas Marx)',
                language: 'en'
            };
            const feed = new RSS(feedOptions);
            if (data && data.BlogPosts && data.BlogPosts.nodes) {
                data.BlogPosts.nodes.forEach(node => {
                    const itemOptions = {
                        title: node.title,
                        description: node.description,
                        url: 'https://malcoded.com/posts/' + node.url,
                        guid: 'https://malcoded.com/posts/' + node.url,
                        enclosure: {
                            url: 'http://malcoded.com/api/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/asset/' + node.thumbnail + '/jpg',
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
            res.sendStatus(404);
        }
    );
});

app.use(nuxt.render);

app.set('port', process.env.PORT || 8000);
const server = app.listen(app.get('port'), () => {
    console.log('Server started!');
});
