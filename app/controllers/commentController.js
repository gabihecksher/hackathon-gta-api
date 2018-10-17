const commentHelper = require('../helpers/commentHelper.js')


exports.get = function(req, res){
    commentHelper.get(req, res)
}

exports.create = function(req, res){
    commentHelper.create(req.body, res)
}

exports.getById = function(req, res){
    commentHelper.getById(req.params['id'], res)
}