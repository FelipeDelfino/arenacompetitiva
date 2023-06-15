'use client'
import { Box, Button, Container, Flex, HStack, Text, LinkBox, LinkOverlay, Stack, Card, CardBody, Image, Highlight, Spacer, Wrap, WrapItem, CardFooter } from "@chakra-ui/react";
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
            <HStack align='inherit' h='100%' gap={20}>
              <Box
                width='700px'
                h='100%'
                ml='-16px'
                bg=''
                borderRadius='40px 40px 0px 0px'
              >
                <video loop autoPlay muted preload="none" style={{
                  borderRadius: '40px 40px 0px 0px',
                }}>
                  <source src='https://bucketarena.s3.sa-east-1.amazonaws.com/video.mp4' type='video/mp4' />
                </video>


              </Box>
              <Box mt='20'>
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
              </Box>
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
                  <Card
                    h='97%'
                    w='96%'
                    borderRadius='15px'
                    border='2px'
                    borderColor='red.600'
                    bg='#121212'
                  >
                    <LinkOverlay href='/'>
                      <Image src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/ff.jpg' alt='' borderRadius='12px 12px 0px 0px' p='1' />
                      <CardBody>
                        <Flex align='center'>
                          <Text fontSize='xl' color='white' as='b'>
                            Contra Squad - 4v4
                          </Text>
                          <Spacer />
                          <Text fontSize='md' color='white'>
                            <Highlight
                              query='mobile'
                              styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.500', color: 'white' }}>
                              Mobile
                            </Highlight>
                          </Text>
                        </Flex>
                        <Wrap mt='6'>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              18:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              18:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              19:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              19:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              20:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              20:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              21:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              21:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >22:00
                            </Button>
                          </WrapItem>
                        </Wrap>
                        <Flex mt='6' align='center'>
                          <Text color='gray.200'> {dataFormatada} </Text>
                          <Spacer />
                          <Button
                            colorScheme='red'
                            variant='ghost'
                            _hover={{
                              bg: 'red.500',
                              color: 'white'
                            }}>Ver Detalhes</Button>
                        </Flex>
                      </CardBody>
                    </LinkOverlay>
                  </Card>
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
                  <Card
                    h='97%'
                    w='96%'
                    borderRadius='15px'
                    border='2px'
                    borderColor='yellow.600'
                    bg='#121212'
                  >
                    <LinkOverlay href='/'>
                      <Image src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/ff.jpg' alt='' borderRadius='12px 12px 0px 0px' p='1' />
                      <CardBody>
                        <Flex align='center'>
                          <Text fontSize='xl' color='white' as='b'>
                            Contra Squad - 4v4
                          </Text>
                          <Spacer />
                          <Text fontSize='md' color='white'>
                            <Highlight
                              query='emulador'
                              styles={{ px: '2', py: '1', rounded: 'full', bg: 'yellow.600', color: 'white' }}>
                              Emulador
                            </Highlight>
                          </Text>
                        </Flex>
                        <Wrap mt='6'>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              18:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              18:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              19:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              19:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              20:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              20:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              21:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              21:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >22:00
                            </Button>
                          </WrapItem>
                        </Wrap>
                        <Flex mt='6' align='center'>
                          <Text color='gray.200'> {dataFormatada} </Text>
                          <Spacer />
                          <Button
                            colorScheme='yellow'
                            variant='ghost'
                            _hover={{
                              bg: 'yellow.600',
                              color: 'white'
                            }}>Ver Detalhes</Button>
                        </Flex>
                      </CardBody>
                    </LinkOverlay>
                  </Card>
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
                  <Card
                    h='97%'
                    w='96%'
                    borderRadius='15px'
                    border='2px'
                    borderColor='red.600'
                    bg='#121212'
                  >
                    <LinkOverlay href='/'>
                      <Image src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/ffbattle.jpg' alt='' borderRadius='12px 12px 0px 0px' p='1' />
                      <CardBody>
                        <Flex align='center'>
                          <Text fontSize='xl' color='white' as='b'>
                            Battle Royale - Squad
                          </Text>
                          <Spacer />
                          <Text fontSize='md' color='white'>
                            <Highlight
                              query='mobile'
                              styles={{ px: '2', py: '1', rounded: 'full', bg: 'red.500', color: 'white' }}>
                              Mobile
                            </Highlight>
                          </Text>
                        </Flex>
                        <Wrap mt='6'>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              18:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              18:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              19:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              19:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              20:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              20:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              21:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >
                              21:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="red"
                              borderColor='red.500'
                              w='92px'
                              _hover={{
                                bg: 'red.500',
                                color: 'white'

                              }}
                            >22:00
                            </Button>
                          </WrapItem>
                        </Wrap>
                        <Flex mt='6' align='center'>
                          <Text color='gray.200'> {dataFormatada} </Text>
                          <Spacer />
                          <Button
                            colorScheme='red'
                            variant='ghost'
                            _hover={{
                              bg: 'red.500',
                              color: 'white'
                            }}>Ver Detalhes</Button>
                        </Flex>
                      </CardBody>
                    </LinkOverlay>
                  </Card>
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
                  <Card
                    h='97%'
                    w='96%'
                    borderRadius='15px'
                    border='2px'
                    borderColor='yellow.600'
                    bg='#121212'
                  >
                    <LinkOverlay href='/'>
                      <Image src='https://bucketarena.s3.sa-east-1.amazonaws.com/images/ffbattle.jpg' alt='' borderRadius='12px 12px 0px 0px' p='1' />
                      <CardBody>
                        <Flex align='center'>
                          <Text fontSize='xl' color='white' as='b'>
                            Battle Royale - Squad
                          </Text>
                          <Spacer />
                          <Text fontSize='md' color='white'>
                            <Highlight
                              query='emulador'
                              styles={{ px: '2', py: '1', rounded: 'full', bg: 'yellow.600', color: 'white' }}>
                              Emulador
                            </Highlight>
                          </Text>
                        </Flex>
                        <Wrap mt='6'>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              18:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              18:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              19:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              19:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              20:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              20:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              21:00
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >
                              21:30
                            </Button>
                          </WrapItem>
                          <WrapItem>
                            <Button
                              variant='outline'
                              colorScheme="yellow"
                              borderColor='yellow.600'
                              w='92px'
                              _hover={{
                                bg: 'yellow.600',
                                color: 'white'

                              }}
                            >22:00
                            </Button>
                          </WrapItem>
                        </Wrap>
                        <Flex mt='6' align='center'>
                          <Text color='gray.200'> {dataFormatada} </Text>
                          <Spacer />
                          <Button
                            colorScheme='yellow'
                            variant='ghost'
                            _hover={{
                              bg: 'yellow.600',
                              color: 'white'
                            }}>Ver Detalhes</Button>
                        </Flex>
                      </CardBody>
                    </LinkOverlay>
                  </Card>
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
