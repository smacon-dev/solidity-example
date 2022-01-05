const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Counter", function () {
  let Factory;
  let contract;

  beforeEach(async function () {
    Factory = await ethers.getContractFactory("Counter");
    contract = await Factory.deploy();
  })

  it("Should be 0", async function () {
    expect(await contract.get()).to.equal(0);
  });

  it("Should be 1 after inc()", async function () {
    const Tx = await contract.inc();
    await Tx.wait();
    expect(await contract.get()).to.equal(1);
  });

  it("Should be 0 after inc() and dec()", async function () {
    const Tx1 = await contract.inc();
    await Tx1.wait();
    const Tx2 = await contract.dec();
    await Tx2.wait();
    expect(await contract.get()).to.equal(0);
  });

});
