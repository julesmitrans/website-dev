// import React, {useState, useEffect} from "react";
// import {useDispatch, useSelector} from "react-redux";
//
// const BankAccount = () => {
//   const account = useSelector((state) => state.account);
//   console.log(account)
//   const dispatch = useDispatch();
//   const [balance, setBalance] = useState(account.balance);
//   useEffect(() => {
//     setBalance(account.balance);
//   })
//   const [amount, setAmount] = useState(0);
//   const handleAmountChange = (event) => {
//     const newValue = parseInt(event.target.value);
//     // console.log('handleAmountChange');
//     setAmount(newValue);
//   }
//   const depositClickHandler = () => {
//     // console.log('depositClickHandler', amount)
//     dispatch({
//       type: 'deposit',
//       amount: amount
//     })
//     // setBalance(balance + amount);
//   }
//   const withdrawClickHandler = () => {
//     // console.log('withdrawClickHandler', amount)
//     dispatch({
//       type: 'withdraw',
//       amount: amount
//     })
//     // setBalance(balance - amount);
//   }
//   return(
//     <div>
//       <h2>Bank Account for: {account.name}</h2>
//       <h3>Balance: {balance}</h3>
//       Amount:
//       <input onChange={handleAmountChange}
//              type="number"
//              value={amount}/>
//       <button onClick={depositClickHandler}>Deposit</button>
//       <button onClick={withdrawClickHandler}>Withdraw</button>
//     </div>
//   )
// }
//
// export default BankAccount;