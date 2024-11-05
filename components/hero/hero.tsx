
"use client";
import React from "react";
import { motion, useScroll, useTransform, useSpring, MotionValue } from "framer-motion";
import { Box, Button, ButtonGroup, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import { products } from "./products";

export const HeroParallax = () => {
  const firstRow = products;
  const secondRow = products.reverse();

  const ref = React.useRef(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ["start start", "end start"],
  });

  const springConfig = { stiffness: 300, damping: 30, bounce: 100 };

  const translateX = useSpring(useTransform(scrollYProgress, [0, 1], [0, 1000]), springConfig);
  const translateXReverse = useSpring(useTransform(scrollYProgress, [0, 1], [0, -1000]), springConfig);
  const rotateX = useSpring(useTransform(scrollYProgress, [0, 0.2], [15, 0]), springConfig);
  const opacity = useSpring(useTransform(scrollYProgress, [0, 0.2], [0.2, 1]), springConfig);
  const rotateZ = useSpring(useTransform(scrollYProgress, [0, 0.2], [20, 0]), springConfig);
  const translateY = useSpring(useTransform(scrollYProgress, [0, 0.2], [-700, 500]), springConfig);
  return (
    <div
      ref={ref}
      className="h-[180vh] pt-40 overflow-hidden  antialiased relative flex flex-col self-auto [perspective:1000px] [transform-style:preserve-3d]"
    >
      <Header />
      <motion.div
        style={{
          rotateX,
          rotateZ,
          translateY,
          opacity,
        }}
        className=""
      >
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {firstRow.map((product) => (
            <ProductCard product={product} translate={translateX} key={product.title} />
          ))}
        </motion.div>
        <motion.div className="flex flex-row-reverse space-x-reverse space-x-20 mb-20">
          {secondRow.map((product) => (
            <ProductCard product={product} translate={translateXReverse} key={product.title} />
          ))}
        </motion.div>
      </motion.div>
    </div>
  );
};

export const Header = () => {
  const paragraph =
    "<p>Frontend developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience. I&apos;m passionate about continuously learning in the tech industry and supporting people to solve their technical problems.</p>";

  return (
    <div className="max-w-7xl relative mx-auto px-4 w-full  left-0 top-0">
      <Box w="max-content" mx={{ base: "auto", lg: "unset" }}>
        <Text fontSize={"lg"} fontWeight={"semibold"}>
          Hello, I&apos;m{" "}
        </Text>
        <Box w="100px" h="4px" mt={1} bgColor={"brand.black"}></Box>
      </Box>
      <Text
        as="h1"
        align={{ base: "center", lg: "left" }}
        fontSize={{ base: "80px", sm: "120px" }}
        fontWeight={"extrabold"}
      >
        James
      </Text>
      <Text align={{ base: "center", lg: "left" }} maxW={"800px"}>
        {paragraph}
      </Text>
      <ButtonGroup
        mt={8}
        gap={4}
        mx={{ base: "auto", lg: "inherit" }}
        justifyContent={{ base: "center", lg: "start" }}
        display={"flex"}
      >
        <Button
          as="a"
          href="/#experience"
          py={6}
          px={10}
          fontSize={"lg"}
          variant="outline"
          borderColor={"brand.black"}
          borderWidth={1}
          fontWeight={"normal"}
          borderRadius={"full"}
          _hover={{ bg: "brand.black", color: "#fff" }}
        >
          My experience
        </Button>
        <Button
          as="a"
          href="/#projects"
          py={6}
          px={10}
          fontSize={"lg"}
          variant="outline"
          borderColor={"brand.black"}
          borderWidth={1}
          fontWeight={"normal"}
          borderRadius={"full"}
          _hover={{ bg: "brand.black", color: "#fff" }}
        >
          Projects
        </Button>
      </ButtonGroup>
    </div>
  );
};

export const ProductCard = ({
  product,
  translate,
}: {
  product: {
    title: string;
    link: string;
    thumbnail: string;
  };
  translate: MotionValue<number>;
}) => {
  return (
    <motion.div
      style={{
        x: translate,
      }}
      whileHover={{
        y: -20,
      }}
      key={product.title}
      className="group/product h-96 w-[30rem] relative flex-shrink-0"
    >
      <Link href={product.link} className="block group-hover/product:shadow-2xl ">
        <Image
          src={product.thumbnail}
          height="600"
          width="600"
          className="object-cover object-left-top absolute h-full w-full inset-0"
          alt={product.title}
        />
      </Link>
      <div className="absolute inset-0 h-full w-full opacity-0 group-hover/product:opacity-80 bg-black pointer-events-none"></div>
      <h2 className="absolute bottom-4 left-4 opacity-0 group-hover/product:opacity-100 text-white">{product.title}</h2>
    </motion.div>
  );
};
