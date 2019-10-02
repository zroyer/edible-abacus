import React, { Component } from 'react';
import { IceCream } from 'react-kawaii';
import { styler, tween, easing } from 'popmotion';

class KawaiiAnimation extends Component {
  constructor(props) {
    super(props);
    this.kawaiiRef = React.createRef();
  }

  componentDidMount() {
    const body = styler(this.kawaiiRef.current.querySelector('svg'));

    tween({
      from: { y: 10 },
      to: { y: 25 },
      easings: easing.easeOut,
      duration: 1500,
      yoyo: Infinity,
    }).start(body.set);
  }

  render() {
    const { mood } = this.props;
    return (
      <div ref={this.kawaiiRef}>
        <IceCream
          size={220}
          mood={mood}
        />
      </div>
    );
  }
}
export default KawaiiAnimation;
