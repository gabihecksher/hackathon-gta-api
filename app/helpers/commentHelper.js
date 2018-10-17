const models = require('../models/index')


// le todos os curso-universidades
exports.get = function(req, res){
    models.Comment.findAll().then(commentResponse => {
        res.status(200).json(commentResponse)
    }).catch(error => {
        res.status(400).send(error)
    })
    
}

exports.create = function(body, res) {
    const payload = {
        'text': body['text']
    }

    models.Comment.create(payload, function (err, commentResponse) {
        res.status(201).json(commentResponse)
    }).catch(error => {
        res.status(400).send(error)
    })
}


exports.getById = function(id, res){
   models.Comment.findById(id).then(commentResponse =>{
       res.status(200).json(commentResponse)
   }).catch(error => {
       res.status(400).send(error)
   })
}