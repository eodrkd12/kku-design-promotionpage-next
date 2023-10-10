"use client";
import "./styles.css";
import React, { useState, useEffect, useRef, ReactNode, useCallback, useMemo } from "react";
import {
    motion, Variants,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";
import { Flex, HStack } from "@chakra-ui/react";

interface Props {
    emoji: string;
}

//카드의 초기상태와, 나타날때의 정의
const cardVariants: Variants = {
    offscreen: {
        y: 300
    },
    //코드가 나타날때의 위치, 회전 값
    onscreen: {
        y: 20,
        //    rotate: -10,
        transition: {
            type: "spring",
            bounce: 0.6,
            duration: 0.8
        }
    }
};



const Card = ({ emoji }: Props) => {

    return (
        //viewport애니메이션의 동작 및 스크롤 시점 제어 관련 속성
        <motion.div>
            <motion.div
                className="card-container"
                initial="offscreen"
                whileInView="onscreen"
                viewport={{ once: true, amount: 0.8 }}
            >
                <div className="splash" />
                <motion.div className="card" variants={cardVariants}  >
                    {emoji}
                </motion.div>
            </motion.div >
        </motion.div>

    );
}

const food: [string][] = [
    ["Hello"],
    ["🍊"],
    ["🍋"],
    ["🍐"],
    ["🍏"],
    ["🫐"]


];
// const array: ReactNode[] = [
//     <Flex key={1} w={'100vw'} h={'100vh'} overflowY="scroll">
//         1
//     </Flex>,
//     <Flex key={2} w={'100vw'} h={'100vh'} overflowX="scroll" >
//         <Flex direction={'column'}>
//             <Flex h={'50vh'}>
//                 <ul style={{ display: 'flex', listStyleType: 'none' }}>
//                     <li style={{ margin: '100px' }}>
//                         <img
//                             src={"/image/lightDoor.png"}
//                             alt="SignLogo"
//                             style={{ width: '200px', height: '200px' }}

//                         />
//                     </li>
//                     <li style={{ margin: '100px' }}>
//                         <img
//                             src={"/image/lightDoor.png"}
//                             alt="SignLogo"
//                             style={{ width: '200px', height: '200px' }}

//                         />
//                     </li>
//                     <li style={{ margin: '100px' }}>
//                         <img
//                             src={"/image/lightDoor.png"}
//                             alt="SignLogo"
//                             style={{ width: '200px', height: '200px' }}

//                         />
//                     </li>
//                     <li style={{ margin: '100px' }}>
//                         <img
//                             src={"/image/lightDoor.png"}
//                             alt="SignLogo"
//                             style={{ width: '200px', height: '200px' }}

//                         />
//                     </li>
//                     <li style={{ margin: '100px' }}>
//                         <img
//                             src={"/image/lightDoor.png"}
//                             alt="SignLogo"
//                             style={{ width: '200px', height: '200px' }}

//                         />
//                     </li>
//                     <li style={{ margin: '100px' }}>
//                         <img
//                             src={"/image/lightDoor.png"}
//                             alt="SignLogo"
//                             style={{ width: '200px', height: '200px' }}

//                         />
//                     </li>

//                 </ul>
//             </Flex>
//             <Flex h={'50vh'}>
//                 <ul style={{ display: 'flex', listStyleType: 'none' }}>
//                     <li style={{ marginRight: '1000px' }}></li>
//                     <li style={{ marginRight: '1000px' }}></li>
//                     <li style={{ marginRight: '1000px' }}></li>

//                 </ul>
//             </Flex>
//         </Flex>
//     </Flex >,
//     <Flex key={3} w={'100vw'} h={'100vh'} overflowY="scroll">
//         3
//     </Flex>,
//     <Flex key={4} w={'100vw'} h={'100vh'} overflowY="scroll" >
//         4
//     </Flex>,
//     <Flex key={5} w={'100vw'} h={'100vh'} overflowY="scroll" >
//         5
//     </Flex>,
//     <Flex key={6} w={'100vw'} h={'100vh'} overflowY="scroll">
//         6
//     </Flex>

// ]



export default function Menu() {
    const { scrollYProgress } = useScroll();

    const [offsetY, setOffsetY] = useState(0);
    const [scrollable, setScrollable] = useState(true);

    const backgroundImageUrl = "/image/Background2.png";
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'contain', // 이미지의 전체 크기를 화면 크기에 맞춤
        transform: `translateY(${offsetY * -0.05}px)` // 이미지가 움직이는 속도
    };

    const studentBrakeRef = useRef<HTMLDivElement>(null);

    const handleScroll = useCallback(() => {
        console.log(scrollable);
    }, [scrollable])

    useEffect(() => {

        window.addEventListener('scroll', handleScroll)

        const observer = new IntersectionObserver(

            entries => {
                // entries[0]가 이 경우의 첫 번째(및 유일한) 항목입니다
                if (entries[0].isIntersecting) {
                    console.log(1);
                    lockScroll();
                } else {
                    console.log(0);
                    openScroll();
                }
            },
            { threshold: 0.1 } //대상의 10% 이상이 보일 때
        );

        if (studentBrakeRef.current) {
            observer.observe(studentBrakeRef.current);
        }

        return () => {
            if (studentBrakeRef.current) {
                observer.unobserve(studentBrakeRef.current);
            }
        };
    }, []);

    const lockScroll = useCallback(() => {
        document.body.style.overflow = 'hidden';
        setScrollable(false);
    }, []);

    const openScroll = useCallback(() => {
        document.body.style.removeProperty('overflow');
        setScrollable(true);
    }, []);

    return (

        <main >

            <div style={backgroundStyle}>
                <Flex flexDir={'column'}>
                    <Flex key={1} w={'100vw'} h={'100vh'} >
                        1
                    </Flex>

                    <Flex key={2} w={'100vw'} h={'100vh'} flexDir={'column'}>
                        <HStack spacing={8} p={4} m={50} overflowX="scroll" h={'99vh'} >
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '200px' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '200px' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '200px' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '200px' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '200px' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '200px' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '200px' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '200px' }} />
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '200px', height: '200px' }} />
                        </HStack>
                        <Flex ref={studentBrakeRef} w={'100vw'} h={'1vh'}></Flex>
                    </Flex >
                    <Flex key={3} w={'100vw'} h={'100vh'} >
                        3
                    </Flex>
                    <Flex key={4} w={'100vw'} h={'100vh'} >
                        4
                    </Flex>
                    <Flex key={5} w={'100vw'} h={'100vh'} >
                        5
                    </Flex>
                    <Flex key={6} w={'100vw'} h={'100vh'} >
                        6
                    </Flex>
                </Flex>
            </div>


            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
        </main>

    );




}
