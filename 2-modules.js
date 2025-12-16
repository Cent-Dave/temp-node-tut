// Modules
// CommonJs, every file is a module (by default)
// Modules - Encapsulated Code (only share minimum i.e what we want to share)
const names = require("./3-names");
const sayHi = require("./4-utils");
const data = require("./5-alternative-flavor");
require("./6-mind-granade");
console.log(names);
console.log(data);

sayHi("Susan");
sayHi(names.john);
sayHi(names.peter);
