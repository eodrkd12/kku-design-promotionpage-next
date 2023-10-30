
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

        <VStack position={"relative"} h={"30%"}>
            <Flex >
                <img
                    src={"/image/modal_image.jpg"}
                    alt="SignLogo"
                    style={{ width: "100vw", height: "60%" }}
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
            <Flex flexDir={"column"} w={"100%"} h={"70%"}>
                <Text color={"white"} m={"1%"}>
                    {props.work?.introduction}
                </Text>
                <Text color={"white"} m={"1%"}>
                    {props.work?.explanation}
                </Text>
                <Flex margin={"3%"}>
                    {props.work && props.work.youtube && (
                        <iframe
                            width="100%"
                            height="100%"
                            src={props.work.youtube}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    )}
                </Flex>
                <Flex flexDir={"row"} justifyContent={"space-between"}>
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