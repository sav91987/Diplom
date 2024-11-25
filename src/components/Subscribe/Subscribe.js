import "./Subscribe.css";

function Subscribe() {
    return (
        <section class="subscribe">
            <div class="subscribe__shadow">
                <div class="subscribe__wrapper container">
                    <div class="subscribe__leftSide">
                        <img src={"/img/photo.svg"} alt="photo.svg" />
                        <p class="subscribe__leftSide-text">
                            “Vestibulum quis porttitor dui! Quisque viverra nunc
                            mi,
                            <span class="subscribe__leftSide-italic">
                                a pulvinar purus condimentum“
                            </span>
                        </p>
                    </div>
                    <div class="subscribe__rightSide">
                        <h1 class="subscribe__rightSide-text">SUBSCRIBE</h1>
                        <h2 class="subscribe__rightSide-text">
                            FOR OUR NEWLETTER AND PROMOTION
                        </h2>
                        <div class="subscribe__form">
                            <input
                                class="subscribe__input"
                                type="email"
                                placeholder="Enter Your Email"
                            />
                            <button class="subscribe__btn subscribe__rightSide-text button">
                                Subscribe
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Subscribe;
