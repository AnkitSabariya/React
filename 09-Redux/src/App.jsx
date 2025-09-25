import "./App.css";
import { useDispatch, useSelector } from "react-redux";

function App() {
  let dispatch = useDispatch();
  const count = useSelector(state => state)
  const handleIn = () => {
    dispatch({ type: "IN" });
  };
  const handleDec = () => {
    dispatch({ type: "DEC" });
  };
  return (
    <>
      <h1>React Redux {count}</h1>
      <button type="" onClick={handleIn}>
        +
      </button>
      <button type="" onClick={handleDec}>
        -
      </button>
    </>
  );
}

export default App;
