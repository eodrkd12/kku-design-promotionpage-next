"use client";

import { Button, Flex, HStack } from "@chakra-ui/react";
import { WheelEvent, useRef, useState, useEffect, useCallback } from "react";
import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons'

import { useDisclosure } from '@chakra-ui/react';
import StudentModal from "./modal/student.modal";

import { Variants, motion } from "framer-motion";

interface ImageButtonProps {
    src: string;
    alt: string;
    onClick: () => void;
}

export default function StudentScreen() {

    const [isScrolledToRight, setIsScrolledToRight] = useState(false);
    const [isScrolledToLeft, setIsScrolledToLeft] = useState(true);


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

            }, 100); // 100ms마다 실행

        }
    };

    //화살표에서 마우스를 땔 때
    const handleArrowMouseLeave = () => {

        if (scrollInterval) clearInterval(scrollInterval);

        //오른쪽 스크롤 체크
        if (studentRef.current &&
            !isScrolledToRight &&
            studentRef.current.scrollLeft + studentRef.current.clientWidth >= studentRef.current.scrollWidth - 0.5
        ) {
            setIsScrolledToRight(true);
        }
        else {
            setIsScrolledToRight(false);
        }
        //왼쪽 스크롤 체크
        if (studentRef.current &&
            !isScrolledToLeft &&
            studentRef.current.scrollLeft == 0) {
            setIsScrolledToLeft(true);
        }
        else {
            setIsScrolledToLeft(false);
        }

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


            <Flex justifyContent={'center'} alignItems={'center'} ml={'20%'} mr={'1%'}>
                <button onMouseEnter={() => handleArrowMouseEnter('left')} onMouseLeave={handleArrowMouseLeave} style={{ fontSize: '50px', color: 'white', height: '60vh', zIndex: 10, display: isScrolledToLeft ? 'none' : 'block' }} >
                    <ChevronLeftIcon />
                </button>


                <HStack ref={studentRef} spacing={2} overflowX="scroll" h={'80vh'} m={'2%'} >
                    <Flex flexDir={"column"} >
                        <Flex >
                            <div style={{ width: '200px', height: '250px', border: '2px solid white', borderLeft: 'none', flexShrink: 0 }}>
                                <div style={{ marginLeft: 15, color: 'white', fontSize: 25 }}>
                                    VIDEO
                                    <br />
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

                <button onMouseEnter={() => handleArrowMouseEnter('right')} onMouseLeave={handleArrowMouseLeave} style={{ fontSize: '50px', color: 'white', height: '60vh', display: isScrolledToRight ? 'none' : 'block' }}  >
                    <ChevronRightIcon />
                </button>
            </Flex>

            {
                isStudentModalOpen && (
                    <StudentModal
                        isOpen={isStudentModalOpen}
                        onClose={onStudentModalClose}
                    />
                )
            }


        </div >


    )
}
