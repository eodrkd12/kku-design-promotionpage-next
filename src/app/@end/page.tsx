"use client";
import { Button, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";
import {
  AnimatePresence,
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useState } from "react";

const Wrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: flex-end;

  > img {
    width: 35vh;
    height: 35vh;
    object-fit: contain;
  }

  > h1 {
    color: white;
    font-size: 3.5vh;
    font-weight: 800;
    margin-top: 3vh;
    margin-bottom: 2vh;
  }
  > p {
    color: white;
    font-size: 1.4vh;
    text-align: center;
  }
`;
const Footer = styled(motion.div)`
  width: 45vw;
  height: 24vh;
  display: flex;
  flex-direction: row;
  margin-top: 10vh;
  > div {
    width: 15vw;
    height: 24vh;
    display: flex;
    flex-direction: column;
    > div {
      width: 15vw;
      height: 12vh;
      display: flex;
      flex-direction: row;
      justify-content: space-between;
      > div {
        width: 7vw;
        display: flex;
        > p {
          color: white;
          font-weight: 400;
          font-size: 1.4vh;
        }
        > h1 {
          color: white;
          font-weight: 800;
          font-size: 1.4vh;
        }
      }
      > div:first-child {
        justify-content: flex-end;
      }
      > div:nth-child(2) {
        width: 1px;
      }
      > div:last-child {
        justify-content: flex-start;
      }
    }
  }

  @media (max-width: 500px) {
    > div {
      > div {
        flex-direction: column;
        justify-content: start;
        width: 13vw;
        > div {
          width: 100%;
          > p {
            font-size: 1.5vh;
          }
          > h1 {
            font-size: 1.5vh;
          }
        }
        > div:nth-child(1) {
          justify-content: flex-start;
        }
        > div:nth-child(2) {
          width: 100%;
          height: 1px;
        }
      }
    }
  }
`;

const Divider = styled.div<{ height: string }>`
  height: ${(props) => props.height};
  background: white;
`;

export default function EndScreen() {
  const { scrollYProgress } = useScroll();

  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest < 0.97) {
      controls1.start({ opacity: 0 });
    } else if (0.97 <= latest && latest < 0.98) {
      controls1.start({ opacity: 0.4 });
      controls2.start({ opacity: 0, y: 100 });
    } else if (0.98 <= latest && latest < 0.986) {
      controls1.start({ opacity: 1 });
      controls2.start({ opacity: 0.3, y: 60 });
    } else if (0.986 <= latest && latest < 0.94) {
      controls2.start({ opacity: 0.6, y: 30 });
    } else if (0.94 <= latest && latest < 1) {
      controls2.start({ opacity: 1, y: 0 });
    }
  });

  return (
    <div className="parent" id="end">
      <Wrapper>
        <img src="/image/end_logo.jpg" />
        <motion.h1
          initial={{ opacity: 0 }}
          animate={controls1}
          transition={{ duration: 0.5 }}
        >
          Take my Tag
        </motion.h1>
        <motion.p
          initial={{ opacity: 0 }}
          animate={controls1}
          transition={{ duration: 0.5 }}
        >
          2024 KONKUK MOVING DESIGN
          <br />
          VIDEO/DIGITAL TRACK GRADUATION EXHIBITION
        </motion.p>
        <Footer
          initial={{ opacity: 0, y: 100 }}
          animate={controls2}
          transition={{ duration: 0.5 }}
        >
          <div>
            <div>
              <div>
                <p>위원장</p>
              </div>
              <Divider height={"25%"} />
              <div>
                <h1>김동현</h1>
              </div>
            </div>
            <div>
              <div>
                <p>부위원장</p>
              </div>
              <Divider height={"25%"} />
              <div>
                <h1>이현정</h1>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>기획팀</p>
              </div>
              <Divider height={"50%"} />
              <div>
                <h1>
                  이태형
                  <br />
                  이규민
                </h1>
              </div>
            </div>
            <div>
              <div>
                <p>홍보팀</p>
              </div>
              <Divider height={"50%"} />
              <div>
                <h1>
                  김희윤
                  <br />
                  최현희
                </h1>
              </div>
            </div>
          </div>
          <div>
            <div>
              <div>
                <p>영상팀</p>
              </div>
              <Divider height={"50%"} />
              <div>
                <h1>
                  강나령
                  <br />
                  손한미
                </h1>
              </div>
            </div>
            <div>
              <div>
                <p>총무</p>
              </div>
              <Divider height={"25%"} />
              <div>
                <h1>김유미</h1>
              </div>
            </div>
          </div>
        </Footer>
      </Wrapper>
    </div>
  );
}
