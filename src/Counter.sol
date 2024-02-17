// SPDX-License-Identifier: UNLICENSED
pragma solidity ^0.8.20;

import {IERC20} from "./IERC20.sol";
import {IBlast} from "./IBLAST.sol";
import {SafeERC20} from "@openzeppelin/contracts/token/ERC20/utils/SafeERC20.sol";

struct StreamDetails {
    address to;
    uint256 amount;
    uint256 flow_rate;
    uint256 start_time;
    address sender;
    bool is_active;
    IERC20 erc20_account_address;
}

contract Counter {
    using SafeERC20 for IERC20;

    mapping(uint256 => StreamDetails) public streamMappings;
    uint256 private random_id;
    uint256 private time_elapsed;
    uint256 private current_balance;
    uint256 private temp_balance;
    address public owner;

    constructor() {
        owner = msg.sender;
        IBlast(0x4300000000000000000000000000000000000002).configureClaimableYield();
    }

    modifier onlyOwner() {
        require(msg.sender == owner, "Not the contract owner");
        _;
    }

    function create_stream(IERC20 erc20_contract_address, address to, uint256 amount, uint256 flow_rate)
        public
        returns (uint256)
    {
        erc20_contract_address.approve(address(this), amount);
        erc20_contract_address.transferFrom(msg.sender, address(this), amount);
        random_id = random();
        streamMappings[random_id] = StreamDetails({
            to: to,
            amount: amount,
            flow_rate: flow_rate,
            sender: msg.sender,
            is_active: true,
            erc20_account_address: erc20_contract_address,
            start_time: block.timestamp
        });
        return random_id;
    }

    function withdraw_from_stream(uint256 unique_id) public returns (bool) {
        StreamDetails storage temp_stream = streamMappings[unique_id];
        assert(temp_stream.is_active);
        assert(msg.sender == temp_stream.to);
        temp_stream.erc20_account_address.transferFrom(address(this), temp_stream.to, temp_stream.amount);
        streamMappings[unique_id].is_active = false;
        return true;
    }

    function cancel_from_stream(uint256 unique_id) public returns (bool) {
        StreamDetails storage temp_stream = streamMappings[unique_id];
        assert(temp_stream.is_active);
        assert(msg.sender == temp_stream.to || msg.sender == temp_stream.sender);
        temp_balance = check_streamed_balance(temp_stream.start_time, temp_stream.flow_rate, temp_stream.amount);
        assert(temp_balance < temp_stream.amount);
        temp_stream.erc20_account_address.transferFrom(
            address(this), temp_stream.sender, temp_stream.amount - temp_balance
        );
        temp_stream.erc20_account_address.transferFrom(address(this), temp_stream.to, temp_balance);
        streamMappings[unique_id].is_active = false;
        return true;
    }

    function claim_yield() public onlyOwner {
        IBlast(0x4300000000000000000000000000000000000002).claimAllYield(address(this), address(this));
    }

    // temp random int generate very very risk
    function random() internal view returns (uint256) {
        return uint256(keccak256(abi.encodePacked(msg.sender, blockhash(block.number - 1), block.timestamp)));
    }

    function check_streamed_balance(uint256 stream_start_time, uint256 flow_rate, uint256 amount)
        internal
        returns (uint256)
    {
        time_elapsed = block.timestamp - stream_start_time;
        current_balance = time_elapsed * flow_rate;
        if (current_balance > amount) {
            return amount;
        } else {
            return amount - current_balance;
        }
    }
}
