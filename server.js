const express = require('express') // express package for generating app server
const app = express() // Initialize express app object
const connectDB = require('./config/database') // import database connection method
const homeRoutes = require('./routes/home') // import home router methods
const todoRoutes = require('./routes/todos') // import todo router methods
require('dotenv').config({path: './config/.env'}) // add .env file support and access to values within

connectDB() // Connect to db

app.set('view engine', 'ejs') // Set view engine for applciation
app.use(express.static('public')) // Make files in public folder accessible so we don't have to manually define routes for them
app.use(express.urlencoded({ extended: true })) // Allows express to parse objects in the request body (if false then just strings)
app.use(express.json()) // Allows express to parse json in request body

app.use('/', homeRoutes) // root: use homeRoutes router for path
app.use('/todos', todoRoutes) // /todos: use todos router for path

app.listen(process.env.PORT, ()=>{ // Start app on port specified in .env
    console.log(`Server started on port: ${process.env.PORT}`) // Log success on server start
})