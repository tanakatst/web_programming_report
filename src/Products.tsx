import React from "react";
import {
  Box,
  Heading,
  List,
  ListIcon,
  ListItem,
  Stack,
  Text,
} from "@chakra-ui/react";
import Link from "next/link";
const Products = () => {
  return (
    <Box bgColor="gray.50" height="100vh" width="100%" px="13%">
      <Box py="80px">
        <Heading color="blackAlpha.700" size="2xl">
          PRODUCTS
        </Heading>
        <Stack
          // height="100%"
          pt="50px"
          direction="row"
          width="100%"
          justifyContent="space-around"
          // alignItems="center"
          spacing="90px"
        >
          <Stack
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            height="50%"
            width="100%"
          >
            <Box height="10%">
              <Heading size="xl">Seminer Blog</Heading>
              <Text>中川ゼミブログ</Text>
            </Box>
            <Link href="https://nakagawa-semi-blog.vercel.app/">
              <img
                style={{ padding: 5, marginTop: "40px", cursor: "pointer" }}
                src="/screen_shot.png"
                alt=""
              />
            </Link>

            <Box height="60%">
              <List pt={3} spacing={3}>
                <ListItem>
                  <ListIcon color="green.500" />
                  開発者：ゼミブログ開発メンバー２人
                </ListItem>
                <ListItem>
                  <ListIcon color="green.500" />
                  使用技術：Next.js,ChakraUI,microCMS
                </ListItem>
              </List>
            </Box>
          </Stack>
          <Stack
            textAlign="center"
            display="flex"
            direction="column"
            justifyContent="center"
            height="50%"
            width="100%"
          >
            <Box height="10%">
              <Heading size="xl">Travel Plan Application</Heading>
              <Text>旅行計画アプリケーション</Text>
            </Box>

            <img
              style={{ padding: 5, marginTop: "40px", cursor: "pointer" }}
              src="/screenShot.png"
              alt=""
            />

            <Box height="60%">
              <List pt={3} spacing={3}>
                <ListItem>
                  <ListIcon color="green.500" />
                  開発者：個人開発
                </ListItem>
                <ListItem>
                  <ListIcon color="green.500" />
                  使用技術：Next.js,Laravel等々
                </ListItem>
              </List>
            </Box>
          </Stack>
        </Stack>
      </Box>
    </Box>
  );
};

export default Products;
