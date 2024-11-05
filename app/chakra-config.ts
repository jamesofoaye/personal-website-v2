import { Commissioner } from "next/font/google";
import { createSystem, defaultConfig } from "@chakra-ui/react";

const commissioner = Commissioner({
  subsets: ["latin"],
});

export const fonts = { commissioner };

export const systemTheme = createSystem(defaultConfig, {
  theme: {
    tokens: {
      colors: {
        brand: {
          black: { value: "#0E1017", description: "Primary black color" },
          gold: { value: "#E6AF2E", description: "Primary gold color" },
        },
      },
      fonts: {
        body: { value: commissioner.style.fontFamily },
      }
    }
  }
});