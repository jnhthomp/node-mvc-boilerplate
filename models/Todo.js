const mongoose = require('mongoose') // Use mongoose to manage data

// Create new mongoose db schema to blueprint a todo item
// (for information on a relational mongoose schema see: https://vegibit.com/mongoose-relationships-tutorial/)
const TodoSchema = new mongoose.Schema({
  // Define the expected value for a 'document.todo' property
  todo: {
    type: String, // expect string value for this property
    required: true, // this property must be included to submit
  },
  // Define expected value for a 'document.completed' property
  completed: {
    type: Boolean, // expect boolean value for this property
    required: true, // this property must be included to submit
  }
})

// Export the todo schema with a collection name of 'Todo' using the schema defined above
module.exports = mongoose.model('Todo', TodoSchema)
