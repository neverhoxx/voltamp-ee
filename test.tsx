import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import { useRef, useState } from "react";

const videoRef = useRef<HTMLVideoElement>(null);

const [lightboxImg, setLightboxImg] = useState<string | null>(null);

