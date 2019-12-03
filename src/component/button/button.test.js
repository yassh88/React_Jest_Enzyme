import React from 'react'
import {shallow} from 'enzyme'
import { findByDataTest, checkCpmPropTypes } from '../../../Utils'
import SharedButton from './index'


const setup = ((porps) => {
  var comp = shallow(<SharedButton {...porps} />);
  return comp;
});

describe('SharedButton Component', () => {

  describe('Check props', () => {
    it('Should not throw props type warning', () => {
      var expectedProps = {
        buttonText: 'TestShare',
        emitEvent: function(){
        }
      }
      var sharedBtn = setup(expectedProps);
      const propsErr = checkCpmPropTypes(sharedBtn, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Render', () => {
    var sharedBtn;
    let mockFunction;
      beforeEach(() => {
        mockFunction = jest.fn()
        var expectedProps = {
          buttonText: 'TestShare',
          emitEvent: mockFunction,
        }
        sharedBtn = setup(expectedProps);
      });
    it('Shared Button Rendered', () => {
      expect(findByDataTest(sharedBtn, 'buttonComponent').length).toBe(1)
    });

    it('Should emit callback on click event', () => {
      const btn = findByDataTest(sharedBtn, 'buttonComponent');
      btn.simulate('click');
      const callBack = mockFunction.mock.calls.length;
      expect(callBack).toBe(1);
      
    });
  });
    
  
});