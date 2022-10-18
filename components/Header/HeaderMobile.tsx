import { Box, Button, Flex, Heading, Image } from "@chakra-ui/react";
import { FilterDark, Search } from "../../constants";

const HeaderMobile = () => {
  return (
    <Flex align="center" px="40px" width="full">
      <Flex
        alignItems="center"
        borderRadius="40px"
        border="1px solid #dddddd"
        boxShadow="0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)"
        cursor="pointer"
        height="54px"
        justifyContent="space-between"
        pr="8px"
        width="full"
      >
        <Flex alignItems="center">
          <Button
            variant="unstyled"
            display="flex"
            justifyContent="center"
            width="50px"
          >
            <Search />
          </Button>
          <Box>
            <Heading as="h5" color="black.100" fontSize="14px" fontWeight={600}>
              Where to?
            </Heading>

            <Flex alignItems="center">
              <Button
                variant="unstyled"
                color="black.50"
                fontSize="12px"
                minW="50px"
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
                minW="50px"
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
                minW="50px"
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
          position="relative"
        >
          <Image src="/icons/filter.png" alt="Filter Icon" />
        </Button>
      </Flex>
    </Flex>
  );
};

export default HeaderMobile;
