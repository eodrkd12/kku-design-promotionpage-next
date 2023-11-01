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
  height: 7vh;
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
    padding-bottom: 0.5vh;
    padding-left: 20vw;
    padding-right: 20vw;
    .line {
      position: absolute;
      background-color: white;
      height: 2px;
      left: 27.5vw;
      top: 2vh;
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
    // left: 60%;
    // top: 5vh;

    // background-color: red;
    width: 100%;
    visibility: hidden;

    > div > span {
      height: 72%;
    }

    > div > span > p {
      visibility: hidden;
    }
  }
`;

const MainTitleWrapper = styled(motion.div)`
  position: fixed;
  left: 1vw;
  top: 20vh;
  height: 30vh;
  width: 10vw;
  opacity: 1;
  z-index: -10;
  animation: fadeOut ease-in-out 1s;

  > div:nth-child(1) {
    height: 26%;
    > img {
      width: 50%;
    }
  }
  > div:nth-child(2) {
    height: 40%;
    margin-bottom: 8%;
    padding-left: 0.5vw;
    > p {
      color: white;
      font-size: 1.2vh;
      font-weight: 500;
    }
  }
  > div:nth-child(3) {
    height: 26%;
    padding-left: 0.5vw;
    > p {
      color: white;
      font-size: 1vh;
      font-weight: 800;
    }
  }

  @media (max-width: 500px) {
    top: 0;
    left: 0;
    width: 100%;
    height: 9vh;
    // box-shadow: 0 0 10px rgba(0, 0, 0, 1);

    background-color: black;
    > div {
      visibility: hidden;
    }
    > div:nth-child(1) {
      visibility: visible;
      width: 20vw;
      height: 100%;
      padding: 2vh 0 0 2.5vw;
      > img {
        width: 100%;
      }
    }
  }
`;

export default function RootLayout(props: Props) {
  const { scrollY, scrollYProgress } = useScroll();
  const [progressVisible, setProgressVisible] = useState(false);
  const [progress, setProgress] = useState(0);
  const [isLoaded, setIsLoaded] = useState(false);

  const [about, setAbout] = useState<HTMLElement | null>(null);
  const [student, setStudent] = useState<HTMLElement | null>(null);
  const [subject, setSubject] = useState<HTMLElement | null>(null);

  const [dday, setDday] = useState(0);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest <= 0.631) {
      setProgress(1);
    } else if (latest <= 0.773) {
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
                    // about?.scrollIntoView({ behavior: "smooth" });
                    window.scrollTo(0, 0);
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
                    window.scrollTo(0, 0);
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
                    window.scrollTo(0, window.innerHeight * 8);
                    // student?.scrollIntoView({ behavior: "smooth" });
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
                    window.scrollTo(0, window.innerHeight * 9.8);
                    // subject?.scrollIntoView({ behavior: "smooth" });
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
            <MainTitleWrapper
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.5 }}
            >
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
          )}
        </ChakraProvider>
      </body>
    </html>
  );
}
