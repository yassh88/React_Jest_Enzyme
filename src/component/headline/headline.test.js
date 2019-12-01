import React from 'react';
import {shallow} from 'enzyme';
import Headline from './index';
import { findByDataTest, checkCpmPropTypes } from '../../../Utils'


const setup=((props={}) => {
    const component = shallow(<Headline {...props}/>);
    return component;
});

describe('Headline Component', () => {

 describe('Check PropTypes', () => {

    it('Should not throw a warning', () => {
      const expectedProps = {
        header: 'Test header',
        desc: 'Test desc',
        tempArr: [{
          fName: 'test fname',
          lName: 'test lname',
          email: 'test email',
          age: 1,
          onlineStatus: false
        }],
      }

      const propsErr = checkCpmPropTypes(Headline, expectedProps);
      expect(propsErr).toBeUndefined();

    });
   
 });

  describe('Have Props', () => {
    let wrapper;
    beforeEach(() => {
        const props = {
          header: 'Test header',
          desc: 'Test desc'
        }
        wrapper = setup(props);
    });

    it('HeadlineComponent Render', () => {
      expect(findByDataTest(wrapper, 'HeadlineComponent').length).toBe(1)
    });

    it('Header Render', () => {
      expect(findByDataTest(wrapper, 'header').length).toBe(1)
    });

    it('Description Render', () => {
      expect(findByDataTest(wrapper, 'desc').length).toBe(1)
    });
   
  });

  describe('Have No Props', () => {
    let wrapper;
    
    beforeEach(() => {
        wrapper = setup();
    });

    it('Description Render', () => {
      expect(findByDataTest(wrapper, 'desc').length).toBe(0)
    });

  });
  
});