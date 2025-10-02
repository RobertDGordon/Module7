import { useState, useEffect } from "react";

function ActivityFinder() {
  const [participants, setParticipants] = useState(1)
  const [activity, setActivity] = useState('')

  useEffect(( ) => {
    console.log('running effect')
    let ignore = false

    fetch(`https://bored.api.lewagon.com/api/activity?participants=${participants}`)
      .then(response => response.json())
      .then(json => {
        console.log('BoredAPI response:', json)
        // setActivity(json.activity)
        if (!ignore) setActivity(json.activity)
      })
    return () => {
      ignore = true
      console.log('clean up effect')
    }

  }, [participants])

  return (
    <div>
      <h3>Activity Finder</h3>
      <label>Choose number of participants:
        <select value={participants}
          onChange={(e) => setParticipants(e.target.value)}>
            <option>1</option>
            <option>2</option>
            <option>3</option>
        </select>
      </label>
      <div><strong>Suggested Activity: </strong>
        {activity}
      </div>
    </div>
  )
}

export default ActivityFinder;