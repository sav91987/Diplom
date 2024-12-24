import "./Adventages.css";

function Adventages() {
    return (
        <section className="advantages">
            <div className="advantages__wrapper container">
                <div className="advantages__card">
                    <img src={"/img/iconDelivery.svg"} alt="iconDelivery" />
                    <h2 className="advantages__title">Доставка</h2>
                    <p className="advantages__text">
                        Выполняем доставку любыми транспортными компаниями.
                        Тарифы на перевозки узнавайте у перевозчика.
                    </p>
                </div>
                <div className="advantages__card">
                    <img
                        src={"/img/iconSales&Disconts.svg"}
                        alt="Sales&Disconts"
                    />
                    <h2 className="advantages__title advantages__title-pad">
                        Отличные скидки
                    </h2>
                    <p className="advantages__text">
                        При заказе от 10 единиц товара предлагаем приятные
                        скидки.
                    </p>
                </div>
                <div className="advantages__card">
                    <img src={"/img/iconQuality.svg"} alt="iconQuality" />
                    <h2 className="advantages__title advantages__title-pad2">
                        Качество
                    </h2>
                    <p className="advantages__text">
                        Все товары проверяются перед отправкой. Проводится
                        диагностика основных узлов.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Adventages;
