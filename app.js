//package.json - manifest file (stores important info about package/project)
//npn init -y (sets everything in the package.json file to default)

const _ = require("lodash");

const items = [1, [2, [3, [4]]]];
const newItems = _.flattenDeep(items);
console.log(newItems);
