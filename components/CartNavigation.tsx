import { Box, SimpleGrid, Flex, Text, useColorModeValue } from '@chakra-ui/react';
import NextLink from "next/link";
import React from 'react';

interface CardProps {
  title: string;
  step: string;
  icon?: React.ReactNode;
  active?: boolean;
}

function Card(props: CardProps) {
  const { title, step, icon, active } = props;

  return (
    <Box
      px="2"
      py={'5'}
      mb="2"
      border={'1px solid'}
      borderColor={active ? 'gray.500' : 'gray.300'}
      rounded={'md'}
      bg={active ? 'gray.500' : 'white'}
      color={active ? 'white' : 'black'}
    >
      <Flex justifyContent={'space-between'}>
        <Box pl={{ base: 2, md: 4 }}>
          <Text fontWeight={'medium'} isTruncated>
            {step}
          </Text>
          <Text fontSize={'2xl'} fontWeight={'medium'}>
            {title}
          </Text>
        </Box>
        <Box
          my={'auto'}
          color={useColorModeValue('gray.800', 'gray.200')}
          alignContent={'center'}>
          {icon}
        </Box>
      </Flex>
    </Box>
  );
}

const steps = [
  {
    title: 'Košík',
    step: '1',
    url: '/cart',
  },
  {
    title: 'Kontaktní údaje',
    step: '2',
    url: '/cart/contact',
  },
  {
    title: 'Doprava a platba',
    step: '3',
    url: '/cart/payment',
  },
  // {
  //   title: 'Souhrn',
  //   step: '4',
  //   url: '/cart/summary',
  // },
];

interface Props {
  activeIndex: number;
};

const CartNavigation: React.FC<Props> = ({ activeIndex }) => {
  return (
    <Box maxW="7xl" mx={'auto'} py={5}>
      <SimpleGrid columns={{ base: 1, md: 3 }} spacing={{ base: 5, lg: 4 }}>
        {steps.map((step, index) => (
          <NextLink key={index} href={step.url} passHref>
            <a>
              <Card
                title={step.title}
                step={step.step}
                active={index === activeIndex}
              />
            </a>
          </NextLink>
        ))}
      </SimpleGrid>
    </Box>
  )
}

export default CartNavigation;
