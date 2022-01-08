// SPDX-License-Identifier: MIT
pragma solidity ^0.8.9;

contract Variables {
    function get()
        external
        view
        returns (
            address sender,
            uint256 timestamp,
            uint256 number
        )
    {
        sender = msg.sender;
        timestamp = block.timestamp;
        number = block.number;
    }
}
