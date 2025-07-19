require("dotenv").config();
const express = require("express");
const http = require("http");
const { Server } = require("socket.io");
const connectDB = require("./config/database");
const Blog = require("./models/blog");

const app = express();
const server = http.createServer(app);
const io = new Server(server, { cors: { origin: "*" } });

app.use(express.json());

connectDB();

io.on("connection", (socket) => {
  console.log("A user connected:", socket.id);

  socket.on("disconnect", () => {
    console.log("User disconnected:", socket.id);
  });
});

// Listen for new blog inserts using MongoDB Change Streams
Blog.watch().on("change", (change) => {
  if (change.operationType === "insert") {
    io.emit("new-blog", change.fullDocument);
  }
});

const port = 5000;
server.listen(port, () => {
  console.log(`Socket.IO server running on port ${port}`);
});