
import { useState } from "react";
import { encryptAmount, decryptResult, submitClaim } from "./utils/fhe";

export default function App() {
  const [amount, setAmount] = useState("");
  const [result, setResult] = useState("");

  const handleSubmit = async () => {
    const encrypted = await encryptAmount(Number(amount));
    const txResult = await submitClaim(encrypted);
    const decision = await decryptResult(txResult);
    setResult(decision === 1 ? "✅ Claim Approved" : "❌ Claim Rejected");
  };

  return (
    <div className="min-h-screen bg-gray-50 p-8">
      <div className="max-w-md mx-auto bg-white shadow-lg rounded-xl p-6 space-y-4">
        <h1 className="text-xl font-bold">Confidential Health Claim</h1>
        <input
          className="w-full p-2 border rounded"
          placeholder="Enter claim amount"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        <button onClick={handleSubmit} className="bg-blue-600 text-white px-4 py-2 rounded">
          Submit Encrypted Claim
        </button>
        <p className="text-lg font-semibold">{result}</p>
      </div>
    </div>
  );
}
