import { useState } from "react";

// ✅ Basic Custom Hook
function useCounter(initialValue = 0) {
  const [count, setCount] = useState(initialValue);
  const ankit ="Hello World"
  // increment aur decrement functions banaye
  const increment = () => setCount(count + 1);
  const decrement = () => setCount(count - 1);
  const reset = () => setCount(initialValue);

  // jo chahiye vo return kar do
  return { count,ankit , increment, decrement, reset };
}

export default useCounter;
