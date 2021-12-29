const getAllTasks = (req, res) => {
res.send('Get All Tasks from controllers');
}

//create task
const createTask = (req, res) => {
    res.json(req.body)
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