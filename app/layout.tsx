import type { Metadata } from "next";
import "./globals.css";
import { Providers } from "./providers";
import { fonts } from "./chakra-config";

export const metadata: Metadata = {
	title: "Ofori James Ayerakwa",
	description:
		"A Frontend developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience. I'm passionate about continuously learning in the tech industry and supporting people to solve their technical problems.",
	icons: {
		icon: "/favicon.ico",
	},
	openGraph: {
		title: "Ofori James Ayerakwa",
		description:
			"A Frontend developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience. I'm passionate about continuously learning in the tech industry and supporting people to solve their technical problems.",
	},
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className={fonts.commissioner.className}>
			<body>
				<Providers>{children}</Providers>
			</body>
		</html>
	);
}
