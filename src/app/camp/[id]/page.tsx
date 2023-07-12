'use client'

import { Box, Container, Img, Text, Heading, HStack, Button, useDisclosure, ScaleFade } from "@chakra-ui/react";

import Nav from "@/Nav/Index";
import Footer from "@/Footer/Index";
import { AiOutlineUnorderedList } from "react-icons/ai";
import RulesModal from "./modal";


export default function Camp() {
    const { isOpen, onToggle } = useDisclosure()

    return (
        <>
            

            <Nav />
            <Container bg='#121212' h='2000px' maxW='1920px'>
                <Box
                    bg='#202020'
                    backgroundImage="url('https://bucketarena.s3.sa-east-1.amazonaws.com/images/lp.png')"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    h='400px'
                    maxW='1920'
                >
                </Box>
                <Container h='800px' bg='#161616' maxW='1440px' mt='-100' borderRadius='40px'>
                    <Box bg='' h='50px'>

                    </Box>
                </Container>
                <HStack
                    spacing={8}
                    align='start'
                    justify='start'
                    h='500'
                    mt='-1000'
                    w='100%'
                >
                    <Box ml='350px'>
                        <Img src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/1_00000.png' alt='' w={300} h={450} borderRadius='30px' />
                    </Box>
                    <Box color='white'>
                        <Heading fontSize='3xl' color='white'>
                            Contra Squad - 4v4
                        </Heading>
                        <Box
                            mt='3'
                            p='2'
                            border='1px'
                            color='white'
                            maxW='90px'
                            borderRadius='8px'
                            h='30px'
                            display='flex'
                            alignItems='center'
                            justifyContent='center'
                        >
                            Emulador
                        </Box>
                        <HStack mt='70px' spacing={6}>
                            <Button
                                onClick={onToggle}
                                color='white'
                                variant='unstyled'
                                style={{
                                    display: 'flex',
                                    alignItems: 'center',
                                    fontWeight: 'normal'
                                }}
                                iconSpacing={1}
                                leftIcon={<AiOutlineUnorderedList size={20} />}
                                _hover={{
                                    color: '#9600ff'
                                }}
                            >
                                Detalhes
                            </Button>
                            {/* <Button
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
                            </Button> */}
                            <RulesModal/>
                        </HStack>
                        <ScaleFade initialScale={0.9} in={isOpen}>
                            <Box
                                pt='10px'
                                color='white'
                                mt='4'
                                rounded='md'
                                maxW='800px'
                            >
                                <Text align='justify'>
                                    O modo Contra Squad do Free Fire é uma modalidade de jogo onde duas equipes de quatro jogadores se enfrentam,
                                    geralmente a partida é rápida e intensa, exigindo boa mira, trabalho em equipe e estratégias inteligentes para vencer.
                                    A equipe que conseguir eliminar todos os jogadores da equipe adversária primeiro, ganha a partida.
                                </Text>
                            </Box>
                        </ScaleFade>
                    </Box>
                </HStack>
            </Container>
            <Footer />
        </>
    )
}