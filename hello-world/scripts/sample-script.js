const hre = require("hardhat");

async function main() {
  const Greeter = await hre.ethers.getContractFactory("Greeter");
  const greeter = await Greeter.deploy();

  await greeter.deployed();

  console.log("Greeter deployed to:", greeter.address);
  const ret = await greeter.hello();
  console.log(ret);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
