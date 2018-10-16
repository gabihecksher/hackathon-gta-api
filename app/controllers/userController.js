const userHelper = require('../helpers/userHelper.js')


exports.get = function(req, res){
    userHelper.get(req, res)
}

exports.create = function(req, res){
    userHelper.create(req.body, res)
}

exports.getById = function(req, res){
    userHelper.getById(req.params['id'], res)
}