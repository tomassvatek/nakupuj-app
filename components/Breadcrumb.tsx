import React from 'react';
import NextLink from 'next/link';
import { Text } from '@chakra-ui/react';
import { Breadcrumb, BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';
import { ChevronRightIcon } from '@chakra-ui/icons';
import { pages } from '../constants';

export default function BreadcrumbComponent({ children, items }: React.PropsWithChildren<{ items: (keyof typeof pages)[] }>) {
  return (
    <Breadcrumb spacing="8px" separator={<ChevronRightIcon color="gray.500" />}>
      {items.map((key, index) => {
        return (
          <BreadcrumbItem key={index}>
            <BreadcrumbLink as={NextLink} href={pages[key].url}><Text _hover={{ textDecoration: "underline" }} cursor="pointer">{pages[key].title}</Text></BreadcrumbLink>
          </BreadcrumbItem>
        );
      })}
      {children}
    </Breadcrumb>
  )
}