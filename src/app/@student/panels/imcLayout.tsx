import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";

interface Props {
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

const ImcLayoutComponent = (props: Props) => {
  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const [work, setWork] = useState<Work>();
  useEffect(() => {
    setWork(props.work);
  });

  const [isVideo, SetIsVideo] = useState(false);

  useEffect(() => {
    console.log(work);

    if (work?.poster) {
      if (work?.poster[0]?.startsWith("http")) {
        console.log("이것은 영상");
        SetIsVideo(true);
      } else {
        console.log("사진");
        SetIsVideo(false);
      }
    }
  }, [work]);

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
            fontSize={ !isMobile ? "50px" : work?.name && work.name.length >= 20 ? "20px" : "24px"}
            fontWeight="700"
            transform="translateY(-50%)"
          >
            {work?.name}
          </Text>
          <Text
            color="white"
            fontWeight="500"
            transform="translateY(-150%)"
            marginLeft="20"
            fontSize={ !isMobile ? "16px" : work?.introduction && work.introduction.length >= 30 ? "10px" : "12px"}
          >
            {work?.introduction}
          </Text>
        </Box>
      </Flex>
      <Flex flexDir={"column"} w={"100%"} h={"45vh"}>
        <Flex color={"white"} top={"5%"} right={0} flexDir={"row"}>
          {work?.student.map((student: any, index: number) => {
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
        <Text color={"white"} fontSize={ isMobile ? "12" : "15" }>
          {work?.explanation}
        </Text>
        {work && work.youtube && (
          <Flex height={"40vh"} marginTop={"3%"} marginBottom={"3%"}>
            <iframe
              width="100%"
              height="100%"
              src={work.youtube}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Flex>
        )}

        <Flex>
          {work?.still?.map((still: any, index: number) => {
            return (
              <Flex margin={"2%"}>
                <img
                  src={work?.still[index]}
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

        <Flex flexDir={"column"} w={"100%"} h={"100%"}>
          <Text color={"white"}>지면</Text>

          {isVideo ? (
            <Flex flexDir={"column"} justifyContent={"center"}>
              {work?.poster?.map((poster: any, index: number) => {
                return (
                  <Flex key={index} margin={"2%"} width={"100%"}>
                    <iframe
                      width="100%"
                      height="100%"
                      src={work?.poster[index]}
                      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                    ></iframe>
                  </Flex>
                );
              })}
            </Flex>
          ) : (
            <Flex flexDir={"row"} justifyContent={"center"}>
              {work?.poster?.map((poster: any, index: number) => {
                return (
                  <Flex key={index} margin={"2%"} width={"50%"}>
                    <img
                      src={work?.poster[index]}
                      alt="SignLogo"
                      style={{
                        width: "100%",
                        height: "100%",
                        objectFit: "contain",
                      }}
                    />
                  </Flex>
                );
              })}
            </Flex>
          )}
        </Flex>
      </Flex>
    </VStack>
  );
};

export default ImcLayoutComponent;
