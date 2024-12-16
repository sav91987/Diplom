import { useEffect, useState } from "react";
import "./SelectedProduct.css";

function SelectedProduct() {
    const [totalCost, setTotalCost] = useState(0);
    const [noGoodsInCartText, setNoGoodsInCartText] =
        useState("hidden__emptyCart");
    const [flag, setFlag] = useState(false);

    const selectedProducts = JSON.parse(localStorage.getItem("cartProducts"));

    const handleChange = (e) => {
        const index = selectedProducts.findIndex(
            (product) => product.id === e.target.getAttribute("id")
        );
        selectedProducts[index].quantity = +e.target.value;
        localStorage.setItem("cartProducts", JSON.stringify(selectedProducts));
        getGrandTotal();
    };

    const clearCartClick = () => {
        localStorage.setItem("cartProducts", JSON.stringify([]));
        setNoGoodsInCartText("");

        setTimeout(() => {
            window.location.href = "/Catalog";
        }, 2000);
    };

    const continueShoppingClick = () => {
        window.location.href = "/Catalog";
    };

    const getGrandTotal = () => {
        let total = 0;
        selectedProducts.forEach((element) => {
            total += +element.saleCardPrice * element.quantity;
        });

        setTotalCost(total);
    };

    const getCartArr = (targetID) => {
        const arr = selectedProducts.filter((item) => targetID !== item.id);
        localStorage.removeItem("cartProducts");
        localStorage.setItem("cartProducts", JSON.stringify(arr));
        setFlag(true);
        if (selectedProducts.length - 1 === 0) {
            setNoGoodsInCartText("");

            setTimeout(() => {
                window.location.href = "/Catalog";
            }, 2000);
        } else {
            window.location.reload();
        }
    };

    const removeItemFromCart = (e) => {
        if (e.target.tagName === "svg") {
            getCartArr(e.target.parentNode.id);
        } else if (e.target.tagName === "path") {
            getCartArr(e.target.parentNode.parentNode.id);
        } else {
            getCartArr(e.target.id);
        }
    
    };

    const payment = (e) => {
        const country = document.getElementById("country");
        const city = document.getElementById("city");
        const street = document.getElementById("street");
        if (country.value === "" || city.value === "" || street.value === "") {
            alert("Заполните все поля адреса");
        } else {
            alert("Оплата прошла успешно!");
            clearCartClick();
            e.preventDefault();
        }
    };

    useEffect(() => getGrandTotal());

    return (
        <>
            <section className="top-head">
                <div className="top-head__wrapper container">
                    <h2 className="top-head__heading">КОРЗИНА</h2>
                </div>
            </section>

            <section className="selectedProduct-adress container">
                <div className="selectedProduct">
                    <div className="selectedProduct__container">
                        {selectedProducts.map((element) => (
                            <div
                                key={element.id}
                                className="selectedProduct__box"
                            >
                                <img
                                    className="selectedProduct__box-img"
                                    src={"/" + element.imgUrl}
                                    alt="SalePicture3"
                                />
                                <div className="selectedProduct__parametrs">
                                    <div className="selectedProduct__box-top">
                                        <h2 className="selectedProduct__box-top-header">
                                            {element.saleCardName}
                                        </h2>
                                        <button
                                            onClick={removeItemFromCart}
                                            id={element.id}
                                            className="selectedProduct__box-top-btn"
                                        >
                                            <svg
                                                width="18"
                                                height="18"
                                                viewBox="0 0 18 18"
                                                fill="none"
                                                xmlns="http://www.w3.org/2000/svg"
                                            >
                                                <path
                                                    onClick={removeItemFromCart}
                                                    d="M11.2453 9L17.5302 2.71516C17.8285 2.41741 17.9962 2.01336 17.9966 1.59191C17.997 1.17045 17.8299 0.76611 17.5322 0.467833C17.2344 0.169555 16.8304 0.00177586 16.4089 0.00140366C15.9875 0.00103146 15.5831 0.168097 15.2848 0.465848L9 6.75069L2.71516 0.465848C2.41688 0.167571 2.01233 0 1.5905 0C1.16868 0 0.764125 0.167571 0.465848 0.465848C0.167571 0.764125 0 1.16868 0 1.5905C0 2.01233 0.167571 2.41688 0.465848 2.71516L6.75069 9L0.465848 15.2848C0.167571 15.5831 0 15.9877 0 16.4095C0 16.8313 0.167571 17.2359 0.465848 17.5342C0.764125 17.8324 1.16868 18 1.5905 18C2.01233 18 2.41688 17.8324 2.71516 17.5342L9 11.2493L15.2848 17.5342C15.5831 17.8324 15.9877 18 16.4095 18C16.8313 18 17.2359 17.8324 17.5342 17.5342C17.8324 17.2359 18 16.8313 18 16.4095C18 15.9877 17.8324 15.5831 17.5342 15.2848L11.2453 9Z"
                                                    fill="#575757"
                                                />
                                            </svg>
                                        </button>
                                    </div>
                                    <div className="selectedProduct__param-box">
                                        <h2>
                                            Цена:
                                            <span className="selectedProduct__param-box-price">
                                                {" " + element.saleCardPrice} ₽
                                            </span>
                                        </h2>

                                        <div className="selectedProduct__param-box-quantity">
                                            <h2>Количество:</h2>
                                            <input
                                                placeholder={element.quantity}
                                                id={element.id}
                                                onChange={handleChange}
                                                className="selectedProduct__param-box-quantity-input"
                                                type="number"
                                            />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                        <h2
                            className={
                                noGoodsInCartText === "hidden__emptyCart"
                                    ? "selectedProduct__emptyCart hidden__emptyCart"
                                    : "selectedProduct__emptyCart"
                            }
                        >
                            В корзине нет товаров <br /> Вы будете
                            перенаправлены на страницу Каталога
                        </h2>
                    </div>

                    <div className="selectedProduct__btn">
                        <button
                            onClick={clearCartClick}
                            className="selectedProduct__btn-format"
                        >
                            ОЧИСТИТЬ КОРЗИНУ
                        </button>
                        <button
                            onClick={continueShoppingClick}
                            className="selectedProduct__btn-format"
                        >
                            ПРОДОЛЖИТЬ ПОКУПКИ
                        </button>
                    </div>
                </div>

                <div>
                    <form className="adress">
                        <div className="adress__box">
                            <h2>АДРЕС ДОСТАВКИ</h2>
                            <input
                                className="adress__input"
                                type="text"
                                placeholder="Страна"
                                id="country"
                            />
                            <input
                                className="adress__input"
                                type="text"
                                placeholder="Город"
                                id="city"
                            />
                            <input
                                className="adress__input"
                                type="text"
                                placeholder="Улица"
                                id="street"
                            />
                        </div>

                        <div className="adress__price-box">
                            <div className="adress__totalPrice-box">
                                <h2 className="adress__totalPrice-box-text">
                                    К ОПЛАТЕ:{" "}
                                    <span className="adress__totalPrice-box-price">
                                        {totalCost} ₽
                                    </span>
                                </h2>
                            </div>
                            <div className="adress__price-box-btn">
                                <button
                                    onClick={payment}
                                    type="submit"
                                    className="adress__price-box-btn-format"
                                >
                                    ОПЛАТИТЬ
                                </button>
                            </div>
                        </div>
                    </form>
                </div>
            </section>
        </>
    );
}

export default SelectedProduct;
