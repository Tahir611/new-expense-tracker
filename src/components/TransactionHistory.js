import React, { useContext } from 'react'
import Transaction from './Transaction';
import { GlobalContext } from '../context/GlobalState'

const TransactionHistory = () => {

    const {transactions} = useContext(GlobalContext);

    
    // console.log(transactions)

  return (
    <>
    <div className='transection'>
        <h3>Transaction History</h3>
        <ul className='list'>
            {transactions.map(transaction =>{
               return <Transaction key={transaction.id} transaction = {transaction}/>
            })}
        </ul>
    </div>
    </>
  )
}

export default TransactionHistory