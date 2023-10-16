"use client";

import { Flex, HStack } from "@chakra-ui/react";
import { WheelEvent, useRef, useState, useEffect } from "react";

import { useDisclosure } from '@chakra-ui/react';
import StudentModal from "./modal/student.modal";

import { motion } from "framer-motion";

export default function StudentScreen() {

    const [isScrolledToRight, setIsScrolledToRight] = useState(false);

    const {
        isOpen: isOpenStudentModal,
        onOpen: StudentModalOpen,
        onClose: StudentModalClose,
    } = useDisclosure();


    const handleStudent = () => {
        StudentModalOpen();
    };

    useEffect(() => {
        console.log(2)
    }, [])

    const handleStudentWheel = (e: WheelEvent<HTMLDivElement>) => {
        e.preventDefault();

        const div = studentRef.current;
        if (div) {
            div.scrollTo({
                top: 0,
                left: div.scrollLeft + e.deltaY
            })

            // 스크롤이 오른쪽으로 최대로 갔을 때 콘솔에 "1" 출력
            if (
                !isScrolledToRight &&
                div.scrollLeft + div.clientWidth >= div.scrollWidth
            ) {
                console.log(1);
                setIsScrolledToRight(true);
            }
            else {
                console.log(0);
                setIsScrolledToRight(false);
            }
        }
    }

    const studentRef = useRef<HTMLDivElement>(null);



    return (

        <div id="student" className="parent">
            <motion.div
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >
                <HStack ref={studentRef} spacing={2} overflowX="scroll" h={'60vh'} marginLeft={'25%'} onWheel={handleStudentWheel}>
                    <Flex flexDir={"column"}>
                        <Flex>


                            <div style={{ width: '200px', height: '250px', border: '2px solid white', borderLeft: 'none', flexShrink: 0 }}>
                                <div style={{ marginLeft: 15, color: 'white', fontSize: 25 }}>
                                    VIDEO
                                    <p />
                                    TEACK
                                </div>
                            </div>
                            <img
                                src={"/image/lightDoor.png"}
                                alt="SignLogo"
                                style={{
                                    width: '200px',
                                    height: '250px',
                                    border: '2px solid white', //border가 같이 커지는걸 막으려고 div로 감싸보려 했는데 그러면 이미지가 안 커짐
                                    transition: 'transform 0.3s, filter 0.3s',
                                }}
                                onMouseEnter={(e) => {
                                    e.currentTarget.style.filter = "brightness(120%)";
                                    e.currentTarget.style.transform = "scale(1.1)";
                                }}
                                onMouseLeave={(e) => {
                                    e.currentTarget.style.filter = "brightness(100%)";
                                    e.currentTarget.style.transform = "scale(1)";
                                }}
                                onClick={() => handleStudent()}
                            />

                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />


                        </Flex>
                        <Flex>
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white', borderLeft: 'none' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '250px', border: '2px solid white' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '20px', border: '2px solid white' }} />


                        </Flex>

                        {isOpenStudentModal && (
                            <StudentModal
                                isOpen={isOpenStudentModal}
                                onClose={StudentModalClose}
                            />
                        )}

                    </Flex>
                </HStack>
            </motion.div>

        </div>


    )
}
