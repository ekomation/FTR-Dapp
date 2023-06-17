//SPDX-License-Identifier : MIT
pragma solidity ^0.8.0;



/**
 * The whitelist contract does this and that...
 */
contract whitelist {

	uint256 public nowhitelisted;
	uint256 public maxwhitelisted;

	mapping (address => bool) whitelistedAddresses;	



  constructor(uint256 _maxwhitelisted) {
  	maxwhitelisted = _maxwhitelisted;
    
  }

  function AdressesToWhitelist () public {
  	require(!whitelistedAddresses[msg.sender], "Address already whitelisted");
  	require(nowhitelisted < maxwhitelisted, "Whitelist spot is already filled");

  	whitelistedAddresses[msg.sender] = true;

  	nowhitelisted += 1;
  	
  }
  
}


