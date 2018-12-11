import * as React from 'react';


export default class Button extends React.Component{
  render() {
    return (
      <div className={'Button'} {...this.props}>{this.props.children}</div>
    );
  }
}
