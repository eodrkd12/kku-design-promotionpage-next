import {
  Flex,
  Modal,
  ModalBody,
  ModalCloseButton,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  Tab,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import PromotionVideoData from "../data/PromotionVideo-data";
import animationStudioData from "../data/animationStudio-data";
import brandPackageDesignData from "../data/brandPackageDesign-data";
import digitalMajorProjectData from "../data/digitalMajorProject-data";
import imcData from "../data/imc-data";
import uiuxData from "../data/uiux-data";
import videoMajorProjectData from "../data/videoMajorProject-data";
import UIUXComponent from "../panels/uiuxlayout.panels";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  studentData: any;
}

interface Work {
  name: string;
  student: Student[];
  introduction: string;
  explanation: string;
  youtube?: string;
}

interface Student {
  sname: string;
  englishName: string;
  studentNumber: string;
  email: string;
}

const StudentModal = (props: Props) => {
  // 선택한 학생
  const [selectedStudent, setSelectedStudent] = useState<any>(null);

  const [subjectList, setSubjectList] = useState<string[]>([]);
  const [tabIdx, setTabIdx] = useState<number | null>(null);
  const [work, setWork] = useState<Work>();
  const {
    isOpen: isStudentModalOpen,
    onOpen: onStudentModalOpen,
    onClose: onStudentModalClose,
  } = useDisclosure();

  useEffect(() => {
    if (props.studentData) {
      const _subjectList: string[] = [];
      props.studentData.subject.split("/").forEach((value: string) => {
        _subjectList.push(value.trim());
      });
      setSubjectList(_subjectList);
      setTabIdx(0);
    }
  }, [props]);

  useEffect(() => {
    if (tabIdx !== null) {
      let workList: Work[] = [];
      switch (subjectList[tabIdx]) {
        case "전공연구프로젝트(영상)":
          workList = videoMajorProjectData;
          break;
        case "IMC":
          workList = imcData;
          break;
        case "프로모션영상":
          workList = PromotionVideoData;
          break;
        case "전공연구프로젝트(디지털)":
          workList = digitalMajorProjectData;
          break;
        case "UIUX캡스톤디자인":
          workList = uiuxData;
          break;
        case "애니메이션스튜디오":
          workList = animationStudioData;
          break;
        case "브랜드패키지디자인":
          workList = brandPackageDesignData;
      }

      if (workList) {
        setWork(
          workList.filter((value) =>
            value.student.some(
              (value) => value.sname === props.studentData.name
            )
          )[0]
        );
      }
    }
  }, [tabIdx]);

  useEffect(() => {
    console.log(work?.youtube);
  }, [work]);

  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  return (
    <Modal
      closeOnOverlayClick={false}
      isOpen={props.isOpen}
      onClose={props.onClose}
      size={"6xl"}
      isCentered
    >
      <ModalOverlay />
      <ModalContent
        backgroundColor="black"
        borderColor={"blue"}
        borderWidth={2}
        borderRadius="25px"
      >
        <ModalHeader>
          <ModalCloseButton color={"white"} />
        </ModalHeader>
        <ModalBody
          sx={{
            "::-webkit-scrollbar": {
              display: "none",
            },
          }}
        >
          <Tabs
            h={"80vh"}
            position="relative"
            variant="unstyled"
            onChange={(index: number) => {
              setTabIdx(index);
            }}
          >
            <TabList justifyContent={"space-around"} mb={"1%"}>
              {subjectList.map((value, index) => {
                return (
                  <Tab
                    key={index}
                    color={tabIdx === index ? "white" : "gray.500"}
                  >
                    {value}
                  </Tab>
                );
              })}
            </TabList>
            <TabPanels h={"90vh"} overflow="auto">
              <UIUXComponent
                // isOpen={isStudentModalOpen}
                // onClose={onStudentModalClose}
                work={work}
              />
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StudentModal;
