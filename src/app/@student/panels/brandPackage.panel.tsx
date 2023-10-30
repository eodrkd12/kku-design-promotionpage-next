import { TabPanel, Text, VStack } from "@chakra-ui/react";
import { useEffect, useState } from "react";


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
  still: string[];
  poster: string[];
}

interface Student {
  sname: string;
  englishName: string;
  studentNumber: string;
  email: string;
}

const BrandPackageComponent = (props: Props) => {
  const [work, setWork] = useState<Work>();
  useEffect(() => {
    setWork(props.work);
  });
  return (
    // <VStack>
    <TabPanel h={"60vh"}>
      <VStack position={"relative"} h={"30%"}>
        <img
          src={"/image/modal_image.jpg"}
          alt="SignLogo"
          style={{ width: "100vw", height: "100%", objectFit: 'cover' }}
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
      <VStack flexDir={"column"} w={"100%"} h={"70%"} alignItems={'flex-start'}>
        <Text color={"white"} m={"1%"}>
          {work?.introduction}
        </Text>
        <Text color={"white"} m={"1%"}>
          {work?.explanation}
        </Text>
        <VStack>
          {work?.still.map((still: React.ReactNode, index: number) => {
            return (
              <img
                src={work?.still[index]}
                alt="SignLogo"
                style={{ width: "100vw", height: "60vh", objectFit: 'contain' }}
              />
            );
          })}
        </VStack>
      </VStack>
    </TabPanel>

    // </VStack>
  );
};

export default BrandPackageComponent;
