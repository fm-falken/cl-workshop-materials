const chalk = require("chalk");
const mongoose = require("mongoose");

const fancyOut = (text, data) => {
  console.log(chalk.blue(text, chalk.yellow(data)));
};

async function connectToMongoDB(uri) {
  try {
    await mongoose.connect(uri, {
      useNewUrlParser: true,
      useUnifiedTopology: true,
      serverSelectionTimeoutMS: 100,
    });
    console.log(fancyOut("Successfully connected to MongoDB", ""));
  } catch (error) {
    // console.error(fancyOut("Error connecting to MongoDB:", error.message)); // This will output only the message
    console.log(error); // Let's see the whole error
  }
}

// Usage
const mongoURI = "mongodb://127.0.0.1:27017/mydatabase";
connectToMongoDB(mongoURI);
