import { useDispatch, useSelector } from 'react-redux';
// import { Component, connect } from 'redux';
import { counterActions } from '../store/CounterSlice.js';
import classes from './Counter.module.css';


const Counter = () => {

  const toggleCounterHandler = () => {
    dispatch(counterActions.toggleCounter())
  };


     //ekti function pass korbe je function ti ekta state ke extract kore niye asbe store theke
  const Counter = useSelector(state => state.counter.counter)
  const Show = useSelector(state => state.counter.showCounter)

  //eti ekti action perform korbe ja store e thakbe
  const dispatch = useDispatch()

  const IncreaseHandler = () => {
    // {type: 'any unique identifier', payload:5}
    dispatch(counterActions.increase(5))
  }
  const IncrementHandler = () => {
    dispatch(counterActions.increment())
  }
  const DecrementHandler = () => {
    dispatch(counterActions.decrement())
  }

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      
      {Show && <div className={classes.value}>{Counter}</div>}
      <div>
      <button onClick={IncrementHandler}>Increment</button>
      <button onClick={IncreaseHandler}>Increase</button>
      <button onClick={DecrementHandler}>Decrement</button>
      </div>
      
      <button onClick={toggleCounterHandler}>Toggle Counter</button>
      
    </main>
  );
};

export default Counter;


// // class based components
// class Counter extends Component {
    
//     IncrementHandler = () => {
//        this.props.increment
//     }
//     DecrementHandler = () => {
//         this.props.decrement
//     }



//     // constructor use korte parbo na karon kono state nai ekhon porjonto
//     render(){
//         return (
//             <main className={classes.counter}>
//               <h1>Redux Counter</h1>
//               <div className={classes.value}>{this.props.counter}</div>
//               <div>
//               <button onClick={this.IncrementHandler.bind()}>Increment</button>
//               <button onClick={this.DecrementHandler.bind()}>Decrement</button>
//               </div>
              
//               <button onClick={this.toggleCounterHandler}>Toggle Counter</button>
//             </main>
//           );
//     }
    
// }
// // 1st argument: store theke state extract kore niye asar jonno
// const mapStateToProps = (state) =>{
//     return {
//         counter:state.counter
//     }
// }

// // 2nd argument: action execute kore.....eti argument hisebe dispatch function nay....
// const mapDispacthToProps = (dispatch) => {
//     return {
//         increment:() => dispatch({type:'increment'}),
//         decrement:() => dispatch({type:'decrement'})
//     }
    
// }
// // redux er sathe connect korte connect() method ta use kora hoise...
// // ei connect() method ta 2 ta argument nay...
// export default connect(mapStateToProps, mapDispacthToProps)(Counter)
