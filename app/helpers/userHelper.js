const models = require('../models/index')


// le todos os usuarios
exports.get = function(req, res){

    models.User.findAll().then(userResponse => {
        res.status(200).json(userResponse)
    }).catch(error => {
        res.status(400).send(error)
    })
    
}

exports.create = function(body, res) {
    const payload = {
        'name': body['name'],
        'email': body['email'],
        'password': body['password']
    }

    models.User.create(payload, function (err, user) {
        res.status(201).json(user)
    }).catch(error => {
        res.status(400).send(error)
    })
}


exports.getById = function(id, res){
   models.User.findById(id).then(userResponse =>{
       res.status(200).json(userResponse)
   }).catch(error => {
       res.status(400).send(error)
   })
}