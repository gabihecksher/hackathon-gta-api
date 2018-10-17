const models = require('../models/index')


// le todos os curso-universidades
exports.get = function(req, res){
    models.TopicSubject.findAll().then(topicSubjectResponse => {
        res.status(200).json(topicSubjectResponse)
    }).catch(error => {
        res.status(400).send(error)
    })
    
}

exports.create = function(body, res) {
    const payload = {
        'nameTopic': body['nameTopic'],
        'nameSubject': body['nameSubject']
    }

    models.TopicSubject.create(payload, function (err, topicSubjectResponse) {
        res.status(201).json(topicSubjectResponse)
    }).catch(error => {
        res.status(400).send(error)
    })
}


exports.getById = function(id, res){
   models.TopicSubject.findById(id).then(topicSubjectResponse =>{
       res.status(200).json(topicSubjectResponse)
   }).catch(error => {
       res.status(400).send(error)
   })
}