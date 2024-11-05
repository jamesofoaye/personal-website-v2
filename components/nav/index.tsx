"use client";

import {
	Box,
	Button,
	Container,
	Flex,
	HStack,
	IconButton,
	Image,
	Stack,
} from "@chakra-ui/react";
import { CgMenuRightAlt } from "react-icons/cg";
import MobileNav from "./MobileNav";
import { useState } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "@chakra-ui/next-js";
import { MdOutlineEmail } from "react-icons/md";

export const Nav = () => {
	const [isNavOpen, setIsNavopen] = useState<boolean>(false);

	return (
		<Box as="section" w="full" position={"sticky"} top={0} bg="#fff" zIndex={99}>
			<Box as="nav" boxShadow="sm" py={{ base: 2.5, md: 1.5 }}>
				<Container
					maxW="1500px"
					pos={"relative"}
					mx={"auto"}
					p={0}
					px={4}
					py={{ base: 0, lg: 4 }}
				>
					<Flex justifyContent="space-between">
						<HStack spacing="4">
							<Link href="/">
								<Image
									src="/logo.svg"
									width={{ base: "120px", sm: "auto" }}
									alt="James Ofori Ayerakwa"
								/>
							</Link>
						</HStack>
						<HStack
							gap={{ base: 10, lg: 20 }}
							display={{ base: "none", md: "flex" }}
						>
							<Stack
								className="group"
								alignItems={"center"}
								pos={"relative"}
							>
								<Link
									href={"/"}
									_hover={{ textDecor: "none", fontWeight: "bold" }}
								>
									Home
								</Link>
								<Box
									w="50%"
									h={"4px"}
									opacity={0}
									bgColor={"brand.gold"}
									className="nav_bottom_border"
									transition={"opacity 0.3s linear"}
									pos={"absolute"}
									bottom={-2}
								></Box>
							</Stack>
							<Stack
								className="group"
								alignItems={"center"}
								pos={"relative"}
							>
								<Link
									href={"/#experience"}
									_hover={{ textDecor: "none", fontWeight: "bold" }}
								>
									Experience
								</Link>
								<Box
									w="50%"
									h={"4px"}
									opacity={0}
									bgColor={"brand.gold"}
									className="nav_bottom_border"
									transition={"opacity 0.3s linear"}
									pos={"absolute"}
									bottom={-2}
								></Box>
							</Stack>
							<Stack
								className="group"
								alignItems={"center"}
								pos={"relative"}
							>
								<Link
									href={"/#projects"}
									_hover={{ textDecor: "none", fontWeight: "bold" }}
								>
									Projects
								</Link>
								<Box
									w="50%"
									h={"4px"}
									opacity={0}
									bgColor={"brand.gold"}
									className="nav_bottom_border"
									transition={"opacity 0.3s linear"}
									pos={"absolute"}
									bottom={-2}
								></Box>
							</Stack>
						</HStack>

						<Button
							leftIcon={<MdOutlineEmail />}
							as="a"
							href="mailto:jamesofoaye@gmail.com?subject=Hi James, Found you via your website☺"
							target="_blank"
							title="James' email Link"
							p={5}
							fontSize={"lg"}
							variant="outline"
							borderColor={"brand.black"}
							borderWidth={2}
							fontWeight={"normal"}
							_hover={{ bg: "brand.black", color: "#fff" }}
							display={{ base: "none", md: "flex" }}
							borderRadius={"full"}
						>
							let&apos;s talk
						</Button>
						<HStack display={{ base: "flex", md: "none" }}>
							<IconButton
								aria-label={""}
								as="a"
								icon={<MdOutlineEmail fontSize={"30px"} />}
								href="mailto:jamesofoaye@gmail.com?subject=Hi James, Found you via your website☺"
								target="_blank"
								title="James' email Link"
								variant="outline"
								border={"none"}
								p={1}
							/>

							<IconButton
								variant="ghost"
								_hover={{ bg: "brand.blue" }}
								icon={
									isNavOpen ? (
										<AiOutlineClose fontSize={"20px"} color="black" />
									) : (
										<CgMenuRightAlt fontSize="2rem" />
									)
								}
								aria-label="Open Menu"
								alignSelf="center"
								onClick={() => setIsNavopen(!isNavOpen)}
							/>
						</HStack>
					</Flex>
				</Container>
				<MobileNav isNavOpen={isNavOpen} setIsNavOpen={setIsNavopen} />
			</Box>
		</Box>
	);
};
