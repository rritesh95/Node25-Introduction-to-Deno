const fs = require('fs').promises;

const text = "This is a test - and we will stor eit in file";

fs.writeFile("node-message.txt", text).then(() => {
    // "fs.writeFile" will require no external permission to write to file
    console.log("wrote to node file!");
})