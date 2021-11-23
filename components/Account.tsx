import { Avatar } from '@chakra-ui/avatar'
import NextLink from "next/link";
import { Box, Divider, Flex, FlexProps, Heading, Link, Text } from '@chakra-ui/layout'
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
            <NextLink href="/account/orders"><Text fontWeight="bold" pt={4} pd={4} cursor="pointer">Historie objednávek</Text></NextLink>
            <NextLink href="/account/settings"><Text fontWeight="bold" pt={4} pd={4} cursor="pointer">Uživatelská nastavení</Text></NextLink>
            <NextLink href="/account/adresses"><Text fontWeight="bold" pt={4} pd={4} cursor="pointer">Adresy</Text></NextLink>
            <NextLink href="/account/payments"><Text fontWeight="bold" pt={4} pd={4} cursor="pointer">Platební metody</Text></NextLink>

            <Divider pt={4} pd={6} />
            <NextLink href="/"><Text fontWeight="bold" pt={3} cursor="pointer" onClick={handleLogout}>Odhlásit se</Text></NextLink>
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
