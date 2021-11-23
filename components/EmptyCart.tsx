import { Box, Center, Heading, Text } from "@chakra-ui/layout";
import { Button } from "@chakra-ui/react";
import NextLink from "next/link";
import React from "react";
import Logo from "./Logo";

function EmptyCart() {
  return (
    <Box textAlign="center" py={10} px={6} h="78vh">
      {/* <CheckCircleIcon boxSize={"50px"} color={"green.500"} /> */}
      <Center>
        <Logo />
      </Center>
      <Heading as="h2" size="xl" mt={6} mb={2}>
        Košík funguje i jako nákupní seznam
      </Heading>
      <Text pt="5" fontWeight="600" color={"gray.500"}>
        Košík funguje i jako nákupní seznam Zboží můžete přidávat průběžně, jak
        vám doma dochází, nebo když si zrovna na něco vzpomenete. <br /> Počká
        tu na vás do příští objednávky.
      </Text>
      <Box style={{ paddingTop: "2rem" }}>
        <NextLink href="/">
          <Button size="lg">Zpět k nakupu</Button>
        </NextLink>
      </Box>
    </Box>
  );
}

export default EmptyCart;
