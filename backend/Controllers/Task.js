const Task = require("../models/Task");
const mongoose = require("mongoose");
const ObjectId = mongoose.Types.ObjectId;

const crearTask = async (req, res = express.request) => {
  const task = new Task(req.body);
  try {
    task.user = req.uid;
    const saved = await task.save();
    res.json({
      ok: true,
      task: saved,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      task: "Internal Error",
    });
  }
};

const listarTasks = async (req, res = express.request) => {
  const tasks = await Task.find().populate("user", "name");
  try {
    res.status(200).json({
      ok: true,
      tasks,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Internal Error",
    });
  }
};

const actualizarTask = async (req, res = express.request) => {
  const taskId = req.params.id;
  const taskBody = req.body;
  try {
    const task = await Task.findById(taskId);
    if (!task) {
      return res.status(404).json({
        ok: false,
        task: "Task not found",
      });
    }
    if (!task.user.equals(new ObjectId(req.uid))) {
      return res.status(500).json({
        ok: false,
        task: "Este usuario necesita permisos mas elevados para modificar este task",
      });
    }
    const updatedTask = await Task.findByIdAndUpdate(taskId, taskBody, {
      new: true,
    });
    res.status(200).json({
      ok: true,
      updatedTask,
    });
  } catch (error) {
    console.log(error);
    res.status(500).json({
      ok: false,
      msg: "Internal Error",
    });
  }
};

const eliminarTask = async (req, res = express.request) => {
  const taskId = req.params.id;
  const taskBody = req.body;
  try {
    const task = await Task.findById(taskId);
    if (!task.user.equals(new ObjectId(req.uid))) {
      return res.status(500).json({
        ok: false,
        task: "Este usuario necesita permisos mas elevados para modificar este task",
      });
    }
    const updatedTask = await Task.findByIdAndDelete(taskId, taskBody, {
      new: true,
    });
    res.status(200).json({
      ok: true,
      updatedTask,
    });
    console.log(`Task ${taskId} eliminado`);
  } catch (error) {
    console.log(error);
    return res.status(404).json({
      ok: false,
      task: "Task not found",
    });
  }
};

module.exports = {
  listarTasks,
  crearTask,
  actualizarTask,
  eliminarTask,
};