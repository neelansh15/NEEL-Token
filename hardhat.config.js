/**
 * @type import('hardhat/config').HardhatUserConfig
 */

 require('@nomiclabs/hardhat-waffle')

 const { INFURA_URL, PRIVATE_KEY } = require('./config')

//  const INFURA_URL = 'https://rinkeby.infura.io/v3/1987ce4db8e7464484784f5a8f14a42d'
//  const PRIVATE_KEY = '5375f446024be45d2b9de98f474d67e6352b6b82dbfa81b09ac1ba662a26ce35'
 
 module.exports = {
   solidity: "0.8.0",
   networks:{
     rinkeby:{
       url: INFURA_URL,
       accounts: [`0x${PRIVATE_KEY}`]
     }
   }
 };
 