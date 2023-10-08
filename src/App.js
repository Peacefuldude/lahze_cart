import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

// Main Component
import FullPage from "./Components/FullPage/FullPage";

// Components
import Customer from "./Components/kharidar/Kharidar";
import Seller from "./Components/foroshande/Compo";
import Giftcardnum from "./Components/cartvarification/giftcardnum";
import Shomarecart from "./Components/cartvarification/Shomarecart";
import QandaPage from "./Components/OtherPages/QandaPage/QandaPage";
import SellerPanel from "./Components/OtherPages/UserPage/SellerPanel/SellerPanel";
import HistoryPanel from "./Components/OtherPages/UserPage/SellerPanel/HistoryPanel";
import AmountPanel from "./Components/OtherPages/UserPage/SellerPanel/AmountPanel";
import ActivationPage from "./Components/OtherPages/UserPage/ActivationPage/ActivationPage";
import CardPage from "./Components/OtherPages/UserPage/CardPage/CardPage";
import AboutUs from "./Components/OtherPages/AboutUs/AboutUs";
import SellerOtpCode from "./Components/verificationcode/Codevorod"
import CustomerOtpCode from "./Components/verificationcode/Costumercodevorod"
import Hamkari from "./Components/HamkariBaMa/Hamkari";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Pages */}
        <Route path="/home" element={ <  FullPage/>}/>
        <Route path="/coop" element={ <  Hamkari/>}/>
        <Route path="/sellerotp" element={ <  SellerOtpCode/>}/>
        <Route path="/customerotp" element={ <  CustomerOtpCode/>}/>
        <Route path="/cardnumvar" element={ <  Shomarecart/>}/>
        <Route path="/customer" element={ <  Customer/>}/>
        <Route path="/seller" element={ <  Seller/>}/>
        <Route path="/opengiftcardnumvar" element={ <  Giftcardnum/>}/>
        <Route path="/QandAPage" element={ <  QandaPage/>}/>
        <Route path="/UserPage" element={ <  SellerPanel/>}/>
        <Route path="/HistoryPanel" element={ <  HistoryPanel/>}/>
        <Route path="/AmountPanel" element={ <  AmountPanel/>}/>
        <Route path="/ActivationPage" element={ <  ActivationPage/>}/>
        <Route path="/CardPage" element={ <  CardPage/>}/>
        <Route path="/AboutUs" element={ <  AboutUs/>}/>

        {/* Redirect */}
        <Route path="/" element={<Navigate to="/home" />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
