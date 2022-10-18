import { extendTheme } from "@chakra-ui/react";
import foundations from "./foundations";
import breakpoints from "./breakpoints";

const styles = extendTheme({
  colors: {
    ...foundations.colors,
  },
});

export const theme = {
  ...foundations,
  ...styles,
  breakpoints,
};
export type Theme = typeof theme;

export default theme;
