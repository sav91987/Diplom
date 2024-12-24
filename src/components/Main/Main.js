import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
    return (
        <>
            <section className="main">
                <div className="main__wrapper">
                    <img
                        className="mainLeftSide"
                        src={"/img/mainPicture.png"}
                        alt="mainPicture"
                    />
                    <div className="mainRightSide">
                        <h1 className="text textFormat textMainTitle">
                            ТЕЛЕКОНТАКТ
                        </h1>
                        <h2 className="text textFormat textMain">
                            <br />
                            ОФИСНЫЕ КОМПЬЮТЕРЫ <br />
                            МОНИТОРЫ
                            <br />
                            <span className="redColor">СЕРВЕРЫ</span>
                        </h2>
                    </div>
                </div>
            </section>

            <section className="salesTitle container">
                <h5 className="text textSalesTitle">Наши предложения</h5>
                <p className="text textSales">
                    Подберем компьютер под любые требования
                </p>
            </section>

            <Link to="/Catalog">
                <button className="container btnCentr text">
                    Показать все товары
                </button>
            </Link>
        </>
    );
}

export default Main;
