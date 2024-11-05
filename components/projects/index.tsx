import { FC } from "react";
import Image from "next/image";
import { Box, Link, Stack, Text } from "@chakra-ui/react";
import { PROJECTS } from "./data";

const isEven = (index: number) => index % 2 === 0

const Projects: FC = () => {
  return (
    <Box id="projects" maxW={"1200px"} mx={"auto"} px={4} mt={32} display={"grid"}>
      <Stack
        direction="row"
        bgColor={"brand.black"}
        px={{ base: 12, md: 24 }}
        py={4}
        w={"max-content"}
        justifySelf={{ base: "center", sm: "flex-start" }}
      >
        <Text fontSize={"lg"} color={"#fff"} fontWeight={"semibold"}>
          A few projects so far
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
      <Stack gap={10} mt={10}>
        {PROJECTS.map((project, index) => {
          return (
            <Stack
              key={project.title}
              flexDir={{ base: "column", md: "row" }}
              justifyContent={"space-between"}
              gap={8}
            >
              <Box
                order={{ base: 0, md: isEven(index) ? 0 : 1 }}
                mt={4}
                flex={0.8}
              >
                <Text
                  fontSize={"3xl"}
                  fontWeight={"semibold"}
                  bgGradient={project.gradient}
                  w={"max-content"}
                  backgroundClip={"text"}
                >
                  {project.title}
                </Text>
                <Text fontSize={"lg"} mt={4}>
                  {project.description}
                </Text>
              </Box>
              <Box mt={{ base: 4, md: 0 }} flex={1}>
                <Link href={project.link} target="_blank">
                  <Image
                    width={650} height={550}
                    src={project.image}
                    alt={project.title}
                    className="object-contain"
                  />
                </Link>
              </Box>
            </Stack>
          );
        })}
      </Stack>
    </Box>
  );
};

export default Projects;
