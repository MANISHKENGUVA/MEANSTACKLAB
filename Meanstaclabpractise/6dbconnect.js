// npm install express
// npm install express --save
// npm install body-parser --save
// npm install cookie-parser --save

const mongoose = require("mongoose");

mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/demo")
  .then(() => console.log("Database connected"))
  .catch((error) => console.log(error));
