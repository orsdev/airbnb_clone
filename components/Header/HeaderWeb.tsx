import { Button, Flex, Heading, Hide, Image } from "@chakra-ui/react";
import React from "react";
import { Logo } from "../../constants";

const HeaderWeb = () => {
  return (
    <Flex
      alignItems="center"
      boxShadow="rgb(0 0 0 / 8%) 0 1px 0"
      px="40px"
      justifyContent="space-between"
      w="full"
    >
      {/* Logo */}
      <Flex alignItems="center">
        <Logo />
        <Hide below="lg">
          <Heading as="h4" color="pink" ml={2} fontWeight={700}>
            airbnb
          </Heading>
        </Hide>
      </Flex>

      {/* Filter */}
      <Flex
        alignItems="center"
        borderRadius="40px"
        border="1px solid #dddddd"
        boxShadow="0 1px 2px rgb(0 0 0 / 8%), 0 4px 12px rgb(0 0 0 / 5%)"
        // maxW="350px"
        pl="12px"
        pr="8px"
      >
        <Button
          variant="unstyled"
          color="black.100"
          height="48px"
          fontSize="14px"
          fontWeight={600}
          minWidth="100px"
          px="16px"
        >
          Anywhere
        </Button>
        <Button
          variant="unstyled"
          color="black.100"
          height="25px"
          fontSize="14px"
          fontWeight={600}
          minWidth="100px"
          px="16px"
          border="1px solid"
          borderColor="blackAlpha.300"
          borderY="none"
          borderRadius={0}
        >
          Any week
        </Button>
        <Button
          variant="unstyled"
          color="#717171"
          display=""
          height="48px"
          fontSize="14px"
          fontWeight={400}
          minWidth="100px"
          px="16px"
        >
          Add guests
        </Button>
        <Button variant="unstyled" pos="relative" top="-1px">
          <Image
            src="/icons/search.png"
            alt="Search"
            height="28px"
            width="28px"
          />
        </Button>
      </Flex>

      {/* Profile  */}
      <Flex maxW="300px" alignItems="center" height="42px">
        <Button
          variant="unstyled"
          color="black.100"
          fontSize="14px"
          padding="12px"
          lineHeight={1}
          cursor="pointer"
          h="auto"
          _hover={{
            borderRadius: "22px",
            bg: "#f7f7f7",
          }}
        >
          Become a Host
        </Button>
        <Button
          variant="unstyled"
          lineHeight={1}
          h="auto"
          padding="12px"
          cursor="pointer"
          _hover={{
            borderRadius: "22px",
            bg: "#f7f7f7",
          }}
        >
          <Image src="/icons/globe.png" alt="Globe" />
        </Button>
        <Flex
          alignItems="center"
          borderRadius="40px"
          border="1px solid #dddddd"
          padding="12px"
          height="full"
          cursor="pointer"
          ml={2}
          _hover={{
            boxShadow: "0 2px 4px rgba(0,0,0,0.18)",
          }}
        >
          <Image
            src="/icons/menu.png"
            alt="Hamburger Icon"
            height="16px"
            width="16px"
          />
          <Image
            ml="12px"
            src="/icons/avatar.png"
            alt="Avatar"
            height="28px"
            width="28px"
          />
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeaderWeb;
