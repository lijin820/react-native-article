import { shallow } from 'enzyme';
import React from 'react';
import { HeaderButton } from '../../src/components';

test('renders the Header Button', () => {
  const component = shallow(<HeaderButton />);
  expect(component).toMatchSnapshot();
});
