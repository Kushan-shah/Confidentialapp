
import { ethers } from "hardhat";

async function main() {
  const Claim = await ethers.getContractFactory("ConfidentialClaim");
  const claim = await Claim.deploy();
  await claim.deployed();
  console.log("ConfidentialClaim deployed to:", claim.address);
}

main()
  .then(() => process.exit(0))
  .catch(error => { console.error(error); process.exit(1); });
