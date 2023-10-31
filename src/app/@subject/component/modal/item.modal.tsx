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
  ModalHeader,
  ModalOverlay,
  Text,
  VStack,
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import UIUXComponent from "@/app/@student/panels/UIUX.panel";
import BasicComponent from "@/app/@student/panels/basic";
import BrandPackageComponent from "@/app/@student/panels/brandPackage.panel";
import ImcLayoutComponent from "@/app/@student/panels/imcLayout";

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

  const [subjectList, setSubjectList] = useState<string[]>([]);
  const [tabIdx, setTabIdx] = useState<number | null>(null);
  const [work, setWork] = useState<Work | null>(props.work);
  const [workList, setWorkList] = useState<Work[]>([]);

  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const handleWorkClick = (work: Work) => {
    setWork(work);
    console.log(work);
  }

  useEffect(() => {

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




  const getPanel = useCallback(() => {

    switch (props.subject) {
      case "전공연구프로젝트(영상)":
        return <BasicComponent work={work} />;

      case "IMC":
        return <ImcLayoutComponent work={work} />;

      case "프로모션영상":
        return <BasicComponent work={work} />;

      case "전공연구프로젝트(디지털)":
        return <BasicComponent work={work} />;

      case "UIUX":
        return <UIUXComponent work={work} />;

      case "애니메이션스튜디오":
        return <BasicComponent work={work} />;

      case "브랜드패키지":
        return <BrandPackageComponent work={work} />;
    }
  }, [work]);

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
        <ModalContent h={"70vh"} bg={"black"}>
          <ModalHeader>
            <ModalCloseButton color={"white"} />
          </ModalHeader>

          <ModalBody px={'2%'}>
            <Flex w={"100%"} h={'100%'} justifyContent={'space-between'}>
              <Flex
                w={"16%"}
                h={'100%'}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  position={"fixed"}
                  color={"white"}
                  gap={isMobile ? '1.5vh' : '1.5vw'}
                  pt={isMobile ? '2vh' : '2vw'}
                  h={'100%'}
                  w={'16%'}
                >
                  <Text fontWeight={800} w={'100%'} wordBreak={'break-word'} fontSize={isMobile ? '1.3vh' : '1.3vw'}>
                    {props.subject}
                  </Text>
                  <VStack alignItems={'flex-start'} w={'100%'} maxH={isMobile ? '55vh' : '45vh'} overflow={'scroll'}>
                    {workList.map((work) => {
                      return (
                        <Button w={'100%'} variant={'link'} px={1} colorScheme="white" flexDir={'column'} alignItems={'flex-start'} textOverflow={'ellipsis'}
                          onClick={() => handleWorkClick(work)}>
                          <Text fontSize={isMobile ? '1.1vh' : '1.1vw'} color={'white'} w={'100%'} textAlign={'left'}>{work.name}</Text>
                          {isMobile && <Flex backgroundColor={'white'} h={'1px'} w={'100%'}></Flex>}
                          <Flex gap={isMobile ? 0 : 1} flexDir={isMobile ? 'column' : 'row'}>
                            {!isMobile && <Text>-</Text>}
                            {work.student.map((student) => <Text fontSize={isMobile ? '1vh' : '1vw'} color={'white'} textAlign={'left'}>
                              {student.sname}
                            </Text>)}
                          </Flex>
                        </Button>
                      )
                    })}
                  </VStack>
                </Flex>
              </Flex>
              <Flex w={"78%"} display={"flex"} flexDirection={"column"}>
                {getPanel()}
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ItemModal;
