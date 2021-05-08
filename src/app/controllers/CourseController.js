const Course = require('../models/Course');
const { MongooseToObject } = require('../../util/mongoose');
class CourseController {
    
    //[GET] /Course/:slug
    show(req, res, next) {
        Course.findOne({ slug: req.params.page })
        .then(course => {
            res.render('courses/show' ,  { course : MongooseToObject(course) })
        })
        .catch(next)
    }

    //[GET] /Course/create
    create(req, res, next) {
        res.render('courses/create');
    }

    //[POST] /Course/store
    store(req, res, next) {
        const formData = req.body;
        formData.image = `https://img.youtube.com/vi/${req.body.videoId}/sddefault.jpg`;
        const course = new Course(formData);
        course.save()
            .then(() => {res.redirect('/')})
            .catch(error => {

            });
    }

    //[GET] /Course/edit
    edit(req, res, next) {
        Course.findById(req.params.id)
        .then(course => res.render('courses/edit' ,{
            course: MongooseToObject(course)
        }))
        .catch(next);
    }

    //[DELETE] /Course:id
    update(req, res, next) {
        Course.updateOne( {_id: req.params.id }, req.body)
            .then( () => res.redirect('/me/stored/course'))
            .catch(next);
    }

    destroy(req, res, next) {
        Course.deleteOne( {_id: req.params.id})
        .then( () => res.redirect('back'))
        .catch(next);
    }

    
}

module.exports = new CourseController();
