"use client";

import { useMotionValueEvent, useScroll, useTransform } from "framer-motion";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";

const MainTitleWrapper = styled.div`
  position: fixed;
  left: 2.5vw;
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
    height: 35%;
    margin-bottom: 2%;
    > p {
      color: white;
      font-size: 1.65vh;
      font-weight: 200;
      line-height: 2vh;
      letter-spacing: 0.04em;
    }
  }
  > div:nth-child(3) {
    height: 28%;
    > p {
      color: white;
      font-size: 1.07vh;
      font-weight: 100;
      letter-spacing: 0.06em;
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

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  height: 40vh;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  > div {
    width: 100%;
    height: 80%;
    text-align: center;
    display: flex;
    justify-content: center;
    align-items: center;
    > h1 {
      will-change: transform;
      color: white;
      font-size: 5vh;
      font-weight: 600;
    }
    > h2 {
      will-change: transform;
      color: white;
      font-size: 2.3vh;
      font-weight: 600;
    }
    > p {
      will-change: transform;
      color: white;
      font-size: 1.8vh;
      font-weight: 100;
      text-align: center;
      line-height: 3.5vh;
    }
  }
  > div:nth-child(1) {
    height: 40%;
  }
  > div:nth-child(2) {
    height: 70%;
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
`;

export default function IntroductionScreen() {
  const [dday, setDday] = useState(0);

  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const { scrollYProgress } = useScroll();

  const imgProgress = useTransform(scrollYProgress, [0, 0.45], [0, 152]);

  const [backImage, setBackImage] = useState<string>('/image/png_sequence/back_image_00000.png');

  useMotionValueEvent(scrollYProgress, "change", (latest) => {

    const _imgProgress = Math.floor(imgProgress.get());
    if (_imgProgress < 10) {
      setBackImage(`/image/png_sequence/back_image_0000${_imgProgress}.png`);
    } else if (imgProgress.get() < 100) {
      setBackImage(`/image/png_sequence/back_image_000${_imgProgress}.png`);
    } else {
      setBackImage(`/image/png_sequence/back_image_00${_imgProgress}.png`);
    }
  })

  useEffect(() => {
    const setDate = new Date("2023-10-25T00:00:00+0900");

    const now = new Date();

    const distance = setDate.getTime() - now.getTime();

    const day = Math.floor(distance / (1000 * 60 * 60 * 24));

    setDday(day + 1);
  }, []);

  if (dday > 0) {
    return (
      <div className="parent">
        <Dday>D-{dday}</Dday>
      </div>
    );
  } else {
    return <div className={"parent"} id="introduction">
      <img
        style={{
          width: "100vw",
          height: "100vh",
          position: "fixed",
          objectFit: 'cover',
          top: 0,
          zIndex: -100,
        }}
        src={backImage}
      ></img>
    </div>;
  }
}
