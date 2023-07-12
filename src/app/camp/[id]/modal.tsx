import { Button, Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay, useDisclosure, Text, Heading } from "@chakra-ui/react"
import { GoChecklist } from "react-icons/go"

export default function RulesModal() {

    const { isOpen, onOpen, onClose } = useDisclosure()

    return (
        <>
            <Modal 
            onClose={onClose} 
            isOpen={isOpen} 
            isCentered 
            size='xl' 
            scrollBehavior='inside'
            >
                <ModalOverlay />
                <ModalContent bg='#202020' color='white'>
                    <ModalHeader>REGRAS DA ARENA COMPETITIVA </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>
                        <Text>
                            Replay Obrigatório <br />
                            Contas Abaixo de Level 30 = W.O
                        </Text>
                        <Heading fontSize='lg' mt='4' mb='4'>
                            Personagens
                        </Heading>
                        <Text>
                            Só Alok de Ativa <br />
                            Sem Antonio <br />
                            Sem Wolfrah <br />
                            Sem Hayato <br />
                            Sem Olivia <br />
                            Sem Deboas <br />
                            Sem Luqueta <br />
                            Sem J. Bieber <br />
                            Sem Luna <br />
                            Sem Otho <br />
                            Sem Nairi <br />
                            Sem Diana <br />
                            Sem Ford <br />
                            Sem Thiva <br />
                        </Text>

                        <Heading fontSize='lg' mt='4' mb='4'>
                            Pets
                        </Heading>
                        <Text>
                            Sem Drakinho <br />
                            Sem Etzin <br />
                        </Text>

                        <Heading fontSize='lg' mt='4' mb='4'>
                            Armas que Valem
                        </Heading>
                        <Text>
                            Mini Uzi e Desert somento no 1º round <br />
                            Vale USP/G18 <br />
                            Vale M1014 <br />
                            Vale AUG <br /> 
                            Vale XM8 <br />
                            Vale Thompson <br />
                            Vale MP40 <br />
                            Vale UMP <br />
                            Vale P90 <br />
                            Vale Famas <br />
                            Vale MP5 <br />
                            Granada Somente de Gelo <br />
                            1 M1014 por TIME <br />
                            Sem Fogueira <br />
                        </Text>

                    </ModalBody>
                    <ModalFooter>
                        <Button onClick={onClose}>Close</Button>
                    </ModalFooter>
                </ModalContent>
            </Modal>

            <Button
                onClick={onOpen}
                colorScheme='purple'
                color='white'
                variant='unstyled'
                style={{
                    display: 'flex',
                    alignItems: 'center',
                    fontWeight: 'normal'
                }}
                leftIcon={<GoChecklist size={20} />}
                _hover={{
                    color: '#9600ff'
                }}
            >
                Regras
            </Button>
        </>
    )
}