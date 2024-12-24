import { configureStore, createSlice } from "@reduxjs/toolkit";

/*const INITIAL_VALUE = {
  count: 0,
  private: false,
};*/

const counterSlice=createSlice({
  name:"counter",
  initialState:{counterVal:0},
  reducers:{
    increment:(state)=>{
      state.counterVal=state.counterVal+1;
    },
    decrement:(state)=>{
      state.counterVal=state.counterVal-1;    
    },
    add:(state,action)=>{
      state.counterVal+=parseInt(action.payload.num);
    },
    substract:(state,action)=>{
      state.counterVal-=parseInt(action.payload.num);
    }
  }
});

const privacySlice = createSlice({
  name: "privacy",
  initialState: false,
  reducers: {
    privacyVal: (state) => !state,
  },
});


/*const counterReducer = (store = INITIAL_VALUE, action) => {
  switch (action.type) {
    case "INC":
      return { ...store, count: store.count + 1 };
    case "DEC":
      return { ...store, count: store.count - 1 };
    case "ADD":
      return { ...store, count: store.count + parseInt(action.payload.num) };
    case "SUB":
      return { ...store, count: store.count - parseInt(action.payload.num) };
    case "PRIVACY":
      return { ...store, private: !store.private };
    default:
      return store;
  }
};*/

const counter = configureStore({reducer:{
  counter:counterSlice.reducer,
  privacy:privacySlice.reducer
}});
export const counterSliceActions=counterSlice.actions;
export const privacySliceActions=privacySlice.actions;
export default counter;
