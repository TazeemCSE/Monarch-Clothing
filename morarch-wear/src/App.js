import { Routes,Route } from "react-router-dom";
import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/authetication/authentication.component";
import Shop from "./routes/Shop/shop.component";
import CheckOut from "./routes/checkout/checkou.component";

const App=()=>{
   return(
   <Routes>
    <Route path="/" element={<Navigation/>} >
      <Route index element={<Home/>} />
      <Route path="shop" element={<Shop/>} />
      <Route path="auth" element={<Authentication/>} />
      <Route path="checkout" element={<CheckOut/>} />
    </Route>
   </Routes>
     
   );
}
export default App;
   