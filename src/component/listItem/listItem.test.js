import React from 'react'
import {shallow} from 'enzyme'
import { findByDataTest, checkCpmPropTypes } from '../../../Utils'
import ItemList from './index'

const setup = ((porps) => {
  var comp = shallow(<ItemList {...porps} />);
  return comp;
});

describe('ItemList Component', () => {
  describe('Check props', () => {
    it('Should not throw props type warning', () => {
      var expectedProps = {
        title: 'title',
        desc: 'desc'
      }
      var sharedBtn = setup(expectedProps);
      const propsErr = checkCpmPropTypes(sharedBtn, expectedProps);
      expect(propsErr).toBeUndefined();
    });
  });

  describe('Render', () => {
    var lstItem; 
    beforeEach(() => {
      var expectedProps = {
        title: 'title',
        desc: 'desc'
      }
      lstItem = setup(expectedProps);
    });
    it('ItemList Rendered', () => {
      expect(findByDataTest(lstItem, 'listItemComponent').length).toBe(1)
    });
    it('ItemList Title Rendered', () => {
      expect(findByDataTest(lstItem, 'componentTitle').length).toBe(1)
    });
    it('ItemList Description Rendered', () => {
      expect(findByDataTest(lstItem, 'componentDesc').length).toBe(1)
    });
  });
});