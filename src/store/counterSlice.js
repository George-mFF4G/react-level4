// ////////////////////////////////// react-redux without react toolkit///////////////////////////////
// import { createStore } from "redux";

// const initState = { value: 0, showCounter: false };
// const CounterReducer = (state = initState, action) => {
//   if (action.type === "increase") {
//     return { ...state, value: state.value + action.payload };
//   }
//   if (action.type === "decrease") {
//     return { ...state, value: state.value - action.payload };
//   }
//   if (action.type === "toggleCounter") {
//     return { ...state, showCounter: !state.showCounter };
//   }
//   return state;
// };

// const store = createStore(CounterReducer);
// export default store;
// ////////////////////////////////// end///////////////////////////////
// ////////////////////////////////// react-redux with react toolkit///////////////////////////////
import { createSlice } from "@reduxjs/toolkit";
import { logOut } from "./authslice";
const initState = { value: 0 };
const counterSlice = createSlice({
  name: "counter",
  initialState: initState,
  reducers: {
    increase: (state, action) => {
      state.value += action.payload;
    },
    decrease: (state, action) => {
      state.value -= action.payload;
    },
  },
  extraReducers: {
    [logOut]: (state, action) => {
      state.value = 0;
    },
  },
});
export default counterSlice.reducer;
export const { increase, decrease } = counterSlice.actions;
