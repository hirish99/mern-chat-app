import React from 'react'
import { Box, HStack } from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

const UserBadgeItem = ({user, handleFunction}) => {
  return (
    <Box
        as='button'
        px={2}
        py={1}
        borderRadius="lg"
        m={1}
        mb={2}
        variant="solid"
        fontSize={12}
        backgroundColor="#F0FFF4"
        cursor="pointer"
        onClick={handleFunction}
    >
        {user.name}
        <CloseIcon
        pl={1}
        />
    </Box>
  )
}

export default UserBadgeItem
