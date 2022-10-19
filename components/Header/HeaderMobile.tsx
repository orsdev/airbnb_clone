import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { Search } from "../../constants";

const HeaderMobile = () => {
  return (
    <Flex align="center" px="40px" width="full">
      <Flex
        alignItems="center"
        borderRadius="40px"
        border="1px solid #dddddd"
        boxShadow="0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)"
        cursor="pointer"
        height="60px"
        justifyContent="space-between"
        pr="8px"
        width="full"
        pos="relative"
      >
        <Flex alignItems="center" flex={1}>
          <Button
            variant="unstyled"
            display="flex"
            justifyContent="center"
            width="50px"
          >
            <Search />
          </Button>

          <Box width="calc(100% - 50px)">
            <Heading as="h5" color="black.100" fontSize="14px" fontWeight={600}>
              Where to?
            </Heading>

            <Flex alignItems="center">
              <Button
                variant="unstyled"
                color="black.50"
                fontSize="12px"
                width={{ base: "20%", sm: "auto" }}
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                Anywhere
              </Button>
              <Box
                bg="black.50"
                width="2.4px"
                height="2.4px"
                mx="5px"
                pos="relative"
                top="2px"
              />
              <Button
                variant="unstyled"
                color="black.50"
                fontSize="12px"
                width={{ base: "20%", sm: "auto" }}
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                Any week
              </Button>
              <Box
                bg="black.50"
                width="2.4px"
                height="2.4px"
                mx="5px"
                pos="relative"
                top="2px"
              />
              <Button
                variant="unstyled"
                color="black.50"
                fontSize="12px"
                width={{ base: "20%", sm: "auto" }}
                overflow="hidden"
                textOverflow="ellipsis"
                whiteSpace="nowrap"
              >
                Add guests
              </Button>
            </Flex>
          </Box>
        </Flex>

        <Button
          variant="unstyled"
          alignItems="center"
          border="1px solid #dddddd"
          borderRadius="25px"
          display="flex"
          height="32px"
          justifyContent="center"
          width="32px"
          position="absolute"
          right="8px"
        >
          <Image src="/icons/filter.png" alt="Filter Icon" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default HeaderMobile;
