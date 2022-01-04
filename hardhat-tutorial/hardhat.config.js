require("@nomiclabs/hardhat-waffle");

const ROPSTEN_PRIVATE_KEY = process.env.ROPSTEN_PRIVATE_KEY;
const ROPSTEN_RPC_URL = process.env.ROPSTEN_RPC_URL;

module.exports = {
  solidity: "0.7.3",
  networks: {
    ropsten: {
      url: `${ROPSTEN_RPC_URL}`,
      accounts: [`${ROPSTEN_PRIVATE_KEY}`]
    }
  }
};