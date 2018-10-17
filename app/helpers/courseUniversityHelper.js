const models = require('../models/index')


// le todos os curso-universidades
exports.get = function(req, res){
    models.CourseUniversity.findAll().then(courseUVResponse => {
        res.status(200).json(courseUVResponse)
    }).catch(error => {
        res.status(400).send(error)
    })
    
}

exports.create = function(body, res) {
    const payload = {
        'nameCourse': body['nameCourse'],
        'nameUniversity': body['nameCourse']
    }

    models.CourseUniversity.create(payload, function (err, courseUVResponse) {
        res.status(201).json(courseUVResponse)
    }).catch(error => {
        res.status(400).send(error)
    })
}


exports.getById = function(id, res){
   models.CourseUniversity.findById(id).then(courseUVResponse =>{
       res.status(200).json(courseUVResponse)
   }).catch(error => {
       res.status(400).send(error)
   })
}