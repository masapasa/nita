/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import type {
  BaseContract,
  BigNumberish,
  BytesLike,
  FunctionFragment,
  Result,
  Interface,
  EventFragment,
  AddressLike,
  ContractRunner,
  ContractMethod,
  Listener,
} from "ethers";
import type {
  TypedContractEvent,
  TypedDeferredTopicFilter,
  TypedEventLog,
  TypedLogDescription,
  TypedListener,
  TypedContractMethod,
} from "../common";

export declare namespace Donation {
  export type CreatorInfoStruct = {
    id: BigNumberish;
    username: string;
    ipfsHash: string;
    walletAddress: AddressLike;
    userbio: string;
    donationsReceived: BigNumberish;
    networkOption: string;
    phoneContact: string;
    supporters: BigNumberish;
  };

  export type CreatorInfoStructOutput = [
    id: bigint,
    username: string,
    ipfsHash: string,
    walletAddress: string,
    userbio: string,
    donationsReceived: bigint,
    networkOption: string,
    phoneContact: string,
    supporters: bigint
  ] & {
    id: bigint;
    username: string;
    ipfsHash: string;
    walletAddress: string;
    userbio: string;
    donationsReceived: bigint;
    networkOption: string;
    phoneContact: string;
    supporters: bigint;
  };

  export type SupporterStruct = {
    from: AddressLike;
    timestamp: BigNumberish;
    message: string;
  };

  export type SupporterStructOutput = [
    from: string,
    timestamp: bigint,
    message: string
  ] & { from: string; timestamp: bigint; message: string };
}

export interface DonationInterface extends Interface {
  getFunction(
    nameOrSignature:
      | "contractBal"
      | "contractOwnerWithdraw"
      | "creatorCounter"
      | "creatorWithdrawTip"
      | "getCreatorBal"
      | "getCreatorCount"
      | "getCreatorInfo"
      | "getCreatorList"
      | "getCreatorObj"
      | "getSupportInfo"
      | "getSupporterList"
      | "getSupporterObj"
      | "getSupporters"
      | "owner"
      | "sendTip"
      | "sendTipERC20"
      | "setCreatorDetail"
  ): FunctionFragment;

  getEvent(
    nameOrSignatureOrTopic: "CreatorEvent" | "SupporterEvent"
  ): EventFragment;

  encodeFunctionData(
    functionFragment: "contractBal",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "contractOwnerWithdraw",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creatorCounter",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "creatorWithdrawTip",
    values: [BigNumberish, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreatorBal",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreatorCount",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreatorInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getCreatorList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getCreatorObj",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupportInfo",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupporterList",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getSupporterObj",
    values: [BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "getSupporters",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "owner", values?: undefined): string;
  encodeFunctionData(
    functionFragment: "sendTip",
    values: [string, BigNumberish]
  ): string;
  encodeFunctionData(
    functionFragment: "sendTipERC20",
    values: [string, BigNumberish, BigNumberish, AddressLike]
  ): string;
  encodeFunctionData(
    functionFragment: "setCreatorDetail",
    values: [string, string, string, string, string]
  ): string;

  decodeFunctionResult(
    functionFragment: "contractBal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "contractOwnerWithdraw",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creatorCounter",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "creatorWithdrawTip",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreatorBal",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreatorCount",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreatorInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreatorList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getCreatorObj",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupportInfo",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupporterList",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupporterObj",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getSupporters",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "owner", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "sendTip", data: BytesLike): Result;
  decodeFunctionResult(
    functionFragment: "sendTipERC20",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "setCreatorDetail",
    data: BytesLike
  ): Result;
}

export namespace CreatorEventEvent {
  export type InputTuple = [
    id: BigNumberish,
    username: string,
    walletAddress: AddressLike,
    ipfsHash: string,
    userbio: string,
    donationsReceived: BigNumberish,
    networkOption: string,
    _phoneContact: string,
    supporters: BigNumberish
  ];
  export type OutputTuple = [
    id: bigint,
    username: string,
    walletAddress: string,
    ipfsHash: string,
    userbio: string,
    donationsReceived: bigint,
    networkOption: string,
    _phoneContact: string,
    supporters: bigint
  ];
  export interface OutputObject {
    id: bigint;
    username: string;
    walletAddress: string;
    ipfsHash: string;
    userbio: string;
    donationsReceived: bigint;
    networkOption: string;
    _phoneContact: string;
    supporters: bigint;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export namespace SupporterEventEvent {
  export type InputTuple = [
    from: AddressLike,
    timestamp: BigNumberish,
    message: string
  ];
  export type OutputTuple = [from: string, timestamp: bigint, message: string];
  export interface OutputObject {
    from: string;
    timestamp: bigint;
    message: string;
  }
  export type Event = TypedContractEvent<InputTuple, OutputTuple, OutputObject>;
  export type Filter = TypedDeferredTopicFilter<Event>;
  export type Log = TypedEventLog<Event>;
  export type LogDescription = TypedLogDescription<Event>;
}

export interface Donation extends BaseContract {
  connect(runner?: ContractRunner | null): Donation;
  waitForDeployment(): Promise<this>;

  interface: DonationInterface;

  queryFilter<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;
  queryFilter<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TypedEventLog<TCEvent>>>;

  on<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  on<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  once<TCEvent extends TypedContractEvent>(
    event: TCEvent,
    listener: TypedListener<TCEvent>
  ): Promise<this>;
  once<TCEvent extends TypedContractEvent>(
    filter: TypedDeferredTopicFilter<TCEvent>,
    listener: TypedListener<TCEvent>
  ): Promise<this>;

  listeners<TCEvent extends TypedContractEvent>(
    event: TCEvent
  ): Promise<Array<TypedListener<TCEvent>>>;
  listeners(eventName?: string): Promise<Array<Listener>>;
  removeAllListeners<TCEvent extends TypedContractEvent>(
    event?: TCEvent
  ): Promise<this>;

  contractBal: TypedContractMethod<[], [bigint], "view">;

  contractOwnerWithdraw: TypedContractMethod<[], [void], "nonpayable">;

  creatorCounter: TypedContractMethod<[], [bigint], "view">;

  creatorWithdrawTip: TypedContractMethod<
    [index: BigNumberish, amount: BigNumberish],
    [string],
    "nonpayable"
  >;

  getCreatorBal: TypedContractMethod<[index: BigNumberish], [bigint], "view">;

  getCreatorCount: TypedContractMethod<[], [bigint], "view">;

  getCreatorInfo: TypedContractMethod<
    [index: BigNumberish],
    [
      [
        bigint,
        string,
        string,
        string,
        string,
        bigint,
        string,
        string,
        bigint
      ] & { id: bigint }
    ],
    "view"
  >;

  getCreatorList: TypedContractMethod<
    [],
    [Donation.CreatorInfoStructOutput[]],
    "view"
  >;

  getCreatorObj: TypedContractMethod<
    [_index: BigNumberish],
    [Donation.CreatorInfoStructOutput],
    "view"
  >;

  getSupportInfo: TypedContractMethod<
    [index: BigNumberish],
    [
      [string, bigint, string] & {
        _from: string;
        _timestamp: bigint;
        _message: string;
      }
    ],
    "view"
  >;

  getSupporterList: TypedContractMethod<
    [],
    [Donation.SupporterStructOutput[]],
    "view"
  >;

  getSupporterObj: TypedContractMethod<
    [_index: BigNumberish],
    [Donation.SupporterStructOutput],
    "view"
  >;

  getSupporters: TypedContractMethod<[], [bigint], "view">;

  owner: TypedContractMethod<[], [string], "view">;

  sendTip: TypedContractMethod<
    [_message: string, _index: BigNumberish],
    [void],
    "payable"
  >;

  sendTipERC20: TypedContractMethod<
    [
      _message: string,
      _index: BigNumberish,
      _amount: BigNumberish,
      _tokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;

  setCreatorDetail: TypedContractMethod<
    [
      _username: string,
      _ipfsHash: string,
      _userbio: string,
      _phoneContact: string,
      _networkOption: string
    ],
    [void],
    "nonpayable"
  >;

  getFunction<T extends ContractMethod = ContractMethod>(
    key: string | FunctionFragment
  ): T;

  getFunction(
    nameOrSignature: "contractBal"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "contractOwnerWithdraw"
  ): TypedContractMethod<[], [void], "nonpayable">;
  getFunction(
    nameOrSignature: "creatorCounter"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "creatorWithdrawTip"
  ): TypedContractMethod<
    [index: BigNumberish, amount: BigNumberish],
    [string],
    "nonpayable"
  >;
  getFunction(
    nameOrSignature: "getCreatorBal"
  ): TypedContractMethod<[index: BigNumberish], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCreatorCount"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "getCreatorInfo"
  ): TypedContractMethod<
    [index: BigNumberish],
    [
      [
        bigint,
        string,
        string,
        string,
        string,
        bigint,
        string,
        string,
        bigint
      ] & { id: bigint }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getCreatorList"
  ): TypedContractMethod<[], [Donation.CreatorInfoStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getCreatorObj"
  ): TypedContractMethod<
    [_index: BigNumberish],
    [Donation.CreatorInfoStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSupportInfo"
  ): TypedContractMethod<
    [index: BigNumberish],
    [
      [string, bigint, string] & {
        _from: string;
        _timestamp: bigint;
        _message: string;
      }
    ],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSupporterList"
  ): TypedContractMethod<[], [Donation.SupporterStructOutput[]], "view">;
  getFunction(
    nameOrSignature: "getSupporterObj"
  ): TypedContractMethod<
    [_index: BigNumberish],
    [Donation.SupporterStructOutput],
    "view"
  >;
  getFunction(
    nameOrSignature: "getSupporters"
  ): TypedContractMethod<[], [bigint], "view">;
  getFunction(
    nameOrSignature: "owner"
  ): TypedContractMethod<[], [string], "view">;
  getFunction(
    nameOrSignature: "sendTip"
  ): TypedContractMethod<
    [_message: string, _index: BigNumberish],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "sendTipERC20"
  ): TypedContractMethod<
    [
      _message: string,
      _index: BigNumberish,
      _amount: BigNumberish,
      _tokenAddress: AddressLike
    ],
    [void],
    "payable"
  >;
  getFunction(
    nameOrSignature: "setCreatorDetail"
  ): TypedContractMethod<
    [
      _username: string,
      _ipfsHash: string,
      _userbio: string,
      _phoneContact: string,
      _networkOption: string
    ],
    [void],
    "nonpayable"
  >;

  getEvent(
    key: "CreatorEvent"
  ): TypedContractEvent<
    CreatorEventEvent.InputTuple,
    CreatorEventEvent.OutputTuple,
    CreatorEventEvent.OutputObject
  >;
  getEvent(
    key: "SupporterEvent"
  ): TypedContractEvent<
    SupporterEventEvent.InputTuple,
    SupporterEventEvent.OutputTuple,
    SupporterEventEvent.OutputObject
  >;

  filters: {
    "CreatorEvent(uint256,string,address,string,string,uint256,string,string,uint256)": TypedContractEvent<
      CreatorEventEvent.InputTuple,
      CreatorEventEvent.OutputTuple,
      CreatorEventEvent.OutputObject
    >;
    CreatorEvent: TypedContractEvent<
      CreatorEventEvent.InputTuple,
      CreatorEventEvent.OutputTuple,
      CreatorEventEvent.OutputObject
    >;

    "SupporterEvent(address,uint256,string)": TypedContractEvent<
      SupporterEventEvent.InputTuple,
      SupporterEventEvent.OutputTuple,
      SupporterEventEvent.OutputObject
    >;
    SupporterEvent: TypedContractEvent<
      SupporterEventEvent.InputTuple,
      SupporterEventEvent.OutputTuple,
      SupporterEventEvent.OutputObject
    >;
  };
}
