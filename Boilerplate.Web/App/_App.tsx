import * as React from 'react';

interface BaseProps {
  input: string;
}

export default class App extends React.Component<BaseProps> {
  static defaultProps: Partial<BaseProps> = {
    input: "This is the default input text."
  }
  render() {    
    return (
      <div>
        {this.props.input}
      </div>
    );
  }
}