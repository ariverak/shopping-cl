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
  if (fetching || !products) return (
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
      {products.map(product => (
        <ProductCard product={product} />
      ))}
    </DefaultLayout>
  )
}


export const getStaticProps = wrapper.getStaticProps(async ({ store }) => {
  console.log(store.getState('products'))
})

export default Home;