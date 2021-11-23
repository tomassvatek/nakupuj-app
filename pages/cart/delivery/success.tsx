import {Box, Button, Heading, Text} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import type {NextPage} from "next";
import NextLink from "next/link";
import React from "react";

const Success:NextPage =  () => {
    return (
        <Box textAlign="center" py={10} px={6}>
            <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
                Nákup byl úspěšně dokončen
            </Heading>
            <Text color={'gray.500'}>
                Děkujeme Vám za nákup na portálu Nakupuj.cz. <br/> Vaši objednávku předáme dodavateli a bude u Vás v zadaný čas.
            </Text>
            <div style={{paddingTop: '2rem'}}>
                <NextLink href="/">
                    <Button size="lg">Zpět na hlavní stranu</Button>
                </NextLink>
            </div>
        </Box>
    );
}

export default Success;