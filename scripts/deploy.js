const {ethers} = require("hardhat");    // Imports ethers from Hardhat package

async function main(){
  const nftContract = await ethers.getContractFactory("NFT");         // Creates an instance of the GameItem contract
  const deployedNFTContract = await nftContract.deploy();             // Deploys the contract
  await deployedNFTContract.deployed();
  
  console.log("NFT Contract Address: ", deployedNFTContract.address); // Print address to console
}

// Calls the main function and catches errors
main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });