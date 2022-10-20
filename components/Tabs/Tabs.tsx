// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";
import {
  Box,
  Button,
  Flex,
  Heading,
  Image,
  Show,
  Text,
} from "@chakra-ui/react";
import { TAB_CONTENT } from "./constants";
import ArrowRight from "remixicon-react/ArrowRightSLineIcon";
import ArrowLeft from "remixicon-react/ArrowLeftSLineIcon";
import { Navigation } from "swiper";
import { useState } from "react";

import "swiper/css";
import "swiper/css/navigation";

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(0);

  return (
    <>
      <Box
        pos="sticky"
        top={60}
        pt="2px"
        zIndex="docked"
        boxShadow="rgb(0 0 0 / 16%) 0 0 6px"
        w="full"
      />
      <Box
        pos="sticky"
        top="calc(80px - 20px)"
        bg="white"
        pt="30px"
        zIndex="docked"
        __css={{
          ".swiper-tab": {
            paddingLeft: "40px",
          },

          ".swiper-tab .swiper-wrapper": {
            justifyContent: "space-between",
          },

          ".tab__container:hover": {
            ".tab__heading": {
              color: "black.100",

              "&::after": {
                position: "absolute",
                content: "''",
                height: "1.8px",
                width: "98%",
                bottom: 0,
                bg: "black.50",
                opacity: 0.5,
              },
            },

            ".tab__icon": {
              opacity: 1,
            },
          },
        }}
      >
        <Flex alignItems="center">
          <Box width={{ base: "100%", md: "calc(100% - 160px)" }}>
            <Box pos="relative">
              <Box
                position="absolute"
                left="26px"
                zIndex="dropdown"
                __css={{
                  top: "50%",
                  transform: "translate3d(-62% , -50% , 0)",
                  width: "100px",
                  height: "100%",
                  backgroundImage:
                    "linear-gradient(to right,white,rgb(255 255 255 / 0))",
                  bg: "white",
                }}
              />

              <Box
                as="div"
                className="swiper__prev"
                w="28px"
                h="28px"
                boxShadow="0px 2px 5px rgba(39, 134, 200, 0.12)"
                border="1px solid rgb(0 0 0 / 0.3)"
                bg="white"
                cursor="pointer"
                display={{ base: "none", md: "flex" }}
                justifyContent="center"
                alignItems="center"
                borderRadius="full"
                position="absolute"
                left="26px"
                zIndex="dropdown"
                __css={{
                  top: "50%",
                  transform: "translate3d(0 , -50% , 0)",

                  "&:hover": {
                    boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                  },

                  "&.swiper-button-disabled": {
                    display: "none",
                  },
                }}
              >
                <ArrowLeft />
              </Box>

              <Box
                position="absolute"
                right="6px"
                zIndex="dropdown"
                __css={{
                  top: "50%",
                  transform: "translate3d(0 , -50% , 0)",
                  right: "100%",
                  width: "40px",
                  height: "100%",
                  bg: "white",

                  "&::after": {
                    position: "absolute",
                    content: "''",
                    width: "100%",
                    right: "100%",
                    height: "100%",
                    backgroundImage:
                      "linear-gradient(to left,white,rgb(255 255 255 / 0))",
                  },
                }}
              />

              <Box
                className="swiper__next"
                w="28px"
                h="28px"
                boxShadow="0px 2px 5px rgba(39, 134, 200, 0.12)"
                border="1px solid rgb(0 0 0 / 0.3)"
                bg="white"
                cursor="pointer"
                display={{ base: "none", md: "flex" }}
                justifyContent="center"
                alignItems="center"
                borderRadius="full"
                position="absolute"
                right="6px"
                zIndex="dropdown"
                __css={{
                  top: "50%",
                  transform: "translate3d(0 , -50% , 0)",

                  "&:hover": {
                    boxShadow: "0 6px 16px rgba(0,0,0,0.12)",
                  },

                  "&.swiper-button-disabled": {
                    display: "none",
                  },
                }}
              >
                <ArrowRight />
              </Box>

              <Swiper
                modules={[Navigation]}
                className="swiper-tab"
                breakpoints={{
                  0: {
                    slidesPerGroup: 1,
                    slidesPerView: 1,
                  },
                  200: {
                    slidesPerGroup: 1,
                    slidesPerView: 2,
                  },
                  260: {
                    slidesPerGroup: 2,
                    slidesPerView: 3,
                  },
                  300: {
                    slidesPerGroup: 3,
                    slidesPerView: 4,
                  },
                  400: {
                    slidesPerGroup: 4,
                    slidesPerView: 5,
                  },
                  600: {
                    slidesPerGroup: 4,
                    slidesPerView: 6,
                  },
                  700: {
                    slidesPerGroup: 6,
                    slidesPerView: 7,
                  },
                  1000: {
                    slidesPerGroup: 8,
                    slidesPerView: 10,
                    spaceBetween: 5,
                  },
                  1300: {
                    slidesPerGroup: 10,
                    slidesPerView: 12,
                  },
                }}
                navigation={{
                  prevEl: ".swiper__prev",
                  nextEl: ".swiper__next",
                }}
              >
                {TAB_CONTENT.map((item, index) => (
                  <SwiperSlide key={item.title}>
                    <Flex
                      flexDir="column"
                      alignItems="center"
                      className="tab__container"
                      justifyContent="center"
                      textAlign="center"
                      cursor="pointer"
                      pos="relative"
                      onClick={() => setActiveTab(index)}
                    >
                      <Image
                        src={item.url}
                        alt={item.title}
                        className="tab__icon"
                        objectFit="contain"
                        width="30px"
                        height="30px"
                        transform="scale(.8)"
                        opacity={activeTab === index ? 1 : 0.6}
                      />
                      <Heading
                        as="h5"
                        color={activeTab === index ? "black.100" : "black.50"}
                        className="tab__heading"
                        display="flex"
                        flexDir="column"
                        justifyContent="center"
                        alignItems="center"
                        fontSize="12px"
                        mt={2}
                        fontWeight={500}
                        position="relative"
                        pb="14px"
                        _after={
                          activeTab === index
                            ? {
                                position: "absolute",
                                content: "''",
                                height: "2px",
                                width: "98%",
                                bottom: 0,
                                bg: "#000",
                              }
                            : {}
                        }
                      >
                        {item.title}
                      </Heading>
                    </Flex>
                  </SwiperSlide>
                ))}
              </Swiper>
            </Box>
          </Box>

          <Show breakpoint="(min-width: 720px)">
            <Box width="100px" ml="15px">
              <Button
                variant="unstyled"
                alignItems="center"
                border="1px solid #dddddd"
                borderRadius="12px"
                display="flex"
                height="48px"
                justifyContent="center"
                width="full"
                position="relative"
                top="-5px"
              >
                <Image src="/icons/filter.png" alt="Filter Icon" />
                <Text fontSize="12px" ml="10px">
                  Filters
                </Text>
              </Button>
            </Box>
          </Show>
        </Flex>
      </Box>
    </>
  );
};

export default Tabs;
