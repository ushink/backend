const express = require("express");
const dotenv = require("dotenv");
const bodyParser = require("body-parser");
const cors = require("cors");
const mongoose = require("mongoose");
const userRouter = require("./routes/users");
const loggerOne = require("./middlewares/loggerOne");

dotenv.config();

const {
  PORT = 3000,
  API_URL = "http://127.0.0.1",
  MONGO_URL = "mongodb://127.0.0.1:27017/test",
} = process.env;

mongoose
  .connect(MONGO_URL)
  .then(() => console.log("Connected to Mongo!"))
  .catch((error) => console.log("[MONGO_CONNECTION]", error));

const app = express();

const helloWord = (request, response) => {
  response.status(200);
  response.send("Hello, word!");
};

app.use(cors());
app.use(loggerOne);
app.use(bodyParser.json());

app.get("/", helloWord);

app.post("/", (request, response) => {
  response.status(200);
  response.send("Hello from POST!");
});

app.use(userRouter);

app.listen(PORT, () => {
  console.log(`Сервер запущен ${API_URL}:${PORT}`);
});


