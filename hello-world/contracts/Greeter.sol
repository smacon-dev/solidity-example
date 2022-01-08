// SPDX-License-Identifier: MIT
// compiler version must be greater than or equal to 0.8.10 and less than 0.9.0
pragma solidity ^0.8.9;

contract Greeter {
    string public greet = "Hello World!";

    function hello() external view returns (string memory) {
        return greet;
    }
}
