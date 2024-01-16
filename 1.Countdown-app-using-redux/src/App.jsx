import { useDispatch, useSelector } from "react-redux";
import "./App.css";
import { decNumber, incNumber } from "./actions";

function App() {
  const myState = useSelector((state) => state.changeTheNumber);
  const dispatch = useDispatch();
  return (
    <>
      <h1>Countdown</h1>
      <div style={{ backgroundColor: "gray", padding: "10px 0px", display: "flex", alignItems: "center", justifyContent: "center" }}>
        <button
          onClick={() => dispatch(decNumber())}
          style={{ color: "red", fontSize: "20px", padding: "0px 10px", marginRight: "10px", backgroundColor: "cyan" }}
        >
          -
        </button>
        <input
          type="text"
          readOnly
          style={{
            color: "black",
            backgroundColor: "white",
            padding: "10px 0px ",
            paddingLeft: "30px",
            fontWeight: "bold",
            fontSize: "20px",
            width: "40px",
          }}
          value={myState}
        />
        <button
          onClick={() => dispatch(incNumber(5))}
          style={{ color: "red", fontSize: "20px", padding: "0px 10px", marginLeft: "10px", backgroundColor: "cyan" }}
        >
          +
        </button>
      </div>
    </>
  );
}

export default App;
