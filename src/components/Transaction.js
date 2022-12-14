import React, {useContext} from 'react'
import { GlobalContext } from '../context/GlobalState';

const Transaction = ({transaction}) => {

    const {delTransaction} = useContext(GlobalContext)

    const sign = transaction.transactionAmount > 0 ? "+" : "-";
    const transactionType = transaction.transactionAmount > 0 ? "plus" : "minus"
//  let id = transaction.id
  return (
    <li className= {transactionType}>
        {transaction.description}
        <span> {sign} ${Math.abs(transaction.transactionAmount)} </span>
        {/* <span>list id num {id}</span> */}
        <button className='delete-btn' 
        onClick={()=>
            delTransaction(transaction.id)
        }>X</button>
    </li>
  )
}

export default Transaction