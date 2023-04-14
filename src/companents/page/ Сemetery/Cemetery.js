import React from 'react';
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "./styles.css";
import { Navigation, Pagination, Mousewheel, Keyboard } from "swiper";
import img9 from "../../imgHome/IMG_20230413_110801.jpg";
import img1 from "../../imgHome/IMG_20230413_105839.jpg";
import img2 from "../../imgHome/IMG_20230413_105736.jpg";
import img3 from "../../imgHome/IMG_20230413_105851.jpg";
import img4 from "../../imgHome/IMG_20230413_105923.jpg";
import img5 from "../../imgHome/IMG_20230413_105959.jpg";
import img6 from "../../imgHome/IMG_20230413_110113.jpg";
import img7 from "../../imgHome/IMG_20230413_110521.jpg";
import img8 from "../../imgHome/IMG_20230413_110552.jpg";

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
                         > <SwiperSlide><img src={img9} alt=""/></SwiperSlide>
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