import 'swiper/css';
import 'swiper/css/navigation';
import {products} from "../constants";
import NextLink from "next/link";
import {Button} from "@chakra-ui/react";
import React from "react";
import {Box, Heading} from "@chakra-ui/layout";

interface IProps {
    selected?: number
}

const Categories = (props: IProps) => {
    const {selected} = props

    console.log(selected)

    return (
        <>
            <Heading fontSize="3xl">Kategorie</Heading>
            {products.map(product => (
                <NextLink href={`/variant/${product.id}`} key={product.id}>
                    {product.id != selected ?  <Button size="sm" colorScheme="green" style={{marginRight: '0.5rem', marginTop: '0.5rem'}}>{product.title}</Button> :
                        <Button size="sm" colorScheme="gray" style={{marginRight: '0.5rem', marginTop: '0.5rem'}}>{product.title}</Button>}
                </NextLink>
                )
            )}
        </>
    );
};

export default Categories;