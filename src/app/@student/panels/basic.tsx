import { Box, Flex, Text, VStack } from "@chakra-ui/react";

interface Props {
  work: any;
}

const BasicComponent = (props: Props) => {
  return (
    <VStack w={"100%"} h={"100%"} flex={1} overflowY={"auto"}>
      <Flex position={"relative"} h={"15vh"}>
        <img
          src={"/image/dark_modal_image.jpeg"}
          alt="SignLogo"
          style={{ width: "100vw", height: "100%", objectFit: "cover" }}
        />
        <Box
          display="flex"
          alignItems="center"
          position="absolute"
          top="50%"
          left="5%"
        >
          <Text
            color="white"
            fontSize={50}
            fontWeight="700"
            transform="translateY(-50%)"
          >
            {props.work?.name}
          </Text>
          <Text
            color="white"
            fontWeight="500"
            transform="translateY(-130%)"
            marginLeft="20"
          >
            {props.work?.introduction}
          </Text>
        </Box>
      </Flex>

      <Flex flexDir={"column"} w={"100%"} h={"45vh"}>
        <Flex color={"white"} top={"5%"} right={0} flexDir={"row"}>
          {props.work?.student.map((student: any, index: number) => {
            return (
              <Text
                key={index}
                fontSize={"5%"}
                marginRight={"7%"}
                style={{ wordSpacing: "4px" }}
              >
                {student.sname} | {student.email}
              </Text>
            );
          })}
        </Flex>
        <Box mt={4}></Box>
        <Text color={"white"} fontSize={"15"}>
          {props.work?.explanation}
        </Text>

        {props.work && props.work.youtube && (
          <Flex height={"40vh"} marginTop={"3%"} marginBottom={"3%"}>
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
                  style={{
                    width: "20vw",
                    height: "100%",
                    objectFit: "contain",
                  }}
                />
              </Flex>
            );
          })}
        </Flex>
      </Flex>
    </VStack>
  );
};

export default BasicComponent;
