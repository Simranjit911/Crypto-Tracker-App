import { useEffect, useState } from "react";
import axios from "axios";
import CoinCart from "../components/CoinCart";
import CoinContext from "./CoinContext";
import { useContext } from "react";
import Details from "./Details";
import Pagination from "../components/Pagination";
import Header from "../components/Header";
const Home = () => {
  const { coins,srch, setcoins, page, setpage, detailShow } =
    useContext(CoinContext);
  const url = `https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=12&page=${page}&sparkline=false&locale=en`;
  async function call() {
    let res = await axios.get(url);
    setcoins(res.data);
    console.log(coins);
  }
  useEffect(() => {
    call();
  }, [page]);

  return (
    <div className="flex mx-auto flex-col w-[100%] bg-slate-800 justify-center ">
      {detailShow ? (
        <Details />
      ) : (
        <>
          <Header />
        <div className="flex flex-col justify-center mx-auto items-center w-[100%] min-h-screen">
          <div className="lg:w-[70vw] mx-auto md:grid-cols-2  grid grid-cols-1 lg:grid-cols-3 gap-3 my-10 justify-center items-center text-center ">
            {console.log(coins)}
            {coins.filter((item)=>{
                return srch.toLowerCase()===""?item :item.name.toLowerCase().includes(srch)
            }).map((coin, idx) => {
              return (
                <CoinCart
                  rank={coin.market_cap_rank}
                  key={idx}
                  image={coin.image}
                  name={coin.name}
                  price={coin.current_price}
                  supply={coin.circulating_supply}
                  low_24h={coin.low_24h}
                  high_24h={coin.high_24h}
                  marketCap={coin.market_cap}
                  symbol={coin.symbol}
                  pc_24h={coin.price_change_percentage_24h}
                  mc_c24h={coin.market_cap_change_percentage_24h}
                  athp={coin.ath_change_percentage}
                  ath={coin.ath}
                />
              );
            })}
          </div>
          <Pagination/>
        </div>
        </>
      )}
    </div>
  );
};

export default Home;
