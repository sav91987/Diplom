import { useState } from "react";
import "./FilterSort.css";
import Card from "../Card/Card";

function FilterSort({ arrOfProducts }) {
    window.scrollTo(0, 0);
    const [sortOrder, setSortOrder] = useState(arrOfProducts);
    const [selectedSizes, setSelectedSizes] = useState([]);
    const [arrSelectedCategory, setArrSelectedCategory] = useState([]);
    const [arrSelectedSizes, setArrSelectedSizes] = useState([]);

    const getIntersectionArr = (arr1, arr2, param) => {
        if (arr2.length === 0) {
            setSortOrder(arr1);
        } else {
            let filteredArr = [];
            switch (param) {
                case "price":
                    arr2.forEach((element) => {
                        console.log(element);
                        switch (element) {
                            case "less1000":
                                console.log(arr1);

                                arr1.forEach((item) => {
                                    if (item.saleCardPrice <= 1000) {
                                        filteredArr.push(item);
                                    }
                                    console.log(filteredArr);
                                });
                                break;
                            case "1000-4000":
                                arr1.forEach((item) => {
                                    if (
                                        item.saleCardPrice > 1000 &&
                                        item.saleCardPrice < 4000
                                    ) {
                                        filteredArr.push(item);
                                    }
                                });
                                break;
                            case "more4000":
                                arr1.forEach((item) => {
                                    if (item.saleCardPrice > 4000) {
                                        filteredArr.push(item);
                                    }
                                });
                                break;
                            default:
                                break;
                        }
                    });

                    setArrSelectedSizes(filteredArr);
                    break;
                case "category":
                    filteredArr = arr1.filter((item) =>
                        arr2.includes(item.category)
                    );
                    setArrSelectedCategory(filteredArr);
                    break;

                default:
                    break;
            }

            setSortOrder(filteredArr);
        }
    };

    const handleClick = (e) => {
        /* const size = e.target.parentNode.innerText; */
        const price = e.target.id;
        console.log(e.target.id);
        /* let arrOfSizes; */
        let arrOfPrices;

        if (e.target.checked) {
            /* arrOfSizes = [...selectedSizes, size]; */
            arrOfPrices = [...selectedSizes, price];
        } else {
            /*  arrOfSizes = selectedSizes.filter(
                (selectedSize) => selectedSize !== size
            ); */
            arrOfPrices = selectedSizes.filter(
                (selectedSize) => selectedSize !== price
            );
        }
        console.log(arrSelectedCategory);
        console.log(arrOfPrices);

        /* setSelectedSizes(arrOfSizes); */
        setSelectedSizes(arrOfPrices);
        if (arrSelectedCategory.length !== 0) {
            /* getIntersectionArr(arrSelectedCategory, arrOfSizes, "size"); */
            getIntersectionArr(arrSelectedCategory, arrOfPrices, "price");
        } else {
            /* getIntersectionArr(arrOfProducts, arrOfSizes, "size"); */
            getIntersectionArr(arrOfProducts, arrOfPrices, "price");
        }
    };

    const handleClickCategory = (e) => {
        const categoryDetailsEl = document.getElementById("categoryDetails");
        const sizeDetailsEl = document.getElementById("sizeDetails");

        const mainSpanEl = document.querySelector(".filter__header");
        const priceEls = document.querySelectorAll(".sort__input");
        const arrOfCategory = [];

        if (e.target.innerText === "ВСЕ ТОВАРЫ") {
            mainSpanEl.innerText = "КАТЕГОРИИ";
            setSortOrder(arrOfProducts);
        } else {
            arrOfCategory.push(e.target.innerText);
            getIntersectionArr(arrOfProducts, arrOfCategory, "category");
            mainSpanEl.innerText = e.target.innerText;
        }
        categoryDetailsEl.removeAttribute("open");
        sizeDetailsEl.removeAttribute("open");
        priceEls.forEach((element) => {
            element.checked = false;
        });
        setSelectedSizes([]);
    };

    return (
        <>
            <section className="top-head">
                <div className="top-head__wrapper container">
                    <h2 className="top-head__heading">КАТАЛОГ</h2>
                </div>
            </section>
            <section className="filter-sort container">
                <details id="categoryDetails" className="filter">
                    <summary className="filter__summary">
                        <span className="filter__header displayNoneForFhone">
                            КАТЕГОРИИ
                        </span>
                        <svg
                            width="15"
                            height="10"
                            viewBox="0 0 15 10"
                            fill="black"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                d="M0.833333 10H4.16667C4.625 10 5 9.625 5 9.16667C5 8.70833 4.625 8.33333 4.16667 8.33333H0.833333C0.375 8.33333 0 8.70833 0 9.16667C0 9.625 0.375 10 0.833333 10ZM0 0.833333C0 1.29167 0.375 1.66667 0.833333 1.66667H14.1667C14.625 1.66667 15 1.29167 15 0.833333C15 0.375 14.625 0 14.1667 0H0.833333C0.375 0 0 0.375 0 0.833333ZM0.833333 5.83333H9.16667C9.625 5.83333 10 5.45833 10 5C10 4.54167 9.625 4.16667 9.16667 4.16667H0.833333C0.375 4.16667 0 4.54167 0 5C0 5.45833 0.375 5.83333 0.833333 5.83333Z"
                                fill="black"
                            />
                        </svg>
                    </summary>
                    <div className="filter__box">
                        <details className="filter__item">
                            <summary
                                onClick={handleClickCategory}
                                className="filter__item-summary"
                            >
                                СИСТЕМНЫЕ БЛОКИ
                            </summary>
                        </details>
                        <details className="filter__item">
                            <summary
                                onClick={handleClickCategory}
                                className="filter__item-summary"
                            >
                                МОНИТОРЫ
                            </summary>
                        </details>
                        <details className="filter__item">
                            <summary
                                onClick={handleClickCategory}
                                className="filter__item-summary"
                            >
                                СЕРВЕРЫ
                            </summary>
                        </details>
                        <details className="filter__item">
                            <summary
                                onClick={handleClickCategory}
                                className="filter__item-summary"
                            >
                                ВСЕ ТОВАРЫ
                            </summary>
                        </details>
                    </div>
                </details>

                <div className="sort">
                    <details id="sizeDetails">
                        <summary className="sort__summary">
                            <span className="sort__header">ЦЕНА</span>
                            <svg
                                width="11"
                                height="5"
                                viewBox="0 0 11 5"
                                fill="none"
                                xmlns="http://www.w3.org/2000/svg"
                            >
                                <path
                                    d="M5.00214 5.00214C4.83521 5.00247 4.67343 4.94433 4.54488 4.83782L0.258102 1.2655C0.112196 1.14422 0.0204417 0.969958 0.00302325 0.781035C-0.0143952 0.592112 0.0439493 0.404007 0.165221 0.258101C0.286493 0.112196 0.460759 0.0204417 0.649682 0.00302327C0.838605 -0.0143952 1.02671 0.043949 1.17262 0.165221L5.00214 3.36602L8.83167 0.279536C8.90475 0.220188 8.98884 0.175869 9.0791 0.149125C9.16937 0.122382 9.26403 0.113741 9.35764 0.1237C9.45126 0.133659 9.54198 0.162021 9.6246 0.207156C9.70722 0.252292 9.7801 0.313311 9.83906 0.386705C9.90449 0.460167 9.95405 0.546351 9.98462 0.639855C10.0152 0.733359 10.0261 0.83217 10.0167 0.930097C10.0073 1.02802 9.97784 1.12296 9.93005 1.20895C9.88227 1.29494 9.81723 1.37013 9.73904 1.42982L5.45225 4.88068C5.32002 4.97036 5.16154 5.01312 5.00214 5.00214Z"
                                    fill="#6F6E6E"
                                />
                            </svg>
                        </summary>
                        <div className="sort__checkbox-box">
                            <label className="sort__label">
                                <input
                                    id="less1000"
                                    className="sort__input"
                                    onClick={handleClick}
                                    type="checkbox"
                                />
                                0 - 1000
                            </label>
                            <label className="sort__label">
                                <input
                                    id="1000-4000"
                                    className="sort__input"
                                    onClick={handleClick}
                                    type="checkbox"
                                />
                                1000 - 4000
                            </label>
                            <label className="sort__label">
                                <input
                                    id="more4000"
                                    className="sort__input"
                                    onClick={handleClick}
                                    type="checkbox"
                                />
                                4000 +
                            </label>
                        </div>
                    </details>
                </div>
            </section>
            <Card data={sortOrder} />
        </>
    );
}

export default FilterSort;
