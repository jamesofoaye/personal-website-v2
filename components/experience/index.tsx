import { FC } from "react";
import { Box, Card, Image, Stack, Text } from "@chakra-ui/react";
import { EXPERIENCES } from "./data";

type ExperienceProps = {};

const Experience: FC<ExperienceProps> = () => {
  return (
    <Box id="experience" maxW={"1200px"} mx={"auto"} px={4} mt={32} display={"grid"}>
      <Stack
        direction="row"
        bgColor={"brand.black"}
        px={{ base: 12, md: 24 }} py={4}
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
        display={"grid"} gridTemplateColumns={{ base: "1fr", sm: "1fr 1fr 1fr" }}
        gap={{ base: 4, sm: 8 }} mt={8} w={"100%"}
      >
        {EXPERIENCES.map((item, index) => {
          return (
            <Card.Root
              key={`experience-${index}`}
              flexDirection={"row"}
              gap={4} p={4} w={"100%"}
              borderRadius={0}
            >
              <Card.Body>
                <Image src={item.img} width={"70px"} alt={item.name} />
                <Stack mt={4}>
                  <Text fontWeight={"bold"}>{item.name}</Text>
                  <Text color={"gray.500"}>{item.title}</Text>
                </Stack>
              </Card.Body>
            </Card.Root>
          );
        })}
      </Box>
    </Box>
  );
};

export default Experience;
