import 'swiper/css';
import 'swiper/css/navigation';
import { categories } from "../constants";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Heading } from "@chakra-ui/layout";

interface IProps {
  selected?: number
}

const Categories = (props: IProps) => {
  const { selected } = props

  return (
    <>
      <Heading fontSize="3xl">Kategorie</Heading>
      {Object.keys(categories).map(key => {
        const id = parseInt(key, 10);
        const category = categories[id];

        return (
          id !== selected ? (
            <NextLink href={`/category/${id}`} key={id} passHref>
              <Button as="a" size="sm" colorScheme="green" style={{ marginRight: '0.5rem', marginTop: '0.5rem' }}>{category.name}</Button>
            </NextLink>
          ) : (
            <Button key={id} size="sm" colorScheme="gray" style={{ marginRight: '0.5rem', marginTop: '0.5rem' }}>{category.name}</Button>
          )
        )
      })}
    </>
  );
};

export default Categories;