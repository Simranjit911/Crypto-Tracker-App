import React, { useEffect, useState } from "react";
import axios from "axios";
import { useContext } from "react";
import CoinContext from "./CoinContext";
import { FiXCircle } from "react-icons/fi";
const Details = () => {
  const { setDetailsShow, coinDet, coinData } =
    useContext(CoinContext);
  const {
    name,
    rank,
    price,
    image,
    low_24h,
    high_24h,
    supply,
    marketCap,
    symbol,
    pc_24h,
    mc_c24h,
    ath,
    athp,
  } = coinDet;
  console.log(coinData);

  return (
    <div className="bg-slate-900 text-white h-[100vh] ">
      <div className="w-[80%]  bg-slate-900 py-4 h-[100vh] justify-evenly mx-auto flex flex-col gap-6 md:gap-6 md:w-[45%]">
        <p className="text-center text-3xl font-bold">{name}</p>
        {/* Main Sec Start */}
        <div className="flex flex-col md:flex-row items-center justify-between bg-slate-800 px-4">
          <img src={image} alt="" className="md:w-[160px]  w-[160px] p-2 " />
          <div className="text-md font-bold text-center">
            <p>Rank-{rank}</p>
            <p>Price-${price.toLocaleString()}</p>
          </div>
        </div>
        {/* Main sec end */}

        {/* 24 hr changes */}
        <div>
          <p className="flex justify-between border-b">
            <span>24 Hour Low</span> <span>${low_24h}</span>
          </p>
          <p className="flex justify-between border-b">
            <span>24 Hour High</span> <span>${high_24h}</span>
          </p>
        </div>

        {/* Table */}
        <table className=" text-center text-sm font-light">
          <thead className="border-b  dark:border-neutral-500">
            <tr className="text-sm">
              <th scope="col" className="md:px-6 md:py-4 border">
                Sym
              </th>
              <th scope="col" className="md:px-6 md:py-4 border">
                P.Ch.1d
              </th>
              <th scope="col" className="md:px-6 md:py-4 border">
                M.Ch 1d
              </th>
              <th scope="col" className="md:px-6 md:py-4 border">
                Ath Ch
              </th>
              <th scope="col" className="md:px-6 md:py-4 border">
                Ath
              </th>
            </tr>
          </thead>
          <tbody className="text-gray-400">
            <tr className="border-b dark:border-neutral-500">
              <td className="whitespace-wrap md:px-6 md:py-4  border">
                {symbol}
              </td>
              <td className="whitespace-wrap md:px-6 md:py-4 border">
                {pc_24h.toFixed(3)}%
              </td>
              <td className="whitespace-wrap md:px-6 md:py-4 border">
                {mc_c24h.toFixed(2)}%
              </td>
              <td className="whitespace-wrap md:px-6 md:py-4 border">
                {athp.toFixed(2)}%
              </td>
              <td className="whitespace-wrap md:px-6 md:py-4 border">
                {ath.toFixed(0)}
              </td>
            </tr>
          </tbody>
        </table>

        {/* Market Cap and circulatory supply */}
        <div>
          <p className="flex justify-between border-b">
            <span>Circulating Supply</span> <span>{supply}</span>
          </p>
          <p className="flex justify-between border-b">
            <span>Market Cap</span> <span>${marketCap}</span>
          </p>
        </div>

        <button
          onClick={() => {
            setDetailsShow(false);
          }}
          className="flex mx-auto"
        >
          <FiXCircle />
        </button>
      </div>
    </div>
  );
};

export default Details;
