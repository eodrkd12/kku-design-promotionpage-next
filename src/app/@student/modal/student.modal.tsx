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


interface Props {
    isOpen: boolean;
    onClose: () => void;

}

const StudentModal = (props: Props) => {


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
                <ModalBody overflowY="auto" maxHeight="80vh" h={'80vh'} >
                    <FormControl isRequired mb={'3%'}>
                        <Tabs position="relative" variant="unstyled">
                            <TabList justifyContent={'space-around'} mb={'1%'}>
                                <Tab color={'white'}>전공연구프로젝트</Tab>
                                <Tab color={'white'}>프로모션</Tab>
                                <Tab color={'white'}>IMC</Tab>
                            </TabList>
                            <TabIndicator
                                mt="-5px"
                                height="2px"
                                bg="blue"
                                borderRadius="1px"
                            />
                            <TabPanels>

                                <TabPanel>
                                    <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '200px' }} />
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
