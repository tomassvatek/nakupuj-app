import type { NextPage } from "next";
import Head from "next/head";
import React, {useEffect, useState} from "react";
import {getTitle} from "../../utils/getTitle";
import {useRouter} from "next/router";
import {products} from '../../constants'
import {IProductVariant} from "../../types";
import VariantSlider from "../../components/VariantSlider";
import {Box, Heading} from "@chakra-ui/layout";
import {Button} from "@chakra-ui/react";
import NextLink from "next/link";
import Categories from "../../components/Categories";


const Variant: NextPage= () => {

    const router = useRouter();

    const [variant, setVariant] = useState()
    const [data, setData] = useState<IProductVariant[]>([])
    const [title, setTitle] = useState<string>('')

    useEffect(() => {
        if(router.query.variant != undefined){
            // @ts-ignore
            setVariant(router.query.variant)
        }
    },[router.query.variant])

    useEffect(() => {
        if(variant){
            setData(products.find(p => p.id == variant)?.variants ?? [])
            setTitle(products.find(p => p.id == variant)?.title ?? '')
        }
    },[variant])


    return (
        <main>
            <Head>
                <title>{getTitle(title)}</title>
            </Head>
            <Box p={5}>
                <Categories selected={variant}/>
                <Heading mt={5} fontSize="3xl">{title}</Heading>

                <VariantSlider variants={data}/>

                <Box style={{paddingTop: '2rem', display: 'flex', justifyContent: 'flex-end', paddingRight: '5rem'}}>
                    <NextLink href="/">
                        <Button size="lg" colorScheme="green">
                            Zpět na hlavní stranu
                        </Button>
                    </NextLink>
                </Box>
            </Box>
        </main>
    );
};

export default Variant;
