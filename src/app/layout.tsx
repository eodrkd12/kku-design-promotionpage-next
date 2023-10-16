"use client";

import { debounce } from "lodash";
import { useCallback, useEffect, useState } from "react";
import "./globals.css";
import {
  motion, useScroll,
} from "framer-motion";
interface Props {
  children: React.ReactNode;
  about: React.ReactNode;
  student: React.ReactNode;
  subject: React.ReactNode;
  end: React.ReactNode;
}

export default function RootLayout(props: Props) {
  const [scrollable, setScrollable] = useState(true);
  const [scrollPosition, setScrollPosition] = useState(0);
  const [fromTop, setFromTop] = useState(true);

  const { scrollYProgress } = useScroll();

  const handleScroll = useCallback(
    debounce(() => {
      setScrollPosition((prev) => {
        setFromTop(window.scrollY - prev > 0);

        return window.scrollY;
      });
    }, 100),
    []
  );

  useEffect(() => {
    console.log(fromTop);
  }, [fromTop]);

  useEffect(() => {
    setScreenHeight();
    window.addEventListener("resize", setScreenHeight);

    window.addEventListener("scroll", handleScroll);


    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            const scrollTo =
              entry.target.id === "student"
                ? window.innerHeight * 2
                : window.innerHeight * 3;
            setTimeout(() => {
              window.scrollTo({
                left: 0,
                top: scrollTo,
                behavior: "smooth",
              });
              setScrollable(false);
            }, 100);
          }
        });
      },
      {
        threshold: 0.8,
      }
    );

    const studentDiv = document.getElementById("student");
    if (studentDiv) {
      io.observe(studentDiv);
    }
    const subjectDiv = document.getElementById("subject");
    if (subjectDiv) {
      io.observe(subjectDiv);
    }

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
        <motion.div
          className="progress-bar"
          style={{ scaleX: scrollYProgress }}
        />

      </body>

    </html>
  );
}
