import { Box, Heading } from "@chakra-ui/react";

type HeaderProps = {};

const Header = () => {
    return (
        <Box
            as={"header"}
            width={"100%"}
            bg={"blue.500"}
            padding={"6"}
            display={"flex"}
            alignItems={"center"}
            justifyContent={"center"}
            boxShadow={"sm"}>
            <Heading>World Countries</Heading>
        </Box>
    );
};

export default Header;