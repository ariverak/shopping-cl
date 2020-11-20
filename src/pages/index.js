import { useEffect } from "react";
import { wrapper } from '../redux'
import DefaultLayout from "../layouts/DefaultLayout";
import ProductCard from "../components/ProductCard";
import useProducts from '../hooks/useProducts';
import { Spinner } from '@chakra-ui/core';

function Home() {
  const { getProducts, products, fetching } = useProducts();
  useEffect(() => {
    getProducts();
  }, []);
  if (fetching) return (
    <Spinner
      thickness="4px"
      speed="0.65s"
      emptyColor="gray.200"
      color="blue.500"
      size="xl"
    />
  )
  return (
    <DefaultLayout>
      <ProductCard />
    </DefaultLayout>
  )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
})

export default Home;