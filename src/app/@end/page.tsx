"use client";
import { Button, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
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
    font-size: 5vh;
    font-weight: 800;
    margin-top: 3vh;
    margin-bottom: 2vh;
  }
  > p {
    color: white;
    font-size: 2vh;
    text-align: center;
  }
`;
const Footer = styled.div`
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
          font-size: 2vh;
        }
        > h1 {
          color: white;
          font-weight: 800;
          font-size: 2vh;
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
  return (
    <div className="parent" id="end">
      <Wrapper>
        <img src="/image/end_logo.jpg" />
        <h1>Take my Tag</h1>
        <p>
          2024 KONKUK MOVING DESIGN
          <br />
          VIDEO/DIGITAL TRACK GRADUATION EXHIBITION
        </p>
        <Footer>
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
