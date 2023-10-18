"use client";

import { ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { Flex, HStack } from "@chakra-ui/react";
import { useCallback, useRef, useState } from "react";

import { useDisclosure } from '@chakra-ui/react';
import StudentModal from "./modal/student.modal";


interface ImageButtonProps {
    src: string;
    alt: string;
    onClick: () => void;
}

export default function StudentScreen() {

    const [isScrolledToRight, setIsScrolledToRight] = useState(false);
    const [isScrolledToLeft, setIsScrolledToLeft] = useState(true);
    const [scrollInterval, setScrollInterval] = useState<NodeJS.Timeout | null>(null);

    const {
        isOpen: isStudentModalOpen,
        onOpen: onStudentModalOpen,
        onClose: onStudentModalClose,
    } = useDisclosure();


    const handleStudent = () => {
        onStudentModalOpen();
    };

    const studentRef = useRef<HTMLDivElement>(null);

    const scrollSpeed = 10; // 스크롤 속도

    // let scrollInterval: NodeJS.Timeout | null = null; // setInterval의 반환값을 저장하기 위한 변수

    const handleArrowMouseEnter = useCallback((direction: 'left' | 'right') => {
        if (studentRef.current) {
            setScrollInterval(setInterval(() => {
                const current = studentRef.current!;

                if (current.scrollLeft + current.clientWidth >= current.scrollWidth - 0.5 && direction === 'right') {
                    setIsScrolledToRight(true);
                } else if (current.scrollLeft === 0 && direction === 'left') {
                    setIsScrolledToLeft(true);
                } else {
                    setIsScrolledToRight(false);
                    setIsScrolledToLeft(false);
                    current!.scrollTo({
                        top: 0,
                        left: current!.scrollLeft + (direction === 'right' ? scrollSpeed : -scrollSpeed)
                    });
                }

            }, 10)); // 100ms마다 실행

        }
    }, [isScrolledToLeft, isScrolledToRight]);

    //화살표에서 마우스를 땔 때
    const handleArrowMouseLeave = useCallback(() => {

        if (scrollInterval) clearInterval(scrollInterval);

        // //오른쪽 스크롤 체크
        // if (studentRef.current &&
        //     !isScrolledToRight &&
        //     studentRef.current.scrollLeft + studentRef.current.clientWidth >= studentRef.current.scrollWidth - 0.5
        // ) {
        //     setIsScrolledToRight(true);
        // }
        // else {
        //     setIsScrolledToRight(false);
        // }
        // //왼쪽 스크롤 체크
        // if (studentRef.current &&
        //     !isScrolledToLeft &&
        //     studentRef.current.scrollLeft == 0) {
        //     setIsScrolledToLeft(true);
        // }
        // else {
        //     setIsScrolledToLeft(false);
        // }

    }, [scrollInterval]);

    const ImageButton = ({ src, alt, onClick }: ImageButtonProps) => (
        <img
            src={src}
            alt={alt}
            style={{
                width: '14vw',
                height: '30vh',
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


            <Flex justifyContent={'center'} alignItems={'center'} ml={'13vw'} mr={'1vw'}>

                <button onMouseEnter={() => handleArrowMouseEnter('left')} onMouseLeave={handleArrowMouseLeave}
                    style={{ fontSize: '5vw', color: isScrolledToLeft ? 'transparent' : 'white', height: '60vh', zIndex: 10 }} >
                    <ChevronLeftIcon />
                </button>


                <HStack ref={studentRef} spacing={2} overflowX="scroll" h={'80vh'} p={'2%'} sx={{
                    '::-webkit-scrollbar': {
                        display: 'none',
                    },
                }}>
                    <Flex flexDir={"column"} >
                        <Flex >
                            <div style={{ width: '14vw', height: '30vh', border: '2px solid white', borderLeft: 'none', flexShrink: 0 }}>
                                <div style={{ marginLeft: 15, color: 'white', fontSize: 25 }}>
                                    VIDEO
                                    <br />
                                    TEACK
                                </div>
                            </div>

                            <ImageButton src={"/image/lightDoor.png"} alt="SignLogo" onClick={() => handleStudent()} />
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

                <button onMouseEnter={() => handleArrowMouseEnter('right')} onMouseLeave={handleArrowMouseLeave}
                    style={{ fontSize: '5vw', color: isScrolledToRight ? 'transparent' : 'white', height: '60vh' }}  >
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
