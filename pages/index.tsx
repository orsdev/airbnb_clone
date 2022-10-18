import { Box, Flex, Show } from "@chakra-ui/react";
import { NextPage } from "next";
import { HeaderMobile, HeaderWeb } from "../components/Header";

const Home: NextPage = () => {
  return (
    <Box>
      <Flex height="80px" pos="sticky" top={0}>
        <Show breakpoint="(min-width: 720px)">
          <HeaderWeb />
        </Show>
        <Show breakpoint="(max-width: 719px)">
          <HeaderMobile />
        </Show>
      </Flex>
    </Box>
  );
};

Home.displayName = "HOME";

export default Home;
