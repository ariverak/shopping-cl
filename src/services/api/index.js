import axios from 'axios';
import endpoints from './endpoints';


export const create = (baseURL) => {
  const client = axios.create({
    baseURL: `${process.env.API_BASE_URL}/v1`,
    headers: {
      'Cache-Control': 'no-cache',
      'Content-Type': 'application/json',
    },
    timeout: 30000,
  });

  const defaultParams = {};
  const endpointsFunctions = {};

  Object.keys(endpoints).forEach((endpoint) => {
    endpointsFunctions[endpoint] = endpoints[endpoint](client, defaultParams);
  });

  return {
    ...endpointsFunctions,
  };
};
