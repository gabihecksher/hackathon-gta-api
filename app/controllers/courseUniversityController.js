const courseUniversityHelper = require('../helpers/courseUniversityHelper.js')


exports.get = function(req, res){
    courseUniversityHelper.get(req, res)
}

exports.create = function(req, res){
    courseUniversityHelper.create(req.body, res)
}

exports.getById = function(req, res){
    courseUniversityHelper.getById(req.params['id'], res)
}