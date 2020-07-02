import React from "react";
import { connect } from "react-redux";

import { logged } from "./actions/logged-action";

import * as counter from "./actions/counter-action";


const App = ({
  counter,
  isLoggedIn,
  incrementNumber,
  decrementNumber,
  loggedIn,
}) => {
  
  return (
    <div className="App">
      <h3>{counter}</h3>
      <button onClick={() => incrementNumber(5)}>+ (by 5)</button>
      <button onClick={() => decrementNumber(3)}>- (by 3)</button>

      {isLoggedIn ? (
        <h4>Your are LoggedIn. </h4>
      ) : (
        <h3>You are Not LoggedIn.</h3>
      )}
      <button onClick={() => loggedIn()}>Log in</button>
    </div>
  );
};

const mapStateToProps = (state) => {
  return {
    counter: state.counter,
    isLoggedIn: state.isLogged,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    incrementNumber: () => dispatch(counter.increment(5)),
    decrementNumber: () => dispatch(counter.decrement(3)),
    loggedIn: () => dispatch(logged()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(App);
