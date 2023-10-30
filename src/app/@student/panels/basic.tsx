
import {
    Flex,
    Text,
    VStack
} from "@chakra-ui/react";


interface Props {
    work: any;

}


const BasicComponent = (props: Props) => {

    return (
        <VStack w={'100%'}
            h={'100%'}
            flex={1}
            overflowY={'auto'}>
            <Flex position={'relative'} h={'15vh'}>
                <img
                    src={"/image/modal_image.jpg"}
                    alt="SignLogo"
                    style={{ width: "100vw", height: "100%" }}
                />

                <Text
                    position={"absolute"}
                    color={"white"}
                    top={"50%"}
                    left={"5%"}
                    fontSize={50}
                    transform="translateY(-50%)"
                >
                    {props.work?.name}
                </Text>

                <Flex
                    position={"absolute"}
                    color={"white"}
                    top={"5%"}
                    right={0}
                    flexDir={"column"}
                >
                    {props.work?.student.map((student: any, index: number) => {
                        return (
                            <Text key={index}>
                                {student.sname} {student.email}
                            </Text>
                        );
                    })}
                </Flex>
            </Flex>
            <Flex flexDir={"column"} w={"100%"} h={"45vh"} bg={'red'}>
                <Text color={"white"}>
                    {props.work?.introduction}
                </Text>
                <Text color={"white"}>
                    {props.work?.explanation}
                </Text>
                {props.work && props.work.youtube && (
                    <iframe
                        width="100%"
                        height={400}
                        src={props.work.youtube}
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                )}
                <Flex flexDir={"column"} justifyContent={"space-between"} h={"20vh"}>
                    <img
                        src={"/image/lightDoor.png"}
                        alt="SignLogo"
                        style={{ width: "20vw", height: "100%" }}
                    />

                    <img
                        src={"/image/lightDoor.png"}
                        alt="SignLogo"
                        style={{ width: "20vw", height: "100%" }}
                    />

                    <img
                        src={"/image/lightDoor.png"}
                        alt="SignLogo"
                        style={{ width: "20vw", height: "100%" }}
                    />

                    <img
                        src={"/image/lightDoor.png"}
                        alt="SignLogo"
                        style={{ width: "20vw", height: "100%" }}
                    />
                </Flex>
            </Flex>
        </VStack>

    )
}


export default BasicComponent;