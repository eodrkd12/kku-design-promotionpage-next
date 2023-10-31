"use client";

import { ChevronLeftIcon, ChevronRightIcon } from "@chakra-ui/icons";
import { Flex, HStack, Text, useDisclosure } from "@chakra-ui/react";
import { motion, useMotionValueEvent, useScroll } from "framer-motion";
import { useCallback, useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import SubjectScreen from "../@subject/page";
import digitalStudentData from "./data/digitalStudent-data";
import videoStudentData from "./data/videoStudent-data";
import StudentModal from "./modal/student.modal";

interface ImageButtonProps {
  src: string;
  alt: string;
  name: string;
  englishName: string;
  onClick: () => void;
}

export default function StudentScreen() {
  const { scrollYProgress } = useScroll();

  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const profileWidth = isMobile ? "24vw" : "11.5vw";

  const [isScrolledToRight, setIsScrolledToRight] = useState(false);
  const [isScrolledToLeft, setIsScrolledToLeft] = useState(true);
  const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(
    null
  );

  const [isScrolledToRight2, setIsScrolledToRight2] = useState(false);
  const [isScrolledToLeft2, setIsScrolledToLeft2] = useState(true);
  const [scrollInterval2, setScrollInterval2] = useState<NodeJS.Timeout | null>(
    null
  );

  const [contentVisible, setContentVisible] = useState(false);

  // 선택한 학생 정보 상태
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const [attachment, setAttachment] = useState("scroll");

  const {
    isOpen: isStudentModalOpen,
    onOpen: onStudentModalOpen,
    onClose: onStudentModalClose,
  } = useDisclosure();

  const handleStudent = (student: any) => {
    onStudentModalOpen();
    setSelectedStudent(student);
  };

  const studentRef = useRef<HTMLDivElement>(null);
  const studentRef2 = useRef<HTMLDivElement>(null);

  const scrollSpeed = 10; // 스크롤 속도

  // let scrollInterval: NodeJS.Timeout | null = null; // setInterval의 반환값을 저장하기 위한 변수

  useMotionValueEvent(scrollYProgress, "change", (latest) => {
    if (latest > 0.622) setAttachment("fixed");
    else setAttachment("scroll");
  });

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
        threshold: 0.3,
      }
    );

    const studentDiv = document.getElementById("student");
    if (studentDiv) {
      io.observe(studentDiv);
    }
  }, []);

  const handleArrowMouseEnter = useCallback(
    (direction: "left" | "right") => {
      if (studentRef.current) {
        setScrollInterval(
          setInterval(() => {
            const current = studentRef.current!;

            if (
              current.scrollLeft + current.clientWidth >=
                current.scrollWidth - 0.5 &&
              direction === "right"
            ) {
              setIsScrolledToRight(true);
            } else if (current.scrollLeft === 0 && direction === "left") {
              setIsScrolledToLeft(true);
            } else {
              setIsScrolledToRight(false);
              setIsScrolledToLeft(false);
              current!.scrollTo({
                top: 0,
                left:
                  current!.scrollLeft +
                  (direction === "right" ? scrollSpeed : -scrollSpeed),
              });
            }
          }, 10)
        ); // 100ms마다 실행
      }
    },
    [isScrolledToLeft, isScrolledToRight]
  );

  //화살표에서 마우스를 땔 때
  const handleArrowMouseLeave = useCallback(() => {
    if (scrollInterval) clearInterval(scrollInterval);
  }, [scrollInterval]);

  // 두 번째 HStack을 위한 화살표 버튼 마우스 진입/이탈 이벤트 핸들러
  const handleArrowMouseEnter2 = useCallback(
    (direction: "left" | "right") => {
      if (studentRef2.current) {
        setScrollInterval2(
          setInterval(() => {
            const current = studentRef2.current!;

            if (
              current.scrollLeft + current.clientWidth >=
                current.scrollWidth - 0.5 &&
              direction === "right"
            ) {
              setIsScrolledToRight2(true);
            } else if (current.scrollLeft === 0 && direction === "left") {
              setIsScrolledToLeft2(true);
            } else {
              setIsScrolledToRight2(false);
              setIsScrolledToLeft2(false);
              current!.scrollTo({
                top: 0,
                left:
                  current!.scrollLeft +
                  (direction === "right" ? scrollSpeed : -scrollSpeed),
              });
            }
          }, 10)
        ); // 100ms마다 실행
      }
    },
    [isScrolledToLeft2, isScrolledToRight2]
  );

  // 두 번째 HStack을 위한 화살표 버튼 마우스 이탈 이벤트 핸들러
  const handleArrowMouseLeave2 = useCallback(() => {
    if (scrollInterval2) clearInterval(scrollInterval2);
  }, [scrollInterval2]);

  const ImageButton = ({
    src,
    alt,
    name,
    englishName,
    onClick,
  }: ImageButtonProps) => (
    <Flex
      style={{
        position: "relative",
        width: profileWidth,
        border: "1px solid white",
        overflowX: "hidden",
        overflowY: "hidden",
      }}
    >
      <img
        src={src}
        alt={alt}
        loading="lazy"
        decoding="async"
        style={{
          width: profileWidth,
          transition: "transform 1s, filter 1s",
          filter: "brightness(30%)",
          objectFit: "cover",
        }}
        onMouseEnter={(e) => {
          e.currentTarget.style.filter = "brightness(100%)";
          e.currentTarget.style.transform = "scale(1.1)";
          e.currentTarget.style.zIndex = "10";
        }}
        onMouseLeave={(e) => {
          e.currentTarget.style.filter = "brightness(30%)";
          e.currentTarget.style.transform = "scale(1)";
          e.currentTarget.style.zIndex = "0";
        }}
        onClick={onClick}
      />
      <Flex
        flexDir="column"
        position={"absolute"}
        bottom="3%"
        left="5%"
        color="white"
      >
        <Text fontSize="2vh" fontWeight="bold">
          {name}
        </Text>
        <Text fontSize="1vh" color={"white"}>
          {englishName}
        </Text>
      </Flex>
    </Flex>
  );

  return (
    <div
      className="parent-400vh"
      style={{
        position: "relative",
      }}
    >
      <img
        style={{
          width: "100vw",
          height: "100vh",
          position: "sticky",
          objectFit: "cover",
          top: "10.9vh",
          zIndex: -90,
        }}
        src="/image/stu_work_background.jpeg"
      ></img>
      <Flex
        id="student"
        className="parent-200vh"
        flexDir={"column"}
        style={{
          justifyContent: "center",
          transform: "translateY(-100vh)",
        }}
      >
        <div style={{ zIndex: 3 }}>
          {contentVisible && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                ml={isMobile ? 0 : "13vw"}
                mr={isMobile ? 0 : "1vw"}
                position={"relative"}
              >
                {!isMobile && (
                  <button
                    onMouseEnter={() => handleArrowMouseEnter("left")}
                    onMouseLeave={handleArrowMouseLeave}
                    style={{
                      fontSize: "5vw",
                      color: isScrolledToLeft ? "transparent" : "white",
                      height: "60vh",
                      zIndex: 10,
                    }}
                  >
                    <ChevronLeftIcon />
                  </button>
                )}
                <HStack
                  ref={studentRef}
                  spacing={2}
                  overflowX="scroll"
                  h={"80vh"}
                  p={isMobile ? 0 : "2%"}
                  pt={0}
                  maxW={isMobile ? "100vw" : "71vw"}
                  sx={{
                    "::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  <Flex flexDir={"column"}>
                    <p
                      style={{
                        fontSize: isMobile ? "6vh" : "8vh",
                        color: "white",
                        fontWeight: 400,
                      }}
                    >
                      DESIGNER
                    </p>
                    <Flex>
                      <div
                        style={{
                          width: profileWidth,
                          borderTop: "1px solid white",
                          flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            marginLeft: isMobile ? 5 : 15,
                            color: "white",
                            fontSize: isMobile ? 20 : 25,
                          }}
                        >
                          VIDEO
                          <br />
                          TRACK
                        </div>
                      </div>
                      {videoStudentData
                        .slice(0, Math.ceil(videoStudentData.length / 2 - 1))
                        .map((student, index) => (
                          <ImageButton
                            key={index}
                            src={student.profile}
                            alt="SignLogo"
                            name={student.name}
                            englishName={student.englishName}
                            onClick={() => handleStudent(student)}
                          />
                        ))}
                    </Flex>
                    <Flex>
                      {videoStudentData
                        .slice(Math.ceil(videoStudentData.length / 2 - 1))
                        .map((student, index) => (
                          <ImageButton
                            key={index}
                            src={student.profile}
                            alt="SignLogo"
                            name={student.name}
                            englishName={student.englishName}
                            onClick={() => handleStudent(student)}
                          />
                        ))}
                    </Flex>
                  </Flex>
                </HStack>
                {!isMobile && (
                  <button
                    onMouseEnter={() => handleArrowMouseEnter("right")}
                    onMouseLeave={handleArrowMouseLeave}
                    style={{
                      fontSize: "5vw",
                      color: isScrolledToRight ? "transparent" : "white",
                      height: "60vh",
                    }}
                  >
                    <ChevronRightIcon />
                  </button>
                )}
              </Flex>
            </motion.div>
          )}
        </div>
        <div>
          {contentVisible && (
            <motion.div
              initial={{ opacity: 0, y: 100 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 2 }}
            >
              <Flex
                justifyContent={"center"}
                alignItems={"center"}
                ml={isMobile ? 0 : "13vw"}
                mr={isMobile ? 0 : "1vw"}
              >
                {!isMobile && (
                  <button
                    onMouseEnter={() => handleArrowMouseEnter2("left")}
                    onMouseLeave={handleArrowMouseLeave2}
                    style={{
                      fontSize: "5vw",
                      color: isScrolledToLeft2 ? "transparent" : "white",
                      height: "60vh",
                      zIndex: 10,
                    }}
                  >
                    <ChevronLeftIcon />
                  </button>
                )}
                <HStack
                  ref={studentRef2}
                  spacing={2}
                  overflowX="scroll"
                  h={"80vh"}
                  p={isMobile ? 0 : "2%"}
                  maxW={isMobile ? "100vw" : "71vw"}
                  sx={{
                    "::-webkit-scrollbar": {
                      display: "none",
                    },
                  }}
                >
                  <Flex flexDir={"column"}>
                    <Flex>
                      <div
                        style={{
                          width: profileWidth,
                          borderTop: "1px solid white",
                          flexShrink: 0,
                        }}
                      >
                        <div
                          style={{
                            marginLeft: isMobile ? 5 : 15,
                            color: "white",
                            fontSize: isMobile ? 20 : 25,
                          }}
                        >
                          DIGITAL
                          <br />
                          TRACK
                        </div>
                      </div>
                      {digitalStudentData
                        .slice(0, Math.ceil(digitalStudentData.length / 2 - 1))
                        .map((student, index) => (
                          <ImageButton
                            key={index}
                            src={student.profile}
                            alt="SignLogo"
                            name={student.name}
                            englishName={student.englishName}
                            onClick={() => handleStudent(student)}
                          />
                        ))}
                    </Flex>
                    <Flex>
                      {digitalStudentData
                        .slice(Math.ceil(digitalStudentData.length / 2 - 1))
                        .map((student, index) => (
                          <ImageButton
                            key={index}
                            src={student.profile}
                            alt="SignLogo"
                            name={student.name}
                            englishName={student.englishName}
                            onClick={() => handleStudent(student)}
                          />
                        ))}
                    </Flex>
                  </Flex>
                </HStack>
                {!isMobile && (
                  <button
                    onMouseEnter={() => handleArrowMouseEnter2("right")}
                    onMouseLeave={handleArrowMouseLeave2}
                    style={{
                      fontSize: "5vw",
                      color: isScrolledToRight2 ? "transparent" : "white",
                      height: "60vh",
                    }}
                  >
                    <ChevronRightIcon />
                  </button>
                )}
              </Flex>
            </motion.div>
          )}
        </div>
        {isStudentModalOpen && (
          <StudentModal
            isOpen={isStudentModalOpen}
            onClose={onStudentModalClose}
            studentData={selectedStudent}
          />
        )}
      </Flex>
      <SubjectScreen />
    </div>
  );
}
