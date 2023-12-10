import { configureStore } from '@reduxjs/toolkit';
import authReducer from './AuthReducer';
import counterReducer from './CounterSlice';

// const initialCounterState = { counter: 0, showCounter: true };

// slice use kore create kora component gulo alada alada file e rekhe deya jay...

// const counterSlice = createSlice({
//   name: 'counter',
//   initialState: initialCounterState,
//   reducers: {
        // redux nije theke ekhane ei state gulake call kore tai extra kore ekhane action deyar dorkar hoy na....
    //     increment(state) {
    //         state.counter++;
    //       },
    //       decrement(state) {
    //         state.counter--;
    //       },
    //     // ekhane action er sathe extra payload ase tai action use kora hoise..... 
    //     increase(state, action) {
    //         state.counter = state.counter + action.payload;
    //       },
    //       toggleCounter(state) {
    //         state.showCounter = !state.showCounter;
    //       },
    //     },
    //   });
      
    //   const initialAuthState = {
    //     isAuthenticated: false,
    //   };
      
    //   const authSlice = createSlice({
    //     name: 'authentication',
    //     initialState: initialAuthState,
    //     reducers: {
    //       login(state) {
    //         state.isAuthenticated = true;
    //       },
    //       logout(state) {
    //         state.isAuthenticated = false;
    //       },
    //     },
    //   });
// ami jokhon createSlice use korbo tokhon r egulor dorkar hobena...
//creating reducer function which will change the store
// const counterReducer = (state = initialState, action) => {
   
//     if(action.type === 'increment'){
//         return{
//         counter: state.counter + 1,
//         showCounter:state.showCounter
//     }
//     }

//     if(action.type === 'increase'){
//         return{
//         counter: state.counter + action.amount,
//         showCounter:state.showCounter
//     }
//     }

//     if(action.type === 'decrement'){
//         return{
//         counter: state.counter - 1,
//         showCounter:state.showCounter
//     }
//     }

//     if(action.type === 'toggle'){
//         return{
//         showCounter:!state.showCounter,
//         //emnite counter true kora ase jonno counter dekha jabe.....jodi toggle button e click kori tahole counter hide hobe tai state ke false kore deya hoise
//         counter: state.counter,
        
        
//     }
//     }

//    return state;
// }


// multiple reducer ke eksathe korte configureStore hook bebohar kora hoy redus toolkit theke niye.... 
// store configure korte ekti object proyon jetake boli configuration object....
//creating store 

// multiple state thakle evabe korte hobe..
// reduce:{ counter: createSlice.counter,
// onno r ekti property name
// }
const store = configureStore({
    reducer: { counter: counterReducer, auth: authReducer },
  });

//it will get the new state that will be produced by reducer function
// const counterSubscriber = () => {
//     const latestState = store.getState()
//     console.log(latestState)
// }
// //it expect a function which will get a new state
// store.subscribe(counterSubscriber)

// store.dispatch({type:'increment'})
// store.dispatch({type:'decrement'})
// export const counterActions = counterReducer.actions;
// export const authActions = authReducer.actions;

export default store;