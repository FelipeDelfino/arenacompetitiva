import React from "react";
import { Box, Button, Checkbox, Container, Divider, Flex, FormControl, HStack, IconButton, Input, InputGroup, InputLeftElement, InputRightElement, Link, Modal, ModalBody, ModalCloseButton, ModalContent, ModalHeader, ModalOverlay, SimpleGrid, Text, VStack, useDisclosure } from "@chakra-ui/react";
import Image from "next/image";

import logo from '../../public/logo.png'
import { SearchIcon } from "@chakra-ui/icons";
import { AiOutlineEye, AiOutlineEyeInvisible } from "react-icons/ai"
import { FaFacebook, FaTwitter } from "react-icons/fa"
import { FcGoogle } from "react-icons/fc"


export default function Nav() {
    const { isOpen, onOpen, onClose } = useDisclosure()
    const [show, setShow] = React.useState(false)
    const handleClick = () => setShow(!show)

    return (
        <>
            {/* User Login Modal */}
            <Modal
                onClose={onClose}
                isOpen={isOpen}
                isCentered
                size='lg'
            >
                <ModalOverlay bg='blackAlpha.300' backdropFilter='blur(5px)'/>
                <ModalContent bg='#161616'>
                    <ModalHeader color='#9600ff'>
                        Faça seu Login
                    </ModalHeader>
                    <ModalCloseButton color='white' _hover={{background:'#121212'}}/>
                    <ModalBody mt='5'>

                        <FormControl>
                            <Input
                                color='white'
                                variant='filled'
                                focusBorderColor="#9600ff"
                                bg='#2c2b2b'
                                borderRadius='8px'
                                placeholder='Email'
                                _placeholder={{color:'white'}}
                                _hover={{
                                    background: '#2c2b2b'
                                }}
                            />
                        </FormControl>
                        <FormControl mt={4}>
                            <InputGroup size='md'>
                                <Input
                                color='white'
                                variant='filled'
                                focusBorderColor="#9600ff"
                                bg='#2c2b2b'
                                borderRadius='8px'
                                pr='4.5rem'
                                type={show ? 'text' : 'password'}
                                placeholder='Senha'
                                _placeholder={{color:'white'}}
                                _hover={{
                                    background: '#2c2b2b'
                                }}
                                />
                                <InputRightElement width='4.5rem'>
                                    <Button h='1.75rem' size='sm' onClick={handleClick} >
                                        {show ? (<AiOutlineEyeInvisible size='20' />) : (<AiOutlineEye size='20' />)}
                                    </Button>
                                </InputRightElement>
                            </InputGroup>
                        </FormControl>
                        <SimpleGrid columns={2} mt='5'>
                            <Box>
                                <Checkbox colorScheme='whiteAlpha' color=' white'>
                                    Lembrar-me
                                </Checkbox>

                            </Box>
                            <Box
                                display='flex'
                                justifyContent='end'
                            >
                                <Link
                                    fontSize='sm'
                                    color='#9600ff'
                                    _hover={{
                                        textDecoration: 'none',
                                        color: '#6402b9'
                                    }}
                                >
                                    Esqueci minha senha
                                </Link>
                            </Box>
                        </SimpleGrid>

                        <Box
                            display='flex'
                            justifyContent='center'
                            mt='8'
                        >
                            <Button bg='#9600ff'
                                color='white'
                                borderRadius='8px'
                                width='100%'
                                _hover={{

                                    background: '#7b04e3'
                                }}
                            >
                                Entrar
                            </Button>
                        </Box>
                        <Box mt='4'>
                            <Flex alignItems='center' justifyContent='center' mb='4'>

                                <Box w='100%' bg='white'>
                                    <Divider />
                                </Box>
                                <Box w='35%' display='flex' justifyContent='center'>
                                    <Text color='white'>Ou</Text>
                                </Box>
                                <Box w='100%' bg='white'>
                                    <Divider />
                                </Box>
                            </Flex>
                            <VStack>
                                <Button width='100%' colorScheme='facebook' leftIcon={<FaFacebook />}>Entre com o Facebook</Button>
                                <Button width='100%' colorScheme='gray' leftIcon={<FcGoogle />}>Entre com o Google</Button>
                                <Button width='100%' colorScheme='twitter' leftIcon={<FaTwitter />}>Entre com o Twitter</Button>
                            </VStack>
                        </Box>
                        <Box
                            display='flex'
                            justifyContent='center'
                            mt='7'
                            mb='5'
                        >
                            <Text color='white'>
                                Ainda não possui uma conta? <Link color='#9600ff' href='/cadastro' _hover={{ textDecoration: 'none', color: '#6402b9' }}> Cadastre-se </Link>
                            </Text>
                        </Box>
                    </ModalBody>

                </ModalContent>
            </Modal>

            {/* END - User Login Modal */}

            <Flex color='white' bg='#161616' h='90px' w='100%'>
                <Container maxW='1340px'>
                    <Flex align='center' h='100%' gap={16}>
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
                                    onClick={onOpen}
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
                                <Link href='/cadastro'>
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
                                </Link>
                            </HStack>
                        </Box>
                    </Flex>
                </Container>
            </Flex>
        </>
    )
}