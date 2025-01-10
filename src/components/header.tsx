import { Box, Heading, Image } from '@chakra-ui/react';

const Header = () => {
  return (
    <Box
      display={"flex"}
      justifyContent={"space-between"}
      alignItems={"center"}
      padding={4}
    >
      <Image src="https://www.countryflags.io/be/flat/64.png" alt="Belgium flag" />
      <Heading as="h1">Country Information</Heading>
    </Box>
  );
};

export default Header;