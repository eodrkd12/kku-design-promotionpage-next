"use client";

import { Flex, VStack } from "@chakra-ui/react";
import { WheelEvent, useRef, useState, useEffect } from "react";

export default function SubjectScreen() {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const subjectRef = useRef<HTMLDivElement>(null);

  return <div id="subject" className="parent-infinite">

    <Flex flexDir={"column"} mt={'50%'} ml={'20%'} mr={'5%'}>
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

  </div>;
}
