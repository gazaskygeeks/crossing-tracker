/* eslint-disable */

import React from 'react'
import 'react-addons-test-utils'
import { shallow } from 'enzyme';
import {SignupPage} from '../public/src/components/signup/signupPage.jsx'
import SelectOrgs from '../public/src/components/signup/selectOrgs.jsx'

it('should render <SignupPage /> component   with <h1>Sign up</h1>', () => {
    const wrapper = shallow(<SignupPage signup={{statusCode : 400}} />);
    expect(wrapper.contains(<h1>Sign up</h1>)).toEqual(true);
  });

  it('should render  css style components', () => {
    const wrapper = shallow(<SignupPage signup={{statusCode : 409}}/>);
    expect(wrapper.find('.form-group')).toHaveLength(4);
  });

  it('should render  <SelectOrgs /> component', () => {
    const wrapper = shallow(<SignupPage signup={{statusCode : 200}} />);
    expect(wrapper.find(SelectOrgs)).toHaveLength(1);
  });
