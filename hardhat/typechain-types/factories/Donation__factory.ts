/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  Contract,
  ContractFactory,
  ContractTransactionResponse,
  Interface,
} from "ethers";
import type { Signer, ContractDeployTransaction, ContractRunner } from "ethers";
import type { PayableOverrides } from "../common";
import type { Donation, DonationInterface } from "../Donation";

const _abi = [
  {
    inputs: [],
    stateMutability: "payable",
    type: "constructor",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: false,
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "username",
        type: "string",
      },
      {
        indexed: false,
        internalType: "address payable",
        name: "walletAddress",
        type: "address",
      },
      {
        indexed: false,
        internalType: "string",
        name: "ipfsHash",
        type: "string",
      },
      {
        indexed: false,
        internalType: "string",
        name: "userbio",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "donationsReceived",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "networkOption",
        type: "string",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "supporters",
        type: "uint256",
      },
    ],
    name: "CreatorEvent",
    type: "event",
  },
  {
    anonymous: false,
    inputs: [
      {
        indexed: true,
        internalType: "address",
        name: "from",
        type: "address",
      },
      {
        indexed: false,
        internalType: "uint256",
        name: "timestamp",
        type: "uint256",
      },
      {
        indexed: false,
        internalType: "string",
        name: "message",
        type: "string",
      },
    ],
    name: "SupporterEvent",
    type: "event",
  },
  {
    inputs: [],
    name: "contractBal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "contractOwnerWithdraw",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [],
    name: "creatorCounter",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "amount",
        type: "uint256",
      },
    ],
    name: "creatorWithdrawTip",
    outputs: [
      {
        internalType: "address payable",
        name: "_creatorAddress",
        type: "address",
      },
    ],
    stateMutability: "nonpayable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getCreatorBal",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreatorCount",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getCreatorInfo",
    outputs: [
      {
        internalType: "uint256",
        name: "id",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "address",
        name: "",
        type: "address",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getCreatorList",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "username",
            type: "string",
          },
          {
            internalType: "string",
            name: "ipfsHash",
            type: "string",
          },
          {
            internalType: "address payable",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "userbio",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "donationsReceived",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "networkOption",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "supporters",
            type: "uint256",
          },
        ],
        internalType: "struct Donation.CreatorInfo[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getCreatorObj",
    outputs: [
      {
        components: [
          {
            internalType: "uint256",
            name: "id",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "username",
            type: "string",
          },
          {
            internalType: "string",
            name: "ipfsHash",
            type: "string",
          },
          {
            internalType: "address payable",
            name: "walletAddress",
            type: "address",
          },
          {
            internalType: "string",
            name: "userbio",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "donationsReceived",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "networkOption",
            type: "string",
          },
          {
            internalType: "uint256",
            name: "supporters",
            type: "uint256",
          },
        ],
        internalType: "struct Donation.CreatorInfo",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "index",
        type: "uint256",
      },
    ],
    name: "getSupportInfo",
    outputs: [
      {
        internalType: "address",
        name: "_from",
        type: "address",
      },
      {
        internalType: "uint256",
        name: "_timestamp",
        type: "uint256",
      },
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSupporterList",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
        ],
        internalType: "struct Donation.Supporter[]",
        name: "",
        type: "tuple[]",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "getSupporterObj",
    outputs: [
      {
        components: [
          {
            internalType: "address",
            name: "from",
            type: "address",
          },
          {
            internalType: "uint256",
            name: "timestamp",
            type: "uint256",
          },
          {
            internalType: "string",
            name: "message",
            type: "string",
          },
        ],
        internalType: "struct Donation.Supporter",
        name: "",
        type: "tuple",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "getSupporters",
    outputs: [
      {
        internalType: "uint256",
        name: "",
        type: "uint256",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [],
    name: "owner",
    outputs: [
      {
        internalType: "address payable",
        name: "",
        type: "address",
      },
    ],
    stateMutability: "view",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
    ],
    name: "sendTip",
    outputs: [],
    stateMutability: "payable",
    type: "function",
  },
  {
    inputs: [
      {
        internalType: "string",
        name: "_username",
        type: "string",
      },
      {
        internalType: "string",
        name: "_ipfsHash",
        type: "string",
      },
      {
        internalType: "string",
        name: "_userbio",
        type: "string",
      },
      {
        internalType: "string",
        name: "_networkOption",
        type: "string",
      },
    ],
    name: "setCreatorDetail",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
] as const;

const _bytecode =
  "0x6080604052600280546001600160a01b03191633179055611cac806100256000396000f3fe6080604052600436106100f35760003560e01c8063c43ad4811161008a578063d9088afc11610059578063d9088afc146102b5578063db9020eb146102ca578063dfe6712e146102ec578063e0a57eb81461030157600080fd5b8063c43ad48114610257578063c580ec0a1461026d578063c92d723114610280578063c9cd30a0146102a257600080fd5b806343020b1a116100c657806343020b1a146101b35780634af498a2146101d2578063746614a8146101ff5780638da5cb5b1461023757600080fd5b806305860bdc146100f85780632516f8e61461012e57806325e860a5146101625780633985d50014610184575b600080fd5b34801561010457600080fd5b506101186101133660046115bd565b610321565b604051610125919061165f565b60405180910390f35b34801561013a57600080fd5b5061014e6101493660046115bd565b61043b565b604051610125989796959493929190611679565b34801561016e57600080fd5b5061018261017d36600461179d565b6106f1565b005b34801561019057600080fd5b506101a461019f3660046115bd565b610990565b6040516101259392919061184a565b3480156101bf57600080fd5b506005545b604051908152602001610125565b3480156101de57600080fd5b506101f26101ed3660046115bd565b610a75565b6040516101259190611924565b34801561020b57600080fd5b5061021f61021a366004611937565b610d77565b6040516001600160a01b039091168152602001610125565b34801561024357600080fd5b5060025461021f906001600160a01b031681565b34801561026357600080fd5b506101c460015481565b61018261027b366004611959565b610f34565b34801561028c57600080fd5b50610295611105565b604051610125919061199e565b3480156102ae57600080fd5b50476101c4565b3480156102c157600080fd5b506101826113e2565b3480156102d657600080fd5b506102df611484565b6040516101259190611a00565b3480156102f857600080fd5b506006546101c4565b34801561030d57600080fd5b506101c461031c3660046115bd565b61158c565b604080516060808201835260008083526020830152918101919091526005828154811061035057610350611a55565b90600052602060002090600302016040518060600160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600182015481526020016002820180546103b290611a6b565b80601f01602080910402602001604051908101604052809291908181526020018280546103de90611a6b565b801561042b5780601f106104005761010080835404028352916020019161042b565b820191906000526020600020905b81548152906001019060200180831161040e57829003601f168201915b5050505050815250509050919050565b6000606080600060606000606060008060068a8154811061045e5761045e611a55565b90600052602060002090600802019050806000015481600101826002018360030160009054906101000a90046001600160a01b03168460040185600501548660060187600701548680546104b190611a6b565b80601f01602080910402602001604051908101604052809291908181526020018280546104dd90611a6b565b801561052a5780601f106104ff5761010080835404028352916020019161052a565b820191906000526020600020905b81548152906001019060200180831161050d57829003601f168201915b5050505050965085805461053d90611a6b565b80601f016020809104026020016040519081016040528092919081815260200182805461056990611a6b565b80156105b65780601f1061058b576101008083540402835291602001916105b6565b820191906000526020600020905b81548152906001019060200180831161059957829003601f168201915b505050505095508380546105c990611a6b565b80601f01602080910402602001604051908101604052809291908181526020018280546105f590611a6b565b80156106425780601f1061061757610100808354040283529160200191610642565b820191906000526020600020905b81548152906001019060200180831161062557829003601f168201915b5050505050935081805461065590611a6b565b80601f016020809104026020016040519081016040528092919081815260200182805461068190611a6b565b80156106ce5780601f106106a3576101008083540402835291602001916106ce565b820191906000526020600020905b8154815290600101906020018083116106b157829003601f168201915b505050505091509850985098509850985098509850985050919395975091939597565b60008451116106ff57600080fd5b600083511161070d57600080fd5b600082511161071b57600080fd5b33600090815260036020526040812054819060ff161561077a5760405162461bcd60e51b81526020600482015260156024820152741059191c995cdcc8185b1c9958591e48195e1a5cdd605a1b60448201526064015b60405180910390fd5b60048660405161078a9190611aa5565b9081526040519081900360200190205460ff16156107e35760405162461bcd60e51b8152602060048201526016602482015275155cd95c9b985b5948185b1c9958591e48195e1a5cdd60521b6044820152606401610771565b6107f1600080546001019055565b600660405180610100016040528061080860005490565b815260208082018a9052604082018990523360608301526080820188905260a0820186905260c0820187905260e0909101849052825460018181018555600094855293829020835160089092020190815590820151919290919082019061086f9082611b10565b50604082015160028201906108849082611b10565b5060608201516003820180546001600160a01b0319166001600160a01b03909216919091179055608082015160048201906108bf9082611b10565b5060a0820151600582015560c082015160068201906108de9082611b10565b5060e091909101516007909101553360009081526003602052604090819020805460ff19166001908117909155905160049061091b908990611aa5565b908152604051908190036020019020805491151560ff199092169190911790557f1f2b5d1f5852ee1b568a3ab56bde183bd34ea4e92ab3875e469e846dbcfc406e61096560005490565b87338888878988604051610980989796959493929190611bd0565b60405180910390a1505050505050565b60008060606000600585815481106109aa576109aa611a55565b906000526020600020906003020190508060000160009054906101000a90046001600160a01b03168160010154826002018080546109e790611a6b565b80601f0160208091040260200160405190810160405280929190818152602001828054610a1390611a6b565b8015610a605780601f10610a3557610100808354040283529160200191610a60565b820191906000526020600020905b815481529060010190602001808311610a4357829003601f168201915b50505050509050935093509350509193909250565b610ac660405180610100016040528060008152602001606081526020016060815260200160006001600160a01b03168152602001606081526020016000815260200160608152602001600081525090565b60068281548110610ad957610ad9611a55565b90600052602060002090600802016040518061010001604052908160008201548152602001600182018054610b0d90611a6b565b80601f0160208091040260200160405190810160405280929190818152602001828054610b3990611a6b565b8015610b865780601f10610b5b57610100808354040283529160200191610b86565b820191906000526020600020905b815481529060010190602001808311610b6957829003601f168201915b50505050508152602001600282018054610b9f90611a6b565b80601f0160208091040260200160405190810160405280929190818152602001828054610bcb90611a6b565b8015610c185780601f10610bed57610100808354040283529160200191610c18565b820191906000526020600020905b815481529060010190602001808311610bfb57829003601f168201915b505050918352505060038201546001600160a01b03166020820152600482018054604090920191610c4890611a6b565b80601f0160208091040260200160405190810160405280929190818152602001828054610c7490611a6b565b8015610cc15780601f10610c9657610100808354040283529160200191610cc1565b820191906000526020600020905b815481529060010190602001808311610ca457829003601f168201915b5050505050815260200160058201548152602001600682018054610ce490611a6b565b80601f0160208091040260200160405190810160405280929190818152602001828054610d1090611a6b565b8015610d5d5780601f10610d3257610100808354040283529160200191610d5d565b820191906000526020600020905b815481529060010190602001808311610d4057829003601f168201915b505050505081526020016007820154815250509050919050565b60008060068481548110610d8d57610d8d611a55565b60009182526020909120600890910201600581015460038201546006805493945091926001600160a01b0390911691869188908110610dce57610dce611a55565b90600052602060002090600802016005016000828254610dee9190611c37565b909155505081851115610e365760405162461bcd60e51b815260206004820152601060248201526f125b9cdd59999a58da595b9d0818985b60821b6044820152606401610771565b336001600160a01b03821614610e8e5760405162461bcd60e51b815260206004820152601760248201527f596f7520617265206e6f74207468652063726561746f720000000000000000006044820152606401610771565b6000816001600160a01b03168660405160006040518083038185875af1925050503d8060008114610edb576040519150601f19603f3d011682016040523d82523d6000602084013e610ee0565b606091505b5050905080610f285760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321022ba3432b960611b6044820152606401610771565b50925050505b92915050565b3460068281548110610f4857610f48611a55565b90600052602060002090600802016005016000828254610f689190611c4a565b92505081905550600160068281548110610f8457610f84611a55565b90600052602060002090600802016007016000828254610fa49190611c4a565b909155505034610fee5760405162461bcd60e51b8152602060048201526015602482015274496e73756666696369656e742062616c616e63652160581b6044820152606401610771565b6040805160608101825233815242602082019081529181018481526005805460018101825560009190915282517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db0600390920291820180546001600160a01b0319166001600160a01b0390921691909117815593517f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db182015590519192917f036b6384b5eca791c62761152d0c79bb0604c104a5fb6f4eb0703f3154bb3db2909101906110bb9082611b10565b505050336001600160a01b03167fd6a897edbe2f5bae63386e323f717069a8974221d9297299ac544cace2d0f99242846040516110f9929190611c5d565b60405180910390a25050565b60606006805480602002602001604051908101604052809291908181526020016000905b828210156113d95783829060005260206000209060080201604051806101000160405290816000820154815260200160018201805461116790611a6b565b80601f016020809104026020016040519081016040528092919081815260200182805461119390611a6b565b80156111e05780601f106111b5576101008083540402835291602001916111e0565b820191906000526020600020905b8154815290600101906020018083116111c357829003601f168201915b505050505081526020016002820180546111f990611a6b565b80601f016020809104026020016040519081016040528092919081815260200182805461122590611a6b565b80156112725780601f1061124757610100808354040283529160200191611272565b820191906000526020600020905b81548152906001019060200180831161125557829003601f168201915b505050918352505060038201546001600160a01b031660208201526004820180546040909201916112a290611a6b565b80601f01602080910402602001604051908101604052809291908181526020018280546112ce90611a6b565b801561131b5780601f106112f05761010080835404028352916020019161131b565b820191906000526020600020905b8154815290600101906020018083116112fe57829003601f168201915b505050505081526020016005820154815260200160068201805461133e90611a6b565b80601f016020809104026020016040519081016040528092919081815260200182805461136a90611a6b565b80156113b75780601f1061138c576101008083540402835291602001916113b7565b820191906000526020600020905b81548152906001019060200180831161139a57829003601f168201915b5050505050815260200160078201548152505081526020019060010190611129565b50505050905090565b60025460405147916000916001600160a01b039091169083908381818185875af1925050503d8060008114611433576040519150601f19603f3d011682016040523d82523d6000602084013e611438565b606091505b50509050806114805760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321032ba3432b960611b6044820152606401610771565b5050565b60606005805480602002602001604051908101604052809291908181526020016000905b828210156113d9576000848152602090819020604080516060810182526003860290920180546001600160a01b03168352600181015493830193909352600283018054929392918401916114fb90611a6b565b80601f016020809104026020016040519081016040528092919081815260200182805461152790611a6b565b80156115745780601f1061154957610100808354040283529160200191611574565b820191906000526020600020905b81548152906001019060200180831161155757829003601f168201915b505050505081525050815260200190600101906114a8565b600080600683815481106115a2576115a2611a55565b60009182526020909120600560089092020101549392505050565b6000602082840312156115cf57600080fd5b5035919050565b60005b838110156115f15781810151838201526020016115d9565b50506000910152565b600081518084526116128160208601602086016115d6565b601f01601f19169290920160200192915050565b60018060a01b03815116825260208101516020830152600060408201516060604085015261165760608501826115fa565b949350505050565b6020815260006116726020830184611626565b9392505050565b60006101008a83528060208401526116938184018b6115fa565b905082810360408401526116a7818a6115fa565b6001600160a01b0389166060850152838103608085015290506116ca81886115fa565b90508560a084015282810360c08401526116e481866115fa565b9150508260e08301529998505050505050505050565b634e487b7160e01b600052604160045260246000fd5b600082601f83011261172157600080fd5b813567ffffffffffffffff8082111561173c5761173c6116fa565b604051601f8301601f19908116603f01168101908282118183101715611764576117646116fa565b8160405283815286602085880101111561177d57600080fd5b836020870160208301376000602085830101528094505050505092915050565b600080600080608085870312156117b357600080fd5b843567ffffffffffffffff808211156117cb57600080fd5b6117d788838901611710565b955060208701359150808211156117ed57600080fd5b6117f988838901611710565b9450604087013591508082111561180f57600080fd5b61181b88838901611710565b9350606087013591508082111561183157600080fd5b5061183e87828801611710565b91505092959194509250565b60018060a01b038416815282602082015260606040820152600061187160608301846115fa565b95945050505050565b600061010082518452602083015181602086015261189a828601826115fa565b915050604083015184820360408601526118b482826115fa565b91505060608301516118d160608601826001600160a01b03169052565b50608083015184820360808601526118e982826115fa565b91505060a083015160a085015260c083015184820360c086015261190d82826115fa565b91505060e083015160e08501528091505092915050565b602081526000611672602083018461187a565b6000806040838503121561194a57600080fd5b50508035926020909101359150565b6000806040838503121561196c57600080fd5b823567ffffffffffffffff81111561198357600080fd5b61198f85828601611710565b95602094909401359450505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156119f357603f198886030184526119e185835161187a565b945092850192908501906001016119c5565b5092979650505050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b828110156119f357603f19888603018452611a43858351611626565b94509285019290850190600101611a27565b634e487b7160e01b600052603260045260246000fd5b600181811c90821680611a7f57607f821691505b602082108103611a9f57634e487b7160e01b600052602260045260246000fd5b50919050565b60008251611ab78184602087016115d6565b9190910192915050565b601f821115611b0b57600081815260208120601f850160051c81016020861015611ae85750805b601f850160051c820191505b81811015611b0757828155600101611af4565b5050505b505050565b815167ffffffffffffffff811115611b2a57611b2a6116fa565b611b3e81611b388454611a6b565b84611ac1565b602080601f831160018114611b735760008415611b5b5750858301515b600019600386901b1c1916600185901b178555611b07565b600085815260208120601f198616915b82811015611ba257888601518255948401946001909101908401611b83565b5085821015611bc05787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b60006101008a8352806020840152611bea8184018b6115fa565b6001600160a01b038a16604085015283810360608501529050611c0d81896115fa565b905082810360808401526116ca81886115fa565b634e487b7160e01b600052601160045260246000fd5b81810381811115610f2e57610f2e611c21565b80820180821115610f2e57610f2e611c21565b82815260406020820152600061165760408301846115fa56fea2646970667358221220c013bffd0ef51f8464bf2042c6837f572f24d261ec7b570b2b575f7f627ab15e64736f6c63430008120033";

type DonationConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: DonationConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class Donation__factory extends ContractFactory {
  constructor(...args: DonationConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  override getDeployTransaction(
    overrides?: PayableOverrides & { from?: string }
  ): Promise<ContractDeployTransaction> {
    return super.getDeployTransaction(overrides || {});
  }
  override deploy(overrides?: PayableOverrides & { from?: string }) {
    return super.deploy(overrides || {}) as Promise<
      Donation & {
        deploymentTransaction(): ContractTransactionResponse;
      }
    >;
  }
  override connect(runner: ContractRunner | null): Donation__factory {
    return super.connect(runner) as Donation__factory;
  }

  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): DonationInterface {
    return new Interface(_abi) as DonationInterface;
  }
  static connect(address: string, runner?: ContractRunner | null): Donation {
    return new Contract(address, _abi, runner) as unknown as Donation;
  }
}
