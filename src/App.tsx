import 'bootstrap/dist/css/bootstrap.min.css'
import { Route, Routes} from "react-router-dom";
import './App.css'
import Main from "./Components/Main/main";
import Header from "./Components/Header/header";
import ProductPage from "./Components/ProductPage/productPage";

function App(){
    return <div className={"App"}>
        <div className={"container-lg container-fluid py-4 px-2 px-lg-0"}>
            <Header/>
            <Main/>
               <Routes>
                   <Route path={"products/:id"} element={<ProductPage/>}/>
               </Routes>
        </div>
    </div>
}
export default App