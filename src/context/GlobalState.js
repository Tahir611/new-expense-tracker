import React, { createContext, useReducer } from "react";
// import Transaction from "../components/Transaction";
import AppReducer from "./AppReducer";

// create the initial state

const initialState = {
  transactions: []
};

// crteate the Global Context

export const GlobalContext = createContext(initialState);

// crteate Provider for the Global Contex

export const GlobleProvider = ({ children }) => {
  const [state, dispatch] = useReducer(AppReducer, initialState);

  //   actions for transactions
// for delete
  function delTransaction(id){
    dispatch({
        type: 'DELETE_TRANSACTION',
        payload: id
    })
  }


//   for add

function addTransaction(transaction){
    dispatch({
        type: 'ADD_TRANSACTION',
        payload: transaction
    })
  }

  return (
    <GlobalContext.Provider
      value={{
        transactions: state.transactions,
        delTransaction,
        addTransaction
      }}
    >
      {children}
    </GlobalContext.Provider>
  );
};
