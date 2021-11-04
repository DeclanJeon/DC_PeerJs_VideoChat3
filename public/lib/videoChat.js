const lVideoCtr = document.getElementById("local__video__container");
const rVideoCtr = document.getElementById("remote__video__container");
const lVideo = document.createElement("video");
lVideo.setAttribute("id", "local__video");

const mediaDevices = navigator.mediaDevices;
const getUserMedia =
    mediaDevices.getUserMedia ||
    navigator.webkitGetUserMedia ||
    navigator.mozGetUserMedia;

let front = true;
flipCamera.addEventListener("click", () => {
    front = !front;
    console.log(front);
});

const constraints = {
    audio: {
        autoGainControl: true,
        channelCount: 2,
        echoCancellation: true,
        latency: 0,
        noiseSuppression: true,
        sampleRate: 48000,
        sampleSize: 16,
        volume: 1.0,
    },
    video: {
        facingMode: front ? "user" : "environment",
        frameRate: { ideal: 15, max: 20 },
    },
};

let myVideoStream;
let myUserId;
const peers = {};
let peerList = [];
let currentPeer;

function videoResultFunc() {
    videoCall();
    copyInfo();
}

async function videoCall() {
    const stream = await getUserMedia(constraints);
    myVideoStream = stream;
    addVideoStream(lVideo, stream);

    peer.on("call", (call) => {
        console.log("peer Call");
        const video = document.createElement("video");
        video.id = "remote__video";

        call.answer(stream);
        call.on("stream", (userVideoStream) => {
            if (!peerList.includes(call.peer)) {
                currentPeer = call.peerConnection;
                addVideoStream(video, userVideoStream);
            }
        });
    });

    peer.on("error", (e) => {
        console.error(e);
    });

    socket.on("user-connected", (userId) => {
        console.log("Connect To New User Start");
        connectToNewUser(userId, stream);
    });
}

socket.on("user-disconnected", (userId) => {
    if (peers[userId]) peers[userId].close();
    console.log(peers[userId]);
    peerList.pop(userId);
});

peer.on("open", (id) => {
    peerList.push(id);
    console.log("voice chat on!");
    socket.emit("join-room", ROOM_ID, id);
    socket.emit("create message", username + "님께서 접속 하셨습니다.");
});

function connectToNewUser(userId, stream) {
    console.log("Connect To New User...");
    const call = peer.call(userId, stream);
    const video = document.createElement("video");
    video.setAttribute("id", "remote__video");
    call.on("stream", (userVideoStream) => {
        if (!peerList.includes(call.peer)) {
            addVideoStream(video, userVideoStream);
            currentPeer = call.peerConnection;
            peerList.push(call.peer);
            console.log(peerList);
        }
    });
    call.on("close", () => {
        video.remove();
    });

    peers[userId] = call;
}

function addVideoStream(video, stream) {
    video.srcObject = stream;
    video.setAttribute("playsinline", true);

    video.addEventListener("loadedmetadata", () => {
        console.log(
            "The duration and dimensions " +
                "of the media and tracks are now known. "
        );
        video.play();
    });

    if (video.id == "local__video") {
        lVideoCtr.append(video);
    } else if (video.id == "remote__video") {
        console.log("remote On!");
        rVideoCtr.append(video);
    } else {
        console.error("video track output err");
    }
}

function copyInfo() {
    const copyIcon = document.getElementById("copyUrl");
    copyIcon.addEventListener("click", () => {
        navigator.clipboard.writeText(window.location.href);
        alert("The URL has been copied.");
    });
}

videoResultFunc();
