import { Box } from "@chakra-ui/react";
import Header from "./Header";
import CountryList from "./CountryList";
import { getCountries } from "../api/callAPI";
// type LayoutProps = {};

const Layout = () => {
  return (
    <Box>
      <Header></Header>
      <CountryList getData={getCountries}></CountryList>  
    </Box>
  );
};

export default Layout;