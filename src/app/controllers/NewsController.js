class NewsController {

    //GET /news
    index(req, res) {
        res.render('news')
    }
    show(req, res) {
        res.send('How are uu')
    }
}

module.exports = new NewsController

const newsController = require('./NewsController')