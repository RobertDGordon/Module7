import { useState, useEffect } from "react";

function Clock() {
  const [date, setDate] = useState(new Date());

  // useEffect(()=>{}, [])
  useEffect(() => {
    let clockInterval = setInterval(() => tick(), 1000);
    console.log("Clock component mounted");

    return () => {
      console.log('Clock component unmounted')
      clearInterval(clockInterval)
    }

  }, []);

  const tick = () => {
    setDate(new Date());
    console.log("tick");
  };

  return (
    <div>
      <h3>Digital Clock</h3>
      {date.toLocaleTimeString()}
    </div>
  );
}

export default Clock;
