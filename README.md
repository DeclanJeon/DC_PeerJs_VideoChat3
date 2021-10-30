(1) 프로젝트 구성 안내

nodejs, ejs, css, js

Folder

---

public : css, lib, img
server :
views :

css : style.css
lib : chat, fileShare, peerConnection, screenShare, videoChat, videoMute
img : favicon, logo

views

---

fileshare.ejs,
index.ejs,
settings.ejs

## server

server.js

Utils

---

"cors": "^2.8.5",\n
"ejs": "^3.1.6",\n
"express": "^4.17.1",\n
"moment": "^2.29.1",\n
"nanoid": "^3.1.30",\n
"nodemon": "^2.0.14",\n
"path": "^0.12.7",\n
"peer": "^0.6.1",\n
"peerjs": "^1.3.2",\n
"socket.io": "^2.3.0",\n
"uuid": "^8.3.2"\n
\_/

(2) 프로젝트 설치하는 방법

git clone https://github.com/DeclanJeon/DC_PeerJs_VideoChat3\n

cd DC_PeerJs_VideoChat3\n

npm install\n
yarn\n

(3) 프로젝트 사용법

yarn dev\n
npm run dev\n

(4) 프로젝트 기능 설명

화상채팅 - P2P\n
통상채팅 - P2P\n
화면공유 - P2P\n
음성인식(다국어)\n
파일공유 - Server 키 전송 / 로컬에서도 사용 가능\n

(5) 저작권 및 사용권 정보
Declan\n

(6) 버그
화면공유 기능 수정보안 필요\n
Peer간 동시 음성인식 진행 시에 비디오 트랙이 멈추는 현상 발견\n

음성 하울링 개선 필요\n

Peer간 연결속도 개선필요\n
브라우저 호환성 개선 필요 (apdapter 추가 필요)\n

PeerServer 구축 필요..\n
SFU, MCU 적용 필요\n

(7) 프로그램 작성자 및 도움을 준 사람
Declan\n

(8) 버전 (업데이트 소식)
1.0\n

(9) FAQ
