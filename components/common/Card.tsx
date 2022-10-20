import { Box, Flex, Heading, Image, Text } from "@chakra-ui/react";
import React, { FC } from "react";
import Star from "remixicon-react/StarFillIcon";
import { MouseEvent, useState } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination } from "swiper";
import Heart3LineIcon from "remixicon-react/Heart3LineIcon";
import Heart3FillIcon from "remixicon-react/Heart3FillIcon";
import SliderCustomNavigation from "./SliderCustomNavigation";

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

const Card: FC<{ data: IProps }> = ({ data }) => {
  const [favorite, setFavorite] = useState(false);

  return (
    <Box
      w="full"
      overflow="hidden"
      pos="relative"
      cursor="pointer"
      bg="white"
      __css={{
        ".swiper-pagination-bullet": {
          transform: "scale(.8)",
        },

        "&:hover": {
          ".swiper__next__card": {
            visibility: "visible",
          },
          "& .swiper__prev__card": {
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
            <Box
              pos="relative"
              className="swiper__image"
              w="full"
              h="284px"
              zIndex="dropdown"
            >
              <Box
                pos="absolute"
                top="20px"
                right="16px"
                as="button"
                color="white"
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
              <SliderCustomNavigation />
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
