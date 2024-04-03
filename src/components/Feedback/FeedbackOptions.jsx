const FeedbackOptions = ({ options, onLeaveFeedback, onResetFeedback}) => {
  return (
    <>
      {Object.keys(options).map(s => (
        <button
          key={s}
          style={{ margin: 5 }}
          onClick={() => onLeaveFeedback(s)}
        >
          <strong style={{ textTransform: 'capitalize' }}>{s}</strong>
        </button>
      ))}
      <button onClick={onResetFeedback} style={{ margin: 5 }}>
        <strong>Reset</strong>
      </button>
    </>
  );
}
 
export default FeedbackOptions;