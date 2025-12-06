import React, { Component } from 'react';
import { Section } from './components/Section';
import { Feedback } from './components/FeedbackOptions';
import { Statistics } from './components/Statistics';
import './App.css';

export default class App extends Component {
  constructor(props) {
    super(props);


    this.state = {
      good: 0,
      neutral: 0,
      bad: 0,
    };
  }

handleFeedback = (option) =>
  this.setState(prevState => ({ [option]: prevState[option] + 1 }));

  render() {
    const { good, neutral, bad } = this.state;
    const all = good + neutral + bad;
    const plusPercentage = all > 0 ? Math.round((good / all) * 100) : 0;


    return (
      <div className="App">
          <Feedback onLeaveFeedback={this.handleFeedback} />

        <Section title="Statistics">
          {all > 0 && (
            <Statistics
              good={good}
              neutral={neutral}
              bad={bad}
              all={all}
              plusPercentage={plusPercentage}
            />
          )}
        </Section>
      </div>
    );
  }
}
