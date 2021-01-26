import { shallow } from 'enzyme';
import React from 'react';
import { HeaderTitle } from '../../src/components';

test('renders the Header Title', () => {
  const component = shallow(<HeaderTitle title="test title" />);
  expect(component).toMatchSnapshot();
});
