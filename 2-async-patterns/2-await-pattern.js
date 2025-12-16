//Rewriting the 10-fs-async.js with promises

// const { readFile, writeFile } = require("fs");

//Accessing in-built promise in library
//Method 1
//Using util promises
// const util = require("util");
// const readFilePromise = util.promisify(readFile);
// const writeFilePromise = util.promisify(writeFile);
/*
i.e await readFilePromise("./content/first.txt", "utf8"); 
await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`
      );
*/

//Method 2
//Using fs module promises
const { readFile, writeFile } = require("fs").promises;

const start = async () => {
  try {
    const first = await readFile("./content/first.txt", "utf8");
    const second = await readFile("./content/second.txt", "utf8");

    await writeFile(
      "./content/result-mind-grenade.txt",
      `THIS IS AWESOME : ${first} ${second}`,
      { flag: "a" }
    );
    console.log(first, second);
  } catch (error) {
    console.log(error);
  }
};
start();

// Manual Approach
// const getText = (path) => {
//   return new Promise((resolve, reject) => {
//     readFile(path, "utf8", (err, data) => {
//       if (err) {
//         reject(err);
//       } else {
//         resolve(data);
//       }
//     });
//   });
// };
//
// Consuming the promise-using "async/await"
// const start = async () => {
//   try {
//     const first = await getText("./content/first.txt");
//     const second = await getText("./content/second.txt");
//     console.log(first, second);
//   } catch (error) {
//     console.log(error);
//   }
// };
// start();
//
// Consuming the promise-using "then block"
// getText("./content/first.txt")
//   .then((result) => {
//     const first = result;
//     getText("./content/second.txt").then((result) => {
//       const second = result;
//       console.log(first, second);
//     });
//   })
//   .catch((err) => console.log(err));
