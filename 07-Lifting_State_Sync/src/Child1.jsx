export default function Child1({ text, setText }) {
  return (
    <div>
      <h2>Child1 (Input)</h2>

      {/* Input bound to parent state via props */}
      <input
        value={text}                  // value is parent's state
        onChange={(e) => setText(e.target.value)} // updates parent's state
        placeholder="Type something..."
        style={{ padding: "8px", fontSize: "16px", width: "300px" }}
      />

      {/* Live preview of input */}
      <p>Child1 live preview: {text}</p>
    </div>
  );
}
