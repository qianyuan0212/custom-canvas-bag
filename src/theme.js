import { createTheme } from "@mantine/core";

export const theme = createTheme({
  primaryColor: "yellow",
  fontFamily: "Inter, sans-serif",
  components: {
    Button: {
      defaultProps: {
        size: "md",
        radius: "md",
      },
    },
    Card: {
      defaultProps: {
        shadow: "sm",
        radius: "md",
        p: "lg",
      },
    },
  },
});
