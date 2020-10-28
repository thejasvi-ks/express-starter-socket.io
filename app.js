const express = require("express");
const cors = require("cors");
const bodyParser = require("body-parser");
const mongoose = require("mongoose");
const routes = require("./routes/routes");

const app = express();

const MONGO_URI =
  "mongodb+srv://tks:tks@cluster0.ndhrz.mongodb.net/diseases?retryWrites=true&w=majority";

app.use(bodyParser.json());

console.log("Reached CORS");

app.use((req, res, next) => {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader(
    "Access-Control-Allow-Methods",
    "OPTIONS, GET, POST, PUT, PATCH, DELETE"
  );
  res.setHeader("Access-Control-Allow-Headers", "Content-Type, Authorization");
  // console.log(req, res);
  next();
});

// app.use(cors());
// app.options('*', cors())

app.use("/", routes);

mongoose.connect(MONGO_URI).then((result) => {
  const server = app.listen(process.env.PORT || 8080, () => {
    console.log(`Listening on ${process.env.PORT || 8080}`);
  });

  const io = require("./socket").init(server);

  io.on("connection", (connectedUser) => {
    console.log("Client Connected");
  });
});
