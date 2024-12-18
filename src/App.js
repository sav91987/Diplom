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
            "imgUrl":"img/goods/acer_24_front.png",
            "imgUrl1":"img/goods/acer_24_back.png",
            "imgUrl2":"img/goods/acer_24_right.png",
            "imgUrl3":"img/goods/acer_24_output.jpg",
            "imgUrl4":"img/goods/acer_24_model.png",
            "imgAlt5":"acer_24",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Acer V246HYL",
            "saleCardDiscript":"Acer 24 дюйма. Выходы VGA + DVI. Частота 50/60 Гц",
            "saleCardPrice":"3000",
            "category":"МОНИТОРЫ"
        },
        {
            "id":"2",
            "imgUrl":"img/goods/dell_24_front.png",
            "imgUrl1":"img/goods/dell_24_back.png",
            "imgUrl2":"img/goods/dell_24_right.png",
            "imgUrl3":"img/goods/dell_24_output.jpg",
            "imgUrl4":"img/goods/dell_24_model.png",
            "imgAlt":"dell_24",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Dell SE2419HR",
            "saleCardDiscript":"Dell 24 дюйма. Выходы VGA + HDMI. Частота 50/60 Гц",
            "saleCardPrice":"3000",
            "category":"МОНИТОРЫ"
        },
        {
            "id":"3",
            "imgUrl":"img/goods/dell_19_front.png",
            "imgUrl1":"img/goods/dell_19_back.png",
            "imgUrl2":"img/goods/dell_19_right.png",
            "imgUrl3":"img/goods/dell_19_output.jpg",
            "imgUrl4":"img/goods/dell_19_model.png",
            "imgAlt":"dell_19",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Dell 1908FPt",
            "saleCardDiscript":"Dell 19 дюймов. Выходы VGA + DVI. Частота 50/60 Гц",
            "saleCardPrice":"800",
            "category":"МОНИТОРЫ"
        },
        {
            "id":"4",
            "imgUrl":"img/goods/samsung_19_front.png",
            "imgUrl1":"img/goods/samsung_19_back.png",
            "imgUrl2":"img/goods/samsung_19_right.png",
            "imgUrl3":"img/goods/samsung_19_output.jpg",
            "imgUrl4":"img/goods/samsung_19_model.png",
            "imgAlt":"samsung_19",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Samsung E1920NR",
            "saleCardDiscript":"Samsung 19 дюймов. Выходы VGA. Частота 50/60 Гц",
            "saleCardPrice":"800",
            "category":"МОНИТОРЫ"
        },
        {
            "id":"5",
            "imgUrl":"img/goods/i5_4570_tower_front.png",
            "imgUrl1":"img/goods/i5_4570_tower_back.png",
            "imgUrl2":"img/goods/i5_4570_tower_right.png",
            "imgUrl3":"img/goods/i5_4570_tower_left.png",
            "imgUrl4":"img/goods/i5_4570_tower_inside.jpg",
            "imgAlt":"i5_4570_tower",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Intel Core i5-4570",
            "saleCardDiscript":"CPU: Intel Core i5-4570. RAM: Kingstone, 4 GB. MB: Gigabyte GA-H81M-S2PV. Блок питания: 450W. HDD: Western Digital 500 GB",
            "saleCardPrice":"4500",
            "category":"СИСТЕМНЫЕ БЛОКИ"
        },
        {
            "id":"6",
            "imgUrl":"img/goods/i3_2100_tower_front.png",
            "imgUrl1":"img/goods/i3_2100_tower_back.png",
            "imgUrl2":"img/goods/i3_2100_tower_right.png",
            "imgUrl3":"img/goods/i3_2100_tower_left.png",
            "imgUrl4":"img/goods/i3_2100_tower_inside.jpg",
            "imgAlt":"i3_2100_tower",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Intel Core i3-2100",
            "saleCardDiscript":"CPU: Intel Core i3-2100. RAM: Samsung, 4 GB. MB: Gigabyte GA-H61M-D2H. Блок питания: 450W. HDD: Western Digital 500 GB",
            "saleCardPrice":"2000",
            "category":"СИСТЕМНЫЕ БЛОКИ"
        },
        {
            "id":"7",
            "imgUrl":"img/goods/i3_2100_sff_front.png",
            "imgUrl1":"img/goods/i3_2100_sff_back.png",
            "imgUrl2":"img/goods/i3_2100_sff_inside.png",
            "imgUrl3":"img/goods/i3_2100_sff_inside2.png",
            "imgUrl4":"img/goods/i3_2100_sff_model.jpg",
            "imgAlt":"i3_2100_sff",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"HP Compaq 6200 Pro SFF",
            "saleCardDiscript":"CPU: Intel Core i3-2100. RAM: Samsung, 4 GB. MB: HP. Блок питания: 450W. HDD: Western Digital 500 GB",
            "saleCardPrice":"2000",
            "category":"СИСТЕМНЫЕ БЛОКИ"
        },
        {
            "id":"8",
            "imgUrl":"img/goods/i3_2130_sff_front.png",
            "imgUrl1":"img/goods/i3_2130_sff_back.png",
            "imgUrl2":"img/goods/i3_2130_sff_inside.png",
            "imgUrl3":"img/goods/i3_2130_sff_inside2.png",
            "imgUrl4":"img/goods/i3_2130_sff_model.jpg",
            "imgAlt":"i3_2130_sff",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"Fujitsu Esprimo E510",
            "saleCardDiscript":"CPU: Intel Core i3-2130. RAM: Kingstone, 4 GB. MB: Fujitsu. Блок питания: 450W. HDD: Western Digital 500 GB",
            "saleCardPrice":"2000",
            "category":"СИСТЕМНЫЕ БЛОКИ"
        },
        {
            "id":"9",
            "imgUrl":"img/goods/i5_3570_sff_front.png",
            "imgUrl1":"img/goods/i5_3570_sff_back.png",
            "imgUrl2":"img/goods/i5_3570_sff_inside.png",
            "imgUrl3":"img/goods/i5_3570_sff_inside2.png",
            "imgUrl4":"img/goods/i5_3570_sff_mПарам папам Парам папам Парodel.jpg",
            "imgAlt":"i5_3570_sff",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"HP Compaq Pro 6300 SFF",
            "saleCardDiscript":"CPU: Intel Core i5-3570. RAM: Kingstone, 4 GB. MB: HP. Блок питания: 450W. HDD: Western Digital 500 GB",
            "saleCardPrice":"3000",
            "category":"СИСТЕМНЫЕ БЛОКИ"
        },
        {
            "id":"10",
            "imgUrl":"img/goods/i5_4570_sff_front.png",
            "imgUrl1":"img/goods/i5_4570_sff_back.png",
            "imgUrl2":"img/goods/i5_4570_sff_insude.png",
            "imgUrl3":"img/goods/i5_4570_sff_inside2.png",
            "imgUrl4":"img/goods/i5_4570_sff_model.png",
            "imgAlt":"i5_4570_sff",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"HP ProDesk 600 G1 SFF",
            "saleCardDiscript":"CPU: Intel Core i5-4570. RAM: Kingstone, 4 GB. MB: HP. Блок питания: 450W. HDD: Western Digital 500 GB",
            "saleCardPrice":"4000",
            "category":"СИСТЕМНЫЕ БЛОКИ"
        },
        {
            "id":"11",
            "imgUrl":"img/goods/hp_proliant_dl180_g6_front.png",
            "imgUrl1":"img/goods/hp_proliant_dl180_g6_back.png",
            "imgUrl2":"img/goods/hp_proliant_dl180_g6_inside.png",
            "imgUrl3":"img/goods/hp_proliant_dl180_g6_inside2.png",
            "imgUrl4":"img/goods/hp_proliant_dl180_g6_model.png",
            "imgAlt":"hp_proliant_dl180_g6",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"HP Proliant DL180 G6",
            "saleCardDiscript":"Фopм - фaктop: 1U RAСК + рельсы для стойки. CPU: 2x Intel Xeon E5-2630L v2. RAM: DDR3 RDIMM, LRDIMM или UDIMM. Блoк питания: 2 х 460W РSU с возможностью горячей замены. Корзинa нa 8 HDD 2.5 дюйма SFF SАS/SАTA/SSD. Rаid кoнтpoллeр: НР Smаrt Аrrаy Р420i. Cлоты рacшиpения: 1 х PCIе 3.0 Ехprеss x8; 1 х РCIе 3.0 Еxрress х16. Управление инфраструктурой: iLO Management Engine, Insight Control, iLO Management Engine, HP Insight Control. Сетевая карта: 1 Gb 2 роrt",
            "saleCardPrice":"20000",
            "category":"СЕРВЕРЫ"
        },
        {
            "id":"12",
            "imgUrl":"img/goods/hp_proliant_dl360_g7_front.png",
            "imgUrl1":"img/goods/hp_proliant_dl360_g7_back.png",
            "imgUrl2":"img/goods/hp_proliant_dl360_g7_inside.png",
            "imgUrl3":"img/goods/hp_proliant_dl360_g7_inside2.png",
            "imgUrl4":"img/goods/hp_proliant_dl360_g7_model.png",
            "imgAlt":"hp_proliant_dl360_g7",
            "aHref":"../../index2.html",
            "imgBtnUrl":"./img/btnBasket.svg",
            "imgBtnAlt":"btnBasket",
            "saleCardName":"HP Proliant DL360 G7",
            "saleCardDiscript":"Фopм - фaктop: 1U RAСК + рельсы для стойки. CPU: 2x Intel Xeon E5-2630L v2. RAM: DDR3 RDIMM, LRDIMM или UDIMM. Блoк питания: 2 х 460W РSU с возможностью горячей замены. Корзинa нa 8 HDD 2.5 дюйма SFF SАS/SАTA/SSD. Rаid кoнтpoллeр: НР Smаrt Аrrаy Р420i. Cлоты рacшиpения: 1 х PCIе 3.0 Ехprеss x8; 1 х РCIе 3.0 Еxрress х16. Управление инфраструктурой: iLO Management Engine, Insight Control, iLO Management Engine, HP Insight Control. Сетевая карта: 1 Gb 2 роrt",
            "saleCardPrice":"10000",
            "category":"СЕРВЕРЫ"
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
