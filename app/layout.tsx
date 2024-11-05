import type { Metadata } from "next";
import "./globals.css";
import { fonts } from "./chakra-config";
import { Provider } from "@/components/ui/provider"
import { FC, ReactNode } from "react";

export const metadata: Metadata = {
  title: "Ofori James Ayerakwa",
  description:
    "A Frontend Engineer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience. I'm passionate about continuously learning in the tech industry and supporting people to solve their technical problems.",
  icons: {
    icon: "/favicon.ico",
  },
  openGraph: {
    title: "Ofori James Ayerakwa",
    description:
      "A Frontend Engineer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience. I'm passionate about continuously learning in the tech industry and supporting people to solve their technical problems.",
  },
};

type RootLayoutProps = {
  children: ReactNode;
};

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html
      suppressHydrationWarning lang="en"
      className={fonts.commissioner.className}
    >
      <body>
        <Provider>{children}</Provider>
      </body>
    </html>
  );
}

export default RootLayout;