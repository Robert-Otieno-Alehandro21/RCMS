const express = require("express");
const router = express.Router();
const { uploadPhoto, getPhotosByProject } = require("../controllers/photoController");

router.post("/upload", uploadPhoto);
router.get("/project/:projectId", getPhotosByProject);

module.exports = router;
