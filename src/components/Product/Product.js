import "./Product.css";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import Card from "../Card/Card.js";
import { useEffect, useState } from "react";

function Product() { 
    const product = JSON.parse(localStorage.getItem("productPage"));
        window.scrollTo(0, 0);


    return (
        <>
            <Swiper
                spaceBetween={50}
                slidesPerView={2}
                onSlideChange={() => console.log("slide change")}
                onSwiper={(swiper) => console.log(swiper)}
            >
                <SwiperSlide>
                    <img src={"/" + product[0].imgUrl} alt="productPicture1" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"/" + product[0].imgUrl} alt="productPicture2" />
                </SwiperSlide>
                <SwiperSlide>
                    <img src={"/" + product[0].imgUrl} alt="productPicture3" />
                </SwiperSlide>
            </Swiper>

            <section class="producDiscription container">
                <h2 class="producDiscription__type">WOMEN COLLECTION</h2>
                <img src={"/img/Devider.png"} alt="Devider" />
                <h2 class="producDiscription__name">
                    {product[0].saleCardName}
                </h2>
                <p class="producDiscription__discription">
                    {product[0].saleCardDiscript}
                </p>
                <h2 class="producDiscription__price">
                    {product[0].saleCardPrice} Р{" "}
                </h2>
                <img
                    class="producDiscription__img"
                    src={"/img/Line.png"}
                    alt="Line"
                />
                <div class="producDiscription__parameters">
                    <select class="producDiscription__parameters_select">
                        <option>CHOOSE COLOR</option>
                        <option>Red</option>
                        <option>Green</option>
                        <option>Blue</option>
                        <option>White</option>
                    </select>
                    <select class="producDiscription__parameters_select">
                        <option>CHOOSE SIZE</option>
                        <option>40</option>
                        <option>42</option>
                        <option>44</option>
                        <option>46</option>
                    </select>
                    <select class="producDiscription__parameters_select">
                        <option>QUANTITY</option>
                        <option>1</option>
                        <option>2</option>
                        <option>3</option>
                    </select>
                </div>
                <button class="producDiscription__btnAddToCart">
                    <img src={"/img/btnBasketRed.svg"} alt="btnBasket" />
                    Add to Cart
                </button>
            </section>
            <script src="https://cdn.jsdelivr.net/npm/swiper@11/swiper-bundle.min.js"></script>
        </>
    );
}

export default Product;
