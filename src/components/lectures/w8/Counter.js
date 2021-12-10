// import React from "react";
// import {useDispatch, useSelector} from "react-redux";
//
// const Counter = () => {
//   const count = useSelector((state) => state.count);
//   const account = useSelector((state) => state.account);
//   const dispatch = useDispatch()
//   const plus = () => {
//     const action = {
//       type: 'increment-counter'
//     }
//     dispatch(action);
//   }
//   const minus = () => {
//     const action = {
//       type: 'decrement-counter'
//     }
//     dispatch(action);
//   }
//   return(
//     <div>
//       <h2>Count = {count}, {account.name}</h2>
//       <button onClick={plus}>+</button>
//       <button onClick={minus}>-</button>
//     </div>
//   )
// }
//
// export default Counter;