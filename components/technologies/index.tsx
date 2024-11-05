import { Box, Card, Image, Stack, Text } from "@chakra-ui/react";
import {TECHNOLOGIES} from "./data";
const Tech = () => {
	return (
		<Box maxW={"1200px"} mx={"auto"} px={4} mt={32} display={"grid"}>
			<Stack
				direction="row"
				bgColor={"brand.black"}
				px={{ base: 12, md: 24 }}
				py={4}
				w={"max-content"}
				justifySelf={{ base: "center", sm: "end" }}
			>
				<Text fontSize={"lg"} color={"#fff"} fontWeight={"semibold"}>
					Technologies I Use
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
			<Box
				display={"grid"}
				gridTemplateColumns={"repeat(auto-fit, minmax(150px, 1fr))"}
				gap={{ base: "2", sm: 6 }}
				mt={8}
				justifyItems={"center"}
			>
				{TECHNOLOGIES.map((item, index) => (
					<Card
						key={index}
						justifyContent={"center"}
						alignItems={"center"}
						width={"170px"}
						height={"180px"}
						bgColor={item.color}
					>
						<Image src={item.img} width={"60px"} alt={item.name} />
					</Card>
				))}
			</Box>
		</Box>
	);
};

export default Tech;
