import { ethers } from "hardhat";

const deploy = async () => {
  const [deployer] = await ethers.getSigners();

  console.log(`Deploying contract with the account ${deployer.address}`);

  const PlatziPunk = await ethers.getContractFactory("PlatziPunks");
  const deployed = await PlatziPunk.deploy(10000);

  console.log("Platzi Punks is deployed at:", deployed.address);
};

deploy()
  .then(() => process.exit(0))
  .catch((error) => {
    console.error(error);
    process.exitCode = 1;
  });
