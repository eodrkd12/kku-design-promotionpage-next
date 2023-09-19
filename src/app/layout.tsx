'use client';

import { useEffect } from 'react';
import './globals.css';

interface Props {
  children: React.ReactNode,
  students: React.ReactNode,
}

export default function RootLayout({
  children,
  students
}: Props) {

  useEffect(() => {
    setScreenHeight();

    // resize 이벤트가 발생하면 다시 계산하도록 아래 코드 추가
    window.addEventListener('resize', setScreenHeight);
    return () => window.removeEventListener('resize', setScreenHeight);
  }, [])

  function setScreenHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  return (
    <html lang="en">
      <body>
        {children}
        {students}
      </body>
    </html>
  )
}
