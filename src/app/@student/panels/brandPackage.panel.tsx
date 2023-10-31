import { Box, Flex, TabPanel, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

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

const BrandPackageComponent = (props: Props) => {
  const [work, setWork] = useState<Work>();
  useEffect(() => {
    setWork(props.work);
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  return (
    <VStack w={"100%"} h={"100%"} flex={1} overflowY={"auto"}>
      <Flex position={"relative"} h={"30%"}>
        <img
          src={"/image/modal_image.jpg"}
          alt="SignLogo"
          style={{ width: "100vw", height: "100%", objectFit: "cover" }}
        />

        <Text
          position={"absolute"}
          color={"white"}
          top={ isMobile ? "35%" : "50%"}
          left={"5%"}
fontSize={ !isMobile ? "50px" : work?.name && work.name.length >= 20 ? "20px" : "24px"}
          fontWeight={"700"}
          transform="translateY(-50%)"
        >
          {work?.name}
        </Text>
        <Text
          color={"white"}
          position={"absolute"}
          top={ isMobile ? "70%" : "50%"}
          left={ isMobile ? "5%" : "50%"}
          fontWeight={"500"}
          transform="translateY(-50%)"
          fontSize={ !isMobile ? "16px" : props.work?.introduction && props.work.introduction.length >= 30 ? "10px" : "12px"}
        >
          {props.work?.introduction}
        </Text>
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
        <Text color={"white"} fontSize={ isMobile ? "12" : "15"}>
          {props.work?.explanation}
        </Text>
        <Text color={"white"} m={"1%"}>
          {work?.explanation}
        </Text>
        <Flex>
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

export default BrandPackageComponent;
