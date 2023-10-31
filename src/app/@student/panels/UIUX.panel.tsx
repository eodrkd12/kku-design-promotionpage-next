import { Box, Flex, TabPanel, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";

interface Props {
  //   isOpen: boolean;
  //   onClose: () => void;
  work: any;
}
interface Work {
  name: string;
  student: Student[];
  introduction: string;
  explanation: string;
  youtube?: string;
  still: string[];
  poster: string[];
}

interface Student {
  sname: string;
  englishName: string;
  studentNumber: string;
  email: string;
}

const UIUXComponent = (props: Props) => {
  const [work, setWork] = useState<Work>();
  useEffect(() => {
    setWork(props.work);
  });
  return (
    <VStack w={"100%"} h={"100%"} flex={1} overflowY={"auto"}>
      <Flex position={"relative"} h={"30%"}>
        <img
          src={"/image/modal_image.jpg"}
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
            {work?.name}
          </Text>
          <Text
            color="white"
            fontWeight="500"
            transform="translateY(-130%)"
            marginLeft="20"
          >
            {work?.introduction}
          </Text>
        </Box>
      </Flex>
      <Flex flexDir={"column"} w={"100%"} h={"70%"}>
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

        <Flex>
          {work && work.youtube && (
            <iframe
              width="100%"
              height="100%"
              src={work.youtube}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          )}
        </Flex>
        <Flex flexDir={"column"}>
          {work?.still?.map((still: React.ReactNode, index: number) => {
            return (
              <img
                src={work?.still[index]}
                alt="SignLogo"
                style={{
                  width: "100vw",
                  height: "60vh",
                  objectFit: "contain",
                }}
              />
            );
          })}
        </Flex>
      </Flex>
    </VStack>
  );
};

export default UIUXComponent;
