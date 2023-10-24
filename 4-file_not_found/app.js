const fs = require("fs").promises;

async function readFileAndClose(filePath) {
  let fileHandle = await fs.open(filePath, "r");

  const fileData = await fileHandle.readFile("utf-8");
  console.log(fileData);

  await fileHandle.close();
}

readFileAndClose("./file.txt").catch((error) => {
  console.error("There was an error:", error);
});
