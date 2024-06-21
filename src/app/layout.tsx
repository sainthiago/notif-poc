import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { useEffect } from "react";
import "./globals.css";
import firebase from "./lib/utils/firebase";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
  title: "Create Next App",
  description: "Generated by create next app",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
    <html lang="en">
      <body className={inter.className}>{children}</body>
    </html>
  );
}
