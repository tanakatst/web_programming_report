import React from "react";
import {
  Box,
  HStack,
  Heading,
  List,
  ListItem,
  Stack,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import Image from "next/image";
const Introduction = () => {
  const imgPath = "./assets/kyotoImage.JPG";
  return (
    <>
      <Box height="100vh" width="100%" px="13%">
        <Box py='80px'>
          <Heading color="blackAlpha.700" size="2xl">
            INTRODUCTION
          </Heading>
          <Text fontSize="2xl">About me</Text>
          <Stack
            pt={14}
            height="100%"
            direction="row"
            width="100%"
            justifyContent="space-around"
            alignItems="center"
            spacing="170px"
          >
            <Stack
              textAlign="center"
              display="flex"
              direction="column"
              justifyContent="center"
              height="50%"
              width="80%"
            >
              <img src="./postImage.jpg" alt="" />
            </Stack>
            <Stack
              textAlign="left"
              display="flex"
              direction="column"
              // justifyContent="center"
              height="50%"
              width="80%"
            >
              <Box>
                <Heading size="xl">Sota Tanaka</Heading>
                <Text fontSize="xl">田中颯太</Text>
              </Box>

              <Box pt={6} textAlign="left">
                <List>
                  <ListItem>職業：大学生（４年）、webエンジニア（インターンシップ）</ListItem>
                  <ListItem>趣味：旅行、サッカー観戦、プログラミング</ListItem>
                  <ListItem>技術：最近はAI・機械学習の分野を勉強中</ListItem>
                  <ListItem></ListItem>
                </List>
              </Box>
            </Stack>
          </Stack>
        </Box>
      </Box>
    </>
  );
};

export default Introduction;
