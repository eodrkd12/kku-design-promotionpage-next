import PromotionVideoData from "@/app/@student/data/PromotionVideo-data";
import animationStudioData from "@/app/@student/data/animationStudio-data";
import brandPackageDesignData from "@/app/@student/data/brandPackageDesign-data";
import digitalMajorProjectData from "@/app/@student/data/digitalMajorProject-data";
import imcData from "@/app/@student/data/imc-data";
import uiuxData from "@/app/@student/data/uiux-data";
import videoMajorProjectData from "@/app/@student/data/videoMajorProject-data";
import { Flex, HStack, useDisclosure } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { useEffect, useRef, useState } from "react";
import { useMediaQuery } from "react-responsive";
import styled from "styled-components";
import ItemModal from "../modal/item.modal";

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
}

const WorkList = ({ subject }: Props) => {
  const [workList, setWorkList] = useState<Work[]>([]);
  const [row1, setRow1] = useState<Work[]>([]);
  const [row2, setRow2] = useState<Work[]>([]);

  const row1Ref = useRef<HTMLDivElement>(null);
  const row2Ref = useRef<HTMLDivElement>(null);

  const div = row1Ref.current;
  const refId = useRef<number | null>(null);
  const [isDragging, setIsDragging] = useState(false);
  const [previousX, setPreviousX] = useState(0);
  const [modalTitle, setModalTitle] = useState<string>("");
  const [selectedItem, setSelectedItem] = useState<any>(null);
  const tickEvent = useRef<{ start: Date; tickCnt: number }>({
    start: new Date(),
    tickCnt: 0,
  });

  const isMobile = useMediaQuery({
    query: "(max-width: 500px)",
  });

  const {
    isOpen: isOpenItemModal,
    onOpen: itemModalOpen,
    onClose: itemModalClose,
  } = useDisclosure();

  const handleMouseDown = (e: React.MouseEvent<HTMLDivElement>) => {
    e.preventDefault();
    setIsDragging(true);
    setPreviousX(e.clientX);
    tickEvent.current = { start: new Date(), tickCnt: 0 };
  };

  const handleMouseUp = (e: React.MouseEvent<HTMLDivElement>) => {
    setIsDragging(false);
    if (previousX === e.clientX) {
      setModalTitle("타이틀");
      itemModalOpen();
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
    console.log(workList);
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
    <div
      style={{
        width: "14vw",
        height: "12vh",
        overflowX: "hidden",
        overflowY: "hidden",
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
          border: "2px solid white",
          transition: "transform 0.3s, filter 0.3s",
          objectFit: "cover",
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
        sx={{
          "::-webkit-scrollbar": {
            display: "none",
          },
        }}
        ref={row1Ref}
      >
        <Flex flexDir={"column"} gap={1}>
          <Flex position={"relative"} gap={1}>
            {isMobile && <motion.div></motion.div>}
            {row1.map((work, index) => (
              <ImageButton
                key={index}
                src={work.still ? work.still[0] : "/image/lightDoor.png"}
              />
            ))}
          </Flex>
          <Flex position={"relative"} gap={1}>
            {row2.map((work, index) => (
              <ImageButton
                key={index}
                src={work.still ? work.still[0] : "/image/lightDoor.png"}
              />
            ))}
          </Flex>
        </Flex>
      </HStack>
      <ItemModal
        isOpen={isOpenItemModal}
        onClose={itemModalClose}
        title={modalTitle}
      />
    </Wrapper>
  );
};

export default WorkList;
