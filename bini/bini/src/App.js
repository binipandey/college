import { useState } from "react";
import './App.css';

function App() {
  const [total, setTotal] = useState("");
  return (
    <div className="App">
      <div className="display-div">{total}</div>
      <div className="button-div">
        <div onClick={() => setTotal("")}>AC</div>
        <div onClick={() => setTotal((prev) => prev + "%")}>%</div>
        <div onClick={() => setTotal((prev) => prev.length > 1 ? prev.substring(0, prev.length - 1) : "")}>Clear</div>
        <div onClick={() => setTotal((prev) => prev + "/")}>/</div>
        <div onClick={() => setTotal((prev) => prev + "7")}>7</div>
        <div onClick={() => setTotal((prev) => prev + "8")}>8</div>
        <div onClick={() => setTotal((prev) => prev + "9")}>9</div>
        <div onClick={() => setTotal((prev) => prev + "")}></div>
        <div onClick={() => setTotal((prev) => prev + "4")}>4</div>
        <div onClick={() => setTotal((prev) => prev + "5")}>5</div>
        <div onClick={() => setTotal((prev) => prev + "6")}>6</div>
        <div onClick={() => setTotal((prev) => prev + "-")}>-</div>
        <div onClick={() => setTotal((prev) => prev + "1")}>1</div>
        <div onClick={() => setTotal((prev) => prev + "2")}>2</div>
        <div onClick={() => setTotal((prev) => prev + "3")}>3</div>
        <div onClick={() => setTotal((prev) => prev + "+")}>+</div>
        <div onClick={() => setTotal((prev) => prev + "00")}>00</div>
        <div onClick={() => setTotal((prev) => prev + "0")}>0</div>
        <div onClick={() => setTotal((prev) => prev + ".")}>.</div>
        <div onClick={() => setTotal(eval(total))}>=</div>
      </div>
    </div>
  );
}

export default App;