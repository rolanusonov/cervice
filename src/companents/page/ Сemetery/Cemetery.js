import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
 import img1 from "../../imgCemetry/IMG_20230425_154206.jpg";
import img2 from "../../imgCemetry/IMG_20230425_153958.jpg";
import img3 from "../../imgCemetry/IMG_20230425_154003.jpg";
import img4 from "../../imgCemetry/IMG_20230425_154016.jpg";
import img5 from "../../imgCemetry/IMG_20230425_154023.jpg";
import img6 from "../../imgCemetry/IMG_20230425_154026.jpg";
import img7 from "../../imgCemetry/IMG_20230425_154112.jpg";
import img8 from "../../imgCemetry/IMG_20230425_154118.jpg";

const Cemetery = () => {
    return (
        <div id="cemetery">
             <div className="container">
                 <div className="cemetery">
                     <h1 className="cemeteryTitle">За кладбищей тоже мы чистим снег и похороним </h1>
                     <div className="cemeteryBlock">
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


                         </Swiper>
                     </div>
                 </div>
             </div>
        </div>
    );
};

export default Cemetery;