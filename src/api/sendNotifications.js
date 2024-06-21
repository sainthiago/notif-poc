// pages/api/sendNotification.js
import firebaseAdmin from "firebase-admin";

if (!firebaseAdmin.apps.length) {
  firebaseAdmin.initializeApp({
    // Your Firebase Admin SDK config here
  });
}

export default async function handler(req, res) {
  self.addEventListener("notificationclick", function (event) {
    event.notification.close();
    event.waitUntil(
      clients.openWindow("/specific-route") // Open specific route on notification click
    );
  });
}
