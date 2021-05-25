import { Flex, Box, Text, Avatar } from '@chakra-ui/react'

export function Profile() {
  return (
    <Flex align="center">
      <Box mr="4" textAlign="right">
        <Text>Kaique Caires</Text>
        <Text color="gray.300" fontSize="small">kaique.caires@yahoo.com</Text>
      </Box>
      <Avatar size="md" name="kaique Gonçaves" />
    </Flex>
  );
}
