require("@nomicfoundation/hardhat-toolbox");
// require("@nomiclabs/hardhat-waffle")
require("dotenv").config();

/** @type import('hardhat/config').HardhatUserConfig */
module.exports = {
  // solidity: "0.8.9",
  solidity: "0.8.4",

  networks:{
    rinkeby:{
      url:"https://eth-rinkeby.alchemyapi.io/v2/qvJxz3wKwf2oZsZ9wBYNVSvMI3dmUA4d",
      accounts: [process.env.PRIVATE_KEY],
    },
  },
};
