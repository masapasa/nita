pragma solidity ^0.8.7;

import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";

contract Donation is ReentrancyGuard {
    // ... existing code ...

    struct PurchaseHistory {
        uint256 amount;
        uint256 timestamp;
        bool isERC20; // true for ERC20 token, false for Ether
        address tokenAddress; // used if isERC20 is true
    }

    mapping(address => PurchaseHistory[]) private purchaseHistories;

    // Loyalty Points
    uint256 public constant POINTS_PER_ETHER = 10; // Example: 10 loyalty points for 1 ether

    mapping(address => uint256) public loyaltyPoints;

    // ... existing code ...

    function sendTip(string memory _message, uint _index)
    public payable nonReentrant {
        // ... existing code for sending tip ...

        // Updating purchase history and loyalty points
        PurchaseHistory memory history = PurchaseHistory({
            amount: msg.value,
            timestamp: block.timestamp,
            isERC20: false,
            tokenAddress: address(0) // Not applicable for Ether
        });
        purchaseHistories[msg.sender].push(history);

        // Awarding loyalty points
        loyaltyPoints[msg.sender] += (msg.value / 1 ether) * POINTS_PER_ETHER;
    }

    function sendTipERC20(string memory _message, uint _index,
        uint _amount, address _tokenAddress) 
            public payable nonReentrant {
            // ... existing code for sending ERC20 tip ...

            // Updating purchase history and loyalty points
            PurchaseHistory memory history = PurchaseHistory({
                amount: _amount,
                timestamp: block.timestamp,
                isERC20: true,
                tokenAddress: _tokenAddress
            });
            purchaseHistories[msg.sender].push(history);

            // Assuming the loyalty points are the same for ERC20, but this can be adjusted
            loyaltyPoints[msg.sender] += (_amount / 1 ether) * POINTS_PER_ETHER; // This assumes the ERC20 token has the same value as Ether, which may not be true
    }

    // Function to view purchase history of a supporter
    function getPurchaseHistory(address supporter) public view returns (PurchaseHistory[] memory) {
        return purchaseHistories[supporter];
    }

    // Function to view loyalty points of a supporter
    function getLoyaltyPoints(address supporter) public view returns (uint256) {
        return loyaltyPoints[supporter];
    }

    // ... existing code ...
}
