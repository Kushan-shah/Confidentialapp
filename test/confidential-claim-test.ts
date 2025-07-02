
import { expect } from "chai";
import { ethers } from "hardhat";
import { FhevmInstance } from "@zama-fhe/relayer-sdk";

describe("ConfidentialClaim", function () {
  let fhe: FhevmInstance;
  let claim: any;

  before(async () => {
    fhe = await FhevmInstance.create();
    const Claim = await ethers.getContractFactory("ConfidentialClaim");
    claim = await Claim.deploy();
    await claim.deployed();
  });

  it("approves claim under threshold", async () => {
    const enc = await fhe.encrypt8(50);
    const res = await claim.submitClaim(enc);
    const dec = await fhe.decrypt(res);
    expect(dec.toNumber()).to.equal(1);
  });

  it("rejects claim above threshold", async () => {
    const enc = await fhe.encrypt8(150);
    const res = await claim.submitClaim(enc);
    const dec = await fhe.decrypt(res);
    expect(dec.toNumber()).to.equal(0);
  });
});
