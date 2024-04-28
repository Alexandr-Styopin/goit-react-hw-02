export default function Feedback({
  options,
  feedback,
  totalFeedback,
  positiveFeedback,
}) {
  return (
    <ul>
      {options.map((option) => (
        <li key={option}>
          {option[0].toUpperCase() + option.slice(1)}: {feedback[option]}
        </li>
      ))}

      <li>Total:{totalFeedback}</li>
      <li>Positive: {positiveFeedback}%</li>
    </ul>
  );
}
