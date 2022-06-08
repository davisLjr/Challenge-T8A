import React from 'react';
import { Box, Heading, Text,  Image, Link, Button } from '@chakra-ui/react'
import success from './icon/checked.png'

export const Success = () => {
    return(
        <Box 
        width='100%'
        display='flex'
        flexDirection='column'
        justifyContent='center'
        textAlign='center'
        >
            <Box>
                <Image  width={{ base:'50%', lg:'30%' }} m='auto' src={success} alt="success" className='success-icon' />
            </Box>
            <Box mt='20px'>
                <Heading 
                    fontSize='lg'
                    color='text.greenText'
                >
                    Reserva exitosa
                </Heading>
                <Text
                    fontSize='xs'
                    color='text.smallTextGreen'
                >
                    Recibimos tu reserva correctamente <br/>
                    te esperamos el miercoles 16 de diciembre <br/>
                    a las 17hs, no lo olvides! 
                </Text>
                <Button variant='solidPrimary' w='60%'>
                    <Link href='/'
                        _hover={{
                            textDecoration:'none'
                        }}
                    >
                    Volver
                    </Link>
                </Button>
            </Box>
        </Box>
    )
}
