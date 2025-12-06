import React, { Component } from 'react';

export class Statistics extends Component {
  render() {
    const { good, neutral, bad, plusPercentage } = this.props;

    return (
      <div>
        <p>goodd: {good}</p>
        <p>neutral: {neutral}</p>
        <p>bad: {bad}</p>
        <p>plus feedback: {plusPercentage}%</p>
      </div>
    );
  }
}