// SPDX-License-Identifier: UNLICENSED

pragma solidity ^0.8.0;

import "hardhat/console.sol";

contract OldWavePortal {
    uint256 totalWaves;
    mapping(address => uint) userWaves;
    address[] userList;
  
    constructor() {
        console.log("Yo yo, I am a contract and I am smart");
    }

    function wave() public {
        totalWaves += 1;
        if (userWaves[msg.sender] <= 0) {
          userList.push(msg.sender);
        }
        userWaves[msg.sender] += 1;
        console.log("%s has waved!", msg.sender);
    }

    function getTotalWaves() public view returns (uint256) {
        console.log("We have %d total waves!", totalWaves);
        return totalWaves;
    }

    function getTotalUsers() public view returns (uint256) {
        console.log("We have %d total users!", userList.length);
        return userList.length;
    }

    function getWaves() public view returns (uint256) {
        console.log("%s has waved %d times!", msg.sender, userWaves[msg.sender]);
        return userWaves[msg.sender];
    }
}