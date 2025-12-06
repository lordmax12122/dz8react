import React, { Component } from 'react';

export class Feedback extends Component {
  render() {
    const { onLeaveFeedback } = this.props;

    return (
      <div>
        <button onClick={() => onLeaveFeedback('good')}>Goodі</button>
        <button onClick={() => onLeaveFeedback('neutral')}>Neutral</button>
        <button onClick={() => onLeaveFeedback('bad')}>Bad</button>
      </div>
    );
  }
}
