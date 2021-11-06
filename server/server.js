const cors = require("cors");
const express = require("express");
const app = express();
const path = require("path");
const fs = require("fs");
const { customAlphabet } = require("nanoid");
const { ExpressPeerServer } = require("peer");
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
    cors: {
        origin: "*",
        methods: ["GET", "POST"],
        preflightContinue: false,
    },
});

const PORT = process.env.PORT || 1337;
const nanoid = customAlphabet("ABCD123456", 5);
const roomID = nanoid();

const peerServer = ExpressPeerServer(server, {});

app.set("view engine", "ejs");

app.use("/peerjs", peerServer);
app.use(cors());

app.use(express.static(path.join(__dirname, "../public")));
app.use(express.static(path.join(__dirname, "../public/css")));
app.use(express.static(path.join(__dirname, "../public/lib")));
app.use(express.static(path.join(__dirname, "../public/img")));

app.get("/", (req, res) => {
    res.redirect(`${roomID}`);
});

app.get("/:room", (req, res, next) => {
    res.render("index", { roomId: req.params.room });
});

/** Socket IO */
io.on("connection", (socket) => {
    socket.on("join-room", (roomId, userId) => {
        console.log("roomId::::" + roomId);
        socket.join(roomId);
        socket.broadcast.to(roomId).emit("user-connected", userId);
        console.log("The user broadcast connected :: " + userId);

        socket.on("disconnect", () => {
            socket.broadcast.to(roomId).emit("user-disconnected", userId);
            console.log("The user broadcast disconnected :: " + userId);
        });

        socket.on("create message", (msg) => {
            io.to(roomId).emit("send message", {
                message: msg,
                user: socket.username,
            });
        });

        socket.on("screen-share", (stream) => {
            io.to(roomId).emit("screenShare", stream, userId);
        });
    });

    socket.on("new user", (user) => {
        socket.username = user;
        console.log("User connected - User name: " + socket.username);
    });
});

/**Server */
server.listen(PORT, () => {
    console.log(`Listening to ${PORT}`);
});
