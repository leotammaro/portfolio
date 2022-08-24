import {
  Box,
  Flex,
  Image,
  Stack,
  StackDivider,
  Text,
} from "@chakra-ui/react";
import React, { forwardRef } from "react";
import { Fade } from "react-reveal";
import yope from "../images/yope.jpg";
import { technologies } from "../services/technologies";
import TextAboutMe from "./TextAboutMe";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const AboutMe = forwardRef((_, ref) => {

  return (
    <Flex
      width={"100%"}
      bgGradient={"linear(135deg,#02aab0 0%,#00cdac 100%)"}
      clipPath={"polygon(0 0, 100% 0, 100% 90%, 0 100%);"}
      justifyContent={"space-around"}
      direction={"column"}
      alignItems={"center"}
      paddingBottom={100}
      ref={ref}
      minH={"100vh"}
      zIndex={1000}
    >
      <Fade duration={2000}>
        <Text
          fontSize={{ base: 32, md: 32, xl: 44 }}
          fontWeight={600}
          color="white"
          padding={{ base: "10px", lg: "30px" }}
        >
          Sobre mi
        </Text>
      </Fade>
      <Stack
        justifyContent={"center"}
        padding="30px"
        direction={{ base: "column", md: "row" }}
        spacing={{ base: 10, xl: 20 }}
        divider={<StackDivider marginTop={"0 !important"} />}
        alignItems={"center"}
      >
        <Fade bottom distance={"50px"} duration={1500}>
          <Image
            src={yope}
            w={{ base: 150, md: 200 }}
            h={{ base: 150, md: 200 }}
            borderRadius={"50%"}
            objectFit={{ base: "cover", xl: "none" }}
            marginBottom={5}
          />
        </Fade>
        <Fade left distance={"50px"} duration={1500}>
          <Stack w={{ base: 300, xl: 500 }}>
            <TextAboutMe
              description={`Soy Leo, tengo 24 años y soy Full Stack Developer`}
            />
            <TextAboutMe
              description={
                "Para el front-end utilizo React JS. Desarrollo de interfaces de usuarios utilizando la librería Chakra UI. Realizo integraciones con REST API´s. Desarrollo de web´s siguiendo un diseño. "
              }
            />
            <TextAboutMe
              description={
                "En el back-end utilizo Node JS, Express, bases de datos no relacionales utilizando MONGODB mediante mongoose."
              }
            />
            <TextAboutMe
              description={
                "Testing utilizando Jest y Cypress"
              }
            />
          </Stack>
        </Fade>
      </Stack>
      <Box w={{ base: 300, md: 600, lg: 900 }}>
        <Carousel
          autoPlay
          infiniteLoop
          showArrows={false}
          showIndicators={false}
          showStatus={false}
          interval={2000}
          transitionTime={2000}
          showThumbs={false}
        >
          {technologies.map((technologie, index) => {
            return (
              <Box key={index}>
                <Image src={technologie.logo} h={65} objectFit={"contain"} />
              </Box>
            );
          })}
        </Carousel>
      </Box>
    </Flex>
  );
});

export default AboutMe;
