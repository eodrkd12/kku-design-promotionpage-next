"use client";

import { Flex } from "@chakra-ui/react";
import { useRef, useState } from "react";

export default function SubjectScreen() {
  const [isScrolledToBottom, setIsScrolledToBottom] = useState(false);
  const subjectRef = useRef<HTMLDivElement>(null);

  return <div id="subject" className="parent-infinite">

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

  </div>;
}
