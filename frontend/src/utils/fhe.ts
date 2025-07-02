
import { FhevmInstance } from "@zama-fhe/relayer-sdk";

let fhe: FhevmInstance;

export async function encryptAmount(amount: number) {
  if (!fhe) fhe = await FhevmInstance.create();
  return fhe.encrypt8(amount);
}

export async function decryptResult(result: any) {
  return (await fhe.decrypt(result)).toNumber();
}

export async function submitClaim(enc: any) {
  const contract = await getContract();
  return await contract.submitClaim(enc);
}

// Dummy placeholder for actual contract connection logic
async function getContract() {
  throw new Error("Please implement contract connection logic");
}
