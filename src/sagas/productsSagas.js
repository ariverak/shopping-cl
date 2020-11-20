import { put, takeLatest, call } from 'redux-saga/effects';
import productsActions, { productsTypes } from '../redux/productsRedux';
import { message } from '../utils';

function* getProducts({ api }, { params }) {
  try {
    const response = yield call(api.products.getProducts, {
      params,
    });
    if (response.status === 200) {
      yield put(productsActions.productsSet(response.data.data));
    } else {
      message.error('Ha ocurrido un error al consultar los productos');
      yield put(productsActions.productsSet(null));
    }
  } catch (err) {
    console.log(err)
    message.error('Ha ocurrido un error al consultar los productos');
    yield put(productsActions.productsSet(null));
  }
}

export default ({ api }) => [
  takeLatest(productsTypes.PRODUCTS_GET, getProducts, { api }),
];
