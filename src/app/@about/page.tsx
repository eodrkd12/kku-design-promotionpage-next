"use client";

import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Page = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  width: 60vw;
  height: 40vh;

  @media (max-width: 500px) {
    width: 90vw;
    height: 60vh;
  }
`;

const ContentWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 60vw;
  > div {
    width: 100%;
    display: flex;
    flex-direction: column;
    justify-content: flex-start;
    align-items: center;
    margin-bottom: 6vh;
    > h1 {
      color: white;
      font-size: 5vh;
      font-weight: 600;
      margin-bottom: 4vh;
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

  @media (max-width: 500px){
    br{
       display: inline-block;
       content: " ";
    }

    width: 90vw;
    > div {
      display: block;
      text-align: left;
      font-size: 1.5vh;
      > p {
        font-size: 1.8vh;
        text-align: left;
      }
    }
  }
`;

export default function AboutScreen() {
  const [introVisible, setIntroVisible] = useState(false);
  const [intro2Visible, setIntro2Visible] = useState(false);
  const [intro3Visible, setIntro3Visible] = useState(false);
  const [intro4Visible, setIntro4Visible] = useState(false);
  const [intro5Visible, setIntro5Visible] = useState(false);

  useEffect(() => {

    const parent: HTMLElement | null = document.getElementById("about");

    // parent!.addEventListener('wheel', event => {
    //   event.preventDefault();
    // }, { passive: false })

    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIntroVisible(true);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );
    const io2 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIntro2Visible(true);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );
    const io3 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIntro3Visible(true);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );
    const io4 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIntro4Visible(true);
          }
        });
      },
      {
        threshold: 0.4,
      }
    );
    const io5 = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setIntro5Visible(true);
          }
        });
      },
      {
        threshold: 0.16,
      }
    );

    const page1 = document.getElementById("page2");
    const page2 = document.getElementById("page3");
    const page3 = document.getElementById("page4");
    const page4 = document.getElementById("page5");
    const page5 = document.getElementById("student");
    if (page1 && page2 && page3 && page4 && page5) {
      io.observe(page1);
      io2.observe(page2);
      io3.observe(page3);
      io4.observe(page4);
      io5.observe(page5);
    }
  }, []);

  return (
    <div className="parent-200vh" id="about">
      <Page id="page1">
        {introVisible && (
          <ContentWrapper>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <h1>졸업축사</h1>
              <p>
                지금까지의 여러분들의 노력과 열저을 자랑스럽게 생각합니다.
                지금은 훌륭한 성취의 순간입니다.
                <br />
                자신의 열정과 노력에 자부심을 가져야 합니다. 미래는 미지의
                영역이지만, 자신을 믿고 도전하세요.
                <br />
                실패는 성공의 길에 놓인 발걸음이며, 지속적인 학습과 성장이
                중요합니다. 주변의 지지와 인내력을 활용하며,
                <br />
                열린 마음과 호기심을 가지고 새로운 경험을 향해 나아가세요. 계속
                학습하며 성장해 나가는 여정을 즐겨주세요.
                <br />
                미래는 여러분을 향해 무한한 가능성을 열어 두고 있습니다. 다시
                한번 축하드리며, 남은 기간 마무리 잘 지으시길 바랍니다.
              </p>
              <h2>-디자인대학 학장 이용우 교수님</h2>
            </motion.div>
          </ContentWrapper>
        )}
      </Page>
      <Page id="page2">
        {intro2Visible && (
          <ContentWrapper>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <p>
                졸업을 진심으로 축하합니다. 여러분에게 어떤 인사말이 도움이 될지
                곰곰이 생각해봤는데
                <br />
                '12가지 인생법칙'에서 조던 피터슨이 하셨던 말씀이 생각났습니다.
                <br />
                "지금 당신이 어디에 있는지 알아야 한다. 그래야 미래를 위한
                계획을 세울 수 있다. 지금의 당신이 누구인지 정확히 알아야한다.
                <br />
                그래야 한계를 극복할 방법을 찾을 수 있다. 또 당신이 어디로 가고
                있는지도 알아야 한다. 그래야 삶에서 혼돈을 줄이고,
                <br />
                질서를 재정립하며, 세상에 대한 희망을 품을 수 있다" 이제
                여러분은 학교라는 울타리를 넘어 세상 밖으로 나가야 합니다.
                <br />
                세상이 그리 호락호락하지 않습니다. 따라서 여러분만의 원칙을
                명확히 세우고 여러분이 나아갈 방향을 정해야 합니다.
                <br />
                다른 사람의 인생이 아닌 여러분의 인생을 사세요. 찬란할 여러분의
                앞날을 응원합니다..
              </p>
              <h2>-정혜경 교수님</h2>
            </motion.div>
          </ContentWrapper>
        )}
      </Page>
      <Page id="page3">
        {intro3Visible && (
          <ContentWrapper>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <p>
                지금까지의 여러분들의 노력과 열정을 자랑스럽게 생각합니다.
                지금은 훌륭한 성취의 순간입니다.
                <br />
                자신의 열정과 노력에 자부심을 가져야 합니다. 미래는 미지의
                영역이지만, 자신을 믿고 도전하세요.
                <br />
                실패는 성공의 길에 놓인 발걸음이며, 지속적인 학습과 성장이
                중요합니다.
                <br />
                주변의 지지와 인내력을 활용하며, 열린 마음과 호기심을 가지고
                새로운 경험을 향해 나아가세요.
                <br />
                계속 학습하며 성장해 나가는 여정을 즐겨주세요. 미래는 여러분을
                향해 무한한 가능성을 열어 두고 있습니다.
                <br />
                다시 한번 축하드리며, 남은 기간 마무리 잘 지으시길 바랍니다.
              </p>
              <h2>-김경환 교수님</h2>
            </motion.div>
          </ContentWrapper>
        )}
      </Page>
      <Page id="page4">
        {intro4Visible && (
          <ContentWrapper>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <p>
                자랑스러운 여러분의 졸업을 진심으로 축하합니다!
                <br />
                여러분의 열정과 안내로 졸업 작품을 무사히 완료하게 되었습니다.
                <br />
                졸업 작품을 준비하면서 많은 어려움을 이겨내고 한 단계 성장한
                자신의 모습을 발견할 수 있었을 겁니다.
                <br />
                이것이 끝이라고 생각했겠지만 멀리서 보았을 때는 시작의 한
                걸음입니다. 그리고 여러분은 그 한 걸음을 멋지게 떼어냈습니다.
                <br />
                그런 여러분이 무척이나 자랑스럽고 대견합니다. 함께할 수 있어서
                너무나 행복한 시간이었고 여러분의 작품에 대한
                <br />
                순수함과 열정에 감동받아 저에게도 많은 동기부여가 되었습니다.
                멋진 사회인으로 거듭나길 바랍니다. 감사합니다.
              </p>
              <h2>-백지혜 교수님</h2>
            </motion.div>
          </ContentWrapper>
        )}
      </Page>
      <Page id="page5">
        {intro5Visible && (
          <ContentWrapper>
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <p>
                우선 졸업을 진심으로 축하합니다.
                <br />
                4년간의 여정을 마무리하고 졸업작품을 통해 빛나는 창의성을 담아내는 특별한 순간을 맞이하게 되었습니다.
                <br />
                이 의미 있는 순간을 만들어낸 여러분의 열정과 노력에 박수를 보냅니다.
                <br />
                여러분의 작품은 각자 창의력 뿐만 아니라, 인내와 헌신 그리고 배움에 대한 열정을 대변합니다.
                <br />
                그런 의미에서 작품을 준비하는 동안 많은 고민과 어려움을 슬기롭게 풀어간
                <br />
                여러분 스스로에게 칭찬해주기를 바랍니다.
                <br />
                나중에 돌이켜보면, 이 모든 순간들이 가장 빛나는 때였다는 걸 알게 될 것입니다.
                <br />
                이제 여러분은 현실 세계에서 디자이너로서 뛰어난 업적을 이룰 기회를 가지게 되었습니다.
                <br />
                이 과정에서 끊임없는 학습과 성장을 추구하며, 다양한 분야에서 자신의 역량을 발휘하기를 기원합니다.
                <br />
                여러분 각자 한 명 한 명이 자랑스럽습니다. 다시 한 번 축하드립니다.
              </p>
              <h2>-박상권 교수님</h2>
            </motion.div>
          </ContentWrapper>
        )}
      </Page>
    </div>
  );
}
