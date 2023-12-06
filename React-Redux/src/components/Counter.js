// 


import { useDispatch, useSelector } from 'react-redux';

import classes from './Counter.module.css';

const Counter = () => {
  const dispatch = useDispatch();
  const counter = useSelector((state) => state.counter);

  const incrementHandler = () => {
    dispatch({ type: 'increment' });
  };

  const increaseHandler = () => {
    dispatch({ type: 'increase', amount: 10 });
  };

  const decrementHandler = () => {
    dispatch({ type: 'decrement' });
  };

  const toggleCounterHandler = () => {};

  return (
    <main className={classes.counter}>
      <h1>Redux Counter</h1>
      <div className={classes.value}>{counter}</div>
      <div>
        <button onClick={incrementHandler}>Increment</button>
        <button onClick={increaseHandler}>Increase by 10</button>
        <button onClick={decrementHandler}>Decrement</button>
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
