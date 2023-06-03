import { Box, Container, Flex, HStack, Link, VStack, Text, Divider } from "@chakra-ui/react";

export default function Footer() {
    return (
        <>
            <Box
                w='100%'
                bg='#161616'
                minW='100%'
                minH='0px'
                mt='-70px'
            >
                <Container
                    maxW='1440px'
                    h='650px'
                    pt='200px'
                >
                    <HStack spacing={24} mt='12' align='start' justify='center'>
                        <Box>
                            <VStack spacing={3} align='stretch'>
                                <Text color='white' as='b' fontSize='lg'>Campeonatos</Text>
                                <Link 
                                color='gray.300'
                                 _hover={{
                                    textDecoration: 'none',
                                    color: '#9600ff'
                                }}
                                > Contra Squad
                                </Link>
                                <Link 
                                color='gray.300'
                                _hover={{
                                    textDecoration: 'none',
                                    color: '#9600ff'
                                }}
                                > 
                                Battle Royale
                                </Link>
                            </VStack>
                        </Box>
                        <Box>
                            <VStack spacing={3} align='stretch'>
                                <Text color='white' as='b' fontSize='lg'>Suporte</Text>
                                <Link 
                                color='gray.300'
                                _hover={{
                                    textDecoration: 'none',
                                    color: '#9600ff'
                                }}
                                > Sobre</Link>
                                <Link 
                                color='gray.300'
                                _hover={{
                                    textDecoration: 'none',
                                    color: '#9600ff'
                                }}
                                > FAQ
                                </Link>
                                <Link 
                                color='gray.300'
                                _hover={{
                                    textDecoration: 'none',
                                    color: '#9600ff'
                                }}
                                > Contato
                                </Link>
                            </VStack>
                        </Box>
                        <Box>
                            <VStack spacing={3} align='stretch'>
                                <Text color='white' as='b' fontSize='lg'>Acompanhe-nos</Text>
                                <Link 
                                color='gray.300'
                                _hover={{
                                    textDecoration: 'none',
                                    color: '#9600ff'
                                }}
                                > Instagram
                                </Link>
                                <Link 
                                color='gray.300'
                                _hover={{
                                    textDecoration: 'none',
                                    color: '#9600ff'
                                }}
                                > Discord
                                </Link>
                                <Link 
                                color='gray.300'
                                _hover={{
                                    textDecoration: 'none',
                                    color: '#9600ff'
                                }}
                                > Whatsapp
                                </Link>
                            </VStack>
                        </Box>
                        <Box>
                            <VStack spacing={3} align='stretch'>
                                <Text color='white' as='b' fontSize='lg'>Minha Conta</Text>
                                <Link 
                                color='gray.300' 
                                _hover={{
                                    textDecoration: 'none',
                                    color: '#9600ff'
                                }}
                                > Minha conta
                                </Link>
                            </VStack>
                        </Box>
                        <Box>
                            <VStack spacing={3} align='stretch'>
                                <Text color='white' as='b' fontSize='lg' >Atendimento</Text>
                                <Text color='gray.300'>
                                    18:00 às 00:00 -
                                    <br />
                                    Segunda a Sábado,
                                    <br />
                                    horário de Brasília
                                    <br />
                                    (Exceto domingo e feriados)
                                </Text>
                                <Text color='gray.300'>
                                    <Text color='white' as='b' fontSize='lg'> Email:</Text>
                                    <br />
                                    faleconosco@arenacompetitiva.com.br
                                </Text>
                            </VStack>

                        </Box>
                    </HStack>
                <Container maxW='1440px' mt='70'>
                    <Divider orientation='horizontal' />
                    <Box mt={4}>
                            <Text p='' color='gray.400'>
                                © {' '}
                                {new Date().getFullYear()}
                                {' '}
                                Todos os Direitos reservados
                            </Text>
                        </Box>
                </Container>
                </Container>
            </Box>
            </>
            )
}
