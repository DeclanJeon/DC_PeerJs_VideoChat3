const shareScreenBtn = document.getElementById("shareScreen");

const senders = [];

const displayMediaConfig = {
    video: {
        cursor: "always" | "motion" | "never",
        displaySurface: "application" | "browser" | "monitor" | "window",
        frameRate: { ideal: 20, max: 30 },
    },
    audio: false,
};

function shareScreenBtnFunc() {
    shareScreenBtn.addEventListener("click", (e) => {
        shareScreen();
    });
}

function getDisplayMedia(options) {
    if (mediaDevices && mediaDevices.getDisplayMedia) {
        return mediaDevices.getDisplayMedia(options);
    }
    if (mediaDevices.getDisplayMedia) {
        return mediaDevices.getDisplayMedia(options);
    }
    if (mediaDevices.webkitGetDisplayMedia) {
        return mediaDevices.webkitGetDisplayMedia(options);
    }
    if (mediaDevices.mozGetDisplayMedia) {
        return mediaDevices.mozGetDisplayMedia(options);
    }
    throw new Error("getDisplayMedia is not defined");
}

const shareScreen = async () => {
    let captureStream = null;
    let myScreenStream = null;
    try {
        if(!captureStream) {
            captureStream = await mediaDevices.getDisplayMedia(displayMediaConfig);
        }
        myScreenStream = captureStream;
    } catch (err) {
        console.error("unable to get display media: " + err);
    }
    for (let i = 0; i < peerList.length; i++) {
        let screenPeer = peerList.pop(i);
        connectToNewUser(screenPeer, captureStream);
        socket.emit("screenShare", captureStream);
    }
};

/** 미완성  */
function stopScreenShare(stream) {
    console.log(stream);

    stream.getVideoTracks()[0].addEventListener("ended", () => {
        stream.onended = (e) => {
            console.log(e);
            alert("stopped");
        };
        console.log("Screen Share End");
    });
}

/******* Result Code *******/
shareScreenBtnFunc();
