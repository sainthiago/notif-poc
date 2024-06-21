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

  return (
    <div>
      <h1>Push Notifications Demo</h1>
      <button onClick={handleRequestPermission}>Allow Notifications</button>
    </div>
  );
}
