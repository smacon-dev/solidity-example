
const hre = require("hardhat");

async function main() {

  const MerkleProofFactory = await hre.ethers.getContractFactory("MerkleProof");
  const merkleProof = await MerkleProofFactory.deploy();
  await merkleProof.deployed();
  console.log("MerkleProof Address: ", merkleProof.address);
  
  const TestMerkleProofFactory = await hre.ethers.getContractFactory("TestMerkleProof");
  const testMerkleProof = await TestMerkleProofFactory.deploy();
  await testMerkleProof.deployed();
  console.log("TestMerkleProof Address: ", testMerkleProof.address);
  
  const root = await testMerkleProof.getRoot();
  console.log("root:" + root);
}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });
