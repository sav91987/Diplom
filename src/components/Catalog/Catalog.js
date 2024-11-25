import { useContext } from "react";
import Adventages from "../Adventages/Adventages";
import Card from "../Card/Card";
import FilterSort from "../FilterSort/FilterSort";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewArrivals from "../NewArrivals/NewArrivals";
import Subscribe from "../Subscribe/Subscribe";
import "./Catalog.css";
import DataContext from "../../context/DataContext";
function Catalog() {
    const arrOfProducts = useContext(DataContext);

    return (
        <>
            <Header />
            <NewArrivals />
            <FilterSort arrOfProducts={arrOfProducts} />
            <Adventages />
            <Subscribe />
            <Footer />
        </>
    );
}

export default Catalog;
