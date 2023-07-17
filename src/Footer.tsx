import { Box, Container, Flex, Text, Link, Icon } from '@chakra-ui/react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
  return (
    <Box as="footer" bg="gray.800" color="white" py={20} position='absolute' bottom={0} width='100%'>
      <Container maxW="container.lg">
        <Flex flexWrap="wrap" justify="space-between">
          <Box width={{ base: '100%', md: 'auto' }} mb={{ base: 8, md: 0 }}>
            <Text as="h3" fontSize="xl" fontWeight="bold" mb={4}>田中颯太</Text>
            <Text fontSize='xl'>email: sohtacareer12@gmail.com</Text>
          </Box>
          <Box width={{ base: '100%', md: 'auto' }} mb={{ base: 8, md: 0 }}>
            <Text as="h3" fontSize="xl" fontWeight="bold" mb={4}>リンク</Text>
            <Flex direction="column">
              <Link href="#" mb={2}>ホーム</Link>
              <Link href="#" mb={2}>製品</Link>
              <Link href="#" mb={2}>サービス</Link>
              <Link href="#" mb={2}>お問い合わせ</Link>
            </Flex>
          </Box>
          <Box width={{ base: '100%', md: 'auto' }} mb={{ base: 8, md: 0 }}>
            <Text as="h3" fontSize="xl" fontWeight="bold" mb={4}>フォロー</Text>
            <Flex>
              <Link href="#" mr={2}><Icon as={FaFacebookF} boxSize={6} /></Link>
              <Link href="#" mr={2}><Icon as={FaTwitter} boxSize={6} /></Link>
              <Link href="#"><Icon as={FaInstagram} boxSize={6} /></Link>
            </Flex>
          </Box>
        </Flex>
      </Container>
    </Box>
  );
};

export default Footer;
