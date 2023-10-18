"use client";

import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import "./globals.css";
import {
  motion, useScroll,
} from "framer-motion";
import { ChakraProvider } from "@chakra-ui/react";
interface Props {
  children: React.ReactNode;
  about: React.ReactNode;
  student: React.ReactNode;
  subject: React.ReactNode;
  end: React.ReactNode;
}

export default function RootLayout(props: Props) {

  const { scrollYProgress } = useScroll();


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
        <ChakraProvider>
          <main>
            {props.children}
            {props.about}
            {props.student}
            {props.subject}
            {props.end}

          </main>
          <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          />
        </ChakraProvider>

      </body>

    </html>
  );
}
