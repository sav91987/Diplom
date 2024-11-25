import { useContext } from "react";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import NewArrivals from "../NewArrivals/NewArrivals";
import Product from "../Product/Product";
import Subscribe from "../Subscribe/Subscribe";
import "./ProductPage.css";
import DataContext from "../../context/DataContext";

function ProductPage() {
    const data = useContext(DataContext);
    return (
        <>
            <Header />
            <NewArrivals />
            <Product />
            <Card data={data} numOfShownItems={3} />
            <Subscribe />
            <Footer />
        </>
    );
}

export default ProductPage;
