import * as React from 'react';
import { mount } from 'enzyme';

import DogList from './DogList';

it('renders and says "DogList"', () => {
  const dogList = mount(<DogList />);

  expect(dogList.text()).toBe('DogList');
});
