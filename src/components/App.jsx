import React from 'react';
import Header from './Header';
import Balance from './Balance';
import IncomeExpenses from './IncomeExpenses';
import Transactionlist from './Transactionlist';
import AddTransaction from './AddTransaction';

import { GlobalProvider } from '../context/GlobalState';

import '../App.css';

function App(){
    return <GlobalProvider>
        <Header />
        <div className='container'>
        <Balance />
        <IncomeExpenses />
        <Transactionlist />
        <AddTransaction />

        </div>
    </GlobalProvider>
}
export default App;