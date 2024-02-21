import React, {useContext, useState} from 'react'
import { GlobalContent } from '../context/GlobalState'

export default function IncomeExpenses() {

  const {transactions}= useContext(GlobalContent);
  const amounts= transactions.map(transaction=> transaction.amount);

  const income= amounts.filter(item=> item>0)
  .reduce((acc,item)=>(acc+=item),0)
  .toFixed(2);

  const expense= amounts.filter(item=> item<0)
  .reduce((acc,item)=>(acc+=item),0)*-1
  .toFixed(2);
  return (
    <div className='inc-exp-container'>
      <div>
        <h4>Income</h4>
        <p id='money-plus' className='money plus'>+{income}</p>
      </div>
      <div>
        <h4>Expenses</h4>
        <p id='money-minus' className="money minus">-${expense}</p>
      </div>
    </div>
  )
}
