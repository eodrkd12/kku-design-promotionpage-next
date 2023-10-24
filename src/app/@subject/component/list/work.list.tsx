import { Flex, HStack } from "@chakra-ui/react";
import styled from "styled-components";

const Wrapper = styled.div`
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
`

const WorkList = () => {

    const ImageButton = () => (
        <img
            src={"/image/lightDoor.png"}
            style={{
                width: '14vw',
                height: '20vh',
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
        />
    );

    return (
        <Wrapper>
            <HStack spacing={2} overflowX="scroll" h={'100%'} width={'100%'} sx={{
                '::-webkit-scrollbar': {
                    display: 'none',
                },
            }}>
                <Flex flexDir={"column"} >
                    <Flex >

                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                    </Flex>
                    <Flex>
                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                        <ImageButton />
                    </Flex>
                </Flex>
            </HStack>
        </Wrapper>
    )
}

export default WorkList;