const newsRouter = require('./news');
const siteRouter = require('./site');
const coursesRouter = require('./courses');
const meRouter = require('./me');
const authRouter = require('./auth');
function route(app) {
    // app.get('/', (req, res) => {
    //     console.log(req.query)
    //     res.render('home')
    //   })

    //   app.get('/search', (req, res) => {
    //     console.log(req.query)
    //     res.render('search')
    //   })
    app.use('/news', newsRouter);
    
    //  app.use('/search', newsRouter);
    app.use('/me',meRouter);
    app.use('/courses',coursesRouter);
    app.use('/auth', authRouter);
    app.use('/', siteRouter);
}

module.exports = route;
