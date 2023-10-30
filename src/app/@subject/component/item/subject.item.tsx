import PromotionVideoData from "@/app/@student/data/PromotionVideo-data";
import animationStudioData from "@/app/@student/data/animationStudio-data";
import brandPackageDesignData from "@/app/@student/data/brandPackageDesign-data";
import digitalMajorProjectData from "@/app/@student/data/digitalMajorProject-data";
import imcData from "@/app/@student/data/imc-data";
import uiuxData from "@/app/@student/data/uiux-data";
import videoMajorProjectData from "@/app/@student/data/videoMajorProject-data";
import { motion } from "framer-motion";
import { useEffect, useState } from "react";
import styled from "styled-components";
import WorkList from "../list/work.list";

const ItemWrapper = styled.div`
  position: relative;
  > div.title {
    width: 100%;
    height: 20vh;
    box-sizing: border-box;
    border: 2px solid white;
    overflow-x: hidden;
    overflow-y: hidden;
    > img {
      width: 100%;
      height: 100%;
    }

    > p {
      position: absolute;
      top: 50%;
      left: 50%;
      transform: translate(-50%, -50%);
      color: white;
      font-weight: 600;
      font-size: 4.5vh;
    }

    > div.overlay {
      position: absolute;
      width: 100%;
      height: 100%;
      background-color: black;
      opacity: 0.3;
    }
  }

  > div.list-wrapper {
    width: 100%;
    height: 45vh;
    display: flex;
    flex-direction: column;

    > div:nth-child(1) {
      width: 100%;
      height: 20vh;
      margin-top: 0.5vh;
      box-sizing: border-box;
      border: 2px solid white;
      overflow-x: hidden;
      overflow-y: hidden;
      > img {
        width: 100%;
        height: 100%;
      }
      > p {
        position: absolute;
        top: 50%;
        left: 50%;
        transform: translate(-50%, -50%);
        color: white;
        font-weight: 600;
        font-size: 4.5vh;
      }
    }
    > div:nth-child(2) {
      width: 100%;
      height: 33vh;
      margin-top: 0.5vh;
    }
  }
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
  poster?: string[];
}
interface Student {
  sname: string;
  englishName: string;
  studentNumber: string;
  email: string;
}
const SubjectItem = (props: Props) => {
  const [whileHover, setWhileHover] = useState(false);
  const [isClicked, setIsClicked] = useState(false);
  const [img, setImg] = useState('');

  useEffect(() => {

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
      case "브랜드패키지디자인":
        _workList = brandPackageDesignData;
    }

    while (1) {
      const _work = _workList[Math.floor(Math.random() * _workList.length)];
      if (_work.still) {
        setImg(_work.still[0]);
        break;
      }
    }

  }, [props])

  return (
    <ItemWrapper>
      {!isClicked && (
        <motion.div
          className="title"
          initial={{ height: "10vh" }}
          animate={{ height: "20vh" }}
          transition={{ duration: 0.5 }}
          onHoverStart={() => {
            setWhileHover(true);
          }}
          onHoverEnd={() => {
            setWhileHover(false);
          }}
          onTap={() => {
            setIsClicked(!isClicked);
          }}
        >
          {!whileHover && <div className="overlay"></div>}
          <p>{props.subject}</p>
          <motion.img whileHover={{ scale: 1.1 }} src={img}
            style={{
              objectFit: 'cover'
            }} />
        </motion.div>
      )}

      {isClicked && (
        <div className="list-wrapper">
          <motion.div
            initial={{ height: "20vh" }}
            animate={{ height: "10vh" }}
            transition={{ duration: 0.5 }}
            onTap={() => {
              setIsClicked(!isClicked);
            }}
          >
            <motion.img
              whileHover={{ scale: 1.1 }}
              src={img}
              decoding="async"
              loading="lazy"
              style={{
                objectFit: 'cover'
              }}
            />
          </motion.div>
          <motion.div
            initial={{ height: 0 }}
            animate={{ height: "33vh" }}
            transition={{ duration: 0.3, delay: 0.5 }}
          >
            <WorkList subject={props.subject} />
          </motion.div>
        </div>
      )}
    </ItemWrapper>
  );
};

export default SubjectItem;
