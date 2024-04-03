import { useState } from 'react';
import { Section, Statistics, FeedbackOptions, Notification } from './Feedback';

const initialFeedback = {
  good: 0,
  neutral: 0,
  bad: 0,
};

export const App = () => {
  const [feed, setFeed] = useState(initialFeedback);

  const countTotalFeedback = Object.keys(feed).reduce((acc, curr) => {
    return acc + feed[curr];
  }, 0);

  const countPositiveFeedbackPercentage =
    Math.floor((feed.good / countTotalFeedback) * 100) || 0;

  const handleLeaveFeedback = type => {
    setFeed({
      ...feed,
      [type]: feed[type] + 1,
    });
  };
  const handleResetFeedback = () => {
    setFeed(initialFeedback);
  };
  return (
    <div>
      <Section title="Please leave feedback" />
      <FeedbackOptions
        options={feed}
        onLeaveFeedback={handleLeaveFeedback}
        onResetFeedback={handleResetFeedback}
      />
      <Section title="Statistics" />
      {!!countTotalFeedback ? (
        <Statistics
          {...feed}
          total={countTotalFeedback}
          positivePercentage={countPositiveFeedbackPercentage}
        />
      ) : (
        <Notification message="There is no feedback" />
      )}
    </div>
  );
};
