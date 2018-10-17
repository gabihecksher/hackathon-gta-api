const projectHelper = require('../helpers/projectHelper.js')


exports.get = function(req, res){
    projectHelper.get(req, res)
}

exports.create = function(req, res){
    projectHelper.create(req.body, res)
}

exports.getById = function(req, res){
    projectHelper.getById(req.params['id'], res)
}

exports.put = function(req,res){
    projectHelper.put(req, res)
}