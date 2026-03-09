export default function TransactionList({ transactions }: any) {

  return (
    <div>

      <h2 className="text-xl mb-3">Transactions</h2>

      {transactions.map((t: any) => (
        <div
          key={t.id}
          className="flex justify-between border-b py-2"
        >
          <span>{t.category}</span>
          <span>₦{t.amount}</span>
        </div>
      ))}

    </div>
  );
}