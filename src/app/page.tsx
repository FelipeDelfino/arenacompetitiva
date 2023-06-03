'use client'
import { Box, Button, Container, Flex, HStack, Text, LinkBox, LinkOverlay } from "@chakra-ui/react";
import { motion } from "framer-motion";

import Nav from "@/Nav/Index";
import Footer from "@/Footer/Index";



export default function Home() {
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
                bg='white'
                borderRadius='40px 40px 0px 0px'
              >
                

              </Box>
              <Box mt='20'>
                <HStack spacing={3}>
                  <Text fontSize='6xl' as='b' color='#9600ff'>
                    Ganhe
                  </Text>
                  <Text fontSize='6xl' as='b' color='white'> jogando!</Text> Jogando!<br />
                </HStack>
                <Text fontSize='6xl'  as='b' color='white'>
                  prove sua habilidade <br />
                </Text>
                <HStack>
                  <Text fontSize='6xl' as='b'  color='white' mr='2'>
                    e ganhe
                  </Text>
                  <Text fontSize='6xl'  as='b' color='#9600ff'>
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
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 1 }}
              transition='0.1s linear'
              bg='#121212'
              w='350px'
              h='500px'
              borderRadius='20px'
              >
              <LinkOverlay href='/'>               
              </LinkOverlay>
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
              <LinkOverlay href='/'>               
              </LinkOverlay>
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
              <LinkOverlay href='/'>               
              </LinkOverlay>
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
              <LinkOverlay href='/'>               
              </LinkOverlay>
            </LinkBox>
                </HStack>
              </Box>
            </Box>
          </Box>
          <Footer/>
    </>
  )
}
