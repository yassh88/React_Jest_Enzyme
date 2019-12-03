import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import {shallow} from 'enzyme';
import { findByDataTest, testStore } from '../Utils'

const setup = (initialState={}) => {
  const store = testStore(initialState);
  const wrapper = shallow(<App store={store} />).childAt(0).dive();
  return wrapper;
};


describe('', () => {
  let wrapper;
    beforeEach(() => {
      const initialState = {
        posts: [{
            title: 'Example title 1',
            body: 'Some text'
        }, {
            title: 'Example title 2',
            body: 'Some text'
        }, {
            title: 'Example title 3',
            body: 'Some text'
        }]
    }
    wrapper = setup(initialState);
  });
  
  it('Should renders without crashing', () => {
    const appComp = findByDataTest(wrapper, 'appComponent');
    expect(appComp.length).toBe(1)
  });

  it('Check should update state as expected', () => {
    const classInstance = wrapper.instance();
    classInstance.updatesState();
    const newState = classInstance.state;
    expect(newState.hideBtn).toBe(true);
  });

  it('Check should update state as expected', () => {
    const classInstance = wrapper.instance();
    const testValue = 2;
    const returnValue = classInstance.returnsTestValue(testValue);
    expect(returnValue).toBe(testValue+1);
  });
});

