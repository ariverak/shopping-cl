import { shallowEqual, useSelector, useDispatch } from 'react-redux';
import productsActions from '../../redux/productsRedux';

function useProducts() {
  const productsStore = useSelector(
    (store) => ({
      products: store.products.products,
      fetching: store.products.fetching,
    }),
    shallowEqual,
  );

  const dispatch = useDispatch();

  const getProducts = () =>
    dispatch(productsActions.productsGet());

  return {
    ...productsStore,
    getProducts,
  };
}

export default useProducts;
