import { Box, Flex, Show } from "@chakra-ui/react";
import { NextPage } from "next";
import { useState } from "react";
import Card from "../components/common/Card";
import Footer from "../components/Footer";
import { HeaderMobile, HeaderWeb } from "../components/Header";
import Map from "../components/Map";
import Tabs from "../components/Tabs/Tabs";
import { MockApi } from "../constants";

const Home: NextPage = () => {
  const [map, setMap] = useState(false);

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

      {map && <Map onHideMap={() => setMap(false)} />}

      {/* Houses */}
      {!map && (
        <Box
          minH={400}
          mt={10}
          px="40px"
          mb="150px"
          display="grid"
          gridTemplateColumns={{
            base: "1fr",
            sm: "repeat(auto-fit, minmax(293px, 1fr))",
          }}
          gap="30px"
          rowGap="40px"
          gridAutoFlow="row dense"
          position="relative"
          zIndex="base"
        >
          {MockApi.map((house) => (
            <Card key={house.id} data={house} />
          ))}
        </Box>
      )}

      {/* Footer */}
      {!map && <Footer onShowMap={() => setMap(true)} />}
    </Box>
  );
};

Home.displayName = "HOME";

export default Home;
