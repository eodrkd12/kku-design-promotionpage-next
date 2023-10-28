"use client";

import { ChakraProvider } from "@chakra-ui/react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
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
  top: 0vh;
  width: 100%;
  height: 11vh;
  left: 50%;
  transform: translate(-50%, 0);
  background-color: black;
  z-index: 1;

  > div {
    width: 100%;
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-around;
    padding-bottom: 1.5vh;
    padding-left: 20vw;
    padding-right: 20vw;
    .line {
      position: absolute;
      background-color: white;
      height: 2px;
      left: 27.5vw;
      top: 5vh;
    }

    > span {
      width: 25%;
      height: 100%;
      display: flex;
      flex-direction: column;
      justify-content: flex-end;
      align-items: center;
      .head {
        background-color: white;
        width: 0.7vh;
        height: 0.7vh;
        border-radius: 50%;
        margin-bottom: 2%;
      }
      > p {
        color: white;
        font-size: 2.3vh;
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

const MainTitleWrapper = styled.div`
  position: fixed;
  left: 2vw;
  top: 20vh;
  height: 40vh;
  width: 20vw;
  opacity: 1;
  z-index: 2;
  animation: fadeOut ease-in-out 1s;

  > div:nth-child(1) {
    height: 26%;
    > img {
      width: 27%;
    }
  }
  > div:nth-child(2) {
    height: 40%;
    margin-bottom: 8%;
    padding-left: 0.5vw;
    > p {
      color: white;
      font-size: 1.8vh;
      font-weight: 500;
    }
  }
  > div:nth-child(3) {
    height: 26%;
    padding-left: 0.5vw;
    > p {
      color: white;
      font-size: 1.2vh;
      font-weight: 800;
    }
  }

  @media (max-width: 500px) {
    br {
      display: inline-block;
      content: " ";
    }

    top: 4vw;
    width: 100%;
    left: 5vw;

    > div:nth-child(1) {
      visibility: visible;
      width: 20vw;
    }
    > div {
      visibility: hidden;
    }
  }
`;

export default function RootLayout(props: Props) {
  const { scrollYProgress } = useScroll();
  const [progressVisible, setProgressVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const [about, setAbout] = useState<HTMLElement | null>(null);
  const [student, setStudent] = useState<HTMLElement | null>(null);
  const [subject, setSubject] = useState<HTMLElement | null>(null);

  const [dday, setDday] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0.59) {
      setProgress(1);
    } else if (latest <= 0.8181) {
      setProgress(2);
    } else {
      setProgress(3);
    }
  });

  useEffect(() => {
    const setDate = new Date("2023-10-25T00:00:00+0900");
    const now = new Date();
    const distance = setDate.getTime() - now.getTime();
    const day = Math.floor(distance / (1000 * 60 * 60 * 24));

    setDday(day + 1);

    setTimeout(() => {
      setProgressVisible(true);
    }, 1000);
    setTimeout(() => {
      setIsLoaded(true);
      setProgress(1);
    }, 2000);
    setScreenHeight();
    window.addEventListener("resize", setScreenHeight);

    return () => window.removeEventListener("resize", setScreenHeight);
  }, []);

  useEffect(() => {
    if (isLoaded) {
      const introDiv = document.getElementById("introduction");
      const studentDiv = document.getElementById("student");
      const subjectDiv = document.getElementById("subject");
      const aboutDiv = document.getElementById("about");
      if (introDiv && studentDiv && subjectDiv && aboutDiv) {
        setStudent(studentDiv);
        setSubject(subjectDiv);
        setAbout(aboutDiv);
      }
    }
  }, [isLoaded]);

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
            {/* {dday <= 0 && props.subject} */}
            {dday <= 0 && props.end}
          </main>
          {progressVisible && dday <= 0 && (
            <ScrollProgressWrapper>
              <motion.div
                initial={{ opacity: 0, y: -50 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
              >
                <motion.div
                  className="line"
                  initial={false}
                  animate={{ width: `${progress * 15}%` }}
                />
                <span
                  onClick={() => {
                    about?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {progress >= 1 && (
                    <motion.div
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                  )}
                  <p>HOME</p>
                </span>
                <span
                  onClick={() => {
                    about?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {progress >= 1 && (
                    <motion.div
                      className="head"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                  )}
                  <p>ABOUT</p>
                </span>
                <span
                  onClick={() => {
                    student?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {progress >= 2 && (
                    <motion.div
                      className="head"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                  )}
                  <p>DESIGNER</p>
                </span>
                <span
                  onClick={() => {
                    subject?.scrollIntoView({ behavior: "smooth" });
                  }}
                >
                  {progress >= 3 && (
                    <motion.div
                      className="head"
                      initial={{ opacity: 0 }}
                      animate={{ opacity: 1 }}
                      transition={{ duration: 1 }}
                    />
                  )}
                  <p>WORK</p>
                </span>
              </motion.div>
            </ScrollProgressWrapper>
          )}
          {dday <= 0 && (
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
              <MainTitleWrapper>
                <div>
                  <img src={"/image/tag-logo.png"} />
                </div>

                <div>
                  <p>
                    2024 KONKUK UNIVERSITY
                    <br />
                    VISUAL MOVING DESIGN
                    <br />
                    <br />
                    VIDEO/DIGITAL TRACK
                    <br />
                    GRADUATION
                    <br />
                    EXHIBITION
                  </p>
                </div>
                <div>
                  <p>
                    2024 건국대학교 시각영상디자인전공
                    <br />
                    영상/디지털 트랙 졸업전시회
                    <br />
                    <br />
                    Fri Nov, 3th - Mon, 6th
                    <br />
                    서울 종로구 우정국로 68
                    <br />
                    동덕빌딩 동덕아트갤러리
                  </p>
                </div>
              </MainTitleWrapper>
            </motion.div>
          )}
        </ChakraProvider>
      </body>
    </html>
  );
}
