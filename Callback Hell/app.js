
function downloadFile(url) {
    console.log(`Downloading file from ${url}`);
    setTimeout( function() {
            let path = url.split('/').pop();
            console.log(`Downloaded file from ${path}`)
            compressFile(path)
        }, 3000
    )
}

function compressFile(path) {
    console.log(`Starting file compression of ${path}`);
    setTimeout( function() {
            let compressedPath = path.split('.')[0] + '.zip'
            console.log(`Compressed file as ${compressedPath}`)
            uploadFile(compressedPath)
        }, 2000
    )
}

function uploadFile(compressedPath) {
    console.log(`Starting file upload of ${compressedPath}`);
    setTimeout(
        function() {
            console.log(`Uploaded file successfully as ${compressedPath}`)
        }, 3000
    )
}

downloadFile('https://facebook.com/profile.jpg');