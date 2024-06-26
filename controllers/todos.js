const Todo = require('../models/Todo') // Import todo model for data processing methods (mostly automatically generated by mongoose)

module.exports = {
  // Retrieve list of todo items from database and display on page
  getTodos: async (req,res)=>{
    try{
      const todoItems = await Todo.find() // get/store list of all todo documents from model
      const itemsLeft = await Todo.countDocuments({completed: false}) // get/store count of documents where completed = false from model
      res.render('todos.ejs', {todos: todoItems, left: itemsLeft}) // render ejs passing in above values
    }catch(err){ // Handle errors from above request
      console.log(err) // Log error to the console
    }
  },
  // Create a new todo item and add to database, display updated list with new item
  createTodo: async (req, res)=>{
    try{
      await Todo.create({todo: req.body.todoItem, completed: false}) // Create a new todo item using request body data with model
      console.log('Todo has been added!') // log successful submission to console
      res.redirect('/todos') // reload page (re-runs getTodos() update page with latest todos)
    }catch(err){ // Handle errors from above request
      console.log(err) // Log error to the console
    }
  },
  // Update the completed property of a todo document from 'false' to 'true'
  markComplete: async (req, res)=>{
    try{
      // Use model to submit id of document to update from request body and update object
      await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
        // Provide properties to add/change
        completed: true
      })
      console.log('Marked Complete') // Log successful update
      res.json('Marked Complete') // Send a success json response
    }catch(err){ // Handle errors from above request
      console.log(err) // Log error to the console
    }
  },
  // Update the completed property of a todo document from 'true' to 'false'
  markIncomplete: async (req, res)=>{
    try{
      // Use model to submit id of docuemtn to udpate from request body and update object
      await Todo.findOneAndUpdate({_id:req.body.todoIdFromJSFile},{
        // Provide properties to add/change
        completed: false
      })
      console.log('Marked Incomplete') // Log successful update
      res.json('Marked Incomplete') // Send a success json response
    }catch(err){ // Handle errors from above request
      console.log(err) // Log error to the console
    }
  },
  // Delete todo document from database
  deleteTodo: async (req, res)=>{
    // Log the id of the document to be deleted
    console.log(req.body.todoIdFromJSFile)
    try{
      await Todo.findOneAndDelete({_id:req.body.todoIdFromJSFile}) // Delete the document with an id matching the id in the request body
      console.log('Deleted Todo') // Log successful deletion
      res.json('Deleted It') // Send a success json response
    }catch(err){ // Handle errors from above request
      console.log(err) // Log error to the console
    }
  }
}    