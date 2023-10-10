"use client";
import { motion, useScroll } from "framer-motion"
import "./styles.css";
import React, { useState, useEffect } from "react";
import {
    Flex,
    Text,
    Button,
    ButtonGroup
} from '@chakra-ui/react';

export default function Dday() {

    useEffect(() => {
        // 페이지가 로드될 때 스크롤바를 숨김
        document.body.style.overflow = "hidden";

        return () => {
            // 컴포넌트가 언마운트될 때 스크롤바 스타일을 초기화
            document.body.style.overflow = "auto";
        };
    }, []);

    const [isDark, setIsDark] = useState(true);
    const [showImages, setShowImages] = useState(false);
    const [doorOpen, setDoorOpen] = useState(true);
    const [greetings, setGreetings] = useState(false);
    const [lightDoor, setLightDoor] = useState(false);
    const [isLight, setIsLight] = useState(false);

    const handleClick = () => {

        setShowImages(!showImages);
        setTimeout(() => {
            setIsDark(!isDark);
            setTimeout(() => {
                setDoorOpen(!doorOpen);
                setTimeout(() => {
                    setGreetings(!greetings);
                    setTimeout(() => {
                        setLightDoor(!lightDoor);
                        setTimeout(() => {
                            setIsLight(!isLight);
                        }, 300)
                    }, 1000)
                }, 300);
            }, 300);
        }, 500); // 이미지가 사라진 후 1초 후에 화면이 밝아집니다.
    };

    return (

        <Flex onClick={handleClick} style={{ height: '100vh', position: 'relative' }}>

            <Flex
                position="absolute"
                top="50%"
                left="50%"
                transform="translate(-50%, -50%)"
                zIndex={100}
            >
                <Text color="white" fontSize={300} fontWeight={800} >
                    D-10
                </Text>

            </Flex>
            <Flex flexDir={"column"}
                justifyContent="flex-start"
                alignItems="flex-start"
                mt={'2%'} ml={'2%'} >
                <Text color={"white"}>2024 KONKUK UNIVERSITY</Text>
                <Text color={"white"} mb={'8%'}>VISUAL MOVING DESIGN</Text>

                <Text color={"white"}>VIDEO/DIGITAL TRACK</Text>
                <Text color={"white"}>GRADUATION</Text>
                <Text color={"white"} mb={'20%'}>EXHIBITION</Text>


                <Text color={"white"} fontSize={11}>2023 건국대학교 시각영상디자인전공</Text>
                <Text color={"white"} fontSize={11} mb={'8%'}>영상/디지털 트랙 졸업전시회</Text>

                <Text color={"white"} fontSize={11}>Fri Nov, 3th - Mon, 6th </Text>
                <Text color={"white"} fontSize={11}>서울 종로구 우정국로 68</Text>
                <Text color={"white"} fontSize={11}>동덕빌딩 동덕아트갤러리</Text>

            </Flex>

            <Flex
                position="absolute"
                top={0}
                bottom={0}
                left={0}
                right={0}
                flexDir={"column"}
                justifyContent="center"
                alignItems="center"
                style={{
                    opacity: !greetings ? 0 : 1,
                    transition: 'opacity 0.5s'
                }}
            >
                <Text color={"white"} fontSize={25} mb={'1%'}> 인사말</Text>
                <Text color={"white"} fontSize={13}>인사말인사말인사말인사말인사말인사말인사말인사말</Text>
                <Text color={"white"} fontSize={13} >인사말인사말인사말인사말인사말인사말인사말</Text>
                <Text color={"white"} fontSize={13}>인사말인사말인사말인사말인사말인사말인사말인사말</Text>
            </Flex>

            <Flex
                marginLeft={'auto'}
                h={'8%'}
                mr={'8%'}
            >
                <ButtonGroup gap={'10%'} h={'100%'}>
                    <Button
                        fontWeight={700}
                        color={"white"}
                    >
                        HOME
                    </Button>
                    <Button
                        fontWeight={700}
                        color={"white"}
                    >
                        ABOUT
                    </Button>
                    <Button
                        fontWeight={700}
                        color={"white"}
                    >
                        PROJECT
                    </Button>

                    <Button
                        fontWeight={700}
                        color={"white"}
                    >
                        DESIGNER
                    </Button>
                </ButtonGroup>
            </Flex>


            <img
                src={"/image/SignLogo.png"}
                alt="SignLogo"
                className="signLogo"
                style={{
                    zIndex: isDark ? 0 : isLight ? 0 : 10,
                    opacity: !doorOpen ? 0 : 1,
                    transition: 'opacity 0.5s'
                }}
            />

            <img
                src={"/image/Door.png"}
                alt="SignLogo"
                className="signLogo"
                style={{
                    zIndex: isDark ? 0 : isLight ? 0 : 10,
                    opacity: !doorOpen ? lightDoor ? 0 : 1 : 0,
                    transition: 'opacity 0.5s'
                }}
            />

            <img
                src={"/image/lightDoor.png"}
                alt="SignLogo"
                className="signLogo"
                style={{
                    zIndex: isDark ? 0 : isLight ? 0 : 10,
                    opacity: !lightDoor ? 0 : 1,
                    transition: 'opacity 0.5s'
                }}
            />

            <img
                src="/image/Component1.png"
                alt="ColosedLogo"
                className="closed1"
                style={{
                    opacity: !showImages ? 1 : 0,
                    transition: 'opacity 0.5s'
                }}
            />

            <img
                src="/image/Component2.png"
                alt="Closedlogo"
                className="closed2"
                style={{
                    opacity: !showImages ? 1 : 0,
                    transition: 'opacity 0.5s'
                }}
            />



            <Flex
                style={{
                    backgroundColor: isDark ? 'rgba(0, 0, 0, 0.7)' : isLight ? '#FFFFFF' : 'transparent',
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    width: '100%',
                    height: '100%',
                    transition: 'background-color 0.3s',
                }}
            />

        </Flex >



    )
}