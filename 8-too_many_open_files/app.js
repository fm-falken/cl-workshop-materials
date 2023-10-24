// DO NOT USE THIS ON PRODUCTION SERVERS UNLESS YOU KNOW WHAT YOU ARE DOING

const fs = require("fs");

function openFilesRecursively() {
  fs.open(__filename, "r", (err, fd) => {
    if (err) {
      console.error(err);
      return;
    }
    console.log(`File descriptor: ${fd}`); // Comment out just to see the error
    openFilesRecursively();
  });
}

openFilesRecursively();
