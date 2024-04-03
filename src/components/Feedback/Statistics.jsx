const Statistics = ({ good = 0, neutral = 0, bad = 0, total = 0, positivePercentage = 0 }) => {
  return (
    <>
      <p>Good: {good}</p>
      <p>Neutral: {neutral}</p>
      <p>Bad: {bad}</p>
      <p>Total: {total}</p>
      <p>Positive feedback: {positivePercentage}</p>
    </>
  );
}
 
export default Statistics;