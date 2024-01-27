import React from 'react'
// Get the Action
import { incrememtLike,decrementLike } from './Actions'
// Get the store
import {createStore} from 'redux'
// Get the reducer
import Reducer from './Reducer'

// createStore created a store using reducer
const store = createStore(Reducer)

function Likecounter() {
  const [likes,setLikes] = React.useState(store.getState().likes)
    function HandleLike(){
        store.dispatch(incrememtLike())
    }
    function HandleUnlike(){
        store.dispatch(decrementLike())
    }

    React.useEffect(()=>{
      const subscribe = store.subscribe(()=> setLikes(store.getState().likes))
      return subscribe
    },[])
  return (
    <div>
        <h1>{likes}</h1>
        <button onClick={HandleLike}>Like</button>
        <button onClick={HandleUnlike}>Unlike</button>
    </div>
  )
}

export default Likecounter