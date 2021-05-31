import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

interface ProfileProps {
  showProfileData?: boolean
}

export function Profile({ showProfileData = true }: ProfileProps) {
  return (
    <Flex align="center">
      { showProfileData && (
        <Box mr="4" textAlign="right">
         <Text>Kaique Caires</Text>
         <Text color="gray.300" fontSize="small">kaique.caires@yahoo.com</Text>
       </Box>
      ) }
      <Avatar size="md" name="kaique Gonçaves" />
    </Flex>
  );
}
