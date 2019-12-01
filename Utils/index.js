
import checkPropTypes from 'check-prop-types';
 
export const findByDataTest = ((component, attr) =>component.find(`[data-test='${attr}']`));

export const checkCpmPropTypes =  ((component, expectedProps) => checkPropTypes(component.propTypes, expectedProps, 'props', component.name));