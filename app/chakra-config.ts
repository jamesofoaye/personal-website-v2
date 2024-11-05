import { Commissioner } from "next/font/google";
import { extendTheme } from "@chakra-ui/react";

const commissioner = Commissioner({
	subsets: ["latin"],
});

export const fonts = {
	commissioner,
};

const colors = {
	brand: {
		// you can add more custom colors here
		black: "#0E1017",
		gold: "#E6AF2E",
	},
};

export const theme = extendTheme({
	fonts: {
		body: commissioner.style.fontFamily,
	},
	colors,
});
