import { createStore } from 'redux';


//creating reducer function which will change the store
const counterReducer = (state = {counter:0}, action) => {
   
    if(action.type === 'increment'){
        return{
        counter: state.counter + 1
    }
    }

    if(action.type === 'decrement'){
        return{
        counter: state.counter - 1
    }
    }
   return state;
}

//creating store 
const store = createStore(counterReducer)

//it will get the new state that will be produced by reducer function
// const counterSubscriber = () => {
//     const latestState = store.getState()
//     console.log(latestState)
// }
// //it expect a function which will get a new state
// store.subscribe(counterSubscriber)

// store.dispatch({type:'increment'})
// store.dispatch({type:'decrement'})

export default store