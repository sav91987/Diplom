import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Catalog from "./components/Catalog/Catalog";
import MainPage from "./components/MainPage/MainPage";
import ProductPage from "./components/ProductPage/ProductPage";
import RegistarationPage from "./components/RegistarationPage/RegistarationPage";
import DataContext from "./context/DataContext";
import data from "./dataInfo.json";


function App() {
    return (
        <div className="App">
            <DataContext.Provider value={data}>
                <BrowserRouter>
                    <Routes>
                        <Route path="*" element={<MainPage />} />
                        <Route path="/" element={<MainPage />} />
                        <Route path="/Catalog/:id" element={<ProductPage />} />
                        <Route path="/Catalog" element={<Catalog />} />
                        <Route path="/Cart" element={<Cart />} />
                        <Route
                            path="/Registration"
                            element={<RegistarationPage />}
                        />
                    </Routes>
                </BrowserRouter>
            </DataContext.Provider>
        </div>
    );
}

export default App;
