import { Routes,Route } from "react-router-dom";
import Home from "./routes/Home/home.component";
import Navigation from "./routes/Navigation/navigation.component";
import Authentication from "./routes/authetication/authentication.component";


const Shop=()=>{
  return(
    <h1>I am The shopping Page</h1>
  )
}
const App=()=>{
   return(
   <Routes>
    <Route path="/" element={<Navigation/>} >
      <Route index element={<Home/>} />
      <Route path="shop" element={<Shop/>} />
      <Route path="auth" element={<Authentication/>} />
    </Route>
   </Routes>
     
   );
}
export default App;
   