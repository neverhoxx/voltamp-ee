import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef, useState } from "react";

const videoRef = useRef<HTMLVideoElement>(null);

const [lightboxImg, setLightboxImg] = useState<string | null>(null);

<Container className="flex flex-wrap justify-between">
    <div className="w-full md:w-[40%] adaptive-tehtud-tööd">
        <h2 className="text-3xl font-black text-def">
            {t[`firstTööTitle`]}
        </h2>
        <p className="mt-2.5 font-semibold opacity-85">
            {t[`firstTööDescription`]}
        </p>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4 bg-white rounded-2xl shadow p-6 max-w-2xl mt-6">
            <div className="flex flex-col items-start">
                <span className="text-sm text-gray-500">{t[`päikesekatuseVõimsus`]}</span>
                <span className="text-2xl font-bold text-gray-800">12,3 kW</span>
            </div>

            <div className="flex flex-col items-start">
                <span className="text-sm text-gray-500">{t[`kogutoodang`]}</span>
                <span className="text-2xl font-bold text-gray-800">19,475 kWh</span>
            </div>

            <div className="col-span-1 md:col-span-2 border-t pt-4 grid grid-cols-2 gap-y-3">
                <div className="text-gray-600 text-sm">{t[`toode`]}</div>
                <Link href="" className="text-def text-sm font-semibold cursor-pointer">{t[`ehitis`]}</Link>

                <div className="text-gray-600 text-sm">{t[`riik`]}</div>
                <div className="text-gray-800 text-sm font-semibold">{t[`eesti`]}</div>

                <div className="text-gray-600 text-sm">{t[`partner`]}</div>
                <div className="text-gray-800 text-sm font-semibold">{t[`pole`]}</div>
            </div>
        </div>
    </div>

    <div className="w-full md:w-[50%] select-none">
        <Swiper
            modules={[Navigation, Pagination, Autoplay]}
            navigation
            pagination={{ clickable: true }}
            autoplay={{ delay: 10000 }}
            loop
            className="
                            w-full h-[400px] rounded-2xl shadow overflow-hidden
                            [--swiper-navigation-color:#00BFFF]         
                            [--swiper-navigation-size:28px]                 
                            [--swiper-pagination-color:#00BFFF]        
                            [--swiper-pagination-bullet-inactive-color:#9CA3AF] 
                            [--swiper-pagination-bullet-inactive-opacity:1]
                        "
        >
            <SwiperSlide>
                <video
                    ref={videoRef}
                    src="/videos/viljandimaaprojekt.mp4"
                    className="w-full h-full object-cover"
                    controls
                />

            </SwiperSlide>
            <SwiperSlide>
                <img src={test2.src} alt="Gallery 2" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(test2.src)} />
            </SwiperSlide>
            <SwiperSlide>
                <img src={test3.src} alt="Gallery 3" className="w-full h-full object-cover cursor-zoom-in" onClick={() => setLightboxImg(test3.src)} />
            </SwiperSlide>
        </Swiper>
    </div>
</Container>

{
    lightboxImg && (
        <div
            className="fixed inset-0 z-50 bg-black/80 flex items-center justify-center p-4"
            onClick={() => setLightboxImg(null)}
        >
            <img
                src={lightboxImg}
                alt="lightbox"
                className="max-h-[90vh] max-w-[90vw] rounded-lg shadow-lg cursor-zoom-out"
            />
        </div>
    )
}