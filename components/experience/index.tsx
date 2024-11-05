import { Box, Card, Image, Stack, Text } from "@chakra-ui/react";
import { EXPERIENCES } from "./data";

const Experience = () => {
	return (
		<Box id="experience" maxW={"1200px"} mx={"auto"} px={4} mt={32} display={"grid"}>
			<Stack
				direction="row"
				bgColor={"brand.black"}
				px={{ base: 12, md: 24 }}
				py={4}
				w={"max-content"}
				justifySelf={{ base: "center", sm: "flex-start" }}
			>
				<Text fontSize={"lg"} color={"#fff"} fontWeight={"semibold"}>
					Working Experience
				</Text>
				<Box
					w={"15px"}
					h={"15px"}
					borderRadius={"full"}
					bgGradient={
						"linear-gradient(to bottom, rgba(227,173,46,1) 0%, rgba(41,47,143,0) 100%)"
					}
				></Box>
			</Stack>
			<Text maxW={{ base: "100%", sm: "50%" }} mt={8}>
				Freelancing is liberating, but working for different companies surrounded
				by genius colleagues has helped me grow a lot.
			</Text>
			<Box
				mt={8}
				display={{ base: "grid", lg: "flex" }}
				gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr" }}
				flexWrap={"wrap"}
				gap={{ base: 8, md: 12 }}
				justifyContent={"center"}
			>
				{EXPERIENCES.map((item) => {
					return (
						<Card
							flexDirection={"row"}
							flexBasis={"30%"}
							gap={4}
							p={4}
							w={"full"}
							borderRadius={0}
							key={item.name}
						>
							<Image src={item.img} width={"70px"} alt={item.name} />
							<Stack alignSelf={"center"}>
								<Text fontWeight={"bold"}>{item.name}</Text>
								<Text color={"gray.500"}>{item.title}</Text>
							</Stack>
						</Card>
					);
				})}
			</Box>
		</Box>
	);
};

export default Experience;
