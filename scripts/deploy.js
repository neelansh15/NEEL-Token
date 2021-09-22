
const fs = require('fs')

async function main(){

    // Not necessary, but just to see the account deplying from
    const [deployer] = await ethers.getSigners()
    console.log("Deploying contracts with the account", deployer.address)

    const balance = await deployer.getBalance()
    console.log("Account balance", balance.toString())

    // Main stuff
    const Token = await ethers.getContractFactory("Token")
    const token = await Token.deploy()

    const data = {
        address: token.address,
        abi: JSON.parse(token.interface.format('json'))
    }
    console.log("Deployment address: ", token.address)

    fs.writeFileSync('abi/NEELToken.json', JSON.stringify(data))
}

main()
.then(() => process.exit(0))
.catch((e) => {
    console.error(e);
    process.exit(1);
})
