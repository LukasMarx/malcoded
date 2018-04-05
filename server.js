const { Nuxt, Builder } = require('nuxt');
const Feed = require('feed');
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
        }
    }
  }`;

app.get('/rss', (req, res) => {
    let feed = new Feed({
        title: 'malcoded | Angular, Typescript & more!',
        description: 'malcoded | Angular, Typescript & more!',
        id: 'https://malcoded.com/',
        link: 'https://malcoded.com/',
        favicon: 'https://malcoded.com/favicon.ico',
        generator: 'malcoded', // optional, default = 'Feed for Node.js'
        feedLinks: {
            json: 'https://example.com/json',
            atom: 'https://example.com/atom'
        },
        author: {
            name: 'Lukas Marx',
            email: 'malcoded.blog@gmail.com',
            link: 'https://malcoded.com'
        }
    });

    request('https://malcoded.com/api/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/api', query).then(
        data => {
            if (data && data.BlogPosts && data.BlogPosts.nodes) {
                data.BlogPosts.nodes.forEach(node => {
                    feed.addItem({
                        title: node.title,
                        id: node.url,
                        link: 'https://malcoded.com/posts/' + node.url,
                        description: node.description,
                        //content: post.content,
                        author: {
                            name: 'Lukas Marx',
                            email: 'malcoded.blog@gmail.com',
                            link: 'https://malcoded.com'
                        },
                        date: node.releaseDate,
                        image: 'https://malcoded.com/api/v1/48238e83-87dd-4b4f-be48-26ea7c89e8e7/asset/' + node.thumbnail + '/jpg'
                    });
                });
            }
            res.set('Content-Type', 'text/xml');
            res.send(feed.rss2());
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
