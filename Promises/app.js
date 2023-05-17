// const x = new Promise(function(resolve, reject) {

//     let randomNumber = Math.random();
//     console.log(randomNumber);

//     if (randomNumber < 0.5) {
//         resolve();
//     }
//     else {
//         reject();
//     }
// })

// x.then(function() {
//         console.log('Promise resolved');
//     })
//     .catch(function() {
//         console.log('promise rejected');
//     })

// ----------------------------------------------------------


function downloadFile(url) {

    return new Promise (function(resolve, reject) {
        
        if(!url.startsWith('http')) {
            throw new Error("Invalid URL!!")
        }

        console.log(`Downloading file from ${url}`);
        setTimeout( function() {
                const path = url.split('/').pop();
                resolve(path);
            }, 3000
        )
    })
}

function compressFile(path) {

    return new Promise((resolve, reject)=>{

        console.log(`Starting file compression of ${path}`);
        setTimeout( function() {
                const compressedPath = path.split('.')[0] + '.zip';
                resolve(compressedPath);
            }, 2000
        )
    })
}

function uploadFile() {

    return new Promise((resolve, reject)=>{

        console.log("Starting file upload");
        setTimeout( function() {
                resolve();
            }, 3000
        )
    })
}

// downloadFile('https://facebook.com/profile.jpg')
//     .then((path)=>{
//         console.log(`File downloaded successfully as ${path}`);
//         compressFile(path)
//         .then((compressedPath)=>{
//             console.log(`File compressed successfully as ${compressedPath}`);
//             uploadFile(compressedPath)
//             .then(()=>{
//                 console.log('File uploaded successfully');
//             })
//         })
// })

downloadFile('smtp://facebook.com/profile.jpg')
.then(compressFile)
.then(uploadFile)
.then(()=>{
    console.log('File uploaded successfully');
})
.catch((err)=>{
    console.log('Something went wrong');
    console.log(err.message);
})