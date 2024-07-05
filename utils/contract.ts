import {chain} from "@/app/chain";
import {client} from "@/app/client";
import {getContract} from "thirdweb";
import {contractABI} from "./contractABI";

const contractAddress = "0x90A12b2bd6978C201bcb529C6e9B90bFA0246145";

export const contract = getContract({
  client: client,
  chain: chain,
  address: contractAddress,
  abi: contractABI,
});
