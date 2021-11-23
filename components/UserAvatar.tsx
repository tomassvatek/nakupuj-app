import React from "react";
import {
  Avatar,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
} from "@chakra-ui/react";
import useLocalStorage from '../hooks/useLocalStorage';

export default function UserAvatar() {
  const [isLoggedIn, setLoggedIn] = useLocalStorage('login', '');
  const handleLogin = () => {
    setLoggedIn('true');
  }

  const handleLogout = () => {
    setLoggedIn('');
  }

  if (isLoggedIn) {
    return (
      <Menu>
        <MenuButton
          as={Button}
          rounded={"full"}
          variant={"link"}
          cursor={"pointer"}
          minW={0}
        >
          <Avatar
            size={"sm"}
            src={"https://images.unsplash.com/photo-1493666438817-866a91353ca9?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9"}
          ></Avatar>
        </MenuButton>
        <MenuList>
          <MenuItem>Účet</MenuItem>
          <MenuItem>Objednávky</MenuItem>
          <MenuDivider />
          <MenuItem
            onClick={handleLogout}
          >
            Odhlásit se
          </MenuItem>
        </MenuList>
      </Menu>
    );
  }

  return (
    <Button
      as={Button}
      rounded={"full"}
      variant={"link"}
      cursor={"pointer"}
      minW={0}
      onClick={handleLogin}
    >
      <Avatar
        size={"sm"}
      ></Avatar>
    </Button>
  );
}

