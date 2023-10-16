"use client";

import { Flex, VStack } from "@chakra-ui/react";
import { WheelEvent, useRef, useState, useEffect } from "react";

export default function SubjectScreen() {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const subjectRef = useRef<HTMLDivElement>(null);


  const handleStudentWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const div = subjectRef.current;
    if (div) {
      div.scrollTo({
        top: div.scrollTop + e.deltaY,
        left: 0
      })

      // 스크롤이 아래로 최대로 갔을 때 콘솔에 "1" 출력
      if (
        !isScrolledToBottom &&
        div.scrollTop + div.clientHeight >= div.scrollHeight
      ) {
        console.log(1);
        setIsScrolledToBottom(true);
      }
      else {

        setIsScrolledToBottom(false);
      }
    }
  }



  return <div id="subject" className="parent">
    <VStack ref={subjectRef} spacing={2} overflowX="scroll" h={'60vh'} marginLeft={'25%'} marginRight={'5%'} onWheel={handleStudentWheel}>
      <Flex flexDir={"column"}>
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
    </VStack>
  </div>;
}
