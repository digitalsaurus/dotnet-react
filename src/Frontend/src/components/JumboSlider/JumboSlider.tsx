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
  slideWidth: number;
}

export default class JumboSlider extends React.Component<JumboSliderProps, JumboSlideState> {
  public state = {
    activeSlide: 0,
    slideWidth: 0
  };
  public _scroller: React.RefObject<HTMLDivElement>;
  constructor(props: JumboSliderProps) {
    super(props);

    this.setSlideWidth = this.setSlideWidth.bind(this);
    this.calculateTransform = this.calculateTransform.bind(this);
    this.moveLeft = this.moveLeft.bind(this);
    this.moveRight = this.moveRight.bind(this);

    this._scroller = React.createRef();
  }
  componentDidMount() {
    this.setSlideWidth();
    window.addEventListener('resize', this.setSlideWidth);
  }
  setSlideWidth() {
    const scroller = this._scroller.current;
    if (scroller) {
      const slideWidth = scroller.clientWidth;
      this.setState({ slideWidth });
    }
  }
  calculateTransform() {
    const x = this.state.activeSlide * this.state.slideWidth * -1;
    return `translate3d(${x}px, 0px, 0px)`;
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
  render() {
    const transform = this.calculateTransform();
    return (
      <section className="jumbo-slider">
        <div className="jumbo-slider__scroller" ref={this._scroller as any}>
          <button type="button" className="jumbo-slider__scroller__button jumbo-slider__scroller__button--left" onClick={this.moveLeft} />
          <ul style={{ transform }}>
            {this.props.slides.map((slide, i) => (
              <li key={i}>
                <img src={slide.image} />
              </li>
            ))}
          </ul>
          <button type="button" className="jumbo-slider__scroller__button jumbo-slider__scroller__button--right" onClick={this.moveRight} />
        </div>
      </section>
    );
  }
}
