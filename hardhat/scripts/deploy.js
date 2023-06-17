const hre = require('hardhat');

async function whitelist() {
  // body...

  const whitelistContract = await hre.ethers.deployContract('whitelist', [10]);


  await whitelistContract.waitForDeployment();

  const deployer = await ethers.getSigners();


  console.log("Contract deployed by :", deployer);
  console.log("");
  console.log("Contract deployed to ", whitelistContract.target);

}


whitelist()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });

