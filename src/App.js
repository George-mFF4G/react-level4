import React, { Fragment } from "react";
// import { useSelector, useDispatch } from "react-redux";
// import logo from "./logo.svg";
import Counter from "./Component/Counter";
import "./App.css";
import store from "./store/index";
import { Provider } from "react-redux";

function App() {
  return (
    <Fragment>
      <Provider store={store}>
        <Counter />
      </Provider>
    </Fragment>
  );
}

export default App;
