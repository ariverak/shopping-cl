import _ from 'lodash';
import qs from 'query-string';
import { createStandaloneToast } from "@chakra-ui/core"

const toast = createStandaloneToast()

export const merge = (obj, data = {}) => Object.assign({}, obj, { ...data });

export const addQuery = (obj) => {
  return _.isEmpty(obj) ? '' : `?${qs.stringify(obj)}`;
};

export const message = {
  success: (title) => toast({
    title: title,
    description: "",
    status: "success",
    duration: 2000,
    isClosable: true,
    position: 'top-right'
  }),
  error: (title) => toast({
    title: title,
    description: "",
    status: "error",
    duration: 2000,
    isClosable: true,
    position: 'top-right'
  }),
}