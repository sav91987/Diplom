import "./Footer.css";

function Footer() {
    const handleClick = (e) => {
        const id = e.target.parentNode.getAttribute("id");
        console.log(id);
        switch (id) {
            case "1":
                window.open(
                    "https://www.avito.ru/user/8bc5ef37046e1e0484f603e96c063666/profile"
                );
                break;
            case "2":
                window.open("https://t.me/SotAndTG");
                break;
            case "3":
                window.open("https://www.telecontact.ru/");
                break;
            default:
                break;
        }
    };
    return (
        <footer className="footer">
            <div className="footer__wrapper container">
                <p className="footer__text">© 2024 Sotnikov All Rights Reserved.</p>
                <div className="footer__icons">
                    <button
                        id="1"
                        onClick={handleClick}
                        className="footer__icons-btn"
                    >
                        <img
                            src="../../img/iconAvito.svg"
                            alt="iconAvito"
                        ></img>
                    </button>
                    <button
                        id="2"
                        onClick={handleClick}
                        className="footer__icons-btn"
                    >
                        <img src="../../img/iconTG.svg" alt="iconTG"></img>
                    </button>
                    <button
                        id="3"
                        onClick={handleClick}
                        className="footer__icons-btn"
                    >
                        <img
                            src="../../img/iconInternet.svg"
                            alt="iconInternet"
                        ></img>
                    </button>
                </div>
            </div>
        </footer>
    );
}

export default Footer;
