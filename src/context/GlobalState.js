import React,{createContext, useReducer} from "react";
import AppReducer from './AppReducer'
//Initial state

const initialState={
    transactions:[
        {id:1, text:"Flower",amount:-20},
        {id:2, text:"Book",amount:-50},
        {id:3, text:"Salary",amount:300},
        {id:4, text:"Camera",amount:150}
    ]
}

export const GlobalContent= createContext(initialState);

//provider 

export const GlobalProvider=({children})=>{
    const [state, dispatch]= useReducer(AppReducer, initialState);

    //Actions
    function deleteTransaction(id){
        dispatch({
            type:'DELETE_TRANSACTION',
            payload: id
        })

    }
    function addTransaction(transaction){
        dispatch({
            type:'ADD_TRANSACTION',
            payload: transaction
        })
    }

    return (<GlobalContent.Provider value={{
        transactions: state.transactions,
        deleteTransaction,
        addTransaction
    }}>
        {children}
    </GlobalContent.Provider>)
}