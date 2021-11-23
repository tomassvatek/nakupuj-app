import React, { ReactNode } from "react";
import NextLink from "next/link";
import {
  Box,
  Flex,
  Avatar,
  HStack,
  Link,
  IconButton,
  Button,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuDivider,
  useDisclosure,
  useColorModeValue,
  Stack,
  Input,
  InputGroup,
  InputLeftElement,
  AvatarBadge,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon, SearchIcon } from "@chakra-ui/icons";
import Logo from "./Logo";
import { BsCartFill } from "react-icons/bs";
import { useCart } from "../hooks/useCart";
import { formatPrice } from "../utils/formatters";
import useLocalStorage from '../hooks/useLocalStorage';

const NavigationLinks = {
  "/search": "Hledání",
};

const NavLink = ({ children, href }: { children: ReactNode; href: string }) => (
  <Link
    as={NextLink}
    px={2}
    py={1}
    rounded={"md"}
    _hover={{
      textDecoration: "none",
      bg: useColorModeValue("gray.200", "gray.700"),
    }}
    href={href}
  >
    {children}
  </Link>
);

export default function Navbar() {
  const { cartTotal } = useCart();
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box bg={useColorModeValue("gray.100", "gray.900")} px={4}>
        <Flex h={16} alignItems={"center"} justifyContent={"space-between"}>
          <IconButton
            size={"md"}
            icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
            aria-label={"Open Menu"}
            display={{ md: "none" }}
            onClick={isOpen ? onClose : onOpen}
          />
          <HStack spacing={8} alignItems={"center"} flex={1}>
            <Box>
              <NextLink href="/">
                <a>
                  <Logo />
                </a>
              </NextLink>
            </Box>
            <HStack
              as={"nav"}
              spacing={4}
              display={{ base: "none", md: "flex" }}
              flex={1}
            >
              <InputGroup>
                <InputLeftElement pointerEvents="none">
                  <SearchIcon />
                </InputLeftElement>
                <Input placeholder="Hledat" background="white" />
              </InputGroup>
            </HStack>
          </HStack>
          <Flex alignItems={"center"}>
            <NextLink href="/cart">
              <Button aria-label="Košík" leftIcon={<BsCartFill />}>
                {cartTotal > 0 ? formatPrice(cartTotal) : "Košík"}
              </Button>
            </NextLink>
            <UserAvatar />
          </Flex>
        </Flex>

        {isOpen ? (
          <Box pb={4} display={{ md: "none" }}>
            <Stack as={"nav"} spacing={4}>
              {Object.keys(NavigationLinks).map((key) => (
                <NavLink href={key} key={key}>
                  {(NavigationLinks as any)[key]}
                </NavLink>
              ))}
            </Stack>
          </Box>
        ) : null}
      </Box>
    </>
  );
}


function UserAvatar() {
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

