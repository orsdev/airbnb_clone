import { Box, Flex, Show } from "@chakra-ui/react";
import { NextPage } from "next";
import { HeaderMobile, HeaderWeb } from "../components/Header";
import Tabs from "../components/Tabs/Tabs";

const Home: NextPage = () => {
  return (
    <Box>
      {/* Header */}
      <Flex height="80px" pos="sticky" top={0} bg="white" zIndex="banner">
        <Show breakpoint="(min-width: 720px)">
          <HeaderWeb />
        </Show>
        <Show breakpoint="(max-width: 719px)">
          <HeaderMobile />
        </Show>
      </Flex>

      {/* Tabs */}
      <Tabs />
    </Box>
  );
};

Home.displayName = "HOME";

export default Home;
