import * as React from 'react';
import { mount } from 'enzyme';

import DogProfile from './DogProfile';

it('renders and says "DogProfile"', () => {
  const dogProfile = mount(<DogProfile />);

  expect(dogProfile.text()).toBe('DogProfile');
});
