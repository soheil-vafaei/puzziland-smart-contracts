
const { ethers } = require("hardhat");

async function main() {

  const Certificate = await ethers.getContractFactory("BMB_NFT_COLLECTION");
  const certificate = await Certificate.deploy("BMB NFT Collection Biconomic","BCB");

  await certificate.deployed();
  console.log("Success! Contract was deployed to: ", certificate.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });