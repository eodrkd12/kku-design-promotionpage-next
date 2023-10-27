"use client";

import { motion, useAnimationControls, useMotionValueEvent, useScroll } from "framer-motion";
import { useEffect } from "react";
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
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  position: sticky;
  top: 0;
  > div {
    width: 100%;
    height: 100%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    > h1 {
      color: white;
      font-size: 5vh;
      font-weight: 600;
      margin-bottom: 4vh;
    }
    > h2 {
      color: white;
      font-size: 2.5vh;
      font-weight: 500;
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

  const { scrollY, scrollYProgress } = useScroll();

  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const controls3 = useAnimationControls();
  const controls4 = useAnimationControls();
  const controls5 = useAnimationControls();
  const controls6 = useAnimationControls();



  useEffect(() => {

  }, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    // 전체 900
    // about 300 
    // 1번 축사 100 => 0.11 ~ 0.22
    // 나머지 5개 각 40 => 0.264, 0.308, 0.352, 0.396, 0.44 까지
    console.log(latest);

    if (latest < 0.06) {
      controls1.start({ opacity: 0 })
    } else if (0.06 <= latest && latest < 0.08) {
      controls1.start({ opacity: 0.2 })
    } else if (0.08 <= latest && latest < 0.1) {
      controls1.start({ opacity: 0.6 })
    } else if (0.10 <= latest && latest < 0.12) {
      controls1.start({ opacity: 1 })
    } else if (0.12 <= latest) {
      controls1.start({ opacity: 0 })
    }

  })

  return (
    <div className="parent-600vh" id="about">
      <ContentWrapper>
        <motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={controls1}
            transition={{ duration: 0.5 }}
          >전시소개
          </motion.h1>
          <h2>TAG:'나'의 '초대'를 받아 '길'을 타고오다</h2>
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
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h1>졸업축사</h1>
          <h2>세상을 리드하는 멋진 Creator를 기대하며~</h2>
          <p>
            'Take my TAG' 라는 2023년도 졸업전 주제를 가지고, 엄격한 심사 과정을 거쳐서 졸업전시회를
            <br />
            준비한 영상트랙과 디지털 트랙 4학년 학생들에게 큰 격려와 박수를 보냅니다. 이번 전시가 4년간의
            <br />
            전공 교육 과정을 마무리하는 순간들로 대학 생활의 뜻깊은 추억으로 간직하길 바랍니다.
            <br />
            급변하는 4차 산업혁명의 디지털 혁신의 환경과 AI시대를 맞으며 사회에 나갈 4학년 학생들을 생각하면
            <br />
            걱정도 앞서지만, 한편으로는 졸업작품전을 준비하며 헤쳐 나갔던 순간순간들을 기억하면,
            <br />
            앞으로 내 제자들이 세상을 리드하는 크리에이터으로서 힘차게 발전해 나갈 것으로 굳게 믿습니다.
            <br />
            그동안 힘들었던 것들은 모두 잊고, 즐거운 것들만 생각하며 더욱 발전해 나아가는 제자들이 되길 바랍니다.
            <br />
            모두 성공하십시오. 고맙습니다^^
          </p>
          <h2>-디자인대학 시각영상디자인학과 이용우 교수</h2>
        </motion.div>
      </ContentWrapper>
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h2>졸업을 진심으로 축하드립니다.</h2>
          <p>
            졸업을 진심으로 축하합니다. 여러분에게 어떤 인사말이 도움이 될지
            곰곰이 생각해봤는데
            <br />
            '12가지 인생법칙'에서 조던 피터슨이 하셨던 말씀이 생각났습니다.
            <br />
            "지금 당신이 어디에 있는지 알아야 한다. 그래야 미래를 위한
            계획을 세울 수 있다. 지금의 당신이
            <br />
            누구인지 정확히 알아야 한다. 그래야 한계를 극복할 방법을 찾을 수 있다. 또 당신이 어디로
            <br />
            가고 있는지도 알아야 한다. 그래야 삶에서 혼돈을 줄이고, 질서를 재정립하며,세상에 대한
            <br />
            희망을 품을 수 있다”  이제 여러분은 학교라는 울타리를 넘어 세상 밖으로 나가야 합니다.
            <br />
            세상이 그리 호락호락하지 않습니다. 따라서 여러분만의 원칙을 명확히 세우고 여러분이 나아갈 방향을
            <br />
            정해야 합니다. 다른 사람의 인생이 아닌 여러분의 인생을 사세요. 찬란할 여러분의 앞날을 응원합니다.
          </p>
          <h2>-디자인대학 시각영상디자인학과 정혜경 교수</h2>
        </motion.div>
      </ContentWrapper>
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h2>졸업을 앞둔 여러분, 축하합니다!</h2>
          <p>
            지금까지의 여러분들의 노력과 열정을 자랑스럽게 생각합니다.
            지금은 훌륭한 성취의 순간입니다.
            <br />
            자신의 열정과 노력에 자부심을 가져야 합니다. 미래는 미지의
            영역이지만, 자신을 믿고 도전하세요.
            <br />
            실패는 성공의 길에 놓인 발걸음이며, 지속적인 학습과 성장이
            중요합니다. 주변의 지지와 인내력을 활용하며,
            <br />
            열린 마음과 호기심을 가지고 새로운 경험을 향해 나아가세요. 계속 학습하며 성장해 나가는 여정을 즐겨주세요.
            <br />
            미래는 여러분을 향해 무한한 가능성을 열어 두고 있습니다. 다시 한번 축하드리며, 남은 기간 마무리 잘 지으시길 바랍니다.
          </p>
          <h2>-디자인대학 시각영상디자인학과 김경환 교수</h2>
        </motion.div>
      </ContentWrapper>
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h2>자랑스러운 여러분의 졸업을 진심으로 축하합니다!</h2>
          <p>
            <br />
            여러분의 열정과 인내로 졸업 작품을 무사히 완료하게 되었습니다. 졸업 작품을 준비하면서 많은 어려움을 이겨내고
            <br />
            한 단계 성장한 자신의 모습을 발견할 수 있었을 겁니다.이것이 끝이라고 생각했겠지만 멀리서 보았을 때는 시작의
            <br />
            한 걸음입니다. 그리고 여러분은 그 한 걸음을 멋지게 떼어냈습니다. 그런 여러분이 무척이나
            <br />
            자랑스럽고 대견합니다. 함께할 수 있어서 너무나 행복한 시간이었고 여러분의 작품에 대한 순수함과 열정에 감동받아
            <br />
            저에게도 많은 동기부여가 되었습니다. 멋진 사회인으로 거듭나길 바랍니다. 감사합니다
          </p>
          <h2>-디자인대학 시각영상디자인학과 백지혜 교수</h2>
        </motion.div>
      </ContentWrapper>
      <ContentWrapper>
        <motion.div
          initial={{ opacity: 0, y: 100 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 2 }}
        >
          <h2>우선 졸업을 진심으로 축하합니다.</h2>
          <p>
            <br />
            4년간의 여정을 마무리하고 졸업작품을 통해 빛나는 창의성을 담아내는 특별한 순간을 맞이하게 되었습니다.
            <br />
            이 의미 있는 순간을 만들어낸 여러분의 열정과 노력에 박수를 보냅니다.
            <br />
            여러분의 작품은 각자 창의력 뿐만 아니라, 인내와 헌신 그리고 배움에 대한 열정을 대변합니다.
            <br />
            그런 의미에서 작품을 준비하는 동안 많은 고민과 어려움을 슬기롭게 풀어간
            <br />
            여러분 스스로에게 칭찬해주기를 바랍니다. 나중에 돌이켜보면,
            <br />
            이 모든 순간들이 가장 빛나는 때였다는 걸 알게 될 것입니다.
            <br />
            이제 여러분은 현실 세계에서 디자이너로서 뛰어난 업적을 이룰 기회를 가지게 되었습니다.
            <br />
            이 과정에서 끊임없는 학습과 성장을 추구하며, 다양한 분야에서 자신의 역량을 발휘하기를 기원합니다.
            <br />
            여러분 각자 한 명 한 명이 자랑스럽습니다. 다시 한 번 축하드립니다.
          </p>
          <h2>-디자인대학 시각영상디자인학과 박상권 교수</h2>
        </motion.div>
      </ContentWrapper>
    </div>
  );
}
