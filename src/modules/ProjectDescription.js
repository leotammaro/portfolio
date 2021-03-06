import { Flex, Image, Text, Link } from "@chakra-ui/react";
import React from "react";
import { Fade } from "react-reveal";

function ProjectDescription({ project }) {
  const { proyectImage, repo, title, description, urlProyect } = project;

  return (
    <Fade left>
      <Flex
        direction={
          "column"}
        padding={10}
        fontWeight="600"
        zIndex={1000}
      >
        <Text
          fontSize={{ base: 18, xl: 24 }}
          textDecoration="underline"
          fontWeight={600}
          color="#fff"
          zIndex={1000}
        >
          {title}
        </Text>
        <Flex alignItems={"center"} direction={{ base: "column", lg: "row" }}>
          <Image
            src={proyectImage}
            w={180}
            objectFit="contain"
            borderRadius={28}
          />
          <Flex
            direction={"column"}
            justifyContent={{ base: "center", xl: "space-between" }}
            alignItems={"center"}
            h="100%"
            paddingLeft={5}

          >
            <Text color={"#fff"} fontSize={14} textAlign={{ base: "center", lg: "left" }} maxW={{ base: 320, lg: 500 }}>
              {description}
            </Text>
            <Flex gap={3}>
              <Link
                border={"1px solid #02aab0"}
                padding={{ base: 1, xl: 2 }}
                _hover={{ outline: "none" }}
                href={urlProyect}
                isExternal
                _focus={{ boxShadow: "none" }}
                color="#fff"
                marginTop={5}
              >
                Ir al proyecto
              </Link>
              <Link
                padding={{ base: 1, xl: 2 }}
                _hover={{ outline: "none" }}
                href={repo}
                isExternal
                _focus={{ boxShadow: "none" }}
                color="primary"
                marginTop={5}
              >
                Source code
              </Link>
            </Flex>
          </Flex>
        </Flex>
      </Flex>
    </Fade>
  );
}

export default ProjectDescription;
