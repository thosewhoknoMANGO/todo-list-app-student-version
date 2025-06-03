const express = require("express");
const router = express.Router();
// There is a bug in line 4 you need to fix it
const taskModel = require("../models/taskModel.js");

//creating a constant and waiting for the task model
router.get("/", async (req, res) => {
  const tasks = await taskModel.getTasks();
  res.json(tasks);
});

// Requires a router to sync
router.post("/", async (req, res) => {
  //there is a bug in line 15 you need to fix
  const { title, description } = req.body;
  const task = await taskModel.addTask(title, description);
  res.status(201).json(task);
});

module.exports = router;
