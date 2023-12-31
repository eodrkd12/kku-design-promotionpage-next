import { Box, Flex, Text, VStack } from "@chakra-ui/react";
import { useMediaQuery } from "react-responsive";
import { useEffect, useState } from "react";
import { Work } from "@/common/interfaces/work.interface";

interface Props {
  work: Work;
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
          flexDirection={isMobile ? "column" : "row"}
          alignItems={isMobile ? "start" : "center"}
          position="absolute"
          top={isMobile ? "35%" : "50%"}
          left="5%"
        >
          <Text
            color="white"
            fontSize={
              !isMobile
                ? "50px"
                : work?.name && work.name.length >= 20
                ? "20px"
                : "24px"
            }
            fontWeight="700"
            transform={isMobile ? "translateY(-40%)" : "translateY(-50%)"}
          >
            {work?.name}
          </Text>
          <Text
            color="white"
            fontWeight="500"
            transform={isMobile ? "translateY(-120%)" : "translateY(-130%)"}
            marginLeft={isMobile ? "0" : "20"}
            fontSize={
              !isMobile
                ? "16px"
                : work?.introduction && work.introduction.length >= 30
                ? "10px"
                : "12px"
            }
          >
            {work?.introduction}
          </Text>
        </Box>
      </Flex>
      <Flex flexDir={"column"} w={"100%"} h={"45vh"}>
        <Flex
          color={"white"}
          top={"5%"}
          right={0}
          flexDir={isMobile ? "column" : "row"}
        >
          {props.work?.student.map((student: any, index: number) => {
            return (
              <Text
                key={index}
                fontSize={isMobile ? "2vw" : "1.5vh"}
                marginRight={4}
                style={{ wordSpacing: "4px" }}
              >
                {student.sname} | {student.email}
              </Text>
            );
          })}
        </Flex>
        <Flex flexDir={"column"} mt={"1vh"}>
          {props.work.explanation.split(". ").map((value) => {
            const regExp = new RegExp("[ㄱ-ㅎ|ㅏ-ㅣ|가-힣]");
            return (
              <Text color={"white"} fontSize={isMobile ? "2.2vw" : "1.3vh"}>
                {value}
                {value.length > 0 && regExp.test(value[value.length - 1])
                  ? "."
                  : ""}
              </Text>
            );
          })}
        </Flex>
        {work && work.youtube && (
          <Flex
            my={"1vh"}
            style={{
              position: "relative",
              width: "100%",
              paddingBottom: "40%",
            }}
          >
            <iframe
              style={{
                position: "absolute",
                width: "100%",
                height: "100%",
              }}
              src={props.work.youtube}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          </Flex>
        )}

        <Flex gap={"0.5vw"}>
          {props.work?.still?.map((still: any, index: number) => {
            return (
              <Flex key={index} flex={1}>
                <img
                  src={props.work!.still![index]}
                  alt="SignLogo"
                  style={{
                    width: "100vw",
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
            <Flex flexDir={"column"} alignItems={"center"}>
              {work?.poster?.map((poster: any, index: number) => {
                return (
                  <Flex
                    key={index}
                    margin={"2%"}
                    width={"100vh"}
                    height={"50vh"}
                  >
                    <iframe
                      width="100%"
                      height="100%"
                      src={work?.poster![index]}
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
                      src={work?.poster![index]}
                      alt="SignLogo"
                      style={{
                        width: "100%",
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
