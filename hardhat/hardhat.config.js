require("@nomicfoundation/hardhat-toolbox");
require("dotenv").config({ path: ".env" });

const INFURA_API = process.env.INFURA_API;
const PRIVATE_KEY = process.env.PRIVATE_KEY;

module.exports = {
  solidity: "0.8.0",
  networks: {
    goerli: {
      url: INFURA_API,
      accounts: [PRIVATE_KEY],
    },
  },
};