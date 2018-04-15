import * as React from 'react';
import { mount } from 'enzyme';

import JumboSlider from './JumboSlider';

const slides = [
  { image: 'https://farm3.staticflickr.com/2914/14185397280_e51c40b1df_b.jpg' },
  { image: 'https://farm6.staticflickr.com/5076/14164379250_71c3a5b32a_b.jpg' },
  { image: 'https://farm3.staticflickr.com/2937/14371160993_186df4a083_b.jpg' }
];

it('moves one slide to the right when the right button is pressed', () => {
  const moveRight = jest.spyOn(JumboSlider.prototype, 'moveRight');
  const wrapper = mount(<JumboSlider slides={slides} />);
  const rightButton = wrapper.find('.jumbo-slider__scroller__button--right');
  wrapper.setState({ activeSlide: 0 });

  rightButton.simulate('click');

  expect(moveRight).toHaveBeenCalled();
  expect(wrapper.state().activeSlide).toEqual(1);
});

it('moves one slide to the left when the left button is pressed', () => {
  const moveLeft = jest.spyOn(JumboSlider.prototype, 'moveLeft');
  const wrapper = mount(<JumboSlider slides={slides} />);
  const leftButton = wrapper.find('.jumbo-slider__scroller__button--left');
  wrapper.setState({ activeSlide: 2 });

  leftButton.simulate('click');

  expect(moveLeft).toHaveBeenCalled();
  expect(wrapper.state().activeSlide).toEqual(1);
});

it('will only move to the right if there is a following slide', () => {
  const moveRight = jest.spyOn(JumboSlider.prototype, 'moveRight');
  const wrapper = mount(<JumboSlider slides={slides} />);
  const rightButton = wrapper.find('.jumbo-slider__scroller__button--right');
  wrapper.setState({ activeSlide: 2 });

  rightButton.simulate('click');

  expect(moveRight).toHaveBeenCalled();
  expect(wrapper.state().activeSlide).toEqual(2);
});

it ('will only move to the left if there is a preceding slide', () => {
  const moveLeft = jest.spyOn(JumboSlider.prototype, 'moveLeft');
  const wrapper = mount(<JumboSlider slides={slides} />);
  const leftButton = wrapper.find('.jumbo-slider__scroller__button--left');
  wrapper.setState({ activeSlide: 0 });

  leftButton.simulate('click');

  expect(moveLeft).toHaveBeenCalled();
  expect(wrapper.state().activeSlide).toEqual(0);
});

it('will display only the active slide', () => {
  const calculateTransform = jest.spyOn(JumboSlider.prototype, 'calculateTransform');
  const wrapper = mount(<JumboSlider slides={slides} />);
  wrapper.setState({ activeSlide: 0, slideWidth: 1000 });

  expect(calculateTransform).toHaveBeenCalled();
  expect(wrapper.find('.jumbo-slider__scroller ul').prop('style')).toEqual({'transform': 'translate3d(0px, 0px, 0px)'});

  wrapper.setState({ activeSlide: 1 });

  expect(wrapper.find('.jumbo-slider__scroller ul').prop('style')).toEqual({'transform': 'translate3d(-1000px, 0px, 0px)'});
});
