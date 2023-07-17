import { HStack, Image } from "@chakra-ui/react";
import vite from "../assets/vite.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";

const Navbar = () => {
  return (
    <HStack justifyContent="space-between" padding="10px">
      <Image src={vite} boxSize="50px" />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
