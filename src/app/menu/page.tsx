"use client";
import { Flex, HStack } from "@chakra-ui/react";
import {
    Variants,
    motion,
    useScroll
} from "framer-motion";
import { WheelEvent, useEffect, useRef, useState } from "react";
import "./styles.css";

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

    const pageRef = useRef<HTMLDivElement>(null);
    const studentBrakeRef = useRef<HTMLDivElement>(null);
    const studentRef = useRef<HTMLDivElement>(null);

    useEffect(() => {

        const observer = new IntersectionObserver(

            entries => {
                // entries[0]가 이 경우의 첫 번째(및 유일한) 항목입니다
                if (entries[0].isIntersecting) {
                    console.log(1);
                    setScrollable(false); // key가 2일때
                    // lockScroll();
                } else {
                    console.log(0);
                    setScrollable(true);
                    // openScroll();
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

    // const lockScroll = useCallback(() => {
    //     document.body.style.overflow = 'hidden';
    //     setScrollable(false);
    // }, []);

    // const openScroll = useCallback(() => {
    //     document.body.style.removeProperty('overflow');
    //     setScrollable(true);
    // }, []);

    const handleStudentWheel = (e: WheelEvent<HTMLDivElement>) => {
        e.preventDefault();
        const div = studentRef.current;
        if (div) {
            div.scrollTo({
                top: 0,
                left: div.scrollLeft + e.deltaY
            })
        }
    }

    return (
        <main >
            <div style={backgroundStyle} >
                <Flex ref={pageRef} flexDir={'column'} style={{ scrollSnapType: 'y mandatory' }} >
                    <Flex key={1} w={'100vw'} h={'100vh'} style={{ scrollSnapAlign: 'start' }} >
                        1
                    </Flex>
                    <Flex key={2} w={'100vw'} h={'100vh'} justify={'center'} align={'center'} style={{ scrollSnapAlign: 'start' }} flexDir={'column'}>
                        <HStack ref={studentRef} spacing={8} overflowX="scroll" h={'60vh'} onWheel={handleStudentWheel}>
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
                        <Flex w={'100vw'} h={'1vh'} ref={studentBrakeRef}></Flex>
                    </Flex >
                    <Flex key={3} w={'100vw'} h={'100vh'} style={{ scrollSnapAlign: 'start' }} >
                        3
                    </Flex>
                    <Flex key={4} w={'100vw'} h={'100vh'} style={{ scrollSnapAlign: 'start' }} >
                        4
                    </Flex>
                    <Flex key={5} w={'100vw'} h={'100vh'} style={{ scrollSnapAlign: 'start' }} >
                        5
                    </Flex>
                    <Flex key={6} w={'100vw'} h={'100vh'} style={{ scrollSnapAlign: 'start' }} >
                        6
                    </Flex>
                </Flex>
            </div>

            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
        </main>
    );

}
