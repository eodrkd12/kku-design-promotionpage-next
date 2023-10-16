"use client";

import { Button, Flex, HStack, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from "@chakra-ui/react";
import { WheelEvent, useRef, useState, useEffect } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { useDisclosure } from '@chakra-ui/react';
import StudentModal from "./modal/student.modal";

import { motion } from "framer-motion";

interface ImageButtonProps {
    src: string;
    alt: string;
    onClick: () => void;
}

export default function StudentScreen() {

    const [isScrolledToRight, setIsScrolledToRight] = useState(false);

    const {
        isOpen: isStudentModalOpen,
        onOpen: onStudentModalOpen,
        onClose: onStudentModalClose,
    } = useDisclosure();


    const handleStudent = () => {
        onStudentModalOpen();
    };

    const studentRef = useRef<HTMLDivElement>(null);

    const scrollSpeed = 50; // 스크롤 속도

    let scrollInterval: NodeJS.Timeout | null = null; // setInterval의 반환값을 저장하기 위한 변수

    const handleArrowMouseEnter = (direction: 'left' | 'right') => {
        if (studentRef.current) {
            scrollInterval = setInterval(() => {
                const current = studentRef.current!;

                current!.scrollTo({
                    top: 0,
                    left: current!.scrollLeft + (direction === 'right' ? scrollSpeed : -scrollSpeed)
                });



                // 스크롤이 오른쪽으로 최대로 갔을 때 콘솔에 "1" 출력
                if (
                    !isScrolledToRight &&
                    current.scrollLeft + current.clientWidth >= current.scrollWidth
                ) {
                    setIsScrolledToRight(true);
                    console.log(1);
                }
                else {
                    console.log(0);
                    setIsScrolledToRight(false);
                }
                console.log(isScrolledToRight)

            }, 100); // 100ms마다 실행

        }
    };

    //화살표에서 마우스를 땔 때
    const handleArrowMouseLeave = () => {
        if (scrollInterval) {
            clearInterval(scrollInterval);
        }
        // if (studentRef.current &&
        //     !isScrolledToRight &&
        //     studentRef.current.scrollLeft + studentRef.current.clientWidth >= studentRef.current.scrollWidth
        // ) {
        //     console.log(1);
        //     setIsScrolledToRight(true);
        // }
        // else {
        //     console.log(0);
        //     setIsScrolledToRight(false);
        // }

    };

    const ImageButton = ({ src, alt, onClick }: ImageButtonProps) => (
        <img
            src={src}
            alt={alt}
            style={{
                width: '200px',
                height: '250px',
                border: '2px solid white',
                transition: 'transform 0.3s, filter 0.3s'
            }}
            onMouseEnter={(e) => {
                e.currentTarget.style.filter = "brightness(120%)";
                e.currentTarget.style.transform = "scale(1.1)";
            }}
            onMouseLeave={(e) => {
                e.currentTarget.style.filter = "brightness(100%)";
                e.currentTarget.style.transform = "scale(1)";
            }}
            onClick={onClick}
        />
    );

    return (

        <div id="student" className="parent">
            <motion.div
                style={{
                    width: '100%',
                    height: '100%'
                }}
                initial={{ opacity: 0, y: 100 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 1 }}
            >

                <Flex justifyContent={'center'} alignItems={'center'} ml={'20%'} mr={'1%'}>
                    <button onMouseEnter={() => handleArrowMouseEnter('left')} onMouseLeave={handleArrowMouseLeave} style={{ fontSize: '50px', color: 'white', height: '60vh', zIndex: 10 }} >
                        <ChevronLeftIcon />
                    </button>
                    <HStack ref={studentRef} spacing={2} overflowX="scroll" h={'80vh'} m={'2%'} >
                        <Flex flexDir={"column"} >
                            <Flex >
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
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                            </Flex>
                            <Flex>
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                                <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
                            </Flex>
                        </Flex>

                    </HStack>
                    <button onMouseEnter={() => handleArrowMouseEnter('right')} onMouseLeave={handleArrowMouseLeave} style={{ fontSize: '50px', color: 'white', height: '60vh' }}>
                        <ChevronRightIcon />
                    </button>
                </Flex>

                {isStudentModalOpen && (
                    <StudentModal
                        isOpen={isStudentModalOpen}
                        onClose={onStudentModalClose}
                    />
                )}
            </motion.div>

        </div>


    )
}
