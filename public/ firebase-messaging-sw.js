import { firebaseConfig } from "@/app/lib/constants/firebase-config";

importScripts("https://www.gstatic.com/firebasejs/9.6.0/firebase-app.js");
importScripts("https://www.gstatic.com/firebasejs/9.6.0/firebase-messaging.js");

firebase.initializeApp(firebaseConfig);

const messaging = firebase.messaging();
