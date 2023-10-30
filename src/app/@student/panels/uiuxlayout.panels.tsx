import { Flex, TabPanel, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";
import { useMediaQuery } from "react-responsive";

import PromotionVideoData from "../data/PromotionVideo-data";
import animationStudioData from "../data/animationStudio-data";
import brandPackageDesignData from "../data/brandPackageDesign-data";
import digitalMajorProjectData from "../data/digitalMajorProject-data";
import imcData from "../data/imc-data";
import uiuxData from "../data/uiux-data";
import videoMajorProjectData from "../data/videoMajorProject-data";

interface Props {
  //   isOpen: boolean;
  //   onClose: () => void;
  work: any;
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

const UIUXComponent = (props: Props) => {
  const [work, setWork] = useState<Work>();
  useEffect(() => {
    setWork(props.work);
    console.log("Test" + work?.youtube);
  });
  return (
    // <VStack>
    <TabPanel h={"60vh"}>
      <VStack position={"relative"} h={"30%"}>
        <img
          src={"../image/modal_image.jpg"}
          alt="SignLogo"
          style={{ width: "100vw", height: "100%" }}
        />

        <Text
          position={"absolute"}
          color={"white"}
          top={"50%"}
          left={"5%"}
          fontSize={50}
          transform="translateY(-50%)"
        >
          {work?.name}
        </Text>

        <VStack
          position={"absolute"}
          color={"white"}
          top={"5%"}
          right={0}
          flexDir={"column"}
        >
          {work?.student.map((student, index) => {
            return (
              <Text key={index}>
                {student.sname} {student.email}
              </Text>
            );
          })}
        </VStack>
      </VStack>
      <VStack flexDir={"column"} w={"100%"} h={"70%"}>
        <Text color={"white"} m={"1%"}>
          {work?.introduction}
        </Text>
        <Text color={"white"} m={"1%"}>
          {work?.explanation}
        </Text>
        <VStack>
          {work && work.youtube && (
            <iframe
              width="100%"
              height="100%"
              src={work.youtube}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            ></iframe>
          )}
        </VStack>
        <VStack>
          <img
            src={"../Image/testimage.jpeg"}
            alt="SignLogo"
            style={{ width: "10vw", height: "100%" }}
          />
        </VStack>
        <VStack>
          <img
            src={"../Image/testimage.jpeg"}
            alt="SignLogo"
            style={{ width: "10vw", height: "50%" }}
          />
        </VStack>
      </VStack>
    </TabPanel>

    // </VStack>
  );
};

export default UIUXComponent;
