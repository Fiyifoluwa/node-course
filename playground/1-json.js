const fs = require("fs");

const dataBuffer = fs.readFileSync("1-json.json");
const dataJSON = dataBuffer.toString();
const user = JSON.parse(dataJSON);

user.name = "Fiyifoluwa";
user.age = 23;

const userJSON = JSON.stringify(user);
fs.writeFileSync("1-json.json", userJSON);

console.log(user);

// read file, convert to a string, parse that data, input values, pass that data in with json.stringify, write file
