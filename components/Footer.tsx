import { Box, Flex, Image, Text } from "@chakra-ui/react";
import { FC } from "react";
import ArrowUp from "remixicon-react/ArrowUpSLineIcon";
import { MapIcon } from "../constants";

interface IProps {
  onShowMap: () => void;
}

const Footer: FC<IProps> = ({ onShowMap }) => {
  return (
    <Box pos="fixed" bottom={0} w="full" zIndex="5" px="40px" overflow="hidden">
      <Flex marginBottom="40px" justifyContent="center">
        <Box
          padding="14px 19px"
          bg="black.100"
          borderRadius="24px"
          cursor="pointer"
          _hover={{
            transition: "all .2s",
            transform: "scale(1.04)",
            boxShadow:
              "0px 0px 0px 1px transparent, 0px 0px 0px 4px transparent, 0px 6px 16px rgb(0 0 0 / 12%)",
          }}
          onClick={onShowMap}
        >
          <Text
            color="white"
            fontSize="14px"
            fontWeight={600}
            display="flex"
            alignItems="center"
            gap="8px"
          >
            Show map
            <MapIcon />
          </Text>
        </Box>
      </Flex>
      <Flex
        width="full"
        flexDir={{ base: "column", sm: "row" }}
        bg="white"
        py="20px"
        gap="30px"
        justifyContent={{ base: "center", sm: "space-between" }}
        alignItems={{ base: "center", sm: "initial" }}
        position="relative"
      >
        <Box
          pos="absolute"
          top={0}
          left={-20}
          w="150vw"
          borderTop="1px solid #DDDDDD"
        />
        <Flex
          fontSize="14px"
          color="black.100"
          gap="10px"
          alignItems="center"
          flexWrap="wrap"
        >
          <Text color="inherit">&copy; 2022 Airbnb, Inc.</Text>
          <Text color="inherit" pos="relative" top="-3px">
            .
          </Text>
          <Text color="inherit">Privacy</Text>
          <Text color="inherit" pos="relative" top="-3px">
            .
          </Text>
          <Text color="inherit">Terms</Text>
          <Text color="inherit" pos="relative" top="-3px">
            .
          </Text>
          <Text color="inherit">Sitemap</Text>
          <Text color="inherit" pos="relative" top="-3px">
            .
          </Text>
          <Text color="inherit">Destinations</Text>
        </Flex>

        <Flex
          fontSize="14px"
          fontWeight={600}
          color="black.100"
          gap="20px"
          justifyContent={{ base: "center", sm: "initial" }}
          alignItems="center"
          flexWrap="wrap"
          opacity={0.9}
        >
          <Text color="inherit" display="flex" alignItems="center">
            <Image
              src="\icons\globe.png"
              alt="Country"
              width="16px"
              height="16px"
              mr="6px"
            />
            English (US)
          </Text>

          <Text color="inherit">
            <Text as="span" mr="8px">
              $
            </Text>
            USD
          </Text>

          <Text color="inherit" display="flex" alignItems="center">
            Support & resources
            <ArrowUp
              size={24}
              style={{
                position: "relative",
                top: "2px",
              }}
            />
          </Text>
        </Flex>
      </Flex>
    </Box>
  );
};

export default Footer;
