import "./NewArrivals.css";

function NewArrivals() {
    return (
        <section class="top-head">
            <div class="top-head__wrapper container paddingForPhone">
                <h2 class="top-head__heading">NEW ARRIVALS</h2>
                <nav class="breadcrumb">
                    <a href="#" class="breadcrumbs__link">
                        HOME
                    </a>
                    <a href="#" class="breadcrumbs__link">
                        MEN
                    </a>
                    <a
                        href="#"
                        class="breadcrumbs__link breadcrumbs__link_site"
                    >
                        NEW ARRIVALS
                    </a>
                </nav>
            </div>
        </section>
    );
}

export default NewArrivals;
