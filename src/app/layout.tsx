"use client";

import { ChakraProvider } from "@chakra-ui/react";
import {
  motion,
  useScroll
} from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import "./globals.css";

interface Props {
  children: React.ReactNode;
  about: React.ReactNode;
  student: React.ReactNode;
  subject: React.ReactNode;
  end: React.ReactNode;
}



const ScrollProgressWrapper = styled.div`
  position: fixed;
  top: 4vh;
  width: 70vw;
  height: 6vh;
  left: 50%;
  transform: translate(-50%, 0);
  


  > div{
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;

    .line {
      position: absolute;
      background-color: white;
      height: 2px;
      left: 12.5%;
      top: 1vh;
    }

    > span {
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: space-around;
      align-items: center;
      .head {
        background-color: white;
        width: 0.7vh;
        height: 0.7vh;
        border-radius: 50%;
      }
      > p {
        color: white;
        font-weight: 900;
      }
    }
  }

  @media (max-width: 500px) {
    left: 60%;
    top: 5vh;

    > div > span {
      height: 72%;
    }
    
    > div > span > p {
      visibility: hidden;
    }
  }
`;

export default function RootLayout(props: Props) {

  const { scrollYProgress } = useScroll();
  const [progressVisible, setProgressVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const [dday, setDday] = useState(0);

  useEffect(() => {

    const setDate = new Date("2023-10-25T00:00:00+0900");

    const now = new Date();

    const distance = setDate.getTime() - now.getTime();

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));

    setDday(day + 1);

    setTimeout(() => {
      setProgressVisible(true);
    }, 1000)
    setTimeout(() => {
      setIsLoaded(true);
    }, 2000)
    setScreenHeight();
    window.addEventListener("resize", setScreenHeight);

    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const io = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              switch (entry.target.id) {
                case "introduction":
                  setProgress(1);
                  break;
                case "subject":
                  setProgress(3);
              }
            }
          });
        },
        {
          threshold: 0.6,
        }
      );
      const io200vh = new IntersectionObserver(
        (entries) => {
          entries.forEach((entry, index) => {
            if (entry.isIntersecting) {
              switch (entry.target.id) {
                case "about":
                  setProgress(1);
                  break;
                case "student":
                  setProgress(2);
              }
            }
          });
        },
        {
          threshold: 0.3,
        }
      );


      const introDiv = document.getElementById("introduction");
      const studentDiv = document.getElementById("student");
      const subjectDiv = document.getElementById("subject");
      const aboutDiv = document.getElementById("about");
      if (introDiv && studentDiv && subjectDiv && aboutDiv) {
        io.observe(introDiv);
        io200vh.observe(studentDiv);
        io.observe(subjectDiv);
        io200vh.observe(aboutDiv);
      }
    }
  }, [isLoaded])


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

            {dday <= 0 && props.about}
            {dday <= 0 && props.student}
            {dday <= 0 && props.subject}
            {dday <= 0 && props.end}

          </main>
          {/* <motion.div
            className="progress-bar"
            style={{ scaleX: scrollYProgress }}
          /> */}
          {progressVisible && dday <= 0 &&
            <ScrollProgressWrapper>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="line"
                  initial={false}
                  animate={{ width: `${progress * 25}%` }} />
                <span>
                  {progress >= 1 && <motion.div
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }} />}
                  <p>
                    OPENING
                  </p>
                </span>
                <span>
                  {progress >= 1 && <motion.div className="head"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }} />}
                  <p>
                    ABOUT
                  </p>
                </span>
                <span>
                  {progress >= 2 && <motion.div className="head"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }} />}
                  <p>
                    DESIGNER
                  </p>
                </span>
                <span>
                  {progress >= 3 && <motion.div className="head"
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    transition={{ duration: 1 }} />}
                  <p>
                    WORK
                  </p>
                </span>
              </motion.div>
            </ScrollProgressWrapper>}
        </ChakraProvider>
      </body>

    </html>
  );
}
