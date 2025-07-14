// 若需整合 Stagewise Toolbar，請於 useEffect 中呼叫 import { initToolbar } from '@stagewise/toolbar'; 並執行 initToolbar(config)
import './globals.css';
import { ReactNode } from 'react';
import Head from 'next/head';
import { Geist, Geist_Mono } from "next/font/google";
import { StagewiseToolbar } from '@stagewise/toolbar-next';

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="en">
      <Head>
        <title>Stitch Design Dashboard</title>
        <meta name="description" content="Performance dashboard for Ethan, Basketball Player. Track goals, assists, playtime, and more." />
        <meta property="og:title" content="Stitch Design Dashboard" />
        <meta property="og:description" content="Performance dashboard for Ethan, Basketball Player." />
        <meta property="og:type" content="website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" type="image/x-icon" />
      </Head>
      <body className={`${geistSans.variable} ${geistMono.variable}`}>
        {children}
        <StagewiseToolbar />
      </body>
    </html>
  );
}
