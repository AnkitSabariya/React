export default function Child3({ text }) {
  return (
    <div>
      <h2>Child3 (Mirror)</h2>

      {/* Display the same parent's state */}
      <p>Child3 also sees: {text}</p>
    </div>
  );
}
