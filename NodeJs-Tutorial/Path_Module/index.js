const path = require ("node:path")

//Built in Node module for working with file and directory paths 
// About 14 properties and modules
// We study the 7 most commonly used

// // 1.
// console.log(path.basename(__filename))
// console.log(path.basename(__dirname))
// // 2.
// console.log(path.extname(__filename))
// console.log(path.extname(__dirname)) // returns an empty string
// // 3.
// console.log(path.parse(__filename)) //returns object w significant path elements
// // 4.
// console.log(path.format(path.parse(__filename))) //returns path string given an object
// // 5.
// console.log(path.isAbsolute(__filename))
// console.log(path.isAbsolute("./data.json"))
// // 6.
// console.log(path.join("folder1", "folder2", "index.html")) 
// console.log(path.join("/folder1", "folder2", "index.html")) 
// console.log(path.join("/folder1", "//folder2", "index.html")) 
// console.log(path.join("/folder1", "//folder2", "../index.html")) 

// const path1 = path.join("folder1", "folder2", "index.html")
// const path2 = path.join("/folder1", "folder2", "index.html")
// const path3 = path.join("/folder1", "//folder2", "index.html")
// const path4 = path.join("/folder1", "//folder2", "../index.html")
// console.log(path.isAbsolute(path1))
// console.log(path.isAbsolute(path2))
// console.log(path.isAbsolute(path3))
// console.log(path.isAbsolute(path4))

// 7.
console.log(path.resolve("folder1", "folder2", "index.html")) 
console.log(path.resolve("/folder1", "folder2", "index.html")) 
console.log(path.resolve("/folder1", "//folder2", "index.html")) 
console.log(path.resolve("/folder1", "//folder2", "../index.html")) 
