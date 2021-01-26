import { shallow, ShallowWrapper } from 'enzyme';
import React from 'react';
import { Provider } from 'react-redux';
import configureStore from 'redux-mock-store';
import { Latest } from '../../src/screens';

describe('Latest Page', () => {
  const initialState = { users: [] };
  const mockStore = configureStore();
  let store: any;

  describe('rendering', () => {
    store = mockStore(initialState);
    let wrapper: ShallowWrapper;
    beforeEach(() => {
      wrapper = shallow(
        <Provider store={store}>
          <Latest />
        </Provider>,
      );
    });

    it('should render a Latest component', () => {
      expect(wrapper.find(Latest)).toHaveLength(1);
    });
  });
});
