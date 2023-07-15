import { Box, Heading, Stack, Text } from "@chakra-ui/react";
import React from "react";

const Portfolio = () => {
  return (
    <Box height="100vh" width="100%" px="13%" pt="80px">
      <Heading color="blackAlpha.700" size="2xl">
        SKILL
      </Heading>
      <Stack
        height="100%"
        direction="row"
        width="100%"
        justifyContent="space-around"
        alignItems="center"
        spacing="60px"
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
            <Heading size="2xl">Coding</Heading>
            <Text>コーディング</Text>
          </Box>
          <img
            style={{ height: "30%", padding: 5, marginTop: "40px" }}
            src="/developer.svg"
            alt=""
          />

          <Box height="60%">
            <Text fontSize="lg">
              Next.jsやTypescriptを使用したモダンな
              <br />
              Webアプリケーションのコーディングを行い、
              高速かつ耐久性の高いウェブアプリケーションの開発をします
            </Text>
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
            <Heading size="2xl">Web Design</Heading>
            <Text>ウェブデザイン</Text>
          </Box>
          <img
            style={{ height: "30%", padding: 5, marginTop: "40px" }}
            src="/design.svg"
            alt=""
          />

          <Box height="60%">
            <Text fontSize="lg">
              ユーザーエクスペリエンスを最優先に考え、美しさと機能性のバランスを重視したブランドやコンテンツに適したデザインを提供します
            </Text>
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
            <Heading size="2xl">Data Analysis</Heading>
            <Text>データ分析</Text>
          </Box>
          <img
            style={{
              height: "30%",
              padding: 5,
              marginTop: "40px",
            }}
            src="/neurology.svg"
            alt=""
          />

          <Box height="60%">
            <Text fontSize="lg">
              データの収集から分析、可視化、報告までのフルサイクルのデータ分析を実装し、事実に基づいた意思決定や戦略策定のサポートを提供します。
            </Text>
          </Box>
        </Stack>
      </Stack>
    </Box>
  );
};

export default Portfolio;
