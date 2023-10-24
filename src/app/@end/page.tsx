'use client';
import { Button, Flex, Text } from "@chakra-ui/react";
import styled from "styled-components";
import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";

export default function EndScreen() {

    const Footer = styled.div`
        display: flex;
        flex-direction: column;
        color: white;
        text-align: center;

        > hr {
            visibility: hidden;
        }
        > div:nth-child(1){
            font-size: 65px;
            font-weight: 500;
        }

        @media (max-width: 500px) {
            width: 90vw;
            // text-align: left;

            > hr {
                width: 95%;
                border : 0px;
	            border-top: 1px solid white;
                margin-top: 7%;
                visibility: visible;
            }
            > div:nth-child(1){
                font-size: 9vh;
                font-weight: 200;
                line-height: 10vh;;
            }
            > div:nth-child(3){
                font-size: 2vh;
                font-weight: 100;
            }
        }
    `;

    return (
        <div className="parent" id="end">
            <Footer>
                <div>TAG:
                    <br />
                    Take my tak               
                </div>
                <hr />
                <div>
                    2024 KONKUK MOVING DESIGN
                    <br />
                    VIDEO/DIGITAL TRACK GRADUATION EXHIBITION
                </div>            
            </Footer>
            {/* <br />
            <Flex flexDir={'column'} alignItems={'center'}>
                <Text color={'white'} fontWeight={'bold'} fontSize={65} mb={'2%'}>TAG :</Text>
                <Text color={'white'} fontWeight={'bold'} fontSize={65} mb={'2%'}>Take my tak</Text>
                <Text color={'white'}> 2024 KONKUK MOVING DESIGN</Text>
                <Text color={'white'}>  VIDEO/DIGITAL TRACK GRADUATION EXHIBITION</Text>
            </Flex> */}
        </div>
    )
}
