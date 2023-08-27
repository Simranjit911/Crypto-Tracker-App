
import "./App.css";
import { Route, Routes } from "react-router-dom";
import Header from "./components/Header";
import Home from "./pages/Home";
import CoinPage from "./pages/CoinPage";
import CoinContext from "./pages/CoinContext";
import { useState } from "react";

const App = () => {
  const [coins, setcoins] = useState([]);
  const [page, setpage] = useState(1);
  const[detailShow,setDetailsShow]=useState(false)
  const [coinDet,setCoinDet]=useState({})
  const [coinData,setCoinData]=useState({})
  const [srch,setsrch]=useState("")
  return (
    <>
    <CoinContext.Provider value={{coins,srch,setsrch,page,setcoins,setpage,setDetailsShow,detailShow,coinDet,setCoinDet,coinData,setCoinData}}>
      
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/coins/:id" element={<CoinPage />} />
      </Routes>
    </CoinContext.Provider>
    </>
  );
};

export default App;
