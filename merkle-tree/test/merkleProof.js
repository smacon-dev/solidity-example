const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("MerkleProof.verify()", function () {
  it("Should return true", async function () {
    const MerkleProofFactory = await hre.ethers.getContractFactory("MerkleProof");
    const merkleProof = await MerkleProofFactory.deploy();
    await merkleProof.deployed();

    expect(await merkleProof.verify(
      [
        "0x948f90037b4ea787c14540d9feb1034d4a5bc251b9b5f8e57d81e4b470027af8",
        "0x63ac1b92046d474f84be3aa0ee04ffe5600862228c81803cce07ac40484aee43"
      ],
      "0x074b43252ffb4a469154df5fb7fe4ecce30953ba8b7095fe1e006185f017ad10",
      "0x1bbd78ae6188015c4a6772eb1526292b5985fc3272ead4c65002240fb9ae5d13",
      2
    )).to.equal(true);

  });
});
