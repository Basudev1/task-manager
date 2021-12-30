// const Task = require("../models/Task");
// const asyncWrapper = require('../middleware/async-wrapper');
// const {createCustomError} = require("../errors/custom-errors");
// const getAllTasks = asyncWrapper(async (req, res) => {
//   const tasks = await Task.find();
//   res.status(200).json({ tasks });
// });

// //get single task
// const getTask = asyncWrapper(async (req, res, next) => {
//   const { id: taskID } = req.params;
//   const task = await Task.findOne({ _id: taskID });
//   if (!task) {
//     return res.status(404).json({msg: `Task not Found with id ${taskID}`});
//   }

//     // const error = new Error("Task not found");
//     // error.status = 404;
//     // return next(error);
//     // return res.status(404).json({ msg: `No Task with ID ${taskID}` });


//   // res.status(200).json({ task });
//   // res.status(200).json({ task, amount: task.length });
//   res
//     .status(200)
//     .json({ success: "success", data: { task, amount: task.length } });
// });

// //create task
// const createTask = asyncWrapper(async (req, res) => {
//   const task = await Task.create(req.body);
//   res.status(200).json(task);
// });

// //delete task
// const deleteTask = asyncWrapper(async (req, res) => {
//   const { id: taskID } = req.params;
//   const task = await Task.findOneAndDelete({ _id: taskID });
//   if (!task) {
//     return res.status(404).json({msg: `Task not Found with id ${taskID}`});
//   }

//   res.status(200).json({ task });
//   // res.status(200).json({ task: null, status: 'Success' });
// });

// const updateTask = asyncWrapper(async (req, res) => {
//   const { id: taskID } = req.params;
//   const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
//     new: true,
//     runValidators: true,
//   });
//   if (!task) {
//     return res.status(404).json({msg: `Task not Found with id ${taskID}`});
//   }

//   res.status(200).json({ task });
// });

// module.exports = { getAllTasks, createTask, getTask, updateTask, deleteTask };



//copy of

const Task = require('../models/Task')
const asyncWrapper = require('../middleware/async-wrapper')
const { createCustomError } = require('../errors/custom-errors')
const getAllTasks = asyncWrapper(async (req, res) => {
  const tasks = await Task.find({})
  res.status(200).json({ tasks })
})

const createTask = asyncWrapper(async (req, res) => {
  const task = await Task.create(req.body)
  res.status(201).json({ task })
})

const getTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOne({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
})
const deleteTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params
  const task = await Task.findOneAndDelete({ _id: taskID })
  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }
  res.status(200).json({ task })
})
const updateTask = asyncWrapper(async (req, res, next) => {
  const { id: taskID } = req.params

  const task = await Task.findOneAndUpdate({ _id: taskID }, req.body, {
    new: true,
    runValidators: true,
  })

  if (!task) {
    return next(createCustomError(`No task with id : ${taskID}`, 404))
  }

  res.status(200).json({ task })
})

module.exports = {
  getAllTasks,
  createTask,
  getTask,
  updateTask,
  deleteTask,
}
