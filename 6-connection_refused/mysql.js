const chalk = require("chalk");
const mysql = require("mysql2/promise");

const fancyOut = (text, data) => {
  console.log(chalk.blue(text, chalk.yellow(data)));
};

async function connectToMySQL(config) {
  let connection;
  try {
    connection = await mysql.createConnection({
      host: config.host,
      user: config.user,
      password: config.password,
      database: config.database,
      connectTimeout: 2000, // 2 seconds
    });
    console.log("Successfully connected to MySQL");

    // Do something with the connection if necessary...
  } catch (error) {
    console.error("Error connecting to MySQL:", error);
    fancyOut("ERROR:", error.message); // Fancy short output.
  } finally {
    if (connection) {
      await connection.end();
    }
  }
}

// Usage
const mysqlConfig = {
  host: "127.0.0.1",
  user: "root",
  password: "your_password",
  database: "your_database",
};
connectToMySQL(mysqlConfig);
