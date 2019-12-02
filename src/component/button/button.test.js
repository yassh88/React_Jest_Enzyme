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
    it('Shared Button Rendered', () => {
      var expectedProps = {
        buttonText: 'TestShare',
        emitEvent: function(){
        }
      }
      var sharedBtn = setup(expectedProps);
      expect(findByDataTest(sharedBtn, 'buttonComponent').length).toBe(1)
    });
  });
    
  
});