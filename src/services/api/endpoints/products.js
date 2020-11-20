import { addQuery } from '../../../utils';

export default (client) => ({
  getProducts: ({ company }) =>
    client.get(`/products${addQuery({ company })}`),
});
