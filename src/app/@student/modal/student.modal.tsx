import {
    Flex,
    FormControl,
    Modal,
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Tab,
    TabIndicator,
    TabList,
    TabPanel,
    TabPanels,
    Tabs,
    Text
} from '@chakra-ui/react';
import { useState } from "react";

import uiuxData from '../data/uiux-data';
import imcData from '../data/imc-data';
import videoMajorProjectData from '../data/videoMajorProject-data';
import digitalMajorProjectData from '../data/digitalMajorProject-data';
import brandPackageDesignData from '../data/brandPackageDesign-data';
import PromotionVideoData from '../data/PromotionVideo-data';
import animationStudioData from '../data/animationStudio-data';

interface Props {
    isOpen: boolean;
    onClose: () => void;
    studentData: any;
}

const StudentModal = (props: Props) => {

    // 선택한 학생
    const [selectedStudent, setSelectedStudent] = useState<any>(null);


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
                <ModalBody overflowY="auto" maxHeight="80vh" h={'80vh'} sx={{
                    '::-webkit-scrollbar': {
                        display: 'none',
                    },
                }} >
                    <FormControl isRequired mb={'3%'}>
                        <Tabs position="relative" variant="unstyled">
                            <TabList justifyContent={'space-around'} mb={'1%'}>
                                <Tab color={'white'}>{props.studentData.subject.split("/")[0]}</Tab>
                                <Tab color={'white'}>{props.studentData.subject.split("/")[1]}</Tab>
                                <Tab color={'white'}>{props.studentData.subject.split("/")[2]}</Tab>
                            </TabList>
                            <TabIndicator
                                mt="-5px"
                                height="2px"
                                bg="blue"
                                borderRadius="1px"
                            />
                            <TabPanels>
                                <TabPanel>
                                    <Flex position={'relative'}>
                                        <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '200px' }} />
                                        <Text position={'absolute'} color={'white'} top={'40%'} left={'10%'} > gi</Text>
                                        <Flex position={'absolute'} color={'white'} top={'5%'} left={'80%'}>
                                            <Text>{props.studentData.name} {props.studentData.email}</Text>
                                        </Flex>
                                    </Flex>

                                    <Flex margin={'5%'} flexDir={'column'}>
                                        <Text color={'white'} mb={'5%'} >작은 섬마을 곳곳에 알 수없는 태엽이 생겨나고 자연물들의 성장이 멈춰, 어른들은 태엽을 두려워하게 된다.... 전공연구프로젝트</Text>
                                        <iframe
                                            width="100%"
                                            height="500"
                                            src="https://player.vimeo.com/video/697947484"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        ></iframe>
                                    </Flex>

                                </TabPanel>
                                <TabPanel>
                                    <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '200px' }} />
                                    <Flex margin={'5%'} flexDir={'column'}>
                                        <Text color={'white'} mb={'5%'} >작은 섬마을 곳곳에 알 수없는 태엽이 생겨나고 자연물들의 성장이 멈춰, 어른들은 태엽을 두려워하게 된다.... 프로모션</Text>
                                        <iframe
                                            width="100%"
                                            height="500"
                                            src="https://player.vimeo.com/video/697947484"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        ></iframe>
                                    </Flex>
                                </TabPanel>
                                <TabPanel>
                                    <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '200px' }} />
                                    <Flex margin={'5%'} flexDir={'column'}>
                                        <Text color={'white'} mb={'5%'} >작은 섬마을 곳곳에 알 수없는 태엽이 생겨나고 자연물들의 성장이 멈춰, 어른들은 태엽을 두려워하게 된다.... IMC</Text>
                                        <iframe
                                            width="100%"
                                            height="500"
                                            src="https://player.vimeo.com/video/697947484"
                                            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                        ></iframe>
                                    </Flex>
                                </TabPanel>

                            </TabPanels>





                        </Tabs>
                    </FormControl>
                </ModalBody>
                <ModalFooter>

                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

export default StudentModal;
