import { useState } from "react";
import { v4 as uuid } from "uuid";

export default function TransactionForm({ transactions, setTransactions }: any) {

  const [amount, setAmount] = useState("");
  const [category, setCategory] = useState("");
  const [type, setType] = useState("expense");

  const handleSubmit = (e: any) => {
    e.preventDefault();

    const newTransaction = {
      id: uuid(),
      amount: Number(amount),
      category,
      type,
      date: new Date().toISOString(),
      description: ""
    };

    setTransactions([...transactions, newTransaction]);

    setAmount("");
    setCategory("");
  };

  return (
    <form onSubmit={handleSubmit} className="mb-6 flex gap-3">

      <input
        type="number"
        placeholder="Amount"
        value={amount}
        onChange={(e) => setAmount(e.target.value)}
        className="border p-2"
      />

      <input
        placeholder="Category"
        value={category}
        onChange={(e) => setCategory(e.target.value)}
        className="border p-2"
      />

      <select
        onChange={(e) => setType(e.target.value)}
        className="border p-2"
      >
        <option value="expense">Expense</option>
        <option value="income">Income</option>
      </select>

      <button className="bg-blue-500 text-white px-4">
        Add
      </button>

    </form>
  );
}