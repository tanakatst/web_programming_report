import React from "react";
import type { NextPage } from "next";
import { Box, HStack, Heading, Text } from "@chakra-ui/react";
import MenuComponent from "../src/Menu";
import Introduction from "../src/Introduction";

const Home: NextPage = () => {
  return (
    <>
      <Box height="300vh" width="100%">
        <Box bg="#26C9C7" w="100%" p={4} height="100%">
          <HStack justifyContent="space-between">
            <Box p={2}>
              <Heading size="lg" color="white">
                My Portfolio
              </Heading>
            </Box>
            <Box w="40px" h="40px">
              <MenuComponent />
            </Box>
          </HStack>
          <Introduction />
        </Box>
      </Box>
    </>
  );
};

export default Home;
