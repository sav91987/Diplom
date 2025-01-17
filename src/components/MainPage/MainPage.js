import Adventages from "../Adventages/Adventages";
import Card from "../Card/Card";
import Footer from "../Footer/Footer";
import Header from "../Header/Header";
import Main from "../Main/Main";
import { useContext } from "react";
import DataContext from "../../context/DataContext";

function MainPage() {
    const data = useContext(DataContext);

    return (
        <>
            <Header />
            <Main />
            <Card data={data} numOfShownItems={6} />
            <Adventages />
            <Footer />
        </>
    );
}

export default MainPage;
