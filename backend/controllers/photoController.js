const Photo = require("../models/photoModel");

const uploadPhoto = async (req, res) => {
  try {
    const { projectId, imageUrl, caption } = req.body;

    const newPhoto = new Photo({ projectId, imageUrl, caption });
    await newPhoto.save();

    res.status(201).json({ message: "Photo uploaded successfully", photo: newPhoto });
  } catch (err) {
    console.error("Photo upload error:", err);
    res.status(500).json({ message: "Server error while uploading photo" });
  }
};

const getPhotosByProject = async (req, res) => {
  try {
    const { projectId } = req.params;
    const photos = await Photo.find({ projectId });

    res.status(200).json(photos);
  } catch (err) {
    console.error("Fetch photo error:", err);
    res.status(500).json({ message: "Server error while fetching photos" });
  }
};

module.exports = { uploadPhoto, getPhotosByProject };
