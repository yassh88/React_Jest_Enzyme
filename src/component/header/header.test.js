import React from 'react';
import {shallow} from 'enzyme';
import Header from './index';
import { findByDataTest } from '../../../Utils'

const setup = ((props={}) => shallow(<Header/>));


describe('Header Component', () => {
  let component;

  beforeEach(() => {component = setup()});

  it('Header Rendered',()=> 
    expect(findByDataTest(component,`headerComponent`).length).toBe(1)
  );

  it('Log Rendered',()=>
    expect(findByDataTest(component,`logoIMG`).length).toBe(1)
  );
});

