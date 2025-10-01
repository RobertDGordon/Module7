import { useState } from "react";
import Clock from "./Clock";

function ClockDisplay () {
  const [showClock, setShowClock] = useState(false)

  const toggleClock = () => {
    // true = false
    // !true = false
    // !false = true
    setShowClock(!showClock)
  }

  return (
    <div>
      {showClock && <Clock />}
      <button onClick={toggleClock}>Toggle Clock</button>
    </div>
  )
}

export default ClockDisplay;