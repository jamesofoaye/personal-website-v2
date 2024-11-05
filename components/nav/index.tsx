"use client";

import { FC, useState } from "react";
import {
  Box, Container, Flex, HStack, IconButton,
  Image, Stack, Link as ChakraLink
} from "@chakra-ui/react";
import NextLink from "next/link";
import { CgMenuRightAlt } from "react-icons/cg";
import MobileNav from "./MobileNav";
import { AiOutlineClose } from "react-icons/ai";
import { MdOutlineEmail } from "react-icons/md";
import { NAV_ITEMS } from "./data";

const MAIL_TO = "mailto:jamesofoaye@gmail.com?subject=Hi James, Found you via your website☺";

type NavLinkProps = {
  href: string;
  children: React.ReactNode;
};

const NavLink: FC<NavLinkProps> = ({ href, children }) => (
  <Stack className="group" alignItems="center" pos="relative">
    <ChakraLink
      _hover={{ textDecor: "none", fontWeight: "bold" }} asChild
      _focus={{ outline: "none" }}
    >
      <NextLink href={href}>{children}</NextLink>
    </ChakraLink>
    <Box
      w="50%" h="4px" opacity={0}
      bgColor="brand.gold"
      className="nav_bottom_border"
      transition="opacity 0.3s linear"
      pos="absolute" bottom={-2}
    />
  </Stack>
);

export const Nav = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <Box as="section" w="full" position="sticky" top={0} bg="#fff" zIndex={99}>
      <Box as="nav" boxShadow="sm" py={{ base: 2.5, md: 1.5 }}>
        <Container maxW="1500px" pos="relative" mx="auto" px={4} py={{ base: 0, lg: 4 }}>
          <Flex justifyContent="space-between">
            <HStack gap="4">
              <ChakraLink href="/" asChild>
                <Image src="/logo.svg" width={{ base: "120px", sm: "auto" }} alt="James Ofori Ayerakwa" />
              </ChakraLink>
            </HStack>
            <HStack gap={{ base: 10, lg: 20 }} display={{ base: "none", md: "flex" }}>
              {NAV_ITEMS.map(({ label, href }) => (
                <NavLink key={label} href={href}>{label}</NavLink>
              ))}
            </HStack>
            <ChakraLink
              title="Email me"
              px={5} py={2} fontSize="lg" borderColor="brand.black"
              borderWidth={2} fontWeight="normal"
              _hover={{ bg: "brand.black", color: "#fff" }}
              display={{ base: "none", md: "flex" }}
              borderRadius="full" asChild
              _focus={{ outline: "none" }}
            >
              <NextLink href={MAIL_TO} target="_blank">
                <MdOutlineEmail />
                let&apos;s talk
              </NextLink>
            </ChakraLink>
            <HStack display={{ base: "flex", md: "none" }}>
              <IconButton aria-label="Email me" title="Email me" variant="outline" border="none" p={1}>
                <NextLink href={MAIL_TO} target="_blank">
                  <MdOutlineEmail fontSize="30px" />
                </NextLink>
              </IconButton>
              <IconButton
                variant="ghost"
                _hover={{ bg: "brand.blue" }}
                aria-label="Open Menu"
                alignSelf="center"
                onClick={() => setIsNavOpen(!isNavOpen)}
              >
                {isNavOpen ? <AiOutlineClose fontSize="20px" color="black" /> : <CgMenuRightAlt fontSize="2rem" />}
              </IconButton>
            </HStack>
          </Flex>
        </Container>
        <MobileNav isNavOpen={isNavOpen} />
      </Box>
    </Box>
  );
};
