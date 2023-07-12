'use client'
import { Box, Button, Container, Flex, HStack, VStack, Text, LinkBox, LinkOverlay, Stack, Card, CardBody, Image, Highlight, Spacer, Wrap, WrapItem, CardFooter } from "@chakra-ui/react";
import { motion } from "framer-motion";

import freefireone from '../../public/ff.jpg'
import freefiretwo from '../../public/ff2.jpg'
import Nav from "@/Nav/Index";
import Footer from "@/Footer/Index";



export default function Home() {
  const data = new Date();
  const meses = [
    'Jan', 'Fev', 'Mar', 'Abr', 'Mai', 'Jun',
    'Jul', 'Ago', 'Set', 'Out', 'Nov', 'Dez'
  ];
  const mes = meses[data.getMonth()];
  const dia = String(data.getDate()).padStart(2, '0');
  const ano = data.getFullYear();
  const dataFormatada = `${dia} ${mes} | ${ano}`;


  return (
    <>
      <Nav />
      <Flex bg='#121215' h='850'>

        <Container
          mt='8'
          maxW='1740px'
          bg='#161616'
          borderRadius='40px 40px 0px 0px'

        >
          <Box
            backgroundImage="url('lp.png')"
            backgroundSize="auto"
            backgroundPosition="center"
            borderRadius='40px 40px 0px 0px'
            w='100%'
            h='100%'
          >
            <HStack align='inherit' h='100%'>
              <Box
                width=''
                h='850px'
                ml=''
                bg=''
                borderRadius='40px 40px 0px 0px'
              >
                <video loop autoPlay muted preload="none" style={{
                  borderRadius: '40px 40px 0px 0px',
                  height: '100%'
                }}>
                  <source src='https://bucketarena.s3.sa-east-1.amazonaws.com/alek+da+oreia.mp4' type='video/mp4' />
                </video>


              </Box>
              {/* <Box mt='20'>
                <HStack spacing={3}>
                  <Text fontSize='6xl' as='b' color='#9600ff'>
                    Ganhe
                  </Text>
                  <Text fontSize='6xl' as='b' color='white'> jogando!</Text> Jogando!<br />
                </HStack>
                <Text fontSize='6xl' as='b' color='white'>
                  prove sua habilidade <br />
                </Text>
                <HStack>
                  <Text fontSize='6xl' as='b' color='white' mr='2'>
                    e ganhe
                  </Text>
                  <Text fontSize='6xl' as='b' color='#9600ff'>
                    Dinheiro
                  </Text>
                  <Text fontSize='6xl' as='b' color='white' ml='-2'>
                    !
                  </Text>
                </HStack>
                <Text color='white'>
                  Descubra um novo nível de competição e ganhe <br />
                  dinheiro jogando em nosso site de campeonatos
                </Text>
                <HStack mt='12' gap={5}>
                  <Button
                    bg='#9600ff'
                    color='white'
                    borderRadius='full'
                    w='40'
                    _hover={{

                      background: '#7b04e3'
                    }}
                  >
                    Jogue Agora
                  </Button>
                  <Button
                    variant='outline'
                    color='#9600ff'
                    border='2px'
                    borderColor='#9600ff'
                    borderRadius='full'
                    w='40'
                    _hover={{

                      background: '#9600ff',
                      color: 'white'
                    }}
                  >
                    Saiba Mais
                  </Button>
                </HStack>
              </Box> */}
            </HStack>
          </Box>
        </Container>
      </Flex>
      <Box
        w="100%"
        h="80px"
        position="relative"
        overflow='upper'
        mt='-70px'
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          transform="skewY(-4deg)"
          background="#1a1a1a"
          boxShadow='dark-lg'
        ></Box>
      </Box>
      <Box
        w="100%"
        h="1000px"
        position="relative"
        overflow='upper'
        mt=''
      >
        <Box
          position="absolute"
          top="0"
          left="0"
          right="0"
          bottom="0"
          transform="skewY(-4deg)"
          background="#9600ff"
          boxShadow='dark-lg'
        >
          <Box position="absolute"
            top="0"
            left="0"
            right="0"
            bottom="0"
            mt='150px'
            h='70%'
            transform="skewY(4deg)"
          >
            <HStack h='100%' align='center' justify='center' gap={12}>
              <LinkBox
                as={motion.div}
                whileHover={{ scale: 1.1, boxShadow: 'lg' }}
                whileTap={{ scale: 1 }}
                transition='0.1s linear'
                bg='#121212'
                w='350px'
                h='500px'
                borderRadius='20px'
              >
                <Stack align='center' h='100%' justify='center'>
                  <Box
                    backgroundImage="url('https://bucketarena.s3.sa-east-1.amazonaws.com/images/1_00000.png')"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    h='97%'
                    w='96%'
                    borderRadius='15px'
                    border='2px'
                    borderColor='#cc0304'

                  >
                    <LinkOverlay href='/'>
                      <Box display='flex' alignItems='end' h='100%'>
                        <VStack align='stretch' p='4'>
                        

                        <HStack>
                          <Image src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/icon-mob-red.png' boxSize={35}/>
                          <Image src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/icon-plat.png' opacity='0.6' boxSize={50}/>
                        </HStack>
                        
                          <Text color='#cc0304' fontSize='2xl' as='b'>
                            CONTRA SQUAD - 4X4
                          </Text>
                          <Text color='white'>
                            Desafie outros jogadores mobile em partidas de modo CS/4v4 com seu Squad e fature sendo campeão!
                          </Text>

                        </VStack>
                      </Box>


                    </LinkOverlay>
                  </Box>
                </Stack>
              </LinkBox>
              <LinkBox
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                transition='0.1s linear'
                bg='#121212'
                w='350px'
                h='500px'
                borderRadius='20px'
              >
                <Stack align='center' h='100%' justify='center'>
                  <Box
                    backgroundImage="url('https://bucketarena.s3.sa-east-1.amazonaws.com/images/2_00000.png')"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    h='97%'
                    w='96%'
                    borderRadius='15px'
                    border='2px'
                    borderColor='#7603CB'

                  >
                    <LinkOverlay href='/'>
                    <Box display='flex' alignItems='end' h='100%'>
                        <VStack align='stretch' p='4'>
                        

                        <HStack>
                          <Image src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/icon-emu-purple.png' boxSize={35}/>
                          <Image src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/icon-plat.png' opacity='0.6' boxSize={50}/>
                        </HStack>
                        
                          <Text color='#7603CB' fontSize='2xl' as='b'>
                            CONTRA SQUAD - 4X4
                          </Text>
                          <Text color='white'>
                            Desafie outros jogadores de plataforma mista em partidas de modo CS/4v4 com seu Squad e fature sendo campeão!
                          </Text>

                        </VStack>
                      </Box>
                    </LinkOverlay>
                  </Box>
                </Stack>
              </LinkBox>
              <LinkBox
                as={motion.div}
                whileHover={{ scale: 1.1, boxShadow: 'dark-lg' }}
                whileTap={{ scale: 1 }}
                transition='0.1s linear'
                bg='#121212'
                w='350px'
                h='500px'
                borderRadius='20px'
              >
                <Stack align='center' h='100%' justify='center'>
                  <Box
                    backgroundImage="url('https://bucketarena.s3.sa-east-1.amazonaws.com/images/4_00000.png')"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    h='97%'
                    w='96%'
                    borderRadius='15px'
                    border='2px'
                    borderColor='#0328E0'

                  >
                    <LinkOverlay href='/'>
                    <Box display='flex' alignItems='end' h='100%'>
                        <VStack align='stretch' p='4'>

                        <HStack gap={4}>
                          <Image src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/icon-mob-blue.png' boxSize={35}/>
                          <Image src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/icon-plat.png' opacity='0.6' boxSize={50}/>
                        </HStack>
                        
                          <Text color='#0328E0' fontSize='2xl' as='b'>
                            BATTLE ROYALE - SQUAD
                          </Text>
                          <Text color='white'>
                          Desafie outros jogadores mobile em partidas de BattleRoyale com seu Squad e fature sendo campeão!
                          </Text>

                        </VStack>
                      </Box>
                    </LinkOverlay>
                  </Box>
                </Stack>
              </LinkBox>
              <LinkBox
                as={motion.div}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 1 }}
                transition='0.1s linear'
                bg='#121212'
                w='350px'
                h='500px'
                borderRadius='20px'
              >
                <Stack align='center' h='100%' justify='center'>
                  <Box
                    backgroundImage="url('https://bucketarena.s3.sa-east-1.amazonaws.com/images/3_00000.png')"
                    backgroundPosition="center"
                    backgroundRepeat="no-repeat"
                    h='97%'
                    w='96%'
                    borderRadius='15px'
                    border='2px'
                    borderColor='yellow.500'

                  >
                    <LinkOverlay href='/'>
                    <Box display='flex' alignItems='end' h='100%'>
                        <VStack align='stretch' p='4'>

                        <HStack gap={4}>
                          <Image src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/icon-emu-yellow.png' boxSize={35}/>
                          <Image src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/icon-plat.png' opacity='0.6' boxSize={50}/>
                        </HStack>
                        
                          <Text color='yellow.500' fontSize='2xl' as='b'>
                            BATTLE ROYALE - SQUAD
                          </Text>
                          <Text color='white'>
                          Desafie outros jogadores de plataforma mista em partidas de BattleRoyale com seu Squad e fature sendo campeão!
                          </Text>

                        </VStack>
                      </Box>
                    </LinkOverlay>
                  </Box>
                </Stack>
              </LinkBox>
            </HStack>
          </Box>
        </Box>
      </Box>
      <Footer />
    </>
  )
}
