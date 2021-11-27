import type { GetServerSideProps, NextPage } from "next";
import Head from "next/head";
import React from "react";
import { getTitle } from "../../utils/getTitle";
import { categories, products } from '../../constants'
import { ICategory, IProduct } from "../../types";
import ProductSlider from "../../components/ProductSlider";
import { Container, Heading } from "@chakra-ui/layout";
import ErrorPage from '../404'
import NextLink from "next/link";
import Categories from "../../components/Categories";
import BreadcrumbComponent from '../../components/Breadcrumb';
import { BreadcrumbItem, BreadcrumbLink } from '@chakra-ui/breadcrumb';

interface Props {
  category?: ICategory;
};

const Category: NextPage<Props> = ({ category }) => {
  if (!category) {
    return <ErrorPage />;
  }

  return (
    <main>
      <Head>
        <title>{getTitle(category.name)}</title>
      </Head>
      <Container maxW={'6xl'} py={5}>
        <BreadcrumbComponent items={['index']}>
          <BreadcrumbItem>
            <BreadcrumbLink as={NextLink} href={`/category/${category.id}`}>{category.name}</BreadcrumbLink>
          </BreadcrumbItem>
        </BreadcrumbComponent>

        <Categories selected={category.id} />
        <Heading mt={5} fontSize="3xl">{category.name}</Heading>

        <ProductSlider category={category.id} />
      </Container>
    </main>
  );
};

export const getServerSideProps: GetServerSideProps<Props> = async (context) => {
  const props: any = {};
  const id = context.params?.category as string | undefined;

  if (id) {
    const _id = parseInt(id, 10);
    props.category = categories[_id];
  }

  if (!props.category) {
    context.res.statusCode = 404;
  }

  return {
    props,
  };
}

export default Category;
