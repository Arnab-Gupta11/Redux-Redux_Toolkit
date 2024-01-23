import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decrement, increment, incrementByValue, reset } from "./features/counter/counterSlice";

function App() {
  const count = useSelector((state) => state.counter.count);
  console.log("🚀 ~ App ~ count:", count);
  const dispatch = useDispatch();
  return (
    <>
      <div className="flex justify-center mt-20">
        <div className="space-y-8">
          <h1 className="text-red-400 text-5xl text-center">Counter App</h1>
          <h3 className="text-2xl font-bold text-gray-600 text-center">Count : {count}</h3>
          <button
            className="btn "
            onClick={() => {
              dispatch(increment());
            }}
          >
            Increment
          </button>
          <button
            className="btn ml-5"
            onClick={() => {
              dispatch(incrementByValue(5));
            }}
          >
            IncrementBy-5
          </button>
          <button
            className="btn ml-5"
            onClick={() => {
              dispatch(decrement());
            }}
          >
            Decrement
          </button>
          <button
            className="btn ml-5"
            onClick={() => {
              dispatch(reset());
            }}
          >
            Reset
          </button>
        </div>
      </div>
    </>
  );
}

export default App;
