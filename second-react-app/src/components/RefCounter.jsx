import { useRef, useState } from 'react';

export default function RefCounter() {
  let countRef = useRef(0) //useRef is akin to document.getElementById('')
  let count = 0  //regular javascript - this resets every time
  const [countState, setCountState] = useState(0) //React way

  function handleClick(){
    countRef.current = countRef.current + 1
    count = count + 1

    alert(`You clicked ${countRef.current} (${count}) times!`)
  }

  return (
    <div>
      <button onClick={handleClick}>
        REFCOUNTER: Click me!
      </button>
      <h3>Count: {count}</h3>
      <h3>CountRef: {countRef.current}</h3>
      <button onClick={() => setCountState(countState + 1)}>
        STATE COUNTER: Click me to update!
      </button>
      <h3>State: {countState}</h3>
    </div>
  )
}