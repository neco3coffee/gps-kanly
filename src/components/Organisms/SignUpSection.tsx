import { Box, Divider, Heading } from '@chakra-ui/react'
import React from 'react'

export const SignUpSection = () => {
  return (
    <Box pb={10} mt='100px'>
      <Heading mt={10} textAlign='center'>
        管理者登録
      </Heading>
      <Divider orientation='horizontal' borderWidth='thin' w='100px' m='auto' mb={5} />
    </Box>
  )
}
