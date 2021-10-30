(1) 프로젝트 구성 안내

nodejs, ejs, css, js

/\_
Folder

---

public : css, lib, img
server :
views :
\_/

/_
css : style.css
lib : chat, fileShare, peerConnection, screenShare, videoChat, videoMute
img : favicon, logo
_/

/\_
views

---

fileshare.ejs,
index.ejs,
settings.ejs

## server

server.js
\_/

/\_
Utils

---

"cors": "^2.8.5",
"ejs": "^3.1.6",
"express": "^4.17.1",
"moment": "^2.29.1",
"nanoid": "^3.1.30",
"nodemon": "^2.0.14",
"path": "^0.12.7",
"peer": "^0.6.1",
"peerjs": "^1.3.2",
"socket.io": "^2.3.0",
"uuid": "^8.3.2"
\_/

(2) 프로젝트 설치하는 방법

git clone https://github.com/DeclanJeon/DC_PeerJs_VideoChat3
cd DC_PeerJs_VideoChat3

npm install
yarn

(3) 프로젝트 사용법

yarn dev
npm run dev

(4) 프로젝트 기능 설명

화상채팅 - P2P
통상채팅 - P2P
화면공유 - P2P
음성인식(다국어)
파일공유 - Server 키 전송 / 로컬에서도 사용 가능

(5) 저작권 및 사용권 정보
Declan

(6) 버그
화면공유 기능 수정보안 필요
Peer간 동시 음성인식 진행 시에 비디오 트랙이 멈추는 현상 발견

음성 하울링 개선 필요

Peer간 연결속도 개선필요
브라우저 호환성 개선 필요 (apdapter 추가 필요)

PeerServer 구축 필요..
SFU, MCU 적용 필요

(7) 프로그램 작성자 및 도움을 준 사람
Declan

(8) 버전 (업데이트 소식)
1.0

(9) FAQ
