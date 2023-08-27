
import { FiSearch } from "react-icons/fi";
import { AiOutlineStock } from "react-icons/ai";
import CoinContext from "../pages/CoinContext";
import { useContext, useState } from "react";
import { Link } from "react-router-dom";
import { useNavigate } from "react-router-dom";
const Header = () => {
  const { coins,srch,setsrch, setcoins, page, setpage, detailShow } =
  useContext(CoinContext);
  let nav=useNavigate()
  function handlesrch(e){  
    setsrch(e.target.value.toLowerCase())
   
  }
  return (
    <div>
      <header className="w-[100%] flex flex-col gap-2 items-center justify-evenly p-2 bg-blue-300 md:flex-row  shadow-xl">
        <div className="text-lg font-bold inline-block flex items-center">
          <Link to={"/"} className="text-blue-900" onClick={()=>nav("/")}>
          Crypto Trackker{" "}
          </Link>
          <span className="text-2xl">
            <AiOutlineStock />
          </span>{" "}
        </div>
        {console.log(srch)}
        <div className="flex items-center gap-1">
          <input
            type="search"
            placeholder="Search Coins"
            className="px-2 rounded-md"
            value={srch}
            onChange={handlesrch}
          />
          <button>
            <FiSearch />
          </button>
        </div>
        {/* <div>
        <button><FcLike/></button>
      </div> */}
      </header>
    </div>
  );
};

export default Header;
