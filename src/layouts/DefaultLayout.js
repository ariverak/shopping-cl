import React from 'react';
import {
  Box,
  Tab,
  TabList,
  Tabs,
  Flex,
  Stack,
  Text,
  Container
} from "@chakra-ui/core";

const categories = [
  'Mujer',
  'Hombre',
  'Niños',
  'Cuidado Personal',
  'Hogar',
]

export default function DefaultLayout({ children }) {
  return (
    <Container maxW="xl" centerConten>
      <Box bg="#c8c8c8" w="100%" p={1} marginBottom={4}>
        <Flex justifyContent='center'>
          <Stack isInline spacing={8} align="center">
            <Text fontWeight='bold' fontSize="xs" as='mark'>
              Envío gratis sobre $30.000
            </Text>
          </Stack>
        </Flex>
      </Box>
      <Tabs variant="soft-rounded" colorScheme="red" mb={6}>
        <TabList>
          {categories.map(categoryName => (
            <Tab key={categoryName}>{categoryName}</Tab>
          ))}
        </TabList>
      </Tabs>
      {children}
    </Container>
  )
}
