export default function Child2({ text }) {
  return (
    <div>
      <h2>Child2 (Display)</h2>

      {/* Display the same parent's state */}
      <p>Child2 shows: {text}</p>
    </div>
  );
}
