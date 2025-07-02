# ConfidentialClaimApp

**ConfidentialClaimApp** is a privacy-focused decentralized application (dApp) that leverages **Fully Homomorphic Encryption (FHE)** on the **Zama FHEVM** blockchain testnet to enable confidential health insurance claim processing.

## Project Overview

Traditional blockchains expose all data to the public, which is a major problem for sensitive applications like health insurance claims. This app allows users to submit **encrypted claims** which are processed on-chain without decrypting the sensitive data.

## Features

- Encrypt claim amounts client-side before sending to the blockchain
- Smart contract evaluates encrypted data using Zama’s FHE extensions
- Result (approved/rejected) is returned encrypted and decrypted client-side
- Built with Solidity, React, and `@zama-fhe/relayer-sdk`
- Deployed on Zama’s FHEVM testnet 

## Tech Stack

- Solidity + Zama FHEVM
- Hardhat for contract deployment and testing
- React + TailwindCSS for frontend UI
- Zama Relayer SDK for encryption/decryption on client

## Setup & Run

1. Clone repo and install dependencies
```bash
npm install
