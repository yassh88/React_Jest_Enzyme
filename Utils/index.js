
import checkPropTypes from 'check-prop-types';
import { createStore, applyMiddleware } from 'redux';
import ReduxThunk from 'redux-thunk';
import RootReducer from '../src/reducers';
import { middlewares } from '../src/createStore';
 
export const findByDataTest = ((component, attr) =>component.find(`[data-test='${attr}']`));

export const checkCpmPropTypes =  ((component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name));

export const testStore =( initialStore)=>{
  const createStoreWithMiddleware = applyMiddleware(...middlewares)(createStore)
  return createStoreWithMiddleware(RootReducer, initialStore)
}