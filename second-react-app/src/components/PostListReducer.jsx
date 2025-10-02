import { useEffect, useReducer } from "react";
import { reducer } from "../reducers/reducer";
import axios from 'axios'

export default function PostListReducer() {
  const [postsResult, dispatch] = useReducer(reducer, {
    loading: true,
    posts: [],
    error: ""
  })

  useEffect(()=>{
    axios.get('https://jsonplaceholder.typicode.com/posts?_limit=5')
      .then(response => {
        console.log('PostListReducer:', response)
      })
  }, [])

  return (
    <div>
      {postsResult.loading ? <div>Loading Posts</div> :
        null
      }
      <div>{postsResult.error}</div>
    </div>
  )
}