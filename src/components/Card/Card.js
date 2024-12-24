import { Link } from "react-router-dom";
import "./Card.css";

function Card({ data, numOfShownItems }) {
    const newData = [...data];
    newData.splice(0, newData.length - numOfShownItems);

    const getCartArr = (targetEl) => {
        const arr = newData.filter(
            (item) => targetEl.getAttribute("id") === item.id
        );

        if (!localStorage.getItem("cartProducts")) {
            localStorage.setItem("cartProducts", JSON.stringify(arr));
        } else {
            const cartArr = [
                ...JSON.parse(localStorage.getItem("cartProducts")),
                ...arr,
            ];
            cartArr.map((element) => (element.quantity = 1));
            const cartSet = [
                ...new Set(cartArr.map((item) => JSON.stringify(item))),
            ].map((item) => JSON.parse(item));
            localStorage.setItem("cartProducts", JSON.stringify(cartSet));
        }
        window.location.reload();
    };

    const addToCart = (e) => {
        if (e.target.tagName === "IMG") {
            getCartArr(e.target.parentNode);
        } else {
            getCartArr(e.target);
        }
        alert("Добавлено в корзину!");
    };

    const handleCardClick = (e) => {
        const productArr = newData.filter(
            (item) => +/\d+/.exec(e.target.getAttribute("id")) == item.id
        );
        if (!localStorage.getItem("productPage")) {
            localStorage.setItem("productPage", JSON.stringify(productArr));
        } else {
            localStorage.removeItem("productPage");
            localStorage.setItem("productPage", JSON.stringify(productArr));
        }
    };
    return (
        <>
            <section className="salesCards container">
                {newData.map((element) => (
                    <div key={element.id} className="salesCard">
                        <div className="salesCard__image">
                            <img
                                className="salesCard__img"
                                src={"/" + element.imgUrl}
                                alt={element.imgAlt}
                            />
                            <Link to={"/Catalog/" + element.id}>
                                <div
                                    onClick={handleCardClick}
                                    id={"overlay" + element.id}
                                    className="overlay"
                                ></div>
                            </Link>
                            <button
                                onClick={addToCart}
                                id={element.id}
                                className="salesCard__btnAddToCart"
                            >
                                <img
                                    onClick={addToCart}
                                    src={"/img/btnBasket.svg"}
                                    alt="btnBasket"
                                />
                                В корзину
                            </button>
                        </div>
                        <p className="saleCardName text">
                            {element.saleCardName}
                        </p>
                        <p className="saleCardDiscript text">
                            {element.saleCardDiscript}
                        </p>
                        <p className="saleCardPrice text">
                            ₽ {element.saleCardPrice}
                        </p>
                    </div>
                ))}
            </section>
        </>
    );
}

export default Card;
