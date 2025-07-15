const Project = require('../models/project')

exports.createProject = async (req, res) => {
  const { name, location } = req.body
  const userId = req.user.id
  const project = await Project.create({ name, location, userId })
  res.status(201).json(project)
}

exports.getUserProjects = async (req, res) => {
  const projects = await Project.find({ userId: req.user.id })
  res.status(200).json(projects)
}
