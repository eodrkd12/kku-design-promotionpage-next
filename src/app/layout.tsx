'use client';

import { useEffect, useState } from 'react';
import './globals.css';

interface Props {
  children: React.ReactNode,
  student: React.ReactNode,
  subject: React.ReactNode,
  end: React.ReactNode,
}

export default function RootLayout(props: Props) {

  const [scrollable, setScrollable] = useState(true);

  useEffect(() => {
    setScreenHeight();
    window.addEventListener('resize', setScreenHeight);
    return () => window.removeEventListener('resize', setScreenHeight);
  }, []);


  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        if (entries[0].isIntersecting) {
          console.log(1);
          setScrollable(false);
        } else {
          console.log(0);
          setScrollable(true);
        }
      },
      { threshold: 0.1 }
    );

    const studentElement = document.getElementById('student');
    if (studentElement) {
      observer.observe(studentElement);
    }

    return () => {
      if (studentElement) {
        observer.unobserve(studentElement);
      }
    };
  }, []);



  function setScreenHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty('--vh', `${vh}px`);
  }

  useEffect(() => {
    if (scrollable == false)
      document.body.style.overflowY = "hidden";

    if (scrollable == true)
      document.body.style.overflowY = "auto";

  }, [scrollable])


  return (
    <html lang="en">
      <body>
        <main>
          {props.children}
          <div id="student">{props.student}</div>
          {props.subject}
          {props.end}
        </main>
      </body>
    </html>
  )
}
