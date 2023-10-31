import {
    Flex,
    Text,
    VStack
} from "@chakra-ui/react";


interface Props {
    work: any;

}


const ImcLayoutComponent = (props: Props) => {

    return (
        <VStack w={'100%'}
            h={'100%'}
            flex={1}
            overflowY={'auto'}>
            <Flex position={'relative'} h={'15vh'}>
                <img
                    src={"/image/dark_modal_image.jpeg"}
                    alt="SignLogo"
                    style={{ width: "100vw", height: "100%", objectFit: 'cover' }}
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
            <Flex flexDir={"column"} w={"100%"} h={"45vh"}>
                <Text color={"white"}>
                    {props.work?.introduction}
                </Text>
                <Text color={"white"}>
                    {props.work?.explanation}
                </Text>

                {props.work && props.work.youtube && (
                    <Flex height={'40vh'} marginTop={"3%"} marginBottom={"3%"}>

                        <iframe
                            width="100%"
                            height="100%"
                            src={props.work.youtube}
                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                        ></iframe>
                    </Flex>
                )}

                <Flex>

                    {props.work?.still?.map((still: any, index: number) => {
                        return (

                            <Flex margin={"2%"}>
                                <img
                                    src={props.work?.still[index]}
                                    alt="SignLogo"
                                    style={{ width: "20vw", height: "100%", objectFit: 'contain' }}

                                />
                            </Flex>

                        );
                    })}
                </Flex>

                <Flex flexDir={"column"} w={"100%"} h={"100%"} >

                    <Text color={"white"} >
                        지면
                    </Text>

                    {props.work?.poster?.map((poster: any, index: number) => {
                        const isVideo = poster.startsWith("http");
                        if (isVideo) return null; // 비디오는 제외
                        return (
                            <Flex key={index} margin={"2%"} flexDir={"column"}>

                                {isVideo ? (

                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src={props.work?.poster[index]}
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    ></iframe>
                                ) : (
                                    <img
                                        src={props.work?.poster[index]}
                                        alt="SignLogo"
                                        style={{ width: "80%", height: "100%", objectFit: 'contain' }}
                                    />
                                )}
                            </Flex>

                        );
                    })}
                </Flex>
            </Flex>
        </VStack>

    )
}


export default ImcLayoutComponent;