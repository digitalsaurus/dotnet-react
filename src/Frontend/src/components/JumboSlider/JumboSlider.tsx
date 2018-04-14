import * as React from 'react';
import './JumboSlider.css';

export interface Slide {
  image: string;
}

export interface JumboSliderProps {
  slides: Slide[];
}

export interface JumboSlideState {
  activeSlide: number;
}

export default class JumboSlider extends React.Component<JumboSliderProps, JumboSlideState> {
  state = {
    activeSlide: 0
  };  
  constructor(props: JumboSliderProps) {
    super(props);

    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);
    this.calculateTransform = this.calculateTransform.bind(this);

    for (const i in props.slides) {
      if (props.slides.hasOwnProperty(i)) {
        this[`slide${i}`] = React.createRef();
      }
    }
  }
  moveLeft() {
    const { activeSlide } = this.state;
    if (activeSlide > 0) {
      this.setState({ activeSlide: this.state.activeSlide - 1 });
    }
  }
  moveRight() {
    const { activeSlide } = this.state;
    if (activeSlide < this.props.slides.length - 1) {
      this.setState({ activeSlide: activeSlide + 1 });
    }
  }
  calculateTransform() {
    const test = '';
  }
  render() {
    const transform = this.calculateTransform();
    return (
      <section className="jumbo-slider">
        <div className="jumbo-slider__scroller">
          <button type="button" className="jumbo-slider__scroller__button--left" onClick={this.moveLeft}>Left</button>
          <ul>
            {this.props.slides.map((slide, i) => (
              <li key={i}>
                <img src={slide.image} />
              </li>
            ))}
          </ul>
          <button type="button" className="jumbo-slider__scroller__button--right" onClick={this.moveRight}>Right</button>
        </div>
      </section>
    );
  }
}
