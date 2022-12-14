import React, { useState, useContext } from "react";
import { GlobalContext } from "../context/GlobalState";


const AddTransaction = () => {

    const [description, setDescription] = useState('');
    const [transactionAmount, setTransactionAmount] = useState(0);

    const {addTransaction} = useContext(GlobalContext);

    const onSubmit = (e) => {
        e.preventDefault();

        const newTransaction = {
             id: Math.floor(Math.random()* 100000),
             description,
             transactionAmount: +transactionAmount
        }

        addTransaction(newTransaction)
    }

  return (
    <>
      <div className="addTransaction">
        <h3>Add New Transaction</h3>
        <form onSubmit={onSubmit}>
            <div className="form-control">
                <label htmlFor="description">Description</label>
                <input type="text"
                 id="description"
                 value={description}
                 onChange = {(e)=>
                    setDescription(e.target.value)
                 }
                 placeholder="Detail of Transaction"/>
            </div>

            <div className="form-control">
                <label htmlFor="transactionamount">Transaction Amount</label>
                <input type="number"
                 id="transactionamount"
                 value={transactionAmount}
                 onChange = {(e)=>
                    setTransactionAmount(e.target.value)
                 }
                 placeholder="Dollar Value of Transaction"/>
            </div>
            <button className="btn">Add Transaction</button>
        </form>
      </div>
    </>
  );
};

export default AddTransaction;
