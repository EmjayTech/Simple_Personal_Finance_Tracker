import { useLocalStorage } from "../hooks/useLocalStorage";
import type { Transaction } from "../types/transaction";
import TransactionForm from "../components/TransactionForm";
import TransactionList from "../components/TransactionList";
import FinanceChart from "../components/FinanceChart";

export default function Dashboard() {

  const [transactions, setTransactions] = useLocalStorage<Transaction[]>(
    "transactions",
    []
  );

  const income = transactions
    .filter((t) => t.type === "income")
    .reduce((acc, t) => acc + t.amount, 0);

  const expenses = transactions
    .filter((t) => t.type === "expense")
    .reduce((acc, t) => acc + t.amount, 0);

  const balance = income - expenses;

  return (
    <div className="p-8 max-w-5xl mx-auto">

      <h1 className="text-3xl font-bold mb-6">
        Personal Finance Snapshot
      </h1>

      <div className="grid grid-cols-3 gap-4 mb-6">

        <div className="bg-green-100 p-4 rounded">
          <p>Income</p>
          <h2 className="text-xl font-bold">₦{income}</h2>
        </div>

        <div className="bg-red-100 p-4 rounded">
          <p>Expenses</p>
          <h2 className="text-xl font-bold">₦{expenses}</h2>
        </div>

        <div className="bg-blue-100 p-4 rounded">
          <p>Balance</p>
          <h2 className="text-xl font-bold">₦{balance}</h2>
        </div>

      </div>

      <TransactionForm
        setTransactions={setTransactions}
        transactions={transactions}
      />

      <FinanceChart transactions={transactions} />

      <TransactionList transactions={transactions} />

    </div>
  );
}