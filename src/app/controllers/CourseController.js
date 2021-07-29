const Course = require('../models/Course');
const {mongooseToObject} = require('../../util/mongoose')
class CourseController {
    //GET / :slug
   
        show(req, res, next) {
            //res.send('course'+ req.params.slug);
            Course.findOne({slug : req.params.slug})
                .then(course => {
                    res.render('courses/show', { course: mongooseToObject(course) })
                })
                .catch(next);
        }
        create(req, res, next) {
            res.render('courses/create');
        }
        store(req, res, next) {
           // res.json(req.body);
           req.body.img = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
          // req.body.slug = `${req.body.name}`;
           const course = new Course(req.body);
           course.save()
                .then(() => res.redirect('/me/stored/courses'))
                .catch(error => {

                });
           //res.send('save');
        }
        edit(req, res, next) {
            Course.findById(req.params.id)
                .then(course => res.render('courses/edit', {
                    course: mongooseToObject(course)
                }))
                .catch(next);

            
        }
        //PUT /courses/:id
        update(req, res, next) {
            Course.updateOne({_id: req.params.id},req.body)
                .then(() => res.redirect('/me/stored/courses'))
                .catch(next);
        }
        //DELETE /courses/:id
        delete(req, res, next) {
            Course.delete({_id: req.params.id})
                .then(() => res.redirect('back'))
                .catch(next);
        }
        //DELETE /courses/:id/force
        forcedelete(req, res, next) {
            Course.deleteOne({_id: req.params.id})
                .then(() => res.redirect('back'))
                .catch(next);
        }
        //PATCH /courses/:id/restore 
        restore(req, res, next) {
            Course.restore({_id: req.params.id})
                .then(() => res.redirect('back'))
                .catch(next);
        }
}

module.exports = new CourseController();

//const siteController = require('./CoursesController');const { show } = require('./NewsController');

