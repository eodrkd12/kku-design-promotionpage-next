"use client";

import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import styled from "styled-components";
import SubjectItem from "./component/item/subject.item";

const SubjectList = styled.div`
    display: flex;
    flex-direction: column;
    width: 70vw;
    margin-left: 20vw;
    margin-right: 6vw;

    @media (max-width: 500px) {
      margin: 0;
    }
`;

export default function SubjectScreen() {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const subjectRef = useRef<HTMLDivElement>(null);
  const [contentVisible, setContentVisible] = useState(false);

  useEffect(() => {
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry, index) => {
          if (entry.isIntersecting) {
            setContentVisible(true);
          }
        });
      },
      {
        threshold: 0.6,
      }
    );

    const subjectDiv = document.getElementById("subject");
    if (subjectDiv) {
      io.observe(subjectDiv);
    }
  }, [])

  return <div id="subject" className="parent-infinite">
    {
      contentVisible &&
      <motion.div
        initial={{ opacity: 0, y: 100 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 2 }}
      >
        <SubjectList>
          <SubjectItem subject={"전공연구프로젝트(영상)"} img={"/image/lightDoor.png"} />
          <SubjectItem subject={"IMC"} img={"/image/lightDoor.png"} />
          <SubjectItem subject={"프로모션영상"} img={"/image/lightDoor.png"} />
          <SubjectItem subject={"전공연구프로젝트(디지털)"} img={"/image/lightDoor.png"} />
          <SubjectItem subject={"애니메이션스튜디오"} img={"/image/lightDoor.png"} />
          <SubjectItem subject={"UXUI"} img={"/image/lightDoor.png"} />
        </SubjectList>
      </motion.div>}

  </div>;
}
