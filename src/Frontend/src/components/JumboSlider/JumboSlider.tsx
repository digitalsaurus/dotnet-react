import * as React from 'react';
import './JumboSlider.css';

export interface Slide {
  image: string;
}

export interface JumboSliderProps {
  slides?: Slide[];
}

export default class JumboSlider extends React.Component<JumboSliderProps> {
  public static defaultProps: Partial<JumboSliderProps> = {
    slides: []
  };
  render() {
    return (
      <section className="jumbo-slider">
        <div className="jumbo-slider__scroller">
          <ul>
            {this.props.slides && this.props.slides.map((slide, i) => (
              <li key={i}>
                <img src={slide.image} />
              </li>
            ))}
          </ul>
        </div>
        {/* {this.props.slides && this.props.slides.map((slide, i) => (
          <figure key={i}>
            <img src={slide.image} />
          </figure>
        ))} */}
        {/* <ul className="jumbo-slider__slide-list">
          {this.props.slides && this.props.slides.map((slide, i) => (
            <li key={i}>
              <img src={slide.image} />
            </li>
          ))}
        </ul> */}
      </section>
    );
  }
}
