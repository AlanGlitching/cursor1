'use client';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import styles from './page.module.css';
import Image from 'next/image';
import { initToolbar } from '@stagewise/toolbar';
import { useEffect } from 'react';

export default function Home() {
  useEffect(() => {
    // 如需自訂 config，請依官方文件設定
    initToolbar();
  }, []);

  return (
    <main className={styles.stitchMain}>
      <Sidebar />
      <Dashboard />
    </main>
  );
}
