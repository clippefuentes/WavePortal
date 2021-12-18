/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import {
  BaseContract,
  BigNumber,
  BytesLike,
  CallOverrides,
  ContractTransaction,
  Overrides,
  PopulatedTransaction,
  Signer,
  utils,
} from "ethers";
import { FunctionFragment, Result } from "@ethersproject/abi";
import { Listener, Provider } from "@ethersproject/providers";
import { TypedEventFilter, TypedEvent, TypedListener, OnEvent } from "./common";

export interface WavePortalInterface extends utils.Interface {
  functions: {
    "getTotalUsers()": FunctionFragment;
    "getTotalWaves()": FunctionFragment;
    "getWaves()": FunctionFragment;
    "wave()": FunctionFragment;
  };

  encodeFunctionData(
    functionFragment: "getTotalUsers",
    values?: undefined
  ): string;
  encodeFunctionData(
    functionFragment: "getTotalWaves",
    values?: undefined
  ): string;
  encodeFunctionData(functionFragment: "getWaves", values?: undefined): string;
  encodeFunctionData(functionFragment: "wave", values?: undefined): string;

  decodeFunctionResult(
    functionFragment: "getTotalUsers",
    data: BytesLike
  ): Result;
  decodeFunctionResult(
    functionFragment: "getTotalWaves",
    data: BytesLike
  ): Result;
  decodeFunctionResult(functionFragment: "getWaves", data: BytesLike): Result;
  decodeFunctionResult(functionFragment: "wave", data: BytesLike): Result;

  events: {};
}

export interface WavePortal extends BaseContract {
  connect(signerOrProvider: Signer | Provider | string): this;
  attach(addressOrName: string): this;
  deployed(): Promise<this>;

  interface: WavePortalInterface;

  queryFilter<TEvent extends TypedEvent>(
    event: TypedEventFilter<TEvent>,
    fromBlockOrBlockhash?: string | number | undefined,
    toBlock?: string | number | undefined
  ): Promise<Array<TEvent>>;

  listeners<TEvent extends TypedEvent>(
    eventFilter?: TypedEventFilter<TEvent>
  ): Array<TypedListener<TEvent>>;
  listeners(eventName?: string): Array<Listener>;
  removeAllListeners<TEvent extends TypedEvent>(
    eventFilter: TypedEventFilter<TEvent>
  ): this;
  removeAllListeners(eventName?: string): this;
  off: OnEvent<this>;
  on: OnEvent<this>;
  once: OnEvent<this>;
  removeListener: OnEvent<this>;

  functions: {
    getTotalUsers(overrides?: CallOverrides): Promise<[BigNumber]>;

    getTotalWaves(overrides?: CallOverrides): Promise<[BigNumber]>;

    getWaves(overrides?: CallOverrides): Promise<[BigNumber]>;

    wave(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<ContractTransaction>;
  };

  getTotalUsers(overrides?: CallOverrides): Promise<BigNumber>;

  getTotalWaves(overrides?: CallOverrides): Promise<BigNumber>;

  getWaves(overrides?: CallOverrides): Promise<BigNumber>;

  wave(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<ContractTransaction>;

  callStatic: {
    getTotalUsers(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalWaves(overrides?: CallOverrides): Promise<BigNumber>;

    getWaves(overrides?: CallOverrides): Promise<BigNumber>;

    wave(overrides?: CallOverrides): Promise<void>;
  };

  filters: {};

  estimateGas: {
    getTotalUsers(overrides?: CallOverrides): Promise<BigNumber>;

    getTotalWaves(overrides?: CallOverrides): Promise<BigNumber>;

    getWaves(overrides?: CallOverrides): Promise<BigNumber>;

    wave(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<BigNumber>;
  };

  populateTransaction: {
    getTotalUsers(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getTotalWaves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    getWaves(overrides?: CallOverrides): Promise<PopulatedTransaction>;

    wave(
      overrides?: Overrides & { from?: string | Promise<string> }
    ): Promise<PopulatedTransaction>;
  };
}
