const models = require('../models/index')


// le todos os projetos
exports.get = function(req, res){
    models.Project.findAll().then(projectResponse => {
        res.status(200).json(projectResponse)
    }).catch(error => {
        res.status(400).send(error)
    })
    
}

exports.create = function(body, res) {
    const payload = {
        'name': body['name'],
        'description': body['description'],
        'imgArray': body['imgArray'],
        'likes': body['likes'],
        'videoArray': body['videoArray'],
        'textArray': body['textArray']
    }

    models.Project.create(payload, function (err, project) {
        res.status(201).json(project)
    }).catch(error => {
        res.status(400).send(error)
    })
}


exports.getById = function(id, res){
   models.Project.findById(id).then(projectResponse =>{
       res.status(200).json(projectResponse)
   }).catch(error => {
       res.status(400).send(error)
   })
}