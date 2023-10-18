"use client";

import { Flex } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";

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
        <Flex flexDir={"column"} ml={'20vw'} mr={'6vw'}>
          <a href="https://youtube.com">
            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '200px', border: '2px solid white' }} />
          </a>
          <a href="https://youtube.com">
            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '200px', border: '2px solid white' }} />
          </a>
          <a href="https://youtube.com">
            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '200px', border: '2px solid white' }} />
          </a>
          <a href="https://youtube.com">
            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '200px', border: '2px solid white' }} />
          </a>
          <a href="https://youtube.com">
            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '200px', border: '2px solid white' }} />
          </a>
          <a href="https://youtube.com">
            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '200px', border: '2px solid white' }} />
          </a>
        </Flex>
      </motion.div>}

  </div>;
}
