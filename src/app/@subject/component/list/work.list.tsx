import PromotionVideoData from "@/app/@student/data/PromotionVideo-data";
import animationStudioData from "@/app/@student/data/animationStudio-data";
import brandPackageDesignData from "@/app/@student/data/brandPackageDesign-data";
import digitalMajorProjectData from "@/app/@student/data/digitalMajorProject-data";
import imcData from "@/app/@student/data/imc-data";
import uiuxData from "@/app/@student/data/uiux-data";
import videoMajorProjectData from "@/app/@student/data/videoMajorProject-data";
import { Flex, HStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100%;
  height: 100%;
`;

interface Props {
  subject: string;
}

interface Work {
  name: string;
  student: Student[];
  introduction: string;
  explanation: string;
  youtube?: string;
  img?: string;
}

interface Student {
  sname: string;
  englishName: string;
  studentNumber: string;
  email: string;
}

interface ImageButtonProps {
  src: string;
}

const WorkList = ({ subject }: Props) => {
  const [workList, setWorkList] = useState<Work[]>([]);
  const [row1, setRow1] = useState<Work[]>([]);
  const [row2, setRow2] = useState<Work[]>([]);

  useEffect(() => {
    let _workList: Work[] = [];
    switch (subject) {
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
      case "UIUX캡스톤디자인":
        _workList = uiuxData;
        break;
      case "애니메이션스튜디오":
        _workList = animationStudioData;
        break;
      case "브랜드패키지디자인":
        _workList = brandPackageDesignData;
    }
    setWorkList(_workList);
  }, [subject]);

  useEffect(() => {
    if (workList.length > 10) {
      setRow1(workList.slice(0, Math.ceil(workList.length / 2)));
      setRow2(workList.slice(Math.ceil(workList.length / 2)));
    } else {
      if (workList.length < 6) {
        setRow1(workList);
      } else {
        setRow1(workList.slice(0, 5));
        setRow2(workList.slice(5));
      }
    }
  }, [workList]);

  const ImageButton = ({ src }: ImageButtonProps) => (
    <img
      src={src}
      style={{
        width: "14vw",
        height: "20vh",
        border: "2px solid white",
        transition: "transform 0.3s, filter 0.3s",
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.filter = "brightness(120%)";
        e.currentTarget.style.transform = "scale(1.1)";
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.filter = "brightness(100%)";
        e.currentTarget.style.transform = "scale(1)";
      }}
    />
  );

  return (
    <Wrapper>
      <HStack
        spacing={2}
        overflowX="scroll"
        h={"100%"}
        width={"100%"}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
      >
        <Flex flexDir={"column"}>
          <Flex>
            {row1.map((work, index) => (
              <ImageButton
                key={index}
                src={work.img ? work.img : "/image/lightDoor.png"}
              />
            ))}
          </Flex>
          <Flex>
            {row2.map((work, index) => (
              <ImageButton
                key={index}
                src={work.img ? work.img : "/image/lightDoor.png"}
              />
            ))}
          </Flex>
        </Flex>
      </HStack>
    </Wrapper>
  );
};

export default WorkList;
