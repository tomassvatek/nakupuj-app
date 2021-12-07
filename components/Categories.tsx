import "swiper/css";
import "swiper/css/navigation";
import { categories } from "../constants";
import NextLink from "next/link";
import { Button } from "@chakra-ui/react";
import React from "react";
import { Box, Heading } from "@chakra-ui/layout";

interface IProps {
  selected?: number;
}

const Categories = (props: IProps) => {
  const { selected } = props;

  return (
    <Box w="100%" bg="green.500">
      {/* <Heading fontSize="3xl">Kategorie</Heading> */}
      {Object.keys(categories).map((key) => {
        const id = parseInt(key, 10);
        const category = categories[id];

        return id !== selected ? (
          <NextLink href={`/category/${id}`} key={id} passHref>
            <Button
              as="a"
              size="sm"
              colorScheme="green"
              p="6"
            >
              {category.name}
            </Button>
          </NextLink>
        ) : (
          <Button
            key={id}
            size="sm"
            borderRadius="0"
            colorScheme="gray"
            p="6"
          >
            {category.name}
          </Button>
        );
      })}
    </Box>
  );
};

export default Categories;
