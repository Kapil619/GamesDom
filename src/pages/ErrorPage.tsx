import { Box, Heading, Text } from "@chakra-ui/react";
import { isRouteErrorResponse, useRouteError } from "react-router-dom";
import Navbar from "../components/Navbar";

const ErrorPage = () => {
  const erorr = useRouteError();
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Heading>Not Found</Heading>
        <Text>
          {isRouteErrorResponse(erorr)
            ? "This page does not exist"
            : "An unexpected error has occured"}
        </Text>
      </Box>
    </>
  );
};

export default ErrorPage;
