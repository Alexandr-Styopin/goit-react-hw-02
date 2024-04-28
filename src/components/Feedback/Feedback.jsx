export default function Feedback({
  elOptions,
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul>
      {elOptions.map((elOption) => (
        <li key={elOption}>
          {elOption[0].toUpperCase() + elOption.slice(1)}: {feedback[elOption]}
        </li>
      ))}

      <li>Total:{totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
}
