// AboutPage.tsx
import {
  Box,
  Heading,
  HStack,
  Image,
  Link,
  ListItem,
  SimpleGrid,
  Text,
  UnorderedList,
  useColorModeValue,
} from "@chakra-ui/react";
import {
  FaGithub,
  FaGlobe,
  FaInstagram,
  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";

const AboutPage = () => {
  const textColor = useColorModeValue("gray.700", "whiteAlpha.700");
  const techColor = useColorModeValue("blackAlpha.800", "yellow.100");
  const mailColor = useColorModeValue("blackAlpha.800", "blue.300");

  return (
    <SimpleGrid columns={{ base: 1, md: 2 }} spacing={5} alignItems="center">
      <Box display="flex" flexDirection="column" alignItems="center">
        <Image
          borderRadius="full"
          boxSize="300px"
          src="https://media.licdn.com/dms/image/D4D03AQEYzigjGUez0w/profile-displayphoto-shrink_400_400/0/1712221287964?e=2147483647&v=beta&t=M5mTU9makykz8Z9RxLN1E3zRK6RGWwtqFybrdbSBSos"
          alt="Kapil Badokar"
          transition="transform 0.2s"
          _hover={{ transform: "scale(1.1)" }}
        />
        <HStack padding={5} gap={3} spacing={2} marginTop={4}>
          <Link
            href="https://x.com/kapil_badokar"
            isExternal
            color="blue.500"
            _hover={{ color: "blue.600" }}
          >
            <FaTwitter size={30} />
          </Link>
          <Link
            href="https://linkedin.com/in/kapil-badokar"
            isExternal
            color="blue.500"
            _hover={{ color: "blue.800" }}
          >
            <FaLinkedin size={30} />
          </Link>
          <Link
            href="https://kapilbadokar.vercel.app/"
            isExternal
            color="green.500"
            _hover={{ color: "green.600" }}
          >
            <FaGlobe size={30} />
          </Link>
          <Link
            href="https://github.com/kapil619"
            isExternal
            color="white.500"
            _hover={{ color: "blue.600" }}
          >
            <FaGithub size={30} />
          </Link>
          <Link
            href="https://instagram.com/_kapil619"
            isExternal
            color="orange.800"
            _hover={{ color: "blue.600" }}
          >
            <FaInstagram size={30} />
          </Link>
        </HStack>
      </Box>

      <Box alignItems={"center"} padding="10px">
        <Heading paddingBottom={3} size="4xl" color="teal.500">
          Kapil Badokar
        </Heading>
        <Text fontSize="2xl" color="gray.600">
          Fullstack Developer & Mobile-App Developer
        </Text>
        <UnorderedList
          spacing={3}
          paddingTop={5}
          paddingLeft={5}
          color={textColor}
          listStyleType={"circle"}
        >
          <ListItem>
            PreFinal Year Student Passionate about creating Websites &
            Applications.
          </ListItem>
          <ListItem>
            Primary Tech Stack :{" "}
            <Text as="span" color={techColor} fontWeight="bold">
              NextJs{" "}
            </Text>
            ,
            <Text as="span" color="green.500" fontWeight="bold">
              ReactJs
            </Text>{" "}
            &
            <Text as="span" color="red.300" fontWeight="bold">
              {" "}
              Flutter
            </Text>
            .
          </ListItem>
          <ListItem>
            Looking for opportunities in Web & App Development.
          </ListItem>
          <ListItem>
            Ask me about Fullstack Development | Mobile Development.
          </ListItem>
          <ListItem>
            Reach me at :{" "}
            <Link
              color={mailColor}
              fontWeight={"bold"}
              href="mailto:kapilbadokar321@gmail.com"
            >
              kapilbadokar321@gmail.com
            </Link>
          </ListItem>
        </UnorderedList>
      </Box>
    </SimpleGrid>
  );
};

export default AboutPage;
