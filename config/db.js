const mongoose = require("mongoose");
const config = require("./config");

const { url } = config.db;

mongoose
  .connect(url)
  .then(() => {
    console.log("DB is connected");
  })
  .catch((error) => {
    console.log({
      message: error.message,
    });
    process.exit(1);
  });
