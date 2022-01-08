const { expect } = require("chai");
const { ethers } = require("hardhat");

describe("Variables", function () {
  let Factory;
  let contract;

  beforeEach(async function () {
    Factory = await ethers.getContractFactory("Variables");
    contract = await Factory.deploy();
  })

  it("Should be 0", async function () {
    expect(await contract.getTimeStamp()).to.equal(0);
  });

});
