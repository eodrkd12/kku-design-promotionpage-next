"use client";

import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import "./globals.css";

interface Props {
  children: React.ReactNode;
  about: React.ReactNode;
  student: React.ReactNode;
  subject: React.ReactNode;
  end: React.ReactNode;
}

export default function RootLayout(props: Props) {
  useEffect(() => {
    setScreenHeight();
    window.addEventListener("resize", setScreenHeight);

    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  function setScreenHeight() {
    const vh = window.innerHeight * 0.01;
    document.documentElement.style.setProperty("--vh", `${vh}px`);
  }

  return (
    <html lang="en">
      <body>
        <main>
          {props.children}
          {props.about}
          {props.student}
          {props.subject}
          {props.end}
        </main>
      </body>
    </html>
  );
}
