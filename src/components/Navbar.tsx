import { HStack, IconButton, Image } from "@chakra-ui/react";
import vite from "../assets/vite.svg";
import { ColorModeSwitch } from "./ColorModeSwitch";
import { SearchInput } from "./SearchInput";
import { Link } from "react-router-dom";
import { BsInfo } from "react-icons/bs";
const Navbar = () => {
  return (
    <HStack padding="10px">
      <Link to={"/"}>
        <Image src={vite} boxSize="50px" objectFit={"contain"} />
      </Link>
      <SearchInput />
      <Link to="/about">
        <IconButton
          aria-label="About"
          _hover={{ bg: "green.500" }}
          isRound
          icon={<BsInfo />}
        />
      </Link>
      <ColorModeSwitch />
    </HStack>
  );
};

export default Navbar;
