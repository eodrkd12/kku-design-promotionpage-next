import PromotionVideoData from "@/app/@student/data/PromotionVideo-data";
import animationStudioData from "@/app/@student/data/animationStudio-data";
import brandPackageDesignData from "@/app/@student/data/brandPackageDesign-data";
import digitalMajorProjectData from "@/app/@student/data/digitalMajorProject-data";
import imcData from "@/app/@student/data/imc-data";
import uiuxData from "@/app/@student/data/uiux-data";
import videoMajorProjectData from "@/app/@student/data/videoMajorProject-data";
import {
  Button,
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
  work: Work;
  subject: string;
}

interface Work {
  name: string;
  student: Student[];
  introduction: string;
  explanation: string;
  youtube?: string;
  still?: string[];
}

interface Student {
  sname: string;
  englishName: string;
  studentNumber: string;
  email: string;
}

const ItemModal = (props: Props) => {

  const [work, setWork] = useState<Work | null>(null);
  const [workList, setWorkList] = useState<Work[]>([]);

  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  useEffect(() => {
    if (props.work) {
      setWork(props.work);
    }

    if (props.work) {
      let _workList: Work[] = [];

      switch (props.subject) {
        case "전공연구프로젝트(영상)":
          _workList = videoMajorProjectData;
          break;
        case "IMC":
          _workList = imcData;
          break;
        case "프로모션영상":
          _workList = PromotionVideoData;
          break;
        case "전공연구프로젝트(디지털)":
          _workList = digitalMajorProjectData;
          break;
        case "UXUI":
          _workList = uiuxData;
          break;
        case "애니메이션스튜디오":
          _workList = animationStudioData;
          break;
        case "브랜드패키지":
          _workList = brandPackageDesignData;
      }
      setWorkList(_workList);
    }

  }, [props])

  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={"6xl"}
        isCentered
        autoFocus
        scrollBehavior="inside"
      >
        <ModalOverlay backdropFilter="blur(10px) " />
        <ModalContent h={"85vh"} bg={"black"}>
          <ModalCloseButton color={"white"} />

          <ModalBody>
            <Flex w={"100%"}>
              <Flex
                w={"20%"}
                mt={"4%"}
                display={"flex"}
                flexDirection={"column"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  position={"fixed"}
                  color={"white"}
                >
                  <Text mt={"30%"} mb={"10%"} fontWeight={800} fontSize={isMobile ? '1.3vh' : '1.3vw'}>
                    {props.subject}
                  </Text>
                  <VStack alignItems={'flex-start'}>
                    {workList.map((work) => {
                      return (
                        <Button variant={'link'} px={2} colorScheme="white" flexDir={'column'} alignItems={'flex-start'}>
                          <Text fontSize={isMobile ? '1.1vh' : '1.1vw'} color={'white'}>{work.name}</Text>
                          <Flex gap={1}>
                            <Text>-</Text>
                            {work.student.map((student) => <Text fontSize={isMobile ? '1vh' : '1vw'} color={'white'}>
                              {student.sname}
                            </Text>)}
                          </Flex>
                        </Button>
                      )
                    })}
                  </VStack>
                </Flex>
              </Flex>
              <Flex w={"80%"} display={"flex"} flexDirection={"column"}>
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  color={"white"}
                  ml={"3%"}
                >
                  <Text fontSize={"6vh"}>{props.title}</Text>
                  <Text fontSize={"3vh"}>한줄 소개</Text>
                  <Text fontSize={"1.5vh"}>
                    내용소개ㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐ
                  </Text>
                </Flex>
                <VStack w={"100%"} h={"100%"} overflow={"auto"}>
                  <Flex
                    w={"100%"}
                    h={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Flex h={"55vh"} mt={"5%"} mr={"3%"} mb={"3%"}>
                      <iframe
                        width={"100%"}
                        height={"100%"}
                        src={
                          "https://www.youtube.com/embed/3C6xfNeb5Xs?si=Okbo8vxDPa30cNHM"
                        }
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    </Flex>
                    <Flex>
                      <img
                        src={
                          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MjZfMzMg%2FMDAxNjk1NzMzMTYwMzIy.-kP478ZJ5Mffn0JNTvzNaoHc0y4PEcM4sFisrt6Y7BYg.Qjo24-eIcrg75eaLkax-nSaijjwumhUJ4-aokPLKkiIg.JPEG.hasun0521%2Foutput_14324252.jpg&type=a340"
                        }
                        alt="SignLogo"
                        style={{
                          width: "20vw",
                          height: "80%",
                          objectFit: "contain",
                        }}
                      />
                    </Flex>
                  </Flex>
                </VStack>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ItemModal;
