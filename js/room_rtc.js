import AgoraRTC from "agora-rtc-sdk-ng"

const APP_ID="8a0d601992224015aa984a375c86059a"

let uid = sessionStorage.getItem("uid")

if(!uid) {
  uid = String(Math.floor(Math.random() * 10000))
  sessionStorage.setItem("uid", uid)
}

let token = null
let client

const queryString = window.location.search;
const urlParams = new URLSearchParams(queryString);
let roomId = urlParams.get('room')

if(!roomId) {
  roomId = 'main'
}

let localTrack = []
let remoteUsers = {}

let testClient

let init = async () => {
  testClient = AgoraRTC.createClient(APP_ID)
  console.log(testClient, "Ok");
}

init()