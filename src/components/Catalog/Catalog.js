import { useContext } from "react";
import Adventages from "../Adventages/Adventages";
import FilterSort from "../FilterSort/FilterSort";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import "./Catalog.css";
import DataContext from "../../context/DataContext";
function Catalog() {
    const arrOfProducts = useContext(DataContext);

    return (
        <>
            <Header />
            <FilterSort arrOfProducts={arrOfProducts} />
            <Adventages />
            <Footer />
        </>
    );
}

export default Catalog;
