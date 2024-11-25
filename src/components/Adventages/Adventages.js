import "./Adventages.css";

function Adventages() {
    return (
        <section class="advantages">
            <div class="advantages__wrapper container">
                <div class="advantages__card">
                    <img src={"/img/iconDelivery.svg"} alt="iconDelivery" />
                    <h2 class="advantages__title">Free Delivery</h2>
                    <p class="advantages__text">
                        Worldwide delivery on all. Authorit tively morph
                        next-generation innov tion with extensive models.
                    </p>
                </div>
                <div class="advantages__card">
                    <img
                        src={"/img/iconSales&Disconts.svg"}
                        alt="Sales&Disconts"
                    />
                    <h2 class="advantages__title advantages__title-pad">
                        Sales &amp; discounts
                    </h2>
                    <p class="advantages__text">
                        Worldwide delivery on all. Authorit tively morph
                        next-generation innov tion with extensive models.
                    </p>
                </div>
                <div class="advantages__card">
                    <img src={"/img/iconQuality.svg"} alt="iconQuality" />
                    <h2 class="advantages__title advantages__title-pad2">
                        Quality assurance
                    </h2>
                    <p class="advantages__text">
                        Worldwide delivery on all. Authorit tively morph
                        next-generation innov tion with extensive models.
                    </p>
                </div>
            </div>
        </section>
    );
}

export default Adventages;
