import React from "react";
import { Box, HStack, Stack, Text } from "@chakra-ui/react";
const Introduction = () => {
  return (
    <HStack
      width="100%"
      height="100vh"
      p={5}
      alignItems="center"
      justifyContent="center"
    >
      <Stack height="100%" width="100%" direction="column">
        <Stack direction="column" textAlign="center" width="100%" height="100%">
          <Text color="whiteAlpha.900" fontSize="3xl" fontWeight="bold">
            自己紹介
          </Text>
          <Text color="whiteAlpha.900" fontSize="xl">
            About me{" "}
          </Text>
          <Stack
            mt={6}
            height="100%"
            width="100%"
            direction="row"
            justifyContent="space-around"
          >
            <Box height="50%" width="30%" bgColor="blue">
              写真
            </Box>
            <Box height="50%" width="30%" bgColor="blue">
              ここに自己紹介
            </Box>
          </Stack>
        </Stack>
      </Stack>
    </HStack>
  );
};

export default Introduction;
