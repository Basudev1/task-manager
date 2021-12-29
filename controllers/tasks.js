const Task = require('../models/Task');
const getAllTasks = (req, res) => {
res.send('Get All Tasks from controllers');
}

//create task
const createTask = async (req, res) => {
try {
    const task = await Task.create(req.body);
    res.status(200).json(task)
    
} catch (error) {
    res.status(500).json({msg: error})
}

    }

const getTask = (req, res) => {
    res.json({id: req.params.id})
    }
const updateTask = (req, res) => {
    res.send('Update single task');
    }
const deleteTask = (req, res) => {
    res.send('Delete single task');
    }

module.exports = {getAllTasks, createTask, getTask, updateTask, deleteTask};