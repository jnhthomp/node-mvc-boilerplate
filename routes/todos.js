const express = require('express') // express package for generating router object
const router = express.Router() // Initialize router object
const todosController = require('../controllers/todos') // import todos controller containing controller methods 

// Add routes and associated controller methdods to this router object before exporting (paths relative to 'todo/')
router.get('/', todosController.getTodos) 
router.post('/createTodo', todosController.createTodo)
router.put('/markComplete', todosController.markComplete)
router.put('/markIncomplete', todosController.markIncomplete)
router.delete('/deleteTodo', todosController.deleteTodo)

// export created router
module.exports = router