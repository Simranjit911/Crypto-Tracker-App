import { useEffect } from "react";
import CoinContext from "../pages/CoinContext";
import axios from "axios";
import { useContext } from "react";
const CoinCart = (props) => {
  const {
    rank,
    key,
    image,
    name,
    price,
    low_24h,
    high_24h,
    supply,
    marketCap,
    symbol,
    pc_24h,
    mc_c24h,
    ath,
    athp,
  } = props;

  const { detailShow, setDetailsShow, setCoinDet, setCoinData } =
    useContext(CoinContext);
  const dt = {
    rank,
    name,
    key,
    image,
    price,
    low_24h,
    high_24h,
    supply,
    marketCap,
    symbol,
    pc_24h,
    mc_c24h,
    ath,
    athp,
  };

  function handleDet() {
    setDetailsShow(true);
    setCoinDet(dt);
  }
  return (
    <>
      <div key={rank} className=" ">
        <div className=" flex flex-col justify-center items-center gap-1 rounded-md py-2 w-[260px] md:w-[300px]  bg-slate-600 ">
          #{rank}
          <img src={image} alt="" className="md:w-[100px]  w-[60px]" />
          <div className="flex items-center   flex-col">
            <p className=" text-lg">{name}</p>
            <p>Market Cap-${marketCap}</p>
          </div>
          <p>Price-${price.toFixed(3)}</p>
          <button
            className="bg-slate-800 text-white px-1"
            onClick={() => handleDet()}
          >
            View Details
          </button>
        </div>
      </div>
    </>
  );
};

export default CoinCart;
