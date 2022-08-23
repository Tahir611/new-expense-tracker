import "./App.css";
import "./components/tracker.css";
import Header from "./components/Header";
import Balance from "./components/Balance";
import AccountSummary from "./components/AccountSummary";
import TransactionHistory from "./components/TransactionHistory";
import AddTransaction from "./components/AddTransaction";
import { GlobleProvider } from "./context/GlobalState";

function App() {
  return (
    <> 
      <GlobleProvider>
        <div>
          <Header />
          <div className="container">
            <Balance />
            <AccountSummary />
            <TransactionHistory />
            <AddTransaction />
          </div>
        </div>
      </GlobleProvider>
    </>
  );
}

export default App;
