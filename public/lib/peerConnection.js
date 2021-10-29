const peer = new Peer(undefined, {
    config: {
        iceServers: [
            {
                urls: ["turn:13.250.13.83:3478?transport=udp"],
                username: "YzYNCouZM1mhqhmseWk6",
                credential: "YzYNCouZM1mhqhmseWk6",
            },
            {
                url: "turn:relay.backups.cz",
                credential: "webrtc",
                username: "webrtc",
            },
            {
                url: "turn:relay.backups.cz?transport=tcp",
                credential: "webrtc",
                username: "webrtc",
            },
            {
                url: "turn:numb.viagenie.ca",
                credential: "muazkh",
                username: "webrtc@live.com",
            },
            {
                url: "turn:192.158.29.39:3478?transport=udp",
                credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
                username: "28224511:1379330808",
            },
            {
                url: "turn:192.158.29.39:3478?transport=tcp",
                credential: "JZEOEt2V3Qb0y27GRntt2u2PAYA=",
                username: "28224511:1379330808",
            },
            {
                url: "turn:turn.bistri.com:80",
                credential: "homeo",
                username: "homeo",
            },
            {
                url: "turn:turn.anyfirewall.com:443?transport=tcp",
                credential: "webrtc",
                username: "webrtc",
            },
        ],
    },
});
