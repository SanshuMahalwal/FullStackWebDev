
function downloadFile(url, downloaded) {
    console.log(`Downloading file from ${url}`);
    setTimeout( function() {
            let path = url.split('/').pop();
            downloaded(path);
        }, 3000
    )
}

function compressFile(path, compressed) {
    console.log(`Starting file compression of ${path}`);
    setTimeout( function() {
            let compressedPath = path.split('.')[0] + '.zip';
            compressed(compressedPath);
        }, 2000
    )
}

function uploadFile(uploaded) {
    console.log("Starting file upload");
    setTimeout( function() {
            uploaded();
        }, 3000
    )
}

downloadFile('https://facebook.com/profile.jpg', function(path) {
    console.log(`File downloaded as ${path}`)
    compressFile(path, function(compressedPath) {
        console.log(`File compressed as ${compressedPath}`)
        uploadFile(function() {
            console.log(`File uploaded successfully`);
        })
    })
    
});

//--------------------------------------------------------------------------------

// setTimeout(function starter() {
//     console.log("Order starters")
// }, 3000)

// setTimeout(function mainCourse() {
//     console.log("Order main course") 
    
// }, 2000)

// setTimeout(function dessert() {
//     console.log("Order desserts")
// }, 3000)

// setTimeout(function starter() {
//     console.log("Order starters")
//     setTimeout(function mainCourse() {
//         console.log("Order main course") 
//         setTimeout(function dessert() {
//             console.log("Order desserts")
//         }, 3000)
//     }, 2000)
// }, 3000)


// ------------------------------------------------------------------------------

