import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { SafeAreaView } from 'react-native';
import { LoadingSpinner } from '../../src/components';

test('renders the Loading Spinner', () => {
  const component = shallow(<LoadingSpinner />);
  expect(component).toMatchSnapshot();
});
