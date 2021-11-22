import { Box, Heading } from '@chakra-ui/layout'
import type { NextPage } from 'next'
import Head from 'next/head'
import React from 'react'
import BreadcrumbComponent from '../../components/Breadcrumb'
import { getTitle } from '../../utils/getTitle'
import {Address} from "./delivery/address";
import {PaymentMethod} from "./delivery/paymentMethod";
import {Modal, useDisclosure} from "@chakra-ui/react";
import {Button} from "@chakra-ui/button/src/button";
import {
    ModalBody,
    ModalCloseButton,
    ModalContent,
    ModalFooter,
    ModalHeader,
    ModalOverlay
} from "@chakra-ui/modal/src/modal";

const Payment: NextPage = () => {

    const { isOpen, onOpen, onClose } = useDisclosure()

  return (
    <main>
      <Head>
        <title>{getTitle('Doprava a platba')}</title>
      </Head>

      <Box p={4}>
        <BreadcrumbComponent items={['index', 'cart-payment']} />
        <Heading>Doprava a platba</Heading>
          <Address/>
          <PaymentMethod totalAmount={123}/>
      </Box>

        <button onClick={onOpen}>Open Modal</button>

        <Modal blockScrollOnMount={false} isOpen={isOpen} onClose={onClose}>
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Modal Title</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <span>
                        Děkujeme za nákup.
                        Souhrn objednávky Vám odešleme na email.

                        Děkujeme
                    </span>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme="blue" mr={3} onClick={onClose}>
                        Close
                    </Button>
                    <Button variant="ghost">Secondary Action</Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    </main>
  )
}

export default Payment
