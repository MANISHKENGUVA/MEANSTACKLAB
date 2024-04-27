// Require the mongoose library
const mongoose = require("mongoose");

// Set mongoose to use non-strict mode for queries
mongoose.set("strictQuery", false);

// Connect to the MongoDB database named "demo"
mongoose.connect("mongodb://127.0.0.1:27017/demo")
  .then(() => console.log("Database connected"))
  .catch((Error) => console.log("Error"));

// Define a schema for the "demo1" collection
const demoSchema = mongoose.Schema({
  name: String,
  ID: Number,
  address: String
});

// Create a model named "CustomerData" based on the schema
const CustomerData = mongoose.model("demo1", demoSchema);

// Define an asynchronous function to delete documents from the collection
const CustomerDisplay = async () => {
  // Delete documents where the ID is equal to 102
  const result = await CustomerData.deleteOne({ ID: 102 });
  // Log the result of the operation to the console
  console.log(result);
};

// Call the function to execute the deletion operation
CustomerDisplay();
