const app = require("./app");
require("dotenv").config();
const config = require("./config/config");

const { port } = config.app;

app.listen(port, () => {
  console.log(`Server is Running at http://localhost:${port}`);
});
