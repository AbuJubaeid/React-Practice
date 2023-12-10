import { createSlice } from '@reduxjs/toolkit';


const initialCounterState = { counter: 0, showCounter: true };

const counterSlice = createSlice({
    name: 'counter',
    initialState: initialCounterState,
    reducers: {
          // redux nije theke ekhane ei state gulake call kore tai extra kore ekhane action deyar dorkar hoy na....
          increment(state) {
              state.counter++;
            },
            decrement(state) {
              state.counter--;
            },
          // ekhane action er sathe extra payload ase tai action use kora hoise..... 
          increase(state, action) {
              state.counter = state.counter + action.payload;
            },
            toggleCounter(state) {
              state.showCounter = !state.showCounter;
            },
          },
        });

        export const counterActions = counterSlice.actions;
        export default counterSlice.reducer