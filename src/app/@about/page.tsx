"use client";

import {
  motion,
  useAnimationControls,
  useMotionValueEvent,
  useScroll,
} from "framer-motion";
import { useEffect } from "react";
import styled from "styled-components";

const ContentWrapper = styled(motion.div)`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100vw;
  height: 100vh;
  top: 0;

  > div {
    position: sticky;
    top: 30%;
    text-align: center;

    > h1 {
      color: white;
      font-size: 3.15vh;
      font-weight: 800;
      margin-bottom: 6vh;
      letter-spacing: -1px;
    }

    > h2 {
      margin-top: 3vh;
      margin-bottom: 3vh;
    }

    > h2:nth-child(1) {
      color: white;
      font-size: 1.96vh;
      font-weight: 900;
      letter-spacing: -1px;
    }
    > h2:nth-child(2) {
      color: white;
      font-size: 1.96vh;
      font-weight: 900;
      letter-spacing: -1px;
    }

    > h2:nth-child(4) {
      color: white;
      font-size: 1.75vh;
      font-weight: 600;
    }

    > p {
      color: white;
      font-size: 1.61vh;
      font-weight: 300;
      text-align: center;
      line-height: 3vh;
      letter-spacing: -1px;
      > strong {
        font-weight: 900;
      }
    }
  }

  @media (max-width: 500px) {
    br {
      display: inline-block;
      content: " ";
    }

    width: 90vw;
    > div {
      display: block;
      text-align: left;
      font-size: 1.05vh;
      > p {
        font-size: 1.8vh;
        text-align: left;
      }
    }
  }
`;

export default function AboutScreen() {
  const { scrollYProgress } = useScroll();

  const controls1 = useAnimationControls();
  const controls2 = useAnimationControls();
  const controls3 = useAnimationControls();
  const controls4 = useAnimationControls();
  const controls5 = useAnimationControls();
  const controls6 = useAnimationControls();

  useEffect(() => {}, []);

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    console.log(latest);

    if (latest < 0.082) {
      controls1.start({ opacity: 0 });
      controls2.start({ opacity: 0, y: 100 });
    } else if (0.082 <= latest && latest < 0.086) {
      controls1.start({ opacity: 0.3 });
      controls2.start({ opacity: 0.3, y: 60 });
    } else if (0.086 <= latest && latest < 0.091) {
      controls1.start({ opacity: 0.5 });
      controls2.start({ opacity: 0.5, y: 45 });
    } else if (0.091 <= latest && latest < 0.094) {
      controls1.start({ opacity: 0.7 });
      controls2.start({ opacity: 0.7, y: 30 });
    } else if (0.094 <= latest && latest < 0.099) {
      controls1.start({ opacity: 1, y: 0 });
      controls2.start({ opacity: 1, y: 0 });
    } else if (0.12 <= latest && latest < 0.13) {
      controls1.start({ opacity: 0, y: -40 });
      controls2.start({ opacity: 0, y: -40 });
    } else if (0.13 <= latest && latest < 0.136) {
      controls3.start({ opacity: 0.3, y: 60 });
    } else if (0.136 <= latest && latest < 0.142) {
      controls3.start({ opacity: 0.5, y: 45 });
    } else if (0.142 <= latest && latest < 0.148) {
      controls3.start({ opacity: 0.7, y: 30 });
    } else if (0.154 <= latest && latest < 0.16) {
      controls3.start({ opacity: 1, y: 0 });
    } else if (0.192 <= latest && latest < 0.205) {
      controls3.start({ opacity: 0.6, y: -20 });
    } else if (0.205 <= latest && latest < 0.213) {
      controls3.start({ opacity: 0, y: -40 });
      controls4.start({ opacity: 0.3, y: 60 });
    } else if (0.213 <= latest && latest < 0.221) {
      controls4.start({ opacity: 0.5, y: 45 });
    } else if (0.221 <= latest && latest < 0.228) {
      controls4.start({ opacity: 0.7, y: 30 });
    } else if (0.228 <= latest && latest < 0.236) {
      controls4.start({ opacity: 1, y: 0 });
    } else if (0.278 <= latest && latest < 0.287) {
      controls4.start({ opacity: 0.6, y: -20 });
    } else if (0.287 <= latest && latest < 0.297) {
      controls4.start({ opacity: 0, y: -40 });
      controls5.start({ opacity: 0.3, y: 60 });
    } else if (0.297 <= latest && latest < 0.305) {
      controls5.start({ opacity: 0.5, y: 45 });
    } else if (0.305 <= latest && latest < 0.313) {
      controls5.start({ opacity: 0.7, y: 30 });
    } else if (0.313 <= latest && latest < 0.32) {
      controls5.start({ opacity: 1, y: 0 });
    } else if (0.369 <= latest && latest < 0.377) {
      controls5.start({ opacity: 0.6, y: -20 });
    } else if (0.377 <= latest && latest < 0.385) {
      controls5.start({ opacity: 0, y: -40 });
      controls6.start({ opacity: 0.3, y: 60 });
    } else if (0.385 <= latest && latest < 0.393) {
      controls6.start({ opacity: 0.5, y: 45 });
    } else if (0.393 <= latest && latest < 0.4) {
      controls6.start({ opacity: 1, y: 0 });
    } else if (0.42 <= latest && latest < 0.426) {
      controls6.start({ opacity: 0.6, y: -20 });
    } else if (0.434 <= latest) {
      controls6.start({ opacity: 0, y: -40 });
    }
  });

  return (
    <div className="parent-600vh" id="about">
      <ContentWrapper>
        <motion.div>
          <motion.h1
            initial={{ opacity: 0 }}
            animate={controls1}
            transition={{ duration: 0.5 }}
          >
            졸업축사
          </motion.h1>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={controls2}
            transition={{ duration: 0.5 }}
          >
            세상을 리드하는 멋진 Creator를 기대하며~
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={controls2}
            transition={{ duration: 0.5 }}
          >
            'Take my TAG' 라는 2023년도 졸업전 주제를 가지고, 엄격한 심사 과정을
            거쳐서 졸업전시회를
            <br />
            준비한 영상트랙과 디지털 트랙 4학년 학생들에게 큰 격려와 박수를
            보냅니다. 이번 전시가 4년간의
            <br />
            전공 교육 과정을 마무리하는 순간들로 대학 생활의 뜻깊은 추억으로
            간직하길 바랍니다.
            <br />
            급변하는 4차 산업혁명의 디지털 혁신의 환경과 AI시대를 맞으며 사회에
            나갈 4학년 학생들을 생각하면
            <br />
            걱정도 앞서지만, 한편으로는 졸업작품전을 준비하며 헤쳐 나갔던
            순간순간들을 기억하면,
            <br />
            앞으로 내 제자들이 세상을 리드하는 크리에이터으로서 힘차게 발전해
            나갈 것으로 굳게 믿습니다.
            <br />
            그동안 힘들었던 것들은 모두 잊고, 즐거운 것들만 생각하며 더욱 발전해
            나아가는 제자들이 되길 바랍니다.
            <br />
            모두 성공하십시오. 고맙습니다^^
            <br />
            <br />
            -디자인대학 시각영상디자인학과 <strong>이용우 교수</strong>
          </motion.p>
        </motion.div>
      </ContentWrapper>
      <ContentWrapper>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={controls3}
            transition={{ duration: 0.5 }}
          >
            졸업을 진심으로 축하드립니다.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={controls3}
            transition={{ duration: 0.5 }}
          >
            졸업을 진심으로 축하합니다. 여러분에게 어떤 인사말이 도움이 될지
            곰곰이 생각해봤는데
            <br />
            '12가지 인생법칙'에서 조던 피터슨이 하셨던 말씀이 생각났습니다.
            <br />
            “지금 당신이 어디에 있는지 알아야 한다. 그래야 미래를 위한 계획을
            세울 수 있다. 지금의 당신이
            <br />
            누구인지 정확히 알아야 한다. 그래야 한계를 극복할 방법을 찾을 수
            있다. 또 당신이 어디로
            <br />
            가고 있는지도 알아야 한다. 그래야 삶에서 혼돈을 줄이고, 질서를
            재정립하며,세상에 대한
            <br />
            희망을 품을 수 있다” 이제 여러분은 학교라는 울타리를 넘어 세상
            밖으로 나가야 합니다.
            <br />
            세상이 그리 호락호락하지 않습니다. 따라서 여러분만의 원칙을 명확히
            세우고 여러분이 나아갈 방향을
            <br />
            정해야 합니다. 다른 사람의 인생이 아닌 여러분의 인생을 사세요.
            찬란할 여러분의 앞날을 응원합니다.
            <br />
            <br />
            -디자인대학 시각영상디자인학과 <strong>정혜경 교수</strong>
          </motion.p>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={controls4}
            transition={{ duration: 0.5 }}
          >
            졸업을 앞둔 여러분, 축하합니다!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={controls4}
            transition={{ duration: 0.5 }}
          >
            지금까지의 여러분들의 노력과 열정을 자랑스럽게 생각합니다. 지금은
            훌륭한 성취의 순간입니다.
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
            미래는 여러분을 향해 무한한 가능성을 열어 두고 있습니다. 다시 한번
            축하드리며, 남은 기간 마무리 잘 지으시길 바랍니다.
            <br />
            <br />
            -디자인대학 시각영상디자인학과 <strong>김경환 교수</strong>
          </motion.p>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div>
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={controls5}
            transition={{ duration: 0.5 }}
          >
            자랑스러운 여러분의 졸업을 진심으로 축하합니다!
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={controls5}
            transition={{ duration: 0.5 }}
          >
            여러분의 열정과 인내로 졸업 작품을 무사히 완료하게 되었습니다. 졸업
            작품을 준비하면서 많은 어려움을 이겨내고
            <br />
            한 단계 성장한 자신의 모습을 발견할 수 있었을 겁니다.이것이 끝이라고
            생각했겠지만 멀리서 보았을 때는 시작의
            <br />
            한 걸음입니다. 그리고 여러분은 그 한 걸음을 멋지게 떼어냈습니다.
            그런 여러분이 무척이나
            <br />
            자랑스럽고 대견합니다. 함께할 수 있어서 너무나 행복한 시간이었고
            여러분의 작품에 대한 순수함과 열정에 감동받아
            <br />
            순수함과 열정에 감동받아 저에게도 많은 동기부여가 되었습니다. 멋진
            사회인으로 거듭나길 바랍니다. 감사합니다.
            <br />
            <br />
            -디자인대학 시각영상디자인학과 <strong>백지혜 교수</strong>
          </motion.p>
        </div>
      </ContentWrapper>
      <ContentWrapper>
        <div
          style={{
            top: 0,
            position: "relative",
          }}
        >
          <motion.h2
            initial={{ opacity: 0, y: 100 }}
            animate={controls6}
            transition={{ duration: 0.5 }}
          >
            우선 졸업을 진심으로 축하합니다.
          </motion.h2>
          <motion.p
            initial={{ opacity: 0, y: 100 }}
            animate={controls6}
            transition={{ duration: 0.5 }}
          >
            4년간의 여정을 마무리하고 졸업작품을 통해 빛나는 창의성을 담아내는
            특별한 순간을 맞이하게 되었습니다.
            <br />
            이 의미 있는 순간을 만들어낸 여러분의 열정과 노력에 박수를 보냅니다.
            <br />
            여러분의 작품은 각자 창의력 뿐만 아니라, 인내와 헌신 그리고 배움에
            대한 열정을 대변합니다.
            <br />
            그런 의미에서 작품을 준비하는 동안 많은 고민과 어려움을 슬기롭게
            풀어간
            <br />
            여러분 스스로에게 칭찬해주기를 바랍니다. 나중에 돌이켜보면,
            <br />
            나중에 돌이켜보면, 이 모든 순간들이 가장 빛나는 때였다는 걸 알게 될
            것입니다.
            <br />
            이제 여러분은 현실 세계에서 디자이너로서 뛰어난 업적을 이룰 기회를
            가지게 되었습니다.
            <br />
            이 과정에서 끊임없는 학습과 성장을 추구하며, 다양한 분야에서 자신의
            역량을 발휘하기를 기원합니다.
            <br />
            여러분 각자 한 명 한 명이 자랑스럽습니다. 다시 한 번 축하드립니다.
            <br />
            <br />
            -디자인대학 시각영상디자인학과 <strong>박상권 교수</strong>
          </motion.p>
        </div>
      </ContentWrapper>
    </div>
  );
}
