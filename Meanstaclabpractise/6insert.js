var mongoose = require("mongoose");
mongoose.set("strictQuery", false);

mongoose.connect("mongodb://127.0.0.1:27017/demo")
  .then(() => console.log("Database connected"))
  .catch((error) => console.log("Error"));

const demoSchema = mongoose.Schema({
  name: String,
  ID: Number,
  address: String
});

const CustomerData = mongoose.model("demo1", demoSchema);

console.log("Collection schema created");

const c1 = new CustomerData({
  name: "Anand",
  ID: 101, // Changed to a number instead of a string
  address: "vijayawada"
});

const c2 = new CustomerData({
  name: "jaahnavi",
  ID: 102, // Changed to a number instead of a string
  address: "gudivada"
});

const c3 = new CustomerData({
  name: "priya",
  ID: 103, // Changed to a number instead of a string
  address: "guntur"
});

const c4 = new CustomerData({
  name: "Sai",
  ID: 104, // Changed to a number instead of a string
  address: "vijayawada"
});

const c5 = new CustomerData({
  name: "AnandSai",
  ID: 105, // Changed to a number instead of a string
  address: "vizag"
});

c1.save();
c2.save();
c3.save();
c4.save();
c5.save();

console.log("Data Inserted successfully");
