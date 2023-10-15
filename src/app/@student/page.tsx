"use client";

import { Flex, HStack } from "@chakra-ui/react";
import { WheelEvent, useRef, useState, useEffect } from "react";

export default function StudentScreen() {
  const [isScrolledToRight, setIsScrolledToRight] = useState(false);

  const handleStudentWheel = (e: WheelEvent<HTMLDivElement>) => {
    e.preventDefault();
    const div = studentRef.current;
    if (div) {
      div.scrollTo({
        top: 0,
        left: div.scrollLeft + e.deltaY,
      });

      // 스크롤이 오른쪽으로 최대로 갔을 때 콘솔에 "1" 출력
      if (
        !isScrolledToRight &&
        div.scrollLeft + div.clientWidth >= div.scrollWidth
      ) {
        console.log(1);
        setIsScrolledToRight(true);
      } else {
        console.log(0);
        setIsScrolledToRight(false);
      }
    }
  };

  const studentRef = useRef<HTMLDivElement>(null);

  return (
    <div className="parent" id="student">
      <HStack
        ref={studentRef}
        spacing={8}
        overflowX="scroll"
        h={"60vh"}
        onWheel={handleStudentWheel}
      >
        <img
          src={"/image/lightDoor.png"}
          alt="SignLogo"
          style={{ width: "200px", height: "200px" }}
        />
        <img
          src={"/image/lightDoor.png"}
          alt="SignLogo"
          style={{ width: "200px", height: "200px" }}
        />
        <img
          src={"/image/lightDoor.png"}
          alt="SignLogo"
          style={{ width: "200px", height: "200px" }}
        />
        <img
          src={"/image/lightDoor.png"}
          alt="SignLogo"
          style={{ width: "200px", height: "200px" }}
        />
        <img
          src={"/image/lightDoor.png"}
          alt="SignLogo"
          style={{ width: "200px", height: "200px" }}
        />
        <img
          src={"/image/lightDoor.png"}
          alt="SignLogo"
          style={{ width: "200px", height: "200px" }}
        />
        <img
          src={"/image/lightDoor.png"}
          alt="SignLogo"
          style={{ width: "200px", height: "200px" }}
        />
        <img
          src={"/image/lightDoor.png"}
          alt="SignLogo"
          style={{ width: "200px", height: "200px" }}
        />
        <img
          src={"/image/lightDoor.png"}
          alt="SignLogo"
          style={{ width: "200px", height: "200px" }}
        />
      </HStack>
    </div>
  );
}
