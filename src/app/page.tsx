"use client";

import { useEffect } from "react";
import firebase from "./lib/utils/firebase";

export default function Home() {
  const handleRequestPermission = async () => {
    try {
      // @ts-ignore
      await firebase.messaging().requestPermission();
      console.log("Notification permission granted.");
    } catch (error) {
      console.error("Unable to get permission to notify.", error);
    }
  };

  useEffect(() => {
    const registerMessagingService = async () => {
      const registration = await navigator.serviceWorker.register(
        "/firebase-messaging-sw.js"
      );

      // @ts-ignore
      firebase.messaging().useServiceWorker(registration);
    };
    registerMessagingService();
  }, []);

  return (
    <div>
      <h1>Push Notifications Demo</h1>
      <button onClick={handleRequestPermission}>Allow Notifications</button>
    </div>
  );
}
