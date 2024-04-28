export default function Options({ elOptions, onClick, totalFeedback, reset }) {
  return (
    <ul>
      {elOptions.map((elOption) => (
        <li key={elOption}>
          <button type="button" name={elOption} onClick={onClick}>
            {elOption[0].toUpperCase() + elOption.slice(1)}
          </button>
        </li>
      ))}

      {totalFeedback !== 0 && (
        <li>
          <button onClick={reset}>Reset</button>
        </li>
      )}
    </ul>
  );
}
