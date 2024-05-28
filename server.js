const express = require("express"); //make server
const app = express();

const env = require("dotenv").config(); //import env file
const port = process.env.PORT || 4000;

const bodyParser = require("body-parser"); // use this to parse the request body into readable format
app.use(bodyParser.json());

const db = require("./config/db"); //import connection to database of online atlas
db();

const routes = require("./routes"); //import routes file
const userRoutes = require("./userRoutes"); //import userRoutes file
const errorHandler = require("./middleware/errorhandler"); //import errorhandler function
app.use(errorHandler);
app.use("/api/contacts", routes); //using the routes file
app.use("/api/users", userRoutes); //using the userRoutes file

app.use(errorHandler); //using errorhandler fucntion

app.listen(port, () => {
  console.log("listening on port ", port); //listen on the port defined
});
