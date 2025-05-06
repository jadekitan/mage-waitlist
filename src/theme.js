import { createSystem, defineConfig, defaultConfig } from "@chakra-ui/react";

const config = defineConfig({
  theme: {
    tokens: {
      colors: {
        white: { value: "rgba(255, 255, 255, 1)" },
        dark: { value: "rgba(8, 8, 8, 1)" },
        grey: {
          50: { value: "rgba(191, 191, 191, 0.2)" },
          500: { value: "rgba(191, 191, 191, 1)" },
          700: { value: "rgba(130, 130, 130, 1)" },
        },
        primary: {
          500: { value: "rgba(167, 76, 242, 1)" },
        },
        secondary: {
          500: { value: "rgba(57, 99, 215, 1)" },
        },
      },
      fonts: {
        heading: { value: "system-ui, sans-serif" },
        body: { value: "system-ui, sans-serif" },
      },
    },
  },
});

export const system = createSystem(defaultConfig, config);
