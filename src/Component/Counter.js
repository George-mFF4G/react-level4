import React, { Fragment, useCallback, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import { increase, decrease } from "../store/counterSlice";
import { logIn, logOut } from "../store/authslice";

export default function Counter() {
  // ////////////////////////////////// react-redux without react toolkit///////////////////////////////
  // const dispatch = useDispatch();
  // const globalState = useSelector((state) => state);
  // const counterOperation = useCallback(
  //   (type, payload) => {
  //     dispatch({ type, payload });
  //   },
  //   [dispatch]
  // );
  // useEffect(() => {
  //   counterOperation("increase", 10);
  //   console.log("console");
  // }, [counterOperation]);
  // const counterState = useSelector((state) => {
  //   if (state.value < 1) {
  //     return "no number";
  //   }
  //   return state.value;
  // });
  // const toggleState = useSelector((state) => state.showCounter);
  // const handleCounterValue = (state) => {
  //   if (state < 1) {
  //     return "no number";
  //   }
  //   return state;
  // };
  // const increase = () => {
  //   const action = { type: "increase", payload: 1 };
  //   dispatch(action);
  // };
  // const decrease = () => {
  //   const action = { type: "decrease", payload: 1 };
  //   dispatch(action);
  // };
  // const ShowCounter = () => {
  //   console.log("show counter");
  //   dispatch({ type: "toggleCounter" });
  // };
  // return (
  // <div className="App">
  //   <h1>Hello Redux Basic</h1>
  //   {globalState.showCounter && (
  //     <Fragment>
  //       <div className="counter">
  //         Counter: {handleCounterValue(globalState.value)}
  //       </div>
  //       <div>
  //         <button
  //           className="btn"
  //           onClick={() => counterOperation("increase", 1)}
  //         >
  //           increase +
  //         </button>
  //         <button
  //           className="btn"
  //           onClick={() => counterOperation("decrease", 1)}
  //         >
  //           decrease -
  //         </button>
  //       </div>
  //     </Fragment>
  //   )}
  //   <div>
  //     <button className="btn" onClick={ShowCounter}>
  //       Hide/Show Counter Number
  //     </button>
  //   </div>
  // </div>
  // );
  // ////////////////////////////////// end///////////////////////////////
  // ////////////////////////////////// react-redux with react toolkit///////////////////////////////
  const globalState = useSelector((state) => state);
  const dispatch = useDispatch();
  // const { increase, decrease, toggleCounter } = counterActions;
  const isLoggedIn = () => {
    return globalState.auth.isLoggedIn;
  };
  const loginHandler = (status) => {
    if (status) {
      dispatch(logOut());
    } else {
      dispatch(logIn());
    }
  };
  const counterHandler = useCallback(
    (type, value) => {
      if (type === "increase") {
        dispatch(increase(value));
      }
      if (type === "decrease") {
        dispatch(decrease(value));
      }
    },
    [dispatch]
  );
  // useEffect(() => {
  //   counterHandler("increase", 5);
  // }, [counterHandler]);
  useEffect(() => {
    dispatch(increase(5));
  }, [dispatch]);
  return (
    <div className="App">
      <h1>Hello Redux Basic</h1>
      {isLoggedIn() && (
        <Fragment>
          <div className="counter">Counter: {globalState.counter.value}</div>
          <div>
            <button
              className="btn"
              // onClick={() => counterOperation("increase", 1)}
              onClick={() => counterHandler("increase", 1)}
            >
              increase +
            </button>
            <button
              className="btn"
              // onClick={() => counterOperation("decrease", 1)}
              onClick={() => counterHandler("decrease", 2)}
            >
              decrease -
            </button>
          </div>
        </Fragment>
      )}

      <div>
        <button
          className="btn"
          // onClick={() => dispatch(toggleCounter())}
          // onClick={ShowCounter}
          onClick={() => loginHandler(isLoggedIn())}
        >
          {isLoggedIn() ? "Logged In" : "Not logged in"}
        </button>
      </div>
    </div>
  );
}
