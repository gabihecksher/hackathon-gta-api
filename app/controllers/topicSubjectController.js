const topicSubjectHelper = require('../helpers/topicSubjectHelper.js')


exports.get = function(req, res){
    topicSubjectHelper.get(req, res)
}

exports.create = function(req, res){
    topicSubjectHelper.create(req.body, res)
}

exports.getById = function(req, res){
    topicSubjectHelper.getById(req.params['id'], res)
}