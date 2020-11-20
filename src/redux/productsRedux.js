import { merge } from '../utils';
import { createReducer, createActions } from 'reduxsauce';

const { Types, Creators } = createActions({
  productsGet: null,
  productsSet: ['products'],
});

export const productsTypes = Types;
export default Creators;

export const INITIAL_STATE = {
  products: null,
  fetching: false
};

export const getProducts = (state, { products }) => merge(state, { fetching: true });

export const setProducts = (state, { products }) => merge(state, { fetching: false, products });

export const reducer = createReducer(INITIAL_STATE, {
  [Types.PRODUCTS_GET]: getProducts,
  [Types.PRODUCTS_SET]: setProducts,
});
