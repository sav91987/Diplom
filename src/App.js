import { BrowserRouter, Route, Routes } from "react-router-dom";
import "./App.css";
import Cart from "./components/Cart/Cart";
import Catalog from "./components/Catalog/Catalog";
import MainPage from "./components/MainPage/MainPage";
import ProductPage from "./components/ProductPage/ProductPage";
import RegistarationPage from "./components/RegistarationPage/RegistarationPage";
import DataContext from "./context/DataContext";
import { useContext, useEffect, useState } from "react";

function App() {
    const dataInfo = `[
        {
            "id":"1",
            "imgUrl":"img/SalePicture1.jpg",
            "imgAlt":"SalePicture1",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"ELLERY X M'O CAPSULE",
            "saleCardDiscript":"Known for her sculptural takes tradition tailoring, Australian arbiter of cool Kym Ellery teams up Moda Operandi.",
            "size":"XS",
            "saleCardPrice":"52.00"
        },
        {
            "id":"2",
            "imgUrl":"img/SalePicture12.png",
            "imgAlt":"SalePicture12",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Super Clothes",
            "saleCardDiscript":"Known for her sculptural takes Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "size":"XS",
            "saleCardPrice":"100.00"
        },
        {
            "id":"3",
            "imgUrl":"img/SalePicture3.png",
            "imgAlt":"SalePicture3",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Super Clothes XXXL",
            "saleCardDiscript":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi dfghjdfkgh ssfrre",
            "size":"M",
            "saleCardPrice":"302.00"
        },
        {
            "id":"4",
            "imgUrl":"img/SalePicture4.png",
            "imgAlt":"SalePicture4",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Super",
            "saleCardDiscript":"very good",
            "size":"M",
            "saleCardPrice":"2.00"
        },
        {
            "id":"5",
            "imgUrl":"img/SalePicture5.png",
            "imgAlt":"SalePicture5",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgUrl":"img/SalePicture5.png",
            "imgAlt":"SalePicture5",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Трусы / носки",
            "saleCardDiscript":"herПарам папам Парам папам Парам папам Парам папам Парам папам Парам папам Парам папам",
            "size":"S",
            "saleCardPrice":"152.00"
        },
        {
            "id":"6",
            "imgUrl":"img/SalePicture6.png",
            "imgAlt":"SalePicture6",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Шмотка что надо",
            "saleCardDiscript":"Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            "size":"S",
            "saleCardPrice":"2000.00"
        },
        {
            "id":"7",
            "imgUrl":"img/SalePicture7.png",
            "imgAlt":"SalePicture7",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Трусы / носки",
            "saleCardDiscript":"Парам папам Парам папам Парам папам Парам папам Парам папам Парам папам Парам папам",
            "size":"L",
            "saleCardPrice":"152.00"
        },
        {
            "id":"8",
            "imgUrl":"img/SalePicture8.png",
            "imgAlt":"SalePicture8",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Трусы / носки",
            "saleCardDiscript":"Парам папам Парам папам Парам папам Парам папам Парам папам Парам папам Парам папам",
            "size":"L",
            "saleCardPrice":"152.00"
        },
        {
            "id":"9",
            "imgUrl":"img/SalePicture9.png",
            "imgAlt":"SalePicture9",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Трусы / носки",
            "saleCardDiscript":"Парам папам Парам папам Парам папам Парам папам Парам папам Парам папам Парам папам",
            "size":"XS",
            "saleCardPrice":"152.00"
        },
        {
            "id":"10",
            "imgUrl":"img/SalePicture13.png",
            "imgAlt":"SalePicture13",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Трусы / носки",
            "saleCardDiscript":"Парам папам Парам папам Парам папам Парам папам Парам папам Парам папам Парам папам",
            "size":"L",
            "saleCardPrice":"152.00"
        }
    ]`;

    const data = JSON.parse(dataInfo);

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
