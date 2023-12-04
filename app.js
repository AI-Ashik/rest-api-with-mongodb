const express = require("express");
require("./config/db");

const app = express();
const cors = require("cors");
const userRouter = require("./routes/user.route");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use(
  cors({
    origin: ["https://rest-api-with-mongodb-sage.vercel.app/"],
    methods: ["POST", "GET", "PATCH", "DELETE"],
    credentials: true,
  })
);
app.use("/api/users/", userRouter);

app.get("/", (req, res) => {
  res.sendFile(`${__dirname}/views/index.html`);
});
app.use((req, res, next) => {
  res.status(404).send({
    message: "Route not found",
  });
  next();
});
app.use((err, req, res, next) => {
  res.status(500).send({
    message: err.message,
  });
  next();
});

module.exports = app;
