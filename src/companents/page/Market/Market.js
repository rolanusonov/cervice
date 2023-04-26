import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import "./styles.css";

// import required modules
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import img1 from "../../imgMarket/IMG_20230413_105043.jpg"
import img2 from "../../imgMarket/IMG_20230413_104958.jpg"
import img3 from "../../imgMarket/IMG_20230413_105059.jpg"
import img4 from "../../imgMarket/IMG_20230413_105109.jpg"
import img5 from "../../imgMarket/IMG_20230413_105127.jpg"
import img6 from "../../imgMarket/IMG_20230413_105148.jpg"
import img7 from "../../imgMarket/IMG_20230413_105156.jpg"
import img8 from "../../imgMarket/IMG_20230413_105355.jpg"
import img9 from "../../imgMarket/IMG_20230413_105401.jpg"


const Market = () => {
    return (
        <div id="market">
            <div className="container">
                <div className="market">
                    <h1 className="marketTitle">Рынок тоже мы обслужываем чистим снег и охранаем.</h1>
                    <div className="marketBlock">
                        <Swiper
                            cssMode={true}
                            navigation={true}
                            pagination={true}
                            mousewheel={true}
                            keyboard={true}
                            modules={[Navigation, Pagination, Mousewheel, Keyboard]}
                            className="mySwiper"
                        >

                            <SwiperSlide><img src={img1} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={img2} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={img3} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={img4} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={img5} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={img6} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={img7} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={img8} alt=""/></SwiperSlide>
                            <SwiperSlide><img src={img9} alt=""/></SwiperSlide>

                        </Swiper>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Market;