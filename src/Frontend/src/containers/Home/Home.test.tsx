import * as React from 'react';
import { mount } from 'enzyme';

import Home from './Home';

it('renders and says "Home"', () => {
  const home = mount(<Home />);

  expect(home.exists()).toBeTruthy();
});
