import {
  Image,
  Text,
  AspectRatio,
  VStack,
  Spacer,
  Badge,
} from '@chakra-ui/react';
import React from 'react';
import { formatPrice, formatWeight } from '../utils/formatters';
import { IProductVariant } from '../types';

interface Props {
  variant: IProductVariant;
  cheapest?: boolean;
};

export default function ProductVariantItem({ variant, cheapest }: Props) {
  return (
    <>
      <AspectRatio w="64px" h="64px" ratio={4 / 3}>
        <Image
          src={variant.imageURL}
          alt={variant.title}
          objectFit="cover"
        />
      </AspectRatio>
      <VStack align="flex-start" ml="5" pt="2">
        <strong>{variant.title}</strong>
        <Text>{variant.supplier.name}</Text>
        <Text fontSize="sm">
          {formatWeight(variant.weight)}
        </Text>
      </VStack>
      <Spacer />
      <VStack align="flex-start" ml="5" pt="2" textAlign="right">
        {cheapest ? <Badge colorScheme={'green'}>Nejlevnější</Badge> : null}
        <Text fontSize={'lg'} fontWeight="bold">{formatPrice(variant.price)}</Text>
      </VStack>
    </>
  )
}
