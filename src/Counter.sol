// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.13;

struct StreamDetails{
    address to;
    uint256 amount;
    uint256 flow_rate;
    uint256 startTime;
    address sender;
    bool is_active;
    address erc20_account_address;
}

contract Counter {

   function create_stream(address erc20_contract_address,address to, uint256 amount,uint256 flow_rate) public {
    // check the balance of the erc20 address this caller wants to stream
    // transfer that amount to this contract and 
    // trigger blast transfer
    // that's it
    // need to add oz
   } 
}
