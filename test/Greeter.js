
const { expect } = require('chai')
const { ethers } = require('hardhat')

describe("Greeter", () => {
    it("Should return the new greeting once it's changed", async () => {
        const Greeter = await ethers.getContractFactory("Greeter")
        const greeter = await Greeter.deploy("Hello there!")
        await greeter.deployed()

        expect(await greeter.greet()).to.equal("Hello there!")

        const setGreetingTxn = await greeter.setGreeting("Helu there now!")

        await setGreetingTxn.wait()

        expect(await greeter.greet()).to.equal("Helu there now!")
    })
})
