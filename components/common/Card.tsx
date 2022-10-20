import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import Star from "remixicon-react/StarFillIcon";
import { MouseEvent, useState } from "react";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import ArrowRight from "remixicon-react/ArrowRightSLineIcon";
import ArrowLeft from "remixicon-react/ArrowLeftSLineIcon";
import Heart3LineIcon from "remixicon-react/Heart3LineIcon";
import Heart3FillIcon from "remixicon-react/Heart3FillIcon";

import React, { FC } from "react";

import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

export type IProps = {
  id: string;
  images: string[];
  location: {
    name: string;
    landmark: string;
  };
  fee: number;
  rating: number;
  duration: string;
};

const CustomNavigation = () => {
  const swiper = useSwiper();
  const [slideProgress, setSlideProgress] = useState<number>(0);

  swiper.on("slideChange", (e) => {
    setSlideProgress(e.progress);
  });

  const handlePrev = () => {
    swiper.slidePrev();
  };

  const handleNext = () => {
    swiper.slideNext();
  };

  return (
    <>
      {/* Prev Icon */}
      <Box
        as="div"
        className={`swiper__prev ${
          slideProgress === 0 ? "swiper-button-disabled" : ""
        }`}
        onClick={handlePrev}
        w="28px"
        h="28px"
        boxShadow="0px 2px 5px rgba(39, 134, 200, 0.12)"
        border="1px solid rgb(0 0 0 / 0.3)"
        bg="white"
        cursor="pointer"
        display={{ base: "none", md: "flex" }}
        visibility="hidden"
        justifyContent="center"
        alignItems="center"
        borderRadius="full"
        position="absolute"
        left="26px"
        opacity={0.8}
        zIndex="dropdown"
        __css={{
          top: "50%",
          transform: "translate3d(0 , -50% , 0)",

          "&:hover": {
            opacity: 1,
          },

          "&.swiper-button-disabled": {
            display: "none",
          },
        }}
      >
        <ArrowLeft size={14} />
      </Box>

      {/* Next Icon */}
      <Box
        className={`swiper__next ${
          slideProgress === 1 ? "swiper-button-disabled" : ""
        }`}
        onClick={handleNext}
        w="28px"
        h="28px"
        boxShadow="0px 2px 5px rgba(39, 134, 200, 0.12)"
        visibility="hidden"
        border="1px solid rgb(0 0 0 / 0.3)"
        bg="white"
        cursor="pointer"
        display={{ base: "none", md: "flex" }}
        justifyContent="center"
        alignItems="center"
        borderRadius="full"
        position="absolute"
        right="26px"
        zIndex="dropdown"
        opacity={0.8}
        __css={{
          top: "50%",
          transform: "translate3d(0 , -50% , 0)",

          "&:hover": {
            opacity: 1,
          },

          "&.swiper-button-disabled": {
            display: "none",
          },
        }}
      >
        <ArrowRight size={15} />
      </Box>
    </>
  );
};

const Card: FC<{ data: IProps; index: number }> = ({ data, index }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <Box
      w="full"
      overflow="hidden"
      cursor="pointer"
      className={`card__container__${index}`}
      __css={{
        ".swiper-pagination-bullet": {
          transform: "scale(.8)",
        },

        "& .swiper__image:hover": {
          "& .swiper__next": {
            visibility: "visible",
          },
          "& .swiper__prev": {
            visibility: "visible",
          },
        },
      }}
    >
      <Swiper
        modules={[Navigation, Pagination]}
        slidesPerView={1}
        style={{
          // @ts-ignore
          "--swiper-pagination-color": "#fff",
        }}
        pagination={{
          clickable: true,
        }}
      >
        {data?.images?.map((image) => (
          <SwiperSlide key={image}>
            <Box pos="relative" className="swiper__image" w="full" h="284px">
              <Box
                pos="absolute"
                top="20px"
                right="16px"
                as="button"
                color="white"
                zIndex="sticky"
                __css={{
                  ".favourite-clicked": {
                    fill: " #ff385c",
                  },
                }}
                onClick={(event: MouseEvent<HTMLElement>) => {
                  event.stopPropagation();
                  setFavorite((prev) => !prev);
                }}
              >
                {!favorite && <Heart3LineIcon />}
                {favorite && <Heart3FillIcon className="favourite-clicked" />}
              </Box>
              <Image
                src={image}
                width="full"
                height="full"
                alt={data?.location?.name}
                borderRadius="12px"
                objectFit="cover"
              />

              <CustomNavigation />
            </Box>
          </SwiperSlide>
        ))}
      </Swiper>
      <Box mt={5} fontSize="15px">
        <Flex
          justifyContent="space-between"
          gap="10px"
          flexWrap="wrap"
          fontSize="inherit"
        >
          <Heading as="h4" fontSize="inherit">
            {data?.location?.name}
          </Heading>
          <Flex gap="5px" alignItems="center">
            <Star size="14px" />
            <Text fontSize="inherit">{data?.rating}</Text>
          </Flex>
        </Flex>

        <Text fontSize="inherit" color="black.50">
          {data?.location?.landmark}
        </Text>
        <Text fontSize="inherit" color="black.50">
          {data?.duration}
        </Text>
        <Flex alignItems="center" gap="5px">
          <Heading as="h4" fontSize="inherit">
            ${data?.fee}
          </Heading>
          <Text fontSize="inherit" color="black.100">
            night
          </Text>
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
