// Require the mongoose library
const mongoose = require("mongoose");

// Set mongoose to use non-strict mode for queries
mongoose.set("strictQuery", false);

// Connect to the MongoDB database named "demo"
mongoose.connect("mongodb://127.0.0.1:27017/demo")
  .then(() => console.log("Database connected"))
  .catch((err) => console.log("Error"));

// Define a schema for the "demo1" collection
const demoSchema = mongoose.Schema({
  name: String,
  ID: Number,
  address: String
});

// Create a model named "CustomerData" based on the schema
const CustomerData = mongoose.model("demo1", demoSchema);

// Log a message indicating that the collection schema has been created
console.log("Collection schema created");
