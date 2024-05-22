import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import { Box } from "@chakra-ui/react";

export const Layout = () => {
  return (
    <>
      <Navbar />
      <Box padding={5}>
        <Outlet />
      </Box>
    </>
  );
};
