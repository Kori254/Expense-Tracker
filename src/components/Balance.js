import React, { useContext } from 'react'
import { GlobalContent } from '../context/GlobalState';


export default function Balance() {
  const {transactions}= useContext(GlobalContent);

  const amounts= transactions.map(transaction=> transaction.amount);
  const total = amounts.reduce((acc,item)=> (acc +=item),0).toFixed(2);

  return (
    <div>
      <h4>Your Balance</h4>
      <h1 id='balance'>${total}</h1>
    </div>
  )
}
