import { useContext } from "react";
import { useParams } from "react-router-dom";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Product from "../Product/Product";
import DataContext from "../../context/DataContext";

function ProductPage() {
    const data = useContext(DataContext);
    const { id } = useParams();
    return (
        <>
            <Header />
            <Product />
            <Card data={data} numOfShownItems={3} />
            <Footer />
        </>
    );
}

export default ProductPage;