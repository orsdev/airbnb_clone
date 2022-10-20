import { AspectRatio, Box, Flex, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import ListIcon from "remixicon-react/ListCheckIcon";

interface IProps {
  onHideMap: () => void;
}

const Map: FC<IProps> = ({ onHideMap }) => {
  return (
    <>
      <AspectRatio ratio={1 / 2} zIndex="6">
        <iframe src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3963.952912260219!2d3.375295414770757!3d6.5276316452784755!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x103b8b2ae68280c1%3A0xdc9e87a367c3d9cb!2sLagos!5e0!3m2!1sen!2sng!4v1567723392506!5m2!1sen!2sng" />
      </AspectRatio>

      <Box zIndex="50" pos="fixed" bottom="80px" w="full">
        <Flex justifyContent="center">
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
            onClick={onHideMap}
          >
            <Text
              color="white"
              fontSize="14px"
              fontWeight={600}
              display="flex"
              alignItems="center"
              gap="8px"
            >
              Show list
              <ListIcon size={16} color="#fff" />
            </Text>
          </Box>
        </Flex>
      </Box>
    </>
  );
};

export default Map;
