const Project = require("../models/project");

// Create New Project
exports.createProject = async (req, res) => {
  try {
    const { userId, title, description, location, coordinates, budget } = req.body;

    const newProject = new Project({
      userId,
      title,
      description,
      location,
      coordinates,
      budget,
    });

    await newProject.save();
    res.status(201).json({ message: "Project created successfully", project: newProject });
  } catch (error) {
    res.status(500).json({ message: "Project creation failed", error: error.message });
  }
};

// Get Projects by User ID
exports.getProjectsByUser = async (req, res) => {
  try {
    const userId = req.params.userId;

    const projects = await Project.find({ userId });

    if (!projects || projects.length === 0) {
      return res.status(404).json({ message: "No projects found for this user" });
    }

    res.status(200).json(projects);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch projects", error: error.message });
  }
};
