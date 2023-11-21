pragma solidity ^0.8.7;
import "hardhat/console.sol";
import "@openzeppelin/contracts/utils/Counters.sol";
import "@openzeppelin/contracts/security/ReentrancyGuard.sol";
import "@openzeppelin/contracts/token/ERC20/IERC20.sol";
contract Donation is ReentrancyGuard {
    using Counters for Counters.Counter;
    Counters.Counter private _creatorIds;
    uint public creatorCounter;
    struct CreatorInfo {
       uint id;
       string username;
       string ipfsHash;
       address payable walletAddress;
       string userbio;
       uint donationsReceived;
       string networkOption;
       string phoneContact;
       uint supporters;
    }
    event CreatorEvent (
       uint id,
       string username,
       address payable walletAddress,
       string ipfsHash,
       string userbio,
       uint donationsReceived,
       string networkOption,
       string _phoneContact,
       uint supporters
    );
    struct Supporter {
        address from;
        uint256 timestamp;
        string message;
    }
    struct PurchaseHistory {
        uint256 amount;
        uint256 timestamp;
        bool isERC20;
        address tokenAddress;
    }
    mapping(address => PurchaseHistory[]) private purchaseHistories;
    uint256 public constant POINTS_PER_ETHER = 10;
    mapping(address => uint256) public loyaltyPoints;
    event SupporterEvent(
        address indexed from,
        uint256 timestamp,
        string message
    );
    address payable public owner;
    constructor() payable {
        owner = payable(msg.sender);
    }
    mapping(address => bool) isAddressExist;
    mapping(string => bool) isUsernameExist;
    mapping(string => bool) isPhoneExist;
    Supporter[] supporters;
    CreatorInfo[] creatorList;
    function setCreatorDetail(
        string memory _username, 
        string memory _ipfsHash, 
        string memory _userbio, 
        string memory _phoneContact,
        string memory _networkOption) public {
        require(bytes(_username).length > 0);
        require(bytes(_ipfsHash).length > 0);
        require(bytes(_userbio).length > 0);
        uint _donationsReceived;
        uint _supporters;
        require(isAddressExist[msg.sender] == false, "Address already exist");
        require(isUsernameExist[_username] == false, "Username already exist");
        require(!isPhoneExist[_phoneContact], "Phone contact already exist");
        _creatorIds.increment();
        creatorList.push(
            CreatorInfo(
                _creatorIds.current(),
                _username, 
                _ipfsHash, 
                payable(msg.sender), 
                _userbio, 
                _donationsReceived, 
                _networkOption, 
                _phoneContact,
                _supporters));
        isAddressExist[msg.sender] = true;
        isUsernameExist[_username] = true;
        isPhoneExist[_phoneContact] = true;
        emit CreatorEvent (
        _creatorIds.current(),
        _username,
        payable(msg.sender),
        _ipfsHash,
        _userbio,
       _donationsReceived,
       _networkOption,
       _phoneContact,
       _supporters
    );
    }
    function getCreatorCount() public view returns (uint){
        return creatorList.length;
    }
    function getCreatorList() public view returns (CreatorInfo[] memory) {
        return creatorList;
    }
    function getCreatorObj(uint _index) public view returns (CreatorInfo memory) {
         return creatorList[_index];
    }
    function getCreatorInfo(uint index) public view
         returns (
         uint id, 
         string memory,  
         string memory, 
         address, 
         string memory, 
         uint, 
         string memory, 
         string memory,
         uint){
        CreatorInfo storage creatorDetail  = creatorList[index];
        return (
        creatorDetail.id,   
        creatorDetail.username, 
        creatorDetail.ipfsHash, 
        creatorDetail.walletAddress, 
        creatorDetail.userbio, 
        creatorDetail.donationsReceived, 
        creatorDetail.networkOption,
        creatorDetail.phoneContact,
        creatorDetail.supporters);
    }
    function sendTip(string memory _message, uint _index) 
        public payable nonReentrant {
        require(msg.value > 0, "Invalid amount");
        require(msg.sender.balance >= msg.value, "Insufficient balance");
        address _to = creatorList[_index].walletAddress;
        (bool success,) = _to.call{value: msg.value}("");
        require(success, "Failed to send Ether");
        creatorList[_index].donationsReceived += msg.value;
         creatorList[_index].supporters +=1;
        supporters.push(Supporter(
            msg.sender,
            block.timestamp,
            _message
        ));
        emit SupporterEvent(
            msg.sender,
            block.timestamp,
            _message
        );
        PurchaseHistory memory history = PurchaseHistory({
            amount: msg.value,
            timestamp: block.timestamp,
            isERC20: false,
            tokenAddress: address(0)
        });
        purchaseHistories[msg.sender].push(history);
        loyaltyPoints[msg.sender] += (msg.value / 1 ether) * POINTS_PER_ETHER;
    }
    function sendTipERC20(string memory _message, uint _index, 
        uint _amount, address _tokenAddress) 
            public payable nonReentrant {
            IERC20 erc20Token = IERC20(_tokenAddress);
            address _to = creatorList[_index].walletAddress;
            require(_amount > 0, "Invalid amount");
            require(msg.sender.balance >= _amount, "Insufficient balance");
            erc20Token.transferFrom(msg.sender, _to, _amount);
            (bool success,) = _to.call{value: msg.value}("");
            require(success, "Failed to send Ether");
            creatorList[_index].donationsReceived += _amount;
            if(msg.sender != creatorList[_index].walletAddress){
                creatorList[_index].supporters +=1;
            }
            supporters.push(Supporter(
                msg.sender,
                block.timestamp,
                _message
            ));
            emit SupporterEvent(
                msg.sender,
                block.timestamp,
                _message
            );
            PurchaseHistory memory history = PurchaseHistory({
                amount: _amount,
                timestamp: block.timestamp,
                isERC20: true,
                tokenAddress: _tokenAddress
            });
            purchaseHistories[msg.sender].push(history);
            loyaltyPoints[msg.sender] += (_amount / 1 ether) * POINTS_PER_ETHER;
        }
    function getSupporters() public view returns (uint256) {
        return supporters.length;
    }
     function getSupportInfo(uint index) public view returns (address _from, uint256 _timestamp, string memory _message){
        Supporter storage supporterDetail  = supporters[index];
        return (supporterDetail.from, supporterDetail.timestamp, supporterDetail.message);
    }
    function getSupporterList() public view returns (Supporter[] memory) {
        return supporters;
    }
     function getSupporterObj(uint _index) public view returns (Supporter memory) {
         return supporters[_index];
    }
    function getCreatorBal (uint index) public view returns (uint){
        CreatorInfo storage creatorDetail = creatorList[index];
        uint creatorBal = creatorDetail.donationsReceived;
        return creatorBal;
    }
    function creatorWithdrawTip(uint index, uint amount) public returns (address payable _creatorAddress){
        CreatorInfo storage creatorDetail  =  creatorList[index];
        uint creatorBal = creatorDetail.donationsReceived;    
        address payable creatorAddress = creatorDetail.walletAddress;
        creatorList[index].donationsReceived -= amount;
        require(amount <= creatorBal, "Insufficient bal");
        require(msg.sender == creatorAddress, "You are not the creator");
        (bool success, ) = creatorAddress.call{value: amount}("");
        require(success, "Failed to send Ether");  
        return creatorAddress;
    }
    function contractOwnerWithdraw() public {
        uint amount = address(this).balance;
        (bool success, ) = owner.call{value : amount}("");
        require(success, "Failed to send ether");
    }
    function contractBal() public view returns(uint){
       return address(this).balance;
    }
    function getPurchaseHistory(address supporter) public view returns (PurchaseHistory[] memory) {
        return purchaseHistories[supporter];
    }
    function getLoyaltyPoints(address supporter) public view returns (uint256) {
        return loyaltyPoints[supporter];
    }
    receive() external payable {}
} give me only comeplete correct academic essay on a decentralized ecommerce platform on celo blockchain where users can make a purchase, tip creators and creators can track the purchase history and award loyalty points as well as nft to loyal customers