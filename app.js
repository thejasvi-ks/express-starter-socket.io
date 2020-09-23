const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");
const routes = require("./routes/routes");

const app = express();

app.use(cors());

app.use(bodyParser.json());

const server = app.listen(process.env.PORT || 3030, () => {
  console.log(`Listening on ${process.env.PORT || 3030}`);
});

app.use(routes);
// const io = require("socket.io")(server);

// io.on("connection", (connectedUser) => {
//   console.log("Client Connected");
// });

const io = require("./socket").init(server);

io.on("connection", (connectedUser) => {
  console.log("Client Connected");
});
