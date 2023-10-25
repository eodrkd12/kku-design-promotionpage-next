"use client";

import { AnimatePresence, motion, useMotionValue, useTransform } from "framer-motion";
import { WheelEvent, useCallback, useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';
import styled from "styled-components";

const MainTitleWrapper = styled.div`
  position: fixed;
  left: 2vw;
  top: 8vh;
  height: 40vh;
  width: 20vw;
  opacity: 1;
  animation: fadeOut ease-in-out 1s;

  > div:nth-child(1) {
    height: 28%;
    margin-bottom: 2%;
  }
  > div:nth-child(2) {
    height: 40%;
    margin-bottom: 2%;
    > p {
      color: white;
      font-size: 1.5vh;
      font-weight: 300;
    }
  }
  > div:nth-child(3) {
    height: 28%;
    > p {
      color: white;
      font-size: 1vh;
      font-weight: 200;
    }
  }

  @media (max-width: 500px) {
    br{
       display: inline-block;
       content: " ";
    }

    top: 4vw;
    width: 100%;
    left: 5vw;

    > div:nth-child(1){
      visibility: visible;
      width: 20vw;
    }
    > div {
      visibility: hidden;
    }
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 40vh;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    align-items: center;
    > h1 {
      color: white;
      font-size: 5vh;
      font-weight: 600;
    }
    > h2 {
      color: white;
      font-size: 2vh;
    }
    > p {
      color: white;
      font-size: 2vh;
      font-weight: 300;
      text-align: center;
      line-height: 3vh;
    }
  }

  @media (max-width: 500px) {
    width: 90vw;
    > div {
      display: block;
      text-align: left;
      > p {
        text-align: left;
      }
    }
  }
`;


const Dday = styled.p`
  color: white;
  font-size: 20vh;
  font-weight: 600;
`

export default function IntroductionScreen() {
  const [contentVisible, setContentVisible] = useState(false);
  const [isEnd, setIsEnd] = useState(false);
  const [dday, setDday] = useState(100);

  const wheel = useMotionValue(0);

  const endWheel = 20;

  const opacity = useTransform(wheel, [0, endWheel], [0, 1]);
  const y = useTransform(wheel, [0, endWheel], [30, 0]);

  const isMobile = useMediaQuery({
    query: '(max-width: 500px)'
  });


  const handleWheel = useCallback(
    (event: WheelEvent<HTMLDivElement>) => {

      const delta = event.deltaY > 0 ? 1 : -1;

      if (wheel.get() + delta > 0) {
        if (wheel.get() + delta > endWheel) {
          wheel.set(endWheel);
        } else {
          wheel.set(wheel.get() + delta)
        }
      } else {
        wheel.set(0);
      }

      if (wheel.get() === endWheel) {
        document.getElementsByTagName("main")[0].style.overflow = "unset";
      } else {
        document.getElementsByTagName("main")[0].style.overflow = "hidden";
      }
    },
    [isEnd, contentVisible]
  );

  useEffect(() => {

    if (isMobile) {
      setTimeout(() => {
        setContentVisible(true);
        setIsEnd(true);
        document.getElementsByTagName("main")[0].style.overflow = "unset";
      }, 2000)
    }

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            if (!isEnd) setContentVisible(false);
          }
        });
      },
      {
        threshold: 0.2,
      }
    );

    const aboutDiv = document.getElementById("about");
    if (aboutDiv) {
      io.observe(aboutDiv);
    }
  }, []);

  useEffect(() => {
    if (isEnd && !contentVisible) {
      setTimeout(() => {
        setContentVisible(true);
      }, 5000)
    }
  }, [contentVisible])

  useEffect(() => {
    const setDate = new Date("2023-11-02T00:00:00+0900");

    const now = new Date();

    const distance = setDate.getTime() - now.getTime();

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));

    setDday(day + 1);
  }, [])

  if (dday > 0) {
    return (
      <div className="parent-scroll-hidden">
        <Dday>
          D-{dday}
        </Dday>
      </div>
    )
  } else {

    return (
      <div id="introduction" className="parent" onWheel={handleWheel}>
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
        <motion.div
          initial={{ opacity: 0, y: 0 }}
          transition={{ duration: 1.5 }}
        >
        </motion.div>
        <AnimatePresence>
          <ContentWrapper>
            <motion.div
              style={{
                opacity
              }}
            >
              <h1>전시소개</h1>
            </motion.div>
            <motion.div
              style={{
                opacity,
                y
              }}
            >
              <h2>TAG:'나'의 '초대'를 받아 '길'을 타고오다</h2>
            </motion.div>
            <motion.div
              style={{
                opacity,
                y
              }}
            >
              <p>
                우리 개개인의 점들이 각자의 길을 찾아 선이 되고 선이 된 점들은
                서로 얽히고 부딪히며 하나의 태그가 됩니다.
                <br />
                태그는 또 다른 태그로 이어지고 이어져, 순식간에 세상을 잎맥처럼
                덮을 거대한 길이 될 것입니다.
                <br />
                #건국대학교라는 태그, #시각영상디자인전공이라는 태그로 묶이게
                되어 배움의 시간이 지난 지금
                <br />
                우리는 #영상디지털이라는 태그 아래 묶여 함께 정성껏 졸업 전시를
                만들었습니다.
                <br />
                <br />
                이제 우리의 노력의 시간들을 담은 결과물을 세상에 보이고자,
                @당신을 초대합니다.
              </p>
            </motion.div>
          </ContentWrapper>
        </AnimatePresence>
      </div>
    );
  }
}
