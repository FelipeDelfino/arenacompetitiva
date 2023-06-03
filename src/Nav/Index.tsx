import { Box, Button, Container, Flex, HStack, IconButton, Input, InputGroup, InputLeftElement, Link, Text } from "@chakra-ui/react";
import Image from "next/image";

import logo from '../../public/logo.png'
import { SearchIcon } from "@chakra-ui/icons";

export default function Nav() {
    return (
        <Flex color='white' bg='#161616' h='90px' w='100%'>
            <Container maxW='1340px'>
                <HStack align='center' h='100%' gap={16}>
                    <Box>
                        <Image
                            src={logo}
                            alt='logo'
                            width={150}
                            quality={100}
                            priority
                        />
                    </Box>
                    <Box h='100%'>
                        <HStack gap={12} align='center' h='100%'>
                            <Link
                                _hover={{
                                    textDecoration: 'none',
                                    color: '#9600ff'
                                }}>
                                <Text fontSize='lg'>
                                    Campeonatos
                                </Text>
                            </Link>
                            <Link
                                _hover={{
                                    textDecoration: 'none',
                                    color: '#9600ff'
                                }}
                            >
                                <Text fontSize='lg'>
                                    Eventos
                                </Text>
                            </Link>
                            <Link
                                _hover={{
                                    textDecoration: 'none',
                                    color: '#9600ff'
                                }}
                            >
                                <Text fontSize='lg'>
                                    Comunidade
                                </Text>
                            </Link>
                        </HStack>
                    </Box>
                    <Box
                        h='100%'
                        display='flex'
                        alignItems='center'
                        w='380px'
                        ml='8'
                        mr='8'
                    >
                        <InputGroup>
                            <InputLeftElement>
                                <IconButton
                                    size='sm'
                                    borderRadius='full'
                                    colorScheme='white'
                                    color='white'
                                    aria-label="Search"
                                    icon={<SearchIcon />}
                                />
                            </InputLeftElement>
                            <Input
                                variant='filled'
                                focusBorderColor="#9600ff"
                                placeholder=''
                                bg='#2c2b2b'
                                borderRadius='8px'

                                _hover={{
                                    background: '#2c2b2b'
                                }}
                            />
                        </InputGroup>
                    </Box>
                    <Box
                        h='100%'
                        display='flex'
                        alignItems='center'
                    >
                        <HStack gap={4}>
                            <Button
                                variant='outline'
                                color='#9600ff'
                                border='2px'
                                borderColor='#9600ff'
                                borderRadius='8px'
                                _hover={{
            
                                  background: '#9600ff',
                                  color: 'white'
                                }}
                            >
                                Entre
                            </Button>
                            <Button
                                bg='#9600ff'
                                color='white'
                                borderRadius='8px'
                                _hover={{

                                    background: '#7b04e3'
                                }}

                            >
                                Cadastre-se
                            </Button>
                        </HStack>
                    </Box>
                </HStack>
            </Container>
        </Flex>
    )
}