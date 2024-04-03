import { Component } from 'react';
import { Section, Statistics, FeedbackOptions, Notification } from './Feedback';

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};
export class App extends Component {
  state = initialFeedback;

  handleLeaveFeedback = type => {
    this.setState(prevState => {
      return {
        [type]: prevState[type] + 1,
      };
    });
  };
  handleResetFeedback = () => {
    this.setState(initialFeedback);
  };

  render() {
    const countTotalFeedback = Object.keys(this.state).reduce((acc, curr) => {
      return acc + this.state[curr];
    }, 0);

    const countPositiveFeedbackPercentage =
      Math.floor((this.state.good / countTotalFeedback) * 100) || 0;

    return (
      <div>
        <Section title="Please leave feedback" />
        <FeedbackOptions
          options={this.state}
          onLeaveFeedback={this.handleLeaveFeedback}
          onResetFeedback={this.handleResetFeedback}
        />
        <Section title="Statistics" />

        {!!countTotalFeedback ? (
          <Statistics
            {...this.state}
            total={countTotalFeedback}
            positivePercentage={countPositiveFeedbackPercentage}
          />
        ) : (
          <Notification message="There is no feedback" />
        )}
      </div>
    );
  }
}
