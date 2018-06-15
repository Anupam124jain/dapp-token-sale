var DappToken = artifacts.require("./DappToken.sol");
var DappTokenSale = artifacts.require("./DappTokenSale.sol");

module.exports = function(deployer) {
  deployer.deploy(DappToken, 1000000).then(function(){
  		// token price is 0.01 Ether
  		var tokenPrice = 1000000000000000;
  		return deployer.deploy(DappTokenSale,DappToken.address,tokenPrice);
});
};