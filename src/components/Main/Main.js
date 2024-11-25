import "./Main.css";
import { Link } from "react-router-dom";

function Main() {
    return (
        <>
            <section className="main">
                <div className="main__wrapper">
                    <img
                        className="mainLeftSide"
                        src={"/img/mainPicture.svg"}
                        alt="mainPicture"
                    />
                    <div className="mainRightSide">
                        <h1 className="text textFormat textMainTitle">
                            THE BRAND
                        </h1>
                        <h2 className="text textFormat textMain">
                            OF LUXERIOUS <span class="redColor">FASHION</span>
                        </h2>
                    </div>
                </div>
            </section>

            <section class="card container">
                <div class="cardFirst">
                    <div class="shadow">
                        <div class="text textCardFormat">
                            <h3>30% OFF</h3>
                            <h4>FOR WOMEN</h4>
                        </div>
                    </div>
                </div>
                <div class="cardSecond">
                    <div class="shadow">
                        <div class="text textCardFormat">
                            <h3>HOT DEAL</h3>
                            <h4>FOR MEN</h4>
                        </div>
                    </div>
                </div>
                <div class="cardThird">
                    <div class="shadow">
                        <div class="text textCardFormat">
                            <h3>NEW ARRIVALS</h3>
                            <h4>FOR KIDS</h4>
                        </div>
                    </div>
                </div>
                <div class="cardFourth">
                    <div class="shadow">
                        <div class="text textCardFormat">
                            <h3>LUXIROUS &amp; TRENDY</h3>
                            <h4>ACCESORIES</h4>
                        </div>
                    </div>
                </div>
            </section>

            <section class="salesTitle container">
                <h5 class="text textSalesTitle">Fetured Items</h5>
                <p class="text textSales">
                    Shop for items based on what we featured in this week
                </p>
            </section>

            <Link to="/Catalog">
                <button class="container btnCentr text">
                    Browse All Product
                </button>
            </Link>
        </>
    );
}

export default Main;
