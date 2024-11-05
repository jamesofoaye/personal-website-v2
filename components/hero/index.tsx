import { Box, Button, ButtonGroup, Stack, Text } from "@chakra-ui/react";
import Image from "next/image";

const Hero = () => {
	const paragraph =
		"<p>Frontend developer with a strong eye for innovative design and a keen understanding of techniques geared toward optimum user experience. I&apos;m passionate about continuously learning in the tech industry and supporting people to solve their technical problems.</p>";

	return (
		<Stack
			maxW={"1200px"}
			mx={"auto"}
			mt={{ base: 14, lg: 20 }}
			px={4}
			direction={{ base: "column", lg: "row" }}
			justifyContent={"space-between"}
			gap={4}
		>
			<Box flex={0.9}>
				<Box w="max-content" mx={{ base: "auto", lg: "inherit" }}>
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
				<Text align={{ base: "center", lg: "left" }}>{paragraph}</Text>
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
			</Box>
			<Box display={"flex"} justifyContent={"center"}>
				<Image
					width={600}
					height={500}
					src={"/hero.webp"}
					alt="male holding a laptop"
					className="lg:h-[500px] object-contain"
				/>
			</Box>
		</Stack>
	);
};

export default Hero;
