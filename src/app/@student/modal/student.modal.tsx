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
    Text
} from '@chakra-ui/react';
import { useEffect, useState } from "react";
import { useMediaQuery } from 'react-responsive';

import PromotionVideoData from '../data/PromotionVideo-data';
import animationStudioData from '../data/animationStudio-data';
import brandPackageDesignData from '../data/brandPackageDesign-data';
import digitalMajorProjectData from '../data/digitalMajorProject-data';
import imcData from '../data/imc-data';
import uiuxData from '../data/uiux-data';
import videoMajorProjectData from '../data/videoMajorProject-data';


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
            const _subjectList: string[] = [];
            props.studentData.subject.split("/").forEach((value: string) => {
                _subjectList.push(value.trim());
            })
            setSubjectList(_subjectList);
            setTabIdx(0);
        }
    }, [props])

    useEffect(() => {
        if (tabIdx !== null) {
            let workList: Work[] = [];
            switch (subjectList[tabIdx]) {
                case '전공연구프로젝트(영상)':
                    workList = videoMajorProjectData;
                    break;
                case 'IMC':
                    workList = imcData;
                    break;
                case '프로모션영상':
                    workList = PromotionVideoData;
                    break;
                case '전공연구프로젝트(디지털)':
                    workList = digitalMajorProjectData;
                    break;
                case 'UIUX캡스톤디자인':
                    workList = uiuxData;
                    break;
                case '애니메이션스튜디오':
                    workList = animationStudioData;
                    break;
                case '브랜드패키지디자인':
                    workList = brandPackageDesignData;
            }

            if (workList) {
                setWork(workList.filter((value) => value.student.some((value) => value.sname === props.studentData.name))[0]);
            }
        }
    }, [tabIdx])

    const isMobile = useMediaQuery({
        query: '(max-width: 500px)'
    });

    return (
        <Modal
            closeOnOverlayClick={false}
            isOpen={props.isOpen}
            onClose={props.onClose}
            size={'6xl'}
            isCentered
        >
            <ModalOverlay />
            <ModalContent backgroundColor="black" borderColor={'blue'} borderWidth={2} borderRadius="25px">
                <ModalHeader>

                    <ModalCloseButton color={'white'} />

                </ModalHeader>
                <ModalBody overflowY="scroll" sx={{
                    '::-webkit-scrollbar': {
                        display: 'none',
                    },
                }} >
                    <Tabs h={'80vh'} position="relative" variant="unstyled" onChange={(index: number) => {
                        setTabIdx(index);
                    }}>
                        <TabList justifyContent={'space-around'} mb={'1%'}>
                            {subjectList.map((value, index) => {
                                return <Tab key={index} color={tabIdx === index ? 'white' : 'gray.500'}>{value}</Tab>;
                            })}
                        </TabList>
                        <TabPanels h={'90%'} overflow='auto'>
                            <TabPanel h={'100%'}>
                                <Flex position={'relative'} h={'30%'}>
                                    <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '100%' }} />

                                    <Text position={'absolute'} color={'white'} top={'50%'} left={'5%'} fontSize={50} transform='translateY(-50%)'>{work?.name}</Text>

                                    <Flex position={'absolute'} color={'white'} top={'5%'} right={0} flexDir={'column'}>
                                        {
                                            work?.student.map((student, index) => {
                                                return <Text key={index}>{student.sname} {student.email}</Text>
                                            })
                                        }
                                    </Flex>
                                </Flex>
                                <Flex flexDir={'column'} w={'100%'} h={'70%'}>
                                    <Text color={'white'} m={'1%'} >{work?.introduction}</Text>
                                    <Text color={'white'} m={'1%'} >{work?.explanation}</Text>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://player.vimeo.com/video/697947484"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    ></iframe>
                                </Flex>
                            </TabPanel>
                            <TabPanel h={'100%'}>
                                <Flex position={'relative'} h={'30%'}>
                                    <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '100%' }} />

                                    <Text position={'absolute'} color={'white'} top={'50%'} left={'5%'} fontSize={50} transform='translateY(-50%)'>{work?.name}</Text>

                                    <Flex position={'absolute'} color={'white'} top={'5%'} right={0} flexDir={'column'}>
                                        {
                                            work?.student.map((student, index) => {
                                                return <Text key={index}>{student.sname} {student.email}</Text>
                                            })
                                        }
                                    </Flex>
                                </Flex>
                                <Flex flexDir={'column'} w={'100%'} h={'100%'}>
                                    <Text color={'white'} m={'1%'} >{work?.introduction}</Text>
                                    <Text color={'white'} m={'1%'} >{work?.explanation}</Text>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://player.vimeo.com/video/697947484"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    ></iframe>
                                </Flex>
                                <Flex>
                                    
                                </Flex>
                                <Flex flexDir={'column'} w={'100%'} h={'100%'}>
                                    <Text color={'white'} transform='translateY(6vh)'>지면</Text>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://player.vimeo.com/video/697947484"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    ></iframe>
                                </Flex>
                            </TabPanel>
                            <TabPanel h={'100%'}>
                                <Flex position={'relative'} h={'30%'}>
                                    <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '100%' }} />

                                    <Text position={'absolute'} color={'white'} top={'50%'} left={'5%'} fontSize={50} transform='translateY(-50%)'>{work?.name}</Text>

                                    <Flex position={'absolute'} color={'white'} top={'5%'} right={0} flexDir={'column'}>
                                        {
                                            work?.student.map((student, index) => {
                                                return <Text key={index}>{student.sname} {student.email}</Text>
                                            })
                                        }
                                    </Flex>
                                </Flex>
                                <Flex flexDir={'column'} w={'100%'} h={'70%'}>
                                    <Text color={'white'} m={'1%'} >{work?.introduction}</Text>
                                    <Text color={'white'} m={'1%'} >{work?.explanation}</Text>
                                    <iframe
                                        width="100%"
                                        height="100%"
                                        src="https://player.vimeo.com/video/697947484"
                                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                    ></iframe>
                                </Flex>
                            </TabPanel>
                        </TabPanels>
                    </Tabs>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default StudentModal;
