import { Avatar } from '@chakra-ui/avatar'
import NextLink from "next/link";
import { Box, Divider, Flex, FlexProps, Heading, Link } from '@chakra-ui/layout'
import useLocalStorage from '../hooks/useLocalStorage';

interface NavItemProps extends FlexProps {
}

const NavItem = ({ children, ...rest }: NavItemProps) => {
  return (
    <Link href="#" style={{ textDecoration: 'none' }}>
      <Flex
        align="center"
        py="4"
        fontWeight="bold"
        borderRadius="lg"
        role="group"
        cursor="pointer"
        {...rest}>
        {children}
      </Flex>
    </Link>
  );
};

const Account: React.FC = ({ children }) => {
  const [_, setLoggedIn] = useLocalStorage('login', '');
  const handleLogout = () => {
    setLoggedIn('');
    window.location.href = '/';
  }

  return (
    <Flex minH="100vh" p={4}>
      <Box
        bg={'white'}
        borderRight="1px"
        borderRightColor={'gray.200'}
        w={{ base: 'full', md: 60 }}
        pos="sticky"
        p={1}
        minH="100vh">
        <Flex flexDirection="column" pt={4}>
          <Box pb={2}>
            <Avatar name="Alena Vránová" mb={2} />
            <Heading fontSize={'2xl'}>
              Alena Vránová
            </Heading>
          </Box>

          <Box>
            <NextLink href="/account/orders"><NavItem>Historie objednávek</NavItem></NextLink>
            <NextLink href="/account/settings"><NavItem>Uživatelská nastavení</NavItem></NextLink>
            <NextLink href="/account/adresses"><NavItem>Adresy</NavItem></NextLink>
            <NextLink href="/account/payments"><NavItem>Platební metody</NavItem></NextLink>

            <Divider />
            <NextLink href="/"><NavItem onClick={handleLogout}>Odhlásit se</NavItem></NextLink>
          </Box>

        </Flex>
      </Box>

      <Box p={4} flex={1}>
        {children}
      </Box>
    </Flex>
  )
}

export default Account
