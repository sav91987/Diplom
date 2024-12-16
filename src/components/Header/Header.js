import { useEffect, useState } from "react";
import "./Header.css";
import { Link } from "react-router-dom";

function Header() {
    const [numOfGoodsInCart, setNumOfGoodsInCart] = useState();
    const [flag, setFlag] = useState(true);

    const handleClick = () => {
        const menu = document.querySelector(".burgerMenu");
        menu.classList.toggle("hidden");
    };

    if (!localStorage.getItem("cartProducts")) {
        localStorage.setItem("cartProducts", JSON.stringify([]));
    }

    const getNumOfGoodsInCart = () => {
        if (numOfGoodsInCart !== 0) {
            setFlag(false);
            setNumOfGoodsInCart(
                JSON.parse(localStorage.getItem("cartProducts")).length
            );
        }
        else {
            setFlag(true);
        }
    };

    useEffect(() => getNumOfGoodsInCart());

    return (
        <header className="header">
            <div className="header__wrapper container">
                <div className="headerBtn">
                    <Link to="/">
                        <button className="button">
                            <img src={"/img/headerLogo.svg"} alt="headerLogo" />
                        </button>
                    </Link>
                </div>
                <div className="headerBtn">
                    

                    

                    <Link to="/Registration">
                        <button className="button buttonNone">
                            <img src={"/img/btnProfile.svg"} alt="btnProfile" />
                        </button>
                    </Link>
                    <Link to="/Cart">
                        <button
                            className={
                                !flag
                                    ? "button buttonCart buttonNone"
                                    : "button buttonCart buttonNone hiddenCart"
                            }
                        >
                            <p className="btnCounter">{numOfGoodsInCart}</p>
                            <img src={"/img/btnBasket.svg"} alt="btnBasket" />
                        </button>
                    </Link>
                </div>
            </div>
        </header>
    );
}

export default Header;
