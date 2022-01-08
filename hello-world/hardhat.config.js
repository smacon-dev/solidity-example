require("@nomiclabs/hardhat-waffle");

const YOUR_PRIVATE_KEY = process.env.YOUR_PRIVATE_KEY;
const RINKEBY_RPC_URL = process.env.RINKEBY_RPC_URL;

module.exports = {
  solidity: "0.8.9",
  networks: {
    rinkeby: {
      url: `${RINKEBY_RPC_URL}`,
      accounts: [`${YOUR_PRIVATE_KEY}`]
    }
  }
};