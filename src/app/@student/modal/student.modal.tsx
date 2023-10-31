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
} from "@chakra-ui/react";
import { useCallback, useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import PromotionVideoData from "../data/PromotionVideo-data";
import animationStudioData from "../data/animationStudio-data";
import brandPackageDesignData from "../data/brandPackageDesign-data";
import digitalMajorProjectData from "../data/digitalMajorProject-data";
import imcData from "../data/imc-data";
import uiuxData from "../data/uiux-data";
import videoMajorProjectData from "../data/videoMajorProject-data";
import UIUXComponent from "../panels/UIUX.panel";
import BasicComponent from "../panels/basic";
import BrandPackageComponent from "../panels/brandPackage.panel";
import ImcLayoutComponent from "../panels/imcLayout";

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

  useEffect(() => {
    if (props.studentData) {
      console.log(props.studentData);
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
        case "UIUX":
          workList = uiuxData;
          break;
        case "애니메이션스튜디오":
          workList = animationStudioData;
          break;
        case "브랜드패키지":
          workList = brandPackageDesignData;
      }

      if (workList) {
        const _work = workList.filter((value) =>
          value.student.some(
            (value) => value.sname === props.studentData.name
          )
        )[0]
        const len = _work.student.length;
        if (len !== undefined) {
          for (let i = 0; i < len; i++) {
            if (_work.student[i].sname === props.studentData.name) {
              const temp = _work.student[i];
              _work.student.splice(i, 1);
              _work.student.unshift(temp);
            }
          }
        }
        setWork(_work);
      }
    }
  }, [tabIdx]);

  const getPanel = useCallback(() => {
    if (tabIdx !== null) {
      switch (subjectList[tabIdx]) {
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
    }
  }, [tabIdx, work]);

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
      autoFocus
      scrollBehavior="inside"
    >
      <ModalOverlay backdropFilter="blur(10px) " />
      <ModalContent backgroundColor="black" borderRadius="25px">
        <ModalHeader>
          <ModalCloseButton color={"white"} />
        </ModalHeader>
        <ModalBody>
          <Tabs
            h={"70vh"}
            variant="unstyled"
            onChange={(index: number) => {
              setTabIdx(index);
            }}
          >
            <TabList mb={"1%"}>
              <Text
                marginRight={"3%"}
                color={"white"}
                fontSize={"25"}
                fontWeight={"500"}
              >
                {props.studentData.name}
              </Text>
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
              <Flex
                position={"absolute"}
                flexDir={"column"}
                left={"85%"}
                align={"self-end"}
                fontSize={"10"}
              >
                <Text color={"white"}>{props.studentData.englishName}</Text>
                <Text color={"white"}>{props.studentData.email}</Text>
              </Flex>
            </TabList>
            <TabPanels flex={1} overflowY={"scroll"} maxH={"70vh"}>
              <TabPanel h={"60vh"}>{getPanel()}</TabPanel>
              <TabPanel h={"60vh"}>{getPanel()}</TabPanel>
              <TabPanel h={"60vh"}>{getPanel()}</TabPanel>
            </TabPanels>
          </Tabs>
        </ModalBody>
        <ModalFooter></ModalFooter>
      </ModalContent>
    </Modal>
  );
};

export default StudentModal;
