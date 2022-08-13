import 'jsdom-global/register';
import * as renderer from 'react-test-renderer';
import * as React from 'react'
import Icon from '../icon';
import {mount} from 'enzyme';

describe('icon', () => {
  it('render successfully', ()=>{
    const json = renderer.create(<Icon  name="twitter"/>).toJSON()
    expect(json).toMatchSnapshot()
  })
  it('onclick', () => {
    const fn = jest.fn();
    const component = mount(<Icon name="twitter" onClick={fn}/>);
    component.find('svg').simulate("click")
    expect(fn).toBeCalled();
  })
})