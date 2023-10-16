import {
    Button,
    Flex,
    FormControl,
    FormLabel,
    Modal,
    ModalBody,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay,
    Text,
} from '@chakra-ui/react';


interface Props {
    isOpen: boolean;
    onClose: () => void;

}

const StudentModal = (props: Props) => {


    return (
        <>
            <Modal
                closeOnOverlayClick={false}
                isOpen={props.isOpen}
                onClose={props.onClose}
                isCentered
            >
                <ModalOverlay />
                <ModalContent backgroundColor="black" borderColor={'blue'} borderWidth={2} width="80vw" height="80vh" borderRadius="25px">
                    <ModalHeader>
                        <Flex justifyContent={'space-between'} mt={'2%'} mb={'2%'}>
                            <Flex alignItems={'center'} justifyContent={'space-around'} flexGrow={1}>
                                <Button
                                    color={'white'}
                                >
                                    전공연구프로젝트
                                </Button>
                                <Button
                                    color={'white'}
                                >
                                    프로모션
                                </Button>
                                <Button
                                    color={'white'}
                                >
                                    IMC
                                </Button>
                            </Flex>
                            <Button

                                color={'white'}
                                mr={'2%'}
                                onClick={props.onClose}
                                fontWeight={'bold'}
                                fontSize={'20'}
                            >
                                X
                            </Button>
                        </Flex>

                    </ModalHeader>
                    <ModalBody overflowY="auto" maxHeight="600px">
                        <FormControl isRequired mb={'3%'}>
                            <img src={"/image/lightDoor.png"} alt="SignLogo" style={{ width: '100vw', height: '200px' }} />
                            <Flex margin={'5%'} flexDir={'column'}>
                                <Text color={'white'} mb={'5%'} >작은 섬마을 곳곳에 알 수없는 태엽이 생겨나고 자연물들의 성장이 멈춰, 어른들은 태엽을 두려워하게 된다....</Text>
                                <iframe
                                    width="100%"
                                    height="500"
                                    src="https://www.youtube.com/embed/XzDzK3txrgw"
                                    title="YouTube video player"
                                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                                ></iframe>
                            </Flex>
                        </FormControl>
                    </ModalBody>
                    <ModalFooter>

                    </ModalFooter>
                </ModalContent>
            </Modal>
        </>
    );
};

export default StudentModal;
