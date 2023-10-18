"use client";
import "./styles.css";
import React, { useState, useEffect, useRef } from "react";
import {
    motion, Variants,
    useScroll,
    useSpring,
    useTransform,
    MotionValue
} from "framer-motion";
import { Image } from '@chakra-ui/react';

interface Props {
    emoji: string;
    hueA: number;
    hueB: number;
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

const hue = (h: number) => `hsl(${h}, 100%, 50%)`;


const Card = ({ emoji, hueA, hueB }: Props) => {
    //linear-gradient형태로 배경색 생성
    const background = `linear-gradient(306deg, ${hue(hueA)}, ${hue(hueB)})`;


    //배경이미지
    const backgroundImageUrl = "url(/image/testimage.jpeg)";



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
                <motion.div className="card" variants={cardVariants} >
                    {emoji}
                </motion.div>
            </motion.div >
        </motion.div>

    );
}

const food: [string, number, number][] = [
    ["Hello", 340, 10],
    ["🍊", 20, 40],
    ["🍋", 60, 90],
    ["🍐", 80, 120],
    ["🍏", 100, 140],
    ["🫐", 205, 245],
    ["🍆", 260, 290],
    ["🍇", 290, 320]
];

export default function cardTest() {
    const { scrollYProgress } = useScroll();

    const [offsetY, setOffsetY] = useState(0);
    const handleScroll = () => setOffsetY(window.pageYOffset);

    const ref = useRef(null);
    const { scrollXProgress } = useScroll({ container: ref });

    useEffect(() => {
        // window.addEventListener("scroll", handleScroll);

        // return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const backgroundImageUrl = "/image/testimage.jpeg";
    const backgroundStyle = {
        backgroundImage: `url(${backgroundImageUrl})`,
        backgroundSize: 'cover', // 이미지의 전체 크기를 화면 크기에 맞춤
        transform: `translateY(${offsetY * -0.05}px)` // 이미지가 움직이는 속도
    };


    return (

        <main>

            <div style={backgroundStyle}>

                {food.map(([emoji, hueA, hueB], index) => (
                    <section key={index}>
                        <Card emoji={emoji} hueA={hueA} hueB={hueB} />
                    </section>
                ))}
            </div>


            <motion.div className="progress-bar" style={{ scaleX: scrollYProgress }} />
            <text>HOME</text>
        </main>

    );




}
