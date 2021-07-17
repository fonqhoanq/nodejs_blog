const newsRouter = require('./news')
const siteRouter = require('./site')
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
    app.use('/', siteRouter);

}

module.exports = route