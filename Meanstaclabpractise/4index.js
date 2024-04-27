//first this file shoululd  run
// 4user.json
//next 
// node 4index.js
const users = require("./4users.json");
console.log(users);


const fs = require("fs");

// Read users.json file
fs.readFile("4users.json", function(err, data) {
    // Check for errors
    if (err) {
        console.error("Error reading file:", err);
        return;
    }

    // Converting to JSON
    const users = JSON.parse(data);

    // Defining new user
    let user = {
        name: "New User",
        age: 30,
        language: ["PHP", "Go", "JavaScript"]
    };

    // Adding new data to users object
    users.push(user);

    // Writing to a file
    fs.writeFile("4users.json", JSON.stringify(users), err => {
        // Checking for errors
        if (err) {
            console.error("Error writing file:", err);
            return;
        }
        console.log("Done writing"); // Success
    });
});
