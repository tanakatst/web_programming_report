import React from "react";
import type { NextPage } from "next";
import { Box, HStack, Heading, Stack, Text } from "@chakra-ui/react";
import MenuComponent from "../src/Menu";
import Introduction from "../src/Introduction";
import Image from "next/image";
import Portfolio from "../src/PortFoliio";
import Products from "../src/Products";
import Footer from "../src/Footer";

const Home: NextPage = () => {
  return (
    <>
      <Box height="340vh" width="100%">
        <Box w="100%" p={4} height="100vh" position="relative">
          <HStack justifyContent="space-between">
            <Box p={2}>
              <Heading size="lg" color="white">
                SOTA
              </Heading>
            </Box>
            <Box w="40px" h="40px">
              <MenuComponent />
            </Box>
          </HStack>
          <Box
            display="flex"
            justifyContent="center"
            alignItems="center"
            width="100%"
            sx={{ height: "calc(100% - 250px)" }}
          >
            <Stack
              height="30%"
              direction="column"
              alignItems="center"
              textAlign="center"
            >
              <Text color="white" fontSize="6xl" fontWeight="bold">
                My PortFolio
              </Text>
              <Text color="white" fontSize="2xl" letterSpacing='1px' lineHeight='normal'>
                Product Design <br /> and <br />
                Coding
              </Text>
            </Stack>
          </Box>
          <Box
            position="absolute"
            backgroundImage="url('/frontImage.jpeg')"
            backgroundSize="cover"
            top={0}
            left={0}
            width="100%"
            height="100%"
            zIndex={-3}
          />
          <Box
            position="absolute"
            top={0}
            left={0}
            width="100%"
            height="100%"
            zIndex={-2}
            backgroundColor="black"
            opacity={0.35}
          />
        </Box>
        <Portfolio />
        <Products />
        <Footer />
      </Box>
    </>
  );
};

export default Home;
