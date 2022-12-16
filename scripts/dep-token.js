
const { ethers } = require("hardhat");

async function main() {

  const Certificate = await ethers.getContractFactory("BMBToken");
  const certificate = await Certificate.deploy(0x0A0167096b6bF3C1743d725834cc8Bb7361E5409,0x0A0167096b6bF3C1743d725834cc8Bb7361E5409,0x0A0167096b6bF3C1743d725834cc8Bb7361E5409);

  await certificate.deployed();
  console.log("Success! Contract was deployed to: ", certificate.address);

}

main()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exit(1);
  });