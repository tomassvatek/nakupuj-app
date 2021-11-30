import NextLink from 'next/link';
import { Button, Box, Heading, Text, Flex } from '@chakra-ui/react'
import { Modal, ModalBody, ModalCloseButton, ModalContent, ModalFooter, ModalHeader, ModalOverlay } from '@chakra-ui/modal'
import React from 'react';
import { IProductVariant } from '../types';
import { CheckCircleIcon } from '@chakra-ui/icons';

export interface Props {
  isOpen: boolean;
  onClose(): void;
  variant: IProductVariant;
}

function AddToCartConfirmation({ variant, isOpen, onClose }: Props) {
  return (
    <Modal onClose={onClose} isOpen={isOpen} isCentered>
      <ModalOverlay />
      <ModalContent>
        <ModalCloseButton />
        <ModalBody>
          <Box textAlign="center" py={10} px={6}>
            <CheckCircleIcon boxSize={'50px'} color={'green.500'} />
            <Heading as="h2" size="xl" mt={6} mb={2}>
              Vloženo
            </Heading>
            <Text color={'gray.500'}>
              Do košíku byl přidán produkt <strong>{`"${variant.title}"`}</strong>.
            </Text>
          </Box>
        </ModalBody>
        <ModalFooter>
          <Flex w="100%" justifyContent="space-between">
            <NextLink passHref href="/cart">
              <Button as="a" colorScheme="green" onClick={onClose}>
                Zobrazit košík
              </Button>
            </NextLink>
            <Button onClick={onClose}>
              Pokračovat v nákupu
            </Button>
          </Flex>
        </ModalFooter>
      </ModalContent>
    </Modal >
  )
}

export default AddToCartConfirmation;