# Node MVC Boilerplate
<a href="https://jtdev.netlify.app/" target="_blank" rel="noreferrer"> <img src="https://jtdev-asset-server.herokuapp.com/assets/logos/png/logo-color.png" alt="JTDEV" width="100%" height="auto"/> </a> 
This is used as a starting point for my MVC node server applications. It serves as a good baseline and will continue to be updated with different useful dependencies and potentially different branches to provide different starting points

<!-- Application gif -->
<!-- <a href="https://jtdev.netlify.app/" target="_blank" rel="noreferrer"> <img src="https://drive.google.com/uc?id=1nQ9bFzzWO1Iuq6pjtcWAZR-Y5H_3rIxw" alt="JTDEV" width="100%" height="auto" /> </a>  -->

## How It's Made:
**Tech used:** <!--JavaSCript =>--><a href="https://developer.mozilla.org/en-US/docs/Web/JavaScript" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/javascript/javascript-original.svg" alt="javascript" width="40" height="40"/> </a> <!-- Node.js =>--><a href="https://nodejs.org" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/nodejs/nodejs-original-wordmark.svg" alt="nodejs" width="40" height="40"/> </a><!-- MongoDB =>--><a href="https://www.mongodb.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/mongodb/mongodb-original-wordmark.svg" alt="MongoDB" width="40" height="40"/> </a><!-- Postman =>--><a href="https://postman.com" target="_blank" rel="noreferrer"> <img src="https://www.vectorlogo.zone/logos/getpostman/getpostman-icon.svg" alt="postman" width="40" height="40"/> </a><!-- Express =>--><a href="http://expressjs.com/" target="_blank" rel="noreferrer"> <img src="https://raw.githubusercontent.com/devicons/devicon/master/icons/express/express-original-wordmark.svg" alt="Express JS" width="40" height="40"/> </a> 
This is an express based node server that connects with mongodb for an easy way to begin building and prototyping a server side application quickly. The repository can simply be cloned and provided a .env matching .env-example


### Available Endpoints
This boilerplate comes in the form of a todo application to provide some basic test routes for CRUD operations. After ensuring that the application is connecting to MongoDB properly using these routes, the default routes and controllers can be changed as needed to suite the needs of the app or removed entirely if starting from scratch would be better.

- `/`
  - `GET`: Return index/root route
- `/todos`
  - `GET`: Return list of all todos
- `/todos/createTodo`
  - `POST`: Submit a new todo item to the database
- `todos/markComplete`
  - `PUT`: Update a a todo item to mark as complete in the database
- `todos/markIncomplete`
  - `PUT`: Update a a todo item to mark as incomplete in the database
- `todos/deleteTodo`
  - `DELETE`: Remove a todo item from the database



router.delete('/deleteTodo', todosController.deleteTodo)

### How to install/use
1. Create MongoDB account/database
    - Use connect button to get connection string and make note
2. Create .env file to store connection string and port to use on dev environment
    - See `.env-example` and follow instructions to replace `demo` with the db specific username and password
3. Install server npm dependencies
    - ```bash
      $npm install
      ```
<!-- If adding react or other frontend framework
4. Install client npm dependencies and build react project
    - ```bash
      $cd client && npm install && npm run build
      ``` -->
4. To run server in dev environment with nodemon:
    - ```bash
      $npm run dev
      ```

<!-- To make changes to react project
1. Start server
    - ```bash
      #from project root
      $npm run start
      ```
2. Start react project
    - ```bash
      $cd client && npm run start
      ```
3. Navigate to `http://localhost:3000` in your browser (default react starting port - see logs of previous command to check for other port if not running here)
4. Make any changes to react that you want
5. Confirm build version works properly
    - ```bash
      #from projRoot/client
      $npm run build
      ```
6. Switch to server cli, `ctrl + c` to stop and restart server with below command
    - ```bash
      #from projRoot/
      $npm run start
      ``` -->

## Optimizations
Optimizations will be added as new projects are built and preferences/tools are discovered/developed

## Lessons Learned
- Creating Node server applications utilizing MVC architecture
- Interacting with MongoDB via CRUD actions
- Utilizing a schema with mongoose to create a relational MongoDB instance
<!-- - Connecting React applications with a backend -->
<!-- - Deploying a backend and front-end application within the same project -->
- Using developer tools such as Nodemon, morgan, and cross-env
- Dynamically rendering data server side with ejs files

## Resources: 
- REST Client API testing: https://fullstackopen.com/en/part3/node_js_and_express#the-visual-studio-code-rest-client
- MongoDB w/ Express: https://zellwk.com/blog/crud-express-mongodb/ & https://www.youtube.com/watch?v=ayNI9Q84v8g
<!-- - Adding React To Express and Deploying to Heroku: https://www.youtube.com/watch?v=xwovj4-eM3Y&list=LL&index=1&t=831s -->
- Relational MongoDB: https://vegibit.com/mongoose-relationships-tutorial/

## Other Examples:
Take a look at other examples from my <a href="https://jtdev.netlify.app/">portfolio</a>

**Blog Site W/ Categories and Authentication:** https://github.com/jnhthomp/alpha-blog2

**Stock Based Social Network:** https://github.com/jnhthomp/finance-tracker

**Restaurant Web-Based Ordering System:** https://github.com/jnhthomp/practice-food-order-app