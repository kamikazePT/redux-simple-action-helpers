import { isFunction, isNil } from 'lodash';

function createPayloadWithKeys(payloadArray, keyArr){
  const payload = {};

  for(let i = 0; i < payloadArray.length; i++){
    payload[keyArr[i]] = payloadArray[i];
  }

  return payload;
}

export const createActionCreator = (type, fn) => {
  let actionCreator = fn;
  if(isNil(actionCreator)) actionCreator = ((data) => ( { payload : data } ));
  else if(!isFunction(actionCreator)) actionCreator = ((...data) => ({ payload : createPayloadWithKeys(data, fn)}));

  return (...args) => {
    const { payload, meta, error } = actionCreator(...args);

    return {
      type,
      payload,
      error,
      meta
    };
  };
};

export const createErrorActionCreator = (type) => {
  return createActionCreator(type, (err) => ({ payload: err, error : true }));
};