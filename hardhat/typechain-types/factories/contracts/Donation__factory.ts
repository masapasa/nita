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
import type { PayableOverrides } from "../../common";
import type { Donation, DonationInterface } from "../../contracts/Donation";

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
        internalType: "string",
        name: "_phoneContact",
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
            internalType: "string",
            name: "phoneContact",
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
            internalType: "string",
            name: "phoneContact",
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
        name: "_message",
        type: "string",
      },
      {
        internalType: "uint256",
        name: "_index",
        type: "uint256",
      },
      {
        internalType: "uint256",
        name: "_amount",
        type: "uint256",
      },
      {
        internalType: "address",
        name: "_tokenAddress",
        type: "address",
      },
    ],
    name: "sendTipERC20",
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
        name: "_phoneContact",
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
  {
    stateMutability: "payable",
    type: "receive",
  },
] as const;

const _bytecode =
  "0x60806040526001600055600380546001600160a01b031916331790556125138061002a6000396000f3fe6080604052600436106101025760003560e01c8063a3701e2611610095578063c9cd30a011610064578063c9cd30a0146102cc578063d9088afc146102df578063db9020eb146102f4578063dfe6712e14610316578063e0a57eb81461032b57600080fd5b8063a3701e2614610261578063c43ad48114610281578063c580ec0a14610297578063c92d7231146102aa57600080fd5b806343020b1a116100d157806343020b1a146101bd5780634af498a2146101dc578063746614a8146102095780638da5cb5b1461024157600080fd5b806305860bdc1461010e5780632516f8e6146101445780633985d5001461017957806340585036146101a857600080fd5b3661010957005b600080fd5b34801561011a57600080fd5b5061012e610129366004611d10565b61034b565b60405161013b9190611db2565b60405180910390f35b34801561015057600080fd5b5061016461015f366004611d10565b610465565b60405161013b99989796959493929190611dcc565b34801561018557600080fd5b50610199610194366004611d10565b6107b0565b60405161013b93929190611e63565b6101bb6101b6366004611f36565b610895565b005b3480156101c957600080fd5b506007545b60405190815260200161013b565b3480156101e857600080fd5b506101fc6101f7366004611d10565b610c1f565b60405161013b9190612069565b34801561021557600080fd5b5061022961022436600461207c565b610fba565b6040516001600160a01b03909116815260200161013b565b34801561024d57600080fd5b50600354610229906001600160a01b031681565b34801561026d57600080fd5b506101bb61027c36600461209e565b611150565b34801561028d57600080fd5b506101ce60025481565b6101bb6102a5366004612170565b6114ad565b3480156102b657600080fd5b506102bf611771565b60405161013b91906121b5565b3480156102d857600080fd5b50476101ce565b3480156102eb57600080fd5b506101bb611ae0565b34801561030057600080fd5b50610309611b7e565b60405161013b9190612217565b34801561032257600080fd5b506008546101ce565b34801561033757600080fd5b506101ce610346366004611d10565b611c86565b604080516060808201835260008083526020830152918101919091526007828154811061037a5761037a61226c565b90600052602060002090600302016040518060600160405290816000820160009054906101000a90046001600160a01b03166001600160a01b03166001600160a01b03168152602001600182015481526020016002820180546103dc90612282565b80601f016020809104026020016040519081016040528092919081815260200182805461040890612282565b80156104555780601f1061042a57610100808354040283529160200191610455565b820191906000526020600020905b81548152906001019060200180831161043857829003601f168201915b5050505050815250509050919050565b600060608060006060600060608060008060088b815481106104895761048961226c565b90600052602060002090600902019050806000015481600101826002018360030160009054906101000a90046001600160a01b0316846004018560050154866006018760070188600801548780546104e090612282565b80601f016020809104026020016040519081016040528092919081815260200182805461050c90612282565b80156105595780601f1061052e57610100808354040283529160200191610559565b820191906000526020600020905b81548152906001019060200180831161053c57829003601f168201915b5050505050975086805461056c90612282565b80601f016020809104026020016040519081016040528092919081815260200182805461059890612282565b80156105e55780601f106105ba576101008083540402835291602001916105e5565b820191906000526020600020905b8154815290600101906020018083116105c857829003601f168201915b505050505096508480546105f890612282565b80601f016020809104026020016040519081016040528092919081815260200182805461062490612282565b80156106715780601f1061064657610100808354040283529160200191610671565b820191906000526020600020905b81548152906001019060200180831161065457829003601f168201915b5050505050945082805461068490612282565b80601f01602080910402602001604051908101604052809291908181526020018280546106b090612282565b80156106fd5780601f106106d2576101008083540402835291602001916106fd565b820191906000526020600020905b8154815290600101906020018083116106e057829003601f168201915b5050505050925081805461071090612282565b80601f016020809104026020016040519081016040528092919081815260200182805461073c90612282565b80156107895780601f1061075e57610100808354040283529160200191610789565b820191906000526020600020905b81548152906001019060200180831161076c57829003601f168201915b50505050509150995099509950995099509950995099509950509193959799909294969850565b60008060606000600785815481106107ca576107ca61226c565b906000526020600020906003020190508060000160009054906101000a90046001600160a01b031681600101548260020180805461080790612282565b80601f016020809104026020016040519081016040528092919081815260200182805461083390612282565b80156108805780601f1061085557610100808354040283529160200191610880565b820191906000526020600020905b81548152906001019060200180831161086357829003601f168201915b50505050509050935093509350509193909250565b61089d611cb7565b60008190506000600885815481106108b7576108b761226c565b60009182526020909120600360099092020101546001600160a01b03169050836109195760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a5908185b5bdd5b9d60921b60448201526064015b60405180910390fd5b33318411156109615760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606401610910565b6040516323b872dd60e01b81523360048201526001600160a01b038281166024830152604482018690528316906323b872dd906064016020604051808303816000875af11580156109b6573d6000803e3d6000fd5b505050506040513d601f19601f820116820180604052508101906109da91906122bc565b506000816001600160a01b03163460405160006040518083038185875af1925050503d8060008114610a28576040519150601f19603f3d011682016040523d82523d6000602084013e610a2d565b606091505b5050905080610a4e5760405162461bcd60e51b8152600401610910906122de565b8460088781548110610a6257610a6261226c565b90600052602060002090600902016005016000828254610a829190612322565b90915550506008805487908110610a9b57610a9b61226c565b60009182526020909120600990910201600301546001600160a01b03163314610af957600160088781548110610ad357610ad361226c565b90600052602060002090600902016008016000828254610af39190612322565b90915550505b6040805160608101825233815242602082019081529181018981526007805460018101825560009190915282517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688600390920291820180546001600160a01b0319166001600160a01b0390921691909117815593517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68982015590519192917fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68a90910190610bc69082612384565b505050336001600160a01b03167fd6a897edbe2f5bae63386e323f717069a8974221d9297299ac544cace2d0f9924289604051610c04929190612444565b60405180910390a2505050610c196001600055565b50505050565b610c7760405180610120016040528060008152602001606081526020016060815260200160006001600160a01b0316815260200160608152602001600081526020016060815260200160608152602001600081525090565b60088281548110610c8a57610c8a61226c565b90600052602060002090600902016040518061012001604052908160008201548152602001600182018054610cbe90612282565b80601f0160208091040260200160405190810160405280929190818152602001828054610cea90612282565b8015610d375780601f10610d0c57610100808354040283529160200191610d37565b820191906000526020600020905b815481529060010190602001808311610d1a57829003601f168201915b50505050508152602001600282018054610d5090612282565b80601f0160208091040260200160405190810160405280929190818152602001828054610d7c90612282565b8015610dc95780601f10610d9e57610100808354040283529160200191610dc9565b820191906000526020600020905b815481529060010190602001808311610dac57829003601f168201915b505050918352505060038201546001600160a01b03166020820152600482018054604090920191610df990612282565b80601f0160208091040260200160405190810160405280929190818152602001828054610e2590612282565b8015610e725780601f10610e4757610100808354040283529160200191610e72565b820191906000526020600020905b815481529060010190602001808311610e5557829003601f168201915b5050505050815260200160058201548152602001600682018054610e9590612282565b80601f0160208091040260200160405190810160405280929190818152602001828054610ec190612282565b8015610f0e5780601f10610ee357610100808354040283529160200191610f0e565b820191906000526020600020905b815481529060010190602001808311610ef157829003601f168201915b50505050508152602001600782018054610f2790612282565b80601f0160208091040260200160405190810160405280929190818152602001828054610f5390612282565b8015610fa05780601f10610f7557610100808354040283529160200191610fa0565b820191906000526020600020905b815481529060010190602001808311610f8357829003601f168201915b505050505081526020016008820154815250509050919050565b60008060088481548110610fd057610fd061226c565b60009182526020909120600990910201600581015460038201546008805493945091926001600160a01b03909116918691889081106110115761101161226c565b90600052602060002090600902016005016000828254611031919061245d565b9091555050818511156110795760405162461bcd60e51b815260206004820152601060248201526f125b9cdd59999a58da595b9d0818985b60821b6044820152606401610910565b336001600160a01b038216146110d15760405162461bcd60e51b815260206004820152601760248201527f596f7520617265206e6f74207468652063726561746f720000000000000000006044820152606401610910565b6000816001600160a01b03168660405160006040518083038185875af1925050503d806000811461111e576040519150601f19603f3d011682016040523d82523d6000602084013e611123565b606091505b50509050806111445760405162461bcd60e51b8152600401610910906122de565b50925050505b92915050565b600085511161115e57600080fd5b600084511161116c57600080fd5b600083511161117a57600080fd5b33600090815260046020526040812054819060ff16156111d45760405162461bcd60e51b81526020600482015260156024820152741059191c995cdcc8185b1c9958591e48195e1a5cdd605a1b6044820152606401610910565b6005876040516111e49190612470565b9081526040519081900360200190205460ff161561123d5760405162461bcd60e51b8152602060048201526016602482015275155cd95c9b985b5948185b1c9958591e48195e1a5cdd60521b6044820152606401610910565b60068460405161124d9190612470565b9081526040519081900360200190205460ff16156112ad5760405162461bcd60e51b815260206004820152601b60248201527f50686f6e6520636f6e7461637420616c726561647920657869737400000000006044820152606401610910565b6112bb600180546001019055565b60086040518061012001604052806112d260015490565b815260208082018b9052604082018a90523360608301526080820189905260a0820186905260c0820187905260e0820188905261010090910184905282546001818101855560009485529382902083516009909202019081559082015191929091908201906113419082612384565b50604082015160028201906113569082612384565b5060608201516003820180546001600160a01b0319166001600160a01b03909216919091179055608082015160048201906113919082612384565b5060a0820151600582015560c082015160068201906113b09082612384565b5060e082015160078201906113c59082612384565b5061010091909101516008909101553360009081526004602052604090819020805460ff191660019081179091559051600590611403908a90612470565b908152604051908190036020018120805492151560ff1990931692909217909155600190600690611435908790612470565b908152604051908190036020019020805491151560ff199092169190911790557f8daf8016753d1ac9f046faea1d9ef107e8528431f0ce8e7aec2a74df2a5f13f661147f60015490565b8833898987898b8960405161149c9998979695949392919061248c565b60405180910390a150505050505050565b6114b5611cb7565b600034116114f65760405162461bcd60e51b815260206004820152600e60248201526d125b9d985b1a5908185b5bdd5b9d60921b6044820152606401610910565b343331101561153e5760405162461bcd60e51b8152602060048201526014602482015273496e73756666696369656e742062616c616e636560601b6044820152606401610910565b6000600882815481106115535761155361226c565b60009182526020822060099190910201600301546040516001600160a01b039091169250829034908381818185875af1925050503d80600081146115b3576040519150601f19603f3d011682016040523d82523d6000602084013e6115b8565b606091505b50509050806115d95760405162461bcd60e51b8152600401610910906122de565b34600884815481106115ed576115ed61226c565b9060005260206000209060090201600501600082825461160d9190612322565b925050819055506001600884815481106116295761162961226c565b906000526020600020906009020160080160008282546116499190612322565b90915550506040805160608101825233815242602082019081529181018681526007805460018101825560009190915282517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c688600390920291820180546001600160a01b0319166001600160a01b0390921691909117815593517fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68982015590519192917fa66cc928b5edb82af9bd49922954155ab7b0942694bea4ce44661d9a8736c68a9091019061171b9082612384565b505050336001600160a01b03167fd6a897edbe2f5bae63386e323f717069a8974221d9297299ac544cace2d0f9924286604051611759929190612444565b60405180910390a2505061176d6001600055565b5050565b60606008805480602002602001604051908101604052809291908181526020016000905b82821015611ad7578382906000526020600020906009020160405180610120016040529081600082015481526020016001820180546117d390612282565b80601f01602080910402602001604051908101604052809291908181526020018280546117ff90612282565b801561184c5780601f106118215761010080835404028352916020019161184c565b820191906000526020600020905b81548152906001019060200180831161182f57829003601f168201915b5050505050815260200160028201805461186590612282565b80601f016020809104026020016040519081016040528092919081815260200182805461189190612282565b80156118de5780601f106118b3576101008083540402835291602001916118de565b820191906000526020600020905b8154815290600101906020018083116118c157829003601f168201915b505050918352505060038201546001600160a01b0316602082015260048201805460409092019161190e90612282565b80601f016020809104026020016040519081016040528092919081815260200182805461193a90612282565b80156119875780601f1061195c57610100808354040283529160200191611987565b820191906000526020600020905b81548152906001019060200180831161196a57829003601f168201915b50505050508152602001600582015481526020016006820180546119aa90612282565b80601f01602080910402602001604051908101604052809291908181526020018280546119d690612282565b8015611a235780601f106119f857610100808354040283529160200191611a23565b820191906000526020600020905b815481529060010190602001808311611a0657829003601f168201915b50505050508152602001600782018054611a3c90612282565b80601f0160208091040260200160405190810160405280929190818152602001828054611a6890612282565b8015611ab55780601f10611a8a57610100808354040283529160200191611ab5565b820191906000526020600020905b815481529060010190602001808311611a9857829003601f168201915b5050505050815260200160088201548152505081526020019060010190611795565b50505050905090565b60035460405147916000916001600160a01b039091169083908381818185875af1925050503d8060008114611b31576040519150601f19603f3d011682016040523d82523d6000602084013e611b36565b606091505b505090508061176d5760405162461bcd60e51b81526020600482015260146024820152732330b4b632b2103a379039b2b7321032ba3432b960611b6044820152606401610910565b60606007805480602002602001604051908101604052809291908181526020016000905b82821015611ad7576000848152602090819020604080516060810182526003860290920180546001600160a01b0316835260018101549383019390935260028301805492939291840191611bf590612282565b80601f0160208091040260200160405190810160405280929190818152602001828054611c2190612282565b8015611c6e5780601f10611c4357610100808354040283529160200191611c6e565b820191906000526020600020905b815481529060010190602001808311611c5157829003601f168201915b50505050508152505081526020019060010190611ba2565b60008060088381548110611c9c57611c9c61226c565b60009182526020909120600560099092020101549392505050565b600260005403611d095760405162461bcd60e51b815260206004820152601f60248201527f5265656e7472616e637947756172643a207265656e7472616e742063616c6c006044820152606401610910565b6002600055565b600060208284031215611d2257600080fd5b5035919050565b60005b83811015611d44578181015183820152602001611d2c565b50506000910152565b60008151808452611d65816020860160208601611d29565b601f01601f19169290920160200192915050565b60018060a01b038151168252602081015160208301526000604082015160606040850152611daa6060850182611d4d565b949350505050565b602081526000611dc56020830184611d79565b9392505050565b60006101208b8352806020840152611de68184018c611d4d565b90508281036040840152611dfa818b611d4d565b6001600160a01b038a16606085015283810360808501529050611e1d8189611d4d565b90508660a084015282810360c0840152611e378187611d4d565b905082810360e0840152611e4b8186611d4d565b915050826101008301529a9950505050505050505050565b60018060a01b0384168152826020820152606060408201526000611e8a6060830184611d4d565b95945050505050565b634e487b7160e01b600052604160045260246000fd5b600082601f830112611eba57600080fd5b813567ffffffffffffffff80821115611ed557611ed5611e93565b604051601f8301601f19908116603f01168101908282118183101715611efd57611efd611e93565b81604052838152866020858801011115611f1657600080fd5b836020870160208301376000602085830101528094505050505092915050565b60008060008060808587031215611f4c57600080fd5b843567ffffffffffffffff811115611f6357600080fd5b611f6f87828801611ea9565b945050602085013592506040850135915060608501356001600160a01b0381168114611f9a57600080fd5b939692955090935050565b6000610120825184526020830151816020860152611fc582860182611d4d565b91505060408301518482036040860152611fdf8282611d4d565b9150506060830151611ffc60608601826001600160a01b03169052565b50608083015184820360808601526120148282611d4d565b91505060a083015160a085015260c083015184820360c08601526120388282611d4d565b91505060e083015184820360e08601526120528282611d4d565b610100948501519590940194909452509092915050565b602081526000611dc56020830184611fa5565b6000806040838503121561208f57600080fd5b50508035926020909101359150565b600080600080600060a086880312156120b657600080fd5b853567ffffffffffffffff808211156120ce57600080fd5b6120da89838a01611ea9565b965060208801359150808211156120f057600080fd5b6120fc89838a01611ea9565b9550604088013591508082111561211257600080fd5b61211e89838a01611ea9565b9450606088013591508082111561213457600080fd5b61214089838a01611ea9565b9350608088013591508082111561215657600080fd5b5061216388828901611ea9565b9150509295509295909350565b6000806040838503121561218357600080fd5b823567ffffffffffffffff81111561219a57600080fd5b6121a685828601611ea9565b95602094909401359450505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561220a57603f198886030184526121f8858351611fa5565b945092850192908501906001016121dc565b5092979650505050505050565b6000602080830181845280855180835260408601915060408160051b870101925083870160005b8281101561220a57603f1988860301845261225a858351611d79565b9450928501929085019060010161223e565b634e487b7160e01b600052603260045260246000fd5b600181811c9082168061229657607f821691505b6020821081036122b657634e487b7160e01b600052602260045260246000fd5b50919050565b6000602082840312156122ce57600080fd5b81518015158114611dc557600080fd5b6020808252601490820152732330b4b632b2103a379039b2b7321022ba3432b960611b604082015260600190565b634e487b7160e01b600052601160045260246000fd5b8082018082111561114a5761114a61230c565b601f82111561237f57600081815260208120601f850160051c8101602086101561235c5750805b601f850160051c820191505b8181101561237b57828155600101612368565b5050505b505050565b815167ffffffffffffffff81111561239e5761239e611e93565b6123b2816123ac8454612282565b84612335565b602080601f8311600181146123e757600084156123cf5750858301515b600019600386901b1c1916600185901b17855561237b565b600085815260208120601f198616915b82811015612416578886015182559484019460019091019084016123f7565b50858210156124345787850151600019600388901b60f8161c191681555b5050505050600190811b01905550565b828152604060208201526000611daa6040830184611d4d565b8181038181111561114a5761114a61230c565b60008251612482818460208701611d29565b9190910192915050565b60006101208b83528060208401526124a68184018c611d4d565b6001600160a01b038b166040850152838103606085015290506124c9818a611d4d565b90508281036080840152611e1d8189611d4d56fea26469706673582212209e23186d7c94819472a15fc293764f4261aa56ef327e19ae8eda8f3d12346b8064736f6c63430008120033";

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
