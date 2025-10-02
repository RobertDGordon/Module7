import { useReducer } from "react";
import { reducer } from "../reducers/reducer";

function ReducerCounter() {
  const [counter, dispatch] = useReducer(reducer, 0)

  const handleIncrement = ()=> {
    dispatch({ type: "increment"})
  }

  const handleDecrement = ()=> {
    dispatch({ type: "decrement"})
  }

  return (
    <div>
      <h2>Count: {counter}</h2>
      <button onClick={handleIncrement}>
        Reducer Increment
      </button>
      <button onClick={handleDecrement}>
        Reducer Decrement
      </button>
    </div>
  )
}

export default ReducerCounter;