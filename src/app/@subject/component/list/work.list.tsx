import PromotionVideoData from "@/app/@student/data/PromotionVideo-data";
import animationStudioData from "@/app/@student/data/animationStudio-data";
import brandPackageDesignData from "@/app/@student/data/brandPackageDesign-data";
import digitalMajorProjectData from "@/app/@student/data/digitalMajorProject-data";
import imcData from "@/app/@student/data/imc-data";
import uiuxData from "@/app/@student/data/uiux-data";
import videoMajorProjectData from "@/app/@student/data/videoMajorProject-data";
import { Flex, HStack } from "@chakra-ui/react";
import { motion } from 'framer-motion';
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
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
  still?: string[];
}

interface Student {
  sname: string;
  englishName: string;
  studentNumber: string;
  email: string;
}

interface ImageButtonProps {
  src: string;
  rowNum: number;
}

const WorkList = ({ subject }: Props) => {
  const [workList, setWorkList] = useState<Work[]>([]);
  const [row1, setRow1] = useState<Work[]>([]);
  const [row2, setRow2] = useState<Work[]>([]);
  const [row1Scroll, setRow1Scroll] = useState<NodeJS.Timeout | null>(null);
  const [row2Scroll, setRow2Scroll] = useState<NodeJS.Timeout | null>(null);

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const div = row1Ref.current;
  const refId = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previousX, setPreviousX] = useState(0);
  const tickEvent = useRef<{ start: Date; tickCnt: number }>({ start: new Date(), tickCnt: 0 });

  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setPreviousX(e.clientX);
    tickEvent.current = { start: new Date(), tickCnt: 0 };
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(false);
    if (previousX === e.clientX) {
      console.log("asdads");
    }
  };

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!isDragging || !div || refId.current) {
      return;
    }

    refId.current = requestAnimationFrame(() => {
      if (div) {
        const delta = e.clientX - previousX;
        div.scrollLeft -= delta;
        setPreviousX(e.clientX);
      }
      refId.current = null;
      // 아래 예제에서 같이 사용될 코드(지금은 몰라도 무관합니다.)
      tickEvent.current.tickCnt += 1;

    });
  };

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
  }, [subject]);

  useEffect(() => {
    if (workList.length > 10) {
      setRow1(workList.slice(0, Math.ceil(workList.length / 2)));
      setRow2(workList.slice(Math.ceil(workList.length / 2)));
    } else {
      setRow1(workList);
    }
  }, [workList]);

  useEffect(() => {
    if (row1 && row1.length > 4) {

    }
  }, [row1]);
  useEffect(() => {
    if (row2 && row2.length > 4) {
    }
  }, [row2]);

  const insertInterval = (rowNum: number) => {
    if (rowNum === 1) {
      setRow1Scroll(setInterval(() => {
        if (row1Ref.current) {

        }
      }, 20))
    } else {
      setRow2Scroll(setInterval(() => {
        if (row2Ref.current) {

        }
      }, 20))
    }
  }

  const ImageButton = ({ src, rowNum }: ImageButtonProps) => (
    <div
      style={{
        width: "14vw",
        height: "12vh",
        borderRadius: '5%',
        overflowX: 'hidden',
        overflowY: 'hidden'
      }}
      onMouseDown={handleMouseDown}
      onMouseMove={handleMouseMove}
      onMouseUp={handleMouseUp}
    >
      <img
        src={src}
        style={{
          width: "14vw",
          height: "12vh",
          transition: "transform 0.3s, filter 0.3s",
          objectFit: 'cover',
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
    </div>
  );

  return (
    <Wrapper>
      <HStack
        spacing={2}
        overflowX="scroll"
        h={"100%"}
        w={"100%"}
        alignItems={'flex-start'}
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        ref={row1Ref}
      >
        <Flex flexDir={"column"} gap={2}>
          <Flex position={'relative'} gap={2}>
            {isMobile && <motion.div>
            </motion.div>}
            {row1.map((work, index) => (
              <ImageButton
                key={index}
                src={work.still ? work.still[0] : "/image/lightDoor.png"}
                rowNum={1}
              />
            ))}
          </Flex>
          {row2.length > 0 && <Flex position={'relative'} gap={2} ref={row2Ref}>
            {row2.map((work, index) => (
              <ImageButton
                key={index}
                src={work.still ? work.still[0] : "/image/lightDoor.png"}
                rowNum={2}
              />
            ))}
          </Flex>}
        </Flex>
      </HStack>
    </Wrapper>
  );
};

export default WorkList;
