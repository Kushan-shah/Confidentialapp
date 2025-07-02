
// SPDX-License-Identifier: MIT
pragma solidity ^0.8.20;
import "@fhevm/contracts/FHE.sol";

contract ConfidentialClaim {
    euint8 private threshold;

    constructor() {
        threshold = FHE.asEuint8(100); // threshold = 100
    }

    function submitClaim(euint8 amount) external view returns (euint8) {
        euint8 approved = amount.lt(threshold) ? FHE.asEuint8(1) : FHE.asEuint8(0);
        return approved;
    }
}
