import { HStack, Image } from "@chakra-ui/react";
import vite from "../assets/vite.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";

const Navbar = () => {
  return (
    <HStack padding="10px">
      <Image src={vite} boxSize="50px" />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
