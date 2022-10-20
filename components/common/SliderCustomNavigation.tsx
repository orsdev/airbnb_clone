import { Box } from "@chakra-ui/react";
import { useState } from "react";
import { useSwiper } from "swiper/react";
import ArrowRight from "remixicon-react/ArrowRightSLineIcon";
import ArrowLeft from "remixicon-react/ArrowLeftSLineIcon";

const SliderCustomNavigation = () => {
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
        className={`swiper__prev__card ${
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
        zIndex="sticky"
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
        className={`swiper__next__card ${
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
        zIndex="sticky"
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

export default SliderCustomNavigation;
