import type { RequestHeaders } from './RequestHeaders'
import type { RequestParameters } from './RequestParameters'
import type { Url } from './Url'

export type MethodsMap = {
  delete: 'DELETE';
  get: 'GET';
  patch: 'PATCH';
  post: 'POST';
  put: 'PUT';
};

export type Operation = {
  parameters: RequestParameters;
  request: {
    method: MethodsMap;
    url: Url;
    headers: RequestHeaders;
  };
  response: any;
};
export type GeneratedEndpoints = { [key: string]: Operation };
