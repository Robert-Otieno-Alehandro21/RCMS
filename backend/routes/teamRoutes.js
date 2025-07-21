const express = require("express");
const router = express.Router();

// Example: Add Team Member
router.post("/add", (req, res) => {
  const { name, role, email } = req.body;

  if (!name || !role || !email) {
    return res.status(400).json({ message: "All fields are required" });
  }

  // Normally you'd save to a database here
  res.status(200).json({
    message: "Team member added successfully",
    member: { name, role, email },
  });
});

// Example: Get Team Members
router.get("/list", (req, res) => {
  // In real case, you'd fetch this from DB
  const team = [
    { name: "John Doe", role: "Engineer", email: "john@example.com" },
    { name: "Jane Smith", role: "Supervisor", email: "jane@example.com" },
  ];
  res.status(200).json(team);
});

module.exports = router;
