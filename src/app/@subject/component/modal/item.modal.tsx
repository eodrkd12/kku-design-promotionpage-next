import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  Flex,
  Text,
  VStack,
} from "@chakra-ui/react";

interface Props {
  isOpen: boolean;
  onClose: () => void;
  title: string;
}

const ItemModal = (props: Props) => {
  return (
    <>
      <Modal
        closeOnOverlayClick={false}
        isOpen={props.isOpen}
        onClose={props.onClose}
        size={"6xl"}
        isCentered
        autoFocus
        scrollBehavior="inside"
      >
        <ModalOverlay backdropFilter="blur(10px) " />
        <ModalContent h={"85vh"} bg={"black"}>
          <ModalCloseButton bg={"red.500"} />

          <ModalBody>
            <Flex w={"100%"}>
              <Flex
                w={"20%"}
                display={"flex"}
                flexDirection={"column"}
                alignItems={"center"}
              >
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  justifyContent={"center"}
                  position={"fixed"}
                  mt={"3%"}
                  color={"white"}
                >
                  <Text mt={"30%"} mb={"10%"}>
                    전공연구 프로젝트
                  </Text>
                  <Text mt={"2.5%"}>제목 - 팀원</Text>
                  <Text mt={"2.5%"}>제목 - 팀원</Text>
                  <Text mt={"2.5%"}>제목 - 팀원</Text>
                  <Text mt={"2.5%"}>제목 - 팀원</Text>
                  <Text mt={"2.5%"}>제목 - 팀원</Text>
                  <Text mt={"2.5%"}>제목 - 팀원</Text>
                  <Text mt={"2.5%"}>제목 - 팀원</Text>
                  <Text mt={"2.5%"}>제목 - 팀원</Text>
                </Flex>
              </Flex>
              <Flex w={"80%"} display={"flex"} flexDirection={"column"}>
                <Flex
                  display={"flex"}
                  flexDirection={"column"}
                  position={"fixed"}
                  color={"white"}
                  zIndex={100}
                >
                  <Text fontSize={"6vh"}>{props.title}</Text>
                  <Text fontSize={"3vh"}>한줄소개</Text>
                  <Text fontSize={"1.5vh"}>
                    내용소개ㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐㅐ
                  </Text>
                </Flex>
                <VStack w={"100%"} h={"100%"} overflow={"auto"} zIndex={0}>
                  <Flex
                    w={"100%"}
                    h={"100%"}
                    display={"flex"}
                    flexDirection={"column"}
                  >
                    <Flex h={"55vh"} mt={"5%"} mr={"3%"} mb={"5%"}>
                      <iframe
                        width={"100%"}
                        height={"100%"}
                        src={
                          "https://www.youtube.com/embed/3C6xfNeb5Xs?si=Okbo8vxDPa30cNHM"
                        }
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                      />
                    </Flex>
                    <Flex>
                      <img
                        src={
                          "https://search.pstatic.net/common/?src=http%3A%2F%2Fblogfiles.naver.net%2FMjAyMzA5MjZfMzMg%2FMDAxNjk1NzMzMTYwMzIy.-kP478ZJ5Mffn0JNTvzNaoHc0y4PEcM4sFisrt6Y7BYg.Qjo24-eIcrg75eaLkax-nSaijjwumhUJ4-aokPLKkiIg.JPEG.hasun0521%2Foutput_14324252.jpg&type=a340"
                        }
                        alt="SignLogo"
                        style={{
                          width: "100%",
                          height: "20vh",
                          objectFit: "contain",
                        }}
                      />
                    </Flex>
                  </Flex>
                </VStack>
              </Flex>
            </Flex>
          </ModalBody>
        </ModalContent>
      </Modal>
    </>
  );
};

export default ItemModal;
