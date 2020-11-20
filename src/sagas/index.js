import { all } from 'redux-saga/effects';
import { create } from '../services/api';
import productsSagas from './productsSagas';

const api = create();

export default function* root() {
  yield all([
    ...productsSagas({ api })
  ]);
}
