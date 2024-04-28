export default function Options({ options, onClick, totalFeedback, reset }) {
  return (
    <ul>
      {options.map((option) => (
        <li key={option}>
          <button type="button" name={option} onClick={onClick}>
            {option[0].toUpperCase() + option.slice(1)}
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
