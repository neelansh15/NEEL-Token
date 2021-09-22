pragma solidity ^0.8.0;

contract Token{
    string public name = "Neelansh's Token";
    string public symbol = "NEEL";
    address public owner;
    uint public totalSupply = 10000000;
    mapping(address => uint) balances;

    constructor(){
        owner = msg.sender;
        balances[msg.sender] = totalSupply;
    }

    function balanceOf(address account) external view returns (uint){
        return balances[account];
    }

    function transfer(address to, uint amount) external{
        require(balances[msg.sender] >= amount, 'Not enough tokens');
        balances[msg.sender] -= amount;
        balances[to] += amount;
    }
}
