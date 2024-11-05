import { FC } from "react";
import Link from "next/link";
import { chakra, Link as ChakraLink } from "@chakra-ui/react";
import { motion } from "framer-motion";
import { NAV_ITEMS } from "./data";

type MobileNavProps = {
  isNavOpen: boolean;
};

const variants = {
  visible: { opacity: 1, y: 0 },
  hidden: { opacity: 0, y: -200 },
};

const MobileNav: FC<MobileNavProps> = ({ isNavOpen }) => {
  return (
    <>
      {isNavOpen && (
        <chakra.div
          w="full" pos={"absolute"}
          display={{ base: "block", lg: "none" }}
          bgColor={"#fff"} borderWidth={1}
        >
          <motion.div
            initial="hidden" animate="visible"
            variants={variants}
            style={{ padding: "1rem", display: "flex", flexDirection: "column", gap: "0.5rem" }}
          >
            {NAV_ITEMS.map((item, index) => (
              <ChakraLink
                key={`nav-item-${index}`} asChild
                _hover={{ textDecor: "none", fontWeight: "bold" }}
                _focus={{ outline: "none" }}
              >
                <Link href={item.href}>{item.label}</Link>
              </ChakraLink>
            ))}
          </motion.div>
        </chakra.div>
      )}
    </>
  );
};

export default MobileNav;
