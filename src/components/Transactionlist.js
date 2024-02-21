import React,{useContext} from 'react'
import { GlobalContent } from '../context/GlobalState';
import Transaction from './Transaction';

export default function Transactionlist() {
    const {transactions}= useContext(GlobalContent);
    
  return (
    <div>
      <h3>History</h3>
      <ul id='list' className='list'>
      {transactions.map(transaction=>(<Transaction key={transaction.id} transaction= {transaction}/>))}
        
      </ul>
    </div>
  )
}
