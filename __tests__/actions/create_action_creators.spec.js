import { createActionCreator, createErrorActionCreator } from '@/actions/create_action_creators';

describe('createActionCreator', () => {
  it('It should create default action', () => {
    const type = 'DEFAULT_TYPE';
    const data = 1;

    const actionCreator = createActionCreator(type);

    const result = actionCreator(data);

    const expectedAction = {
      type,
      payload : data,
      meta : undefined,
      error : undefined
    };

    expect(result).toEqual(expectedAction);
  });

  it('It should create default action with object payload', () => {
    const type = 'DEFAULT_TYPE';
    const row = 1;
    const idx = 2;

    const actionCreator = createActionCreator(type);

    const result = actionCreator({ row, idx });

    const expectedAction = {
      type,
      payload : { row, idx },
      meta : undefined,
      error : undefined
    };

    expect(result).toEqual(expectedAction);
  });

  it('It should create default action with given keys for payload', () => {
    const type = 'DEFAULT_TYPE';
    const row = 1;
    const idx = 2;

    const actionCreator = createActionCreator(type, ['row', 'idx']);

    const result = actionCreator(row, idx);

    const expectedAction = {
      type,
      payload : { row, idx },
      meta : undefined,
      error : undefined
    };

    expect(result).toEqual(expectedAction);
  });

  it('It should create specified action', () => {
    const type = 'DEFAULT_TYPE';
    const row = 1;
    const idx = 2;

    const actionCreator = createActionCreator(type, (row, idx) => ({ payload : { row, idx }}));

    const result = actionCreator(row, idx);

    const expectedAction = {
      type,
      payload : { row, idx },
      meta : undefined,
      error : undefined
    };

    expect(result).toEqual(expectedAction);
  });
});

describe('createErrorActionCreator', () => {
  it('It should create error action', () => {
    const type = 'ERROR_TYPE';
    const error = new Error('Test');

    const actionCreator = createErrorActionCreator(type);
    const result = actionCreator(error);

    const expectedAction = {
      type,
      payload : error,
      error : true,
      meta : undefined
    };

    expect(result).toEqual(expectedAction);
  });
});