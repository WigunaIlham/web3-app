"use client";

import {ConnectEmbed} from "@/app/thirdweb";
import {client} from "../client";
import {chain} from "../chain";
import {BuyMeCoffee} from "../../../components/BuyACoffee";
import "../globals.css";

export default function BuyCoffee() {
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "flex-start",
        height: "100vh",
        marginTop: "2rem",
      }}
    >
      <h1 style={{marginBottom: "1rem", fontWeight: "bold"}}>Buy A Coffee</h1>
      <ConnectEmbed client={client} chain={chain} />
      <BuyMeCoffee />
      <a href="/">
        <button
          type="button"
          className="flex flex-row justify-center items-center my-5 bg-[#111112] p-3 rounded-full cursor-pointer hover:bg-[#242529]"
        >
          <p className="text-white text-base font-semibold">Back</p>
        </button>
      </a>
    </div>
  );
}
