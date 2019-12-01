import React from  'react';
import { types } from '../../actions/types';
import postReducer from '../posts/reducer'

describe('Posts Reducer', () => {

  it('Should return default state', () => {
    const newState = postReducer(undefined, {});
    expect(newState).toEqual([]);
  });

  it('Should return new state if receiving type', () => {
    const postData = [{test: 'data'},{test: 'data1'},{test: 'data2'}]
    const newState = postReducer(undefined,{type: types.GET_POSTS, payload:postData});
    expect(newState).toEqual(postData);
  });
  
});