import React from "react";
import {useSelector, useDispatch } from "react-redux";
import { increment, decrement } from "./actions/counter-action";
import { logged } from "./actions/logged-action";

function App() {
  const state  = useSelector(state => state.counter);
  const isLoggedIn = useSelector(state => state.isLogged);

  const dispatch = useDispatch()
  return (
    <div className="App">      
      <h3>{state}</h3>
      <button onClick={()=> dispatch(increment(5))}>+ (by 5)</button>
      <button onClick={()=> dispatch(decrement(3))}>- (by 3)</button>

      {isLoggedIn ? <h4 >Your are LoggedIn. </h4 > : <h3>You are Not LoggedIn.</h3>}
      <button onClick={()=> dispatch(logged())}>Log in</button>
    </div>
  );
}

export default App;
 