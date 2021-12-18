/* Autogenerated file. Do not edit manually. */
/* tslint:disable */
/* eslint-disable */
import { Signer, utils, Contract, ContractFactory, Overrides } from "ethers";
import { Provider, TransactionRequest } from "@ethersproject/providers";
import type { OldWavePortal, OldWavePortalInterface } from "../OldWavePortal";

const _abi = [
  {
    inputs: [],
    stateMutability: "nonpayable",
    type: "constructor",
  },
  {
    inputs: [],
    name: "getTotalUsers",
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
    name: "getTotalWaves",
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
    name: "getWaves",
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
    name: "wave",
    outputs: [],
    stateMutability: "nonpayable",
    type: "function",
  },
];

const _bytecode =
  "0x608060405234801561001057600080fd5b5061003c604051806060016040528060258152602001610a676025913961004160201b6103721760201c565b6101c4565b6100dd816040516024016100559190610142565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506100e060201b60201c565b50565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b600061011482610164565b61011e818561016f565b935061012e818560208601610180565b610137816101b3565b840191505092915050565b6000602082019050818103600083015261015c8184610109565b905092915050565b600081519050919050565b600082825260208201905092915050565b60005b8381101561019e578082015181840152602081019050610183565b838111156101ad576000848401525b50505050565b6000601f19601f8301169050919050565b610894806101d36000396000f3fe608060405234801561001057600080fd5b506004361061004c5760003560e01c80636fe15b44146100515780639a2cdc081461005b5780639be572f614610079578063a9d42f7e14610097575b600080fd5b6100596100b5565b005b610063610210565b6040516100709190610722565b60405180910390f35b61008161025b565b60405161008e9190610722565b60405180910390f35b61009f6102ac565b6040516100ac9190610722565b60405180910390f35b60016000808282546100c79190610759565b925050819055506000600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff1681526020019081526020016000205411610179576002339080600181540180825580915050600190039060005260206000200160009091909190916101000a81548173ffffffffffffffffffffffffffffffffffffffff021916908373ffffffffffffffffffffffffffffffffffffffff1602179055505b60018060003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002060008282546101c89190610759565b9250508190555061020e6040518060400160405280600d81526020017f25732068617320776176656421000000000000000000000000000000000000008152503361040b565b565b60006102536040518060400160405280601781526020017f5765206861766520256420746f74616c207761766573210000000000000000008152506000546104a7565b600054905090565b60006102a16040518060400160405280601781526020017f5765206861766520256420746f74616c207573657273210000000000000000008152506002805490506104a7565b600280549050905090565b600061032d6040518060400160405280601681526020017f2573206861732077617665642025642074696d6573210000000000000000000081525033600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054610543565b600160003373ffffffffffffffffffffffffffffffffffffffff1673ffffffffffffffffffffffffffffffffffffffff16815260200190815260200160002054905090565b610408816040516024016103869190610662565b6040516020818303038152906040527f41304fac000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506105e2565b50565b6104a38282604051602401610421929190610684565b6040516020818303038152906040527f319af333000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506105e2565b5050565b61053f82826040516024016104bd9291906106f2565b6040516020818303038152906040527f9710a9d0000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506105e2565b5050565b6105dd83838360405160240161055b939291906106b4565b6040516020818303038152906040527f07c81217000000000000000000000000000000000000000000000000000000007bffffffffffffffffffffffffffffffffffffffffffffffffffffffff19166020820180517bffffffffffffffffffffffffffffffffffffffffffffffffffffffff83818316178352505050506105e2565b505050565b60008151905060006a636f6e736f6c652e6c6f679050602083016000808483855afa5050505050565b610614816107af565b82525050565b60006106258261073d565b61062f8185610748565b935061063f8185602086016107eb565b6106488161084d565b840191505092915050565b61065c816107e1565b82525050565b6000602082019050818103600083015261067c818461061a565b905092915050565b6000604082019050818103600083015261069e818561061a565b90506106ad602083018461060b565b9392505050565b600060608201905081810360008301526106ce818661061a565b90506106dd602083018561060b565b6106ea6040830184610653565b949350505050565b6000604082019050818103600083015261070c818561061a565b905061071b6020830184610653565b9392505050565b60006020820190506107376000830184610653565b92915050565b600081519050919050565b600082825260208201905092915050565b6000610764826107e1565b915061076f836107e1565b9250827fffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffffff038211156107a4576107a361081e565b5b828201905092915050565b60006107ba826107c1565b9050919050565b600073ffffffffffffffffffffffffffffffffffffffff82169050919050565b6000819050919050565b60005b838110156108095780820151818401526020810190506107ee565b83811115610818576000848401525b50505050565b7f4e487b7100000000000000000000000000000000000000000000000000000000600052601160045260246000fd5b6000601f19601f830116905091905056fea26469706673582212203b7b1df3b3c0901dabd937f653e6b5e5f73a13cba22f38ddf0d6627ab0ebf11664736f6c63430008000033596f20796f2c204920616d206120636f6e747261637420616e64204920616d20736d617274";

type OldWavePortalConstructorParams =
  | [signer?: Signer]
  | ConstructorParameters<typeof ContractFactory>;

const isSuperArgs = (
  xs: OldWavePortalConstructorParams
): xs is ConstructorParameters<typeof ContractFactory> => xs.length > 1;

export class OldWavePortal__factory extends ContractFactory {
  constructor(...args: OldWavePortalConstructorParams) {
    if (isSuperArgs(args)) {
      super(...args);
    } else {
      super(_abi, _bytecode, args[0]);
    }
  }

  deploy(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): Promise<OldWavePortal> {
    return super.deploy(overrides || {}) as Promise<OldWavePortal>;
  }
  getDeployTransaction(
    overrides?: Overrides & { from?: string | Promise<string> }
  ): TransactionRequest {
    return super.getDeployTransaction(overrides || {});
  }
  attach(address: string): OldWavePortal {
    return super.attach(address) as OldWavePortal;
  }
  connect(signer: Signer): OldWavePortal__factory {
    return super.connect(signer) as OldWavePortal__factory;
  }
  static readonly bytecode = _bytecode;
  static readonly abi = _abi;
  static createInterface(): OldWavePortalInterface {
    return new utils.Interface(_abi) as OldWavePortalInterface;
  }
  static connect(
    address: string,
    signerOrProvider: Signer | Provider
  ): OldWavePortal {
    return new Contract(address, _abi, signerOrProvider) as OldWavePortal;
  }
}