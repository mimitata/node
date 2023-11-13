const fs = require("fs");
fs.readFile("./hello.txt", "utf8", function (err, data) {
  console.log(data);
});
fs.writeFile("./welcome.txt", "hello world", function (err, data) {});
