import { FC, ReactNode } from "react";
import type { Metadata } from "next";
import { SpeedInsights } from "@vercel/speed-insights/next"
import { Analytics } from "@vercel/analytics/react"
import "./globals.css";
import { fonts } from "./chakra-config";
import { Provider } from "@/components/ui/provider"

const SEO_METADATA = Object.freeze({
  title: "Ofori James Ayerakwa",
  description: "A Frontend Engineer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience. I'm passionate about continuously learning in the tech industry and supporting people to solve their technical problems.",
  image: "https://ofori-james-ayerakwa.me/og-image.jpg",
})

export const metadata: Metadata = {
  title: SEO_METADATA.title,
  description: SEO_METADATA.description,
  openGraph: {
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
    images: [SEO_METADATA.image],
  },
  twitter: {
    title: SEO_METADATA.title,
    description: SEO_METADATA.description,
    images: [SEO_METADATA.image],
  }
};

type RootLayoutProps = { children: ReactNode };

const RootLayout: FC<RootLayoutProps> = ({ children }) => {
  return (
    <html
      suppressHydrationWarning lang="en"
      className={fonts.commissioner.className}
    >
      <body>
        <Provider>{children}</Provider>
        <SpeedInsights />
        <Analytics />
      </body>
    </html>
  );
}

export default RootLayout;