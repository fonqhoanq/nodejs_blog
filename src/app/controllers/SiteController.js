const Course = require('../models/Course');
const {mutipleMongooseToObject} = require('../../util/mongoose')
class SiteController {
    //GET /
    index(req, res,next) {
        //call back 
        // Course.find({},function (err, courses) {
        //     if (!err) {
        //         res.json(courses);
        //     } else
        //     {
        //         next(err);
        //     }
        // });
        //promise
        Course.find({})
            .then(courses => {
                res.render('home',{
                    courses: mutipleMongooseToObject(courses)
                });
            })
            .catch(next);
        
    }
    //GET /search
    search(req, res) {
        res.render('search');
    }
}

module.exports = new SiteController();

const siteController = require('./SiteController');
