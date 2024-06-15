<template>
    <div class="slider-reviews">
        <div class="slider-reviews__title" style="padding-top: 40px;">
            <b style="color: black; margin-bottom: 40px;">Our Gallery</b>
        </div>
        <!-- <div class="slider-reviews-comments wrap">
            <div class="slider-reviews-comments__overral">
                <div class="slider-reviews-comments__overral-title">
                    Overall rating
                </div>
                <div class="slider-reviews-comments__overral-desc">
                    <div class="slider-reviews-comments__overral-desc-text">
                        5.0
                    </div>
                    <div class="slider-reviews-comments__overral-desc-images">
                        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3796_102578)">
                                <path
                                    d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z"
                                    fill="none"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_3796_102578">
                                    <rect width="14" height="14" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3796_102578)">
                                <path
                                    d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z"
                                    fill="none"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_3796_102578">
                                    <rect width="14" height="14" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3796_102578)">
                                <path
                                    d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z"
                                    fill="none"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_3796_102578">
                                    <rect width="14" height="14" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3796_102578)">
                                <path
                                    d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z"
                                    fill="none"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_3796_102578">
                                    <rect width="14" height="14" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                        <svg viewBox="0 0 14 14" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g clip-path="url(#clip0_3796_102578)">
                                <path
                                    d="M6.82617 11.442L3.54617 13.166C3.46353 13.2093 3.3704 13.2287 3.27732 13.2219C3.18425 13.2151 3.09494 13.1824 3.0195 13.1274C2.94406 13.0725 2.8855 12.9975 2.85045 12.911C2.8154 12.8245 2.80526 12.7299 2.82117 12.638L3.44817 8.98798C3.46192 8.908 3.456 8.82587 3.43091 8.74869C3.40582 8.67151 3.36232 8.6016 3.30417 8.54499L0.650168 5.95899C0.583317 5.89388 0.53602 5.81136 0.51363 5.72076C0.491239 5.63017 0.494647 5.53512 0.52347 5.44637C0.552292 5.35761 0.605378 5.27869 0.676721 5.21854C0.748065 5.15838 0.834818 5.1194 0.927168 5.10599L4.59317 4.57299C4.67344 4.56146 4.7497 4.53059 4.81537 4.48303C4.88105 4.43547 4.93418 4.37265 4.97017 4.29999L6.61017 0.977985C6.65153 0.894518 6.7154 0.824266 6.79455 0.775151C6.87371 0.726037 6.96501 0.700012 7.05817 0.700012C7.15132 0.700012 7.24263 0.726037 7.32178 0.775151C7.40094 0.824266 7.4648 0.894518 7.50617 0.977985L9.14717 4.29899C9.18307 4.37152 9.23604 4.43426 9.30153 4.48182C9.36702 4.52937 9.44308 4.56031 9.52317 4.57199L13.1892 5.10499C13.2815 5.1184 13.3683 5.15738 13.4396 5.21754C13.511 5.27769 13.564 5.35661 13.5929 5.44537C13.6217 5.53412 13.6251 5.62917 13.6027 5.71976C13.5803 5.81036 13.533 5.89288 13.4662 5.95798L10.8132 8.54398C10.7552 8.60049 10.7118 8.67024 10.6867 8.74723C10.6616 8.82422 10.6556 8.90616 10.6692 8.98598L11.2962 12.637C11.3122 12.7291 11.3021 12.8238 11.267 12.9105C11.232 12.9971 11.1733 13.0722 11.0977 13.1272C11.0221 13.1822 10.9326 13.2149 10.8393 13.2215C10.7461 13.2282 10.6528 13.2086 10.5702 13.165L7.29117 11.441C7.21946 11.4033 7.13967 11.3836 7.05867 11.3836C6.97767 11.3836 6.89788 11.4033 6.82617 11.441V11.442Z"
                                    fill="none"></path>
                            </g>
                            <defs>
                                <clipPath id="clip0_3796_102578">
                                    <rect width="14" height="14" fill="white"></rect>
                                </clipPath>
                            </defs>
                        </svg>
                    </div>
                    <span class="slider-reviews-comments__overral-desc-text">
                        10 reviews
                    </span>
                </div>
            </div>
            <div class="slider-reviews-comments__write">
                <button class="include_button" style="border: 2px solid #00C2A7">Write a review</button>
            </div>
        </div> -->
        <!-- <div class="slider-reviews-comments-items wrap">
            <div class="slider-reviews-comments-items-item" v-for="item in reviews" :key="reviews.id">
                <div class="slider-reviews-comments-items-item__img">
                    <img src="/Face.png" alt="">
                </div>
                <div class="slider-reviews-comments-items-item__name">
                    {{ item.name }}
                </div>
                <div class="slider-reviews-comments-items-item__date">
                    {{ item.date }}
                </div>
                <div class="slider-reviews-comments-items-item__desc">
                    {{ item.desc }}
                </div>
                <div class="slider-reviews-comments-items-item__social" v-if="item.google"
                    style="max-width: 100px; width: 100%">
                    <img src="../../assets/img/png/main/google.png" alt="" style="width: 100%;">
                </div>
            </div>
        </div> -->
        <div class="slider-reviews__wrap wrap">
            <swiper :modules="modules" :slides-per-view=1 :space-between="50" :pagination="{ clickable: true }"
                :arrow="{ none }" :breakpoints="{
                    '1000': {
                        slidesPerView: 4,
                        spaceBetween: 20,
                    },
                }" @swiper="onSwiper" @slideChange="onSlideChange">
                <!-- Slider 1 -->
                <!-- <swiper-slide>
                    <div class="slider-reviews-box">
                        <div class="slider-reviews-box-img">
                            <img src="/img1.jpg" alt="">
                        </div>
                    </div>
                </swiper-slide> -->
                <!-- <swiper-slide>
                    <div class="slider-reviews-box">
                        <div class="slider-reviews-box-img" style="padding-bottom: 10px; padding-top: 15px; height: 440px;">
                            <img src="/img-2.jpg" alt="">
                        </div>
                    </div>
                </swiper-slide> -->
                <swiper-slide>
                    <div class="slider-reviews-box">
                        <div class="slider-reviews-box-img" style="padding-bottom: 20px;">
                            <img src="/img-3.jpg" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slider-reviews-box">
                        <div class="slider-reviews-box-img" style="padding-bottom: 20px;">
                            <img src="/img-4.jpg" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slider-reviews-box">
                        <div class="slider-reviews-box-img" style="padding-bottom: 20px;">
                            <img src="/img-5.jpg" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slider-reviews-box">
                        <div class="slider-reviews-box-img" style="padding-bottom: 20px;">
                            <img src="/img-6.jpg" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slider-reviews-box">
                        <div class="slider-reviews-box-img" style="padding-bottom: 20px;">
                            <img src="/img-7.jpg" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slider-reviews-box">
                        <div class="slider-reviews-box-img" style="padding-bottom: 20px;">
                            <img src="/img-8.jpg" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slider-reviews-box">
                        <div class="slider-reviews-box-img" style="padding-bottom: 20px;">
                            <img src="/img-9.jpg" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slider-reviews-box">
                        <div class="slider-reviews-box-img" style="padding-bottom: 20px;">
                            <img src="/img-10.jpg" alt="">
                        </div>
                    </div>
                </swiper-slide>
                <swiper-slide>
                    <div class="slider-reviews-box">
                        <div class="slider-reviews-box-img" style="padding-bottom: 20px;">
                            <img src="/img-11.jpg" alt="">
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

export default {
    data() {
        return {
            reviews: [
                {
                    "id": 1,
                    "name": "Seán O'Brien",
                    "date": "10 days ago",
                    "desc": "Cleanora worked wonders on my carpets and rugs. I'm extremely satisfied!",
                    "google": true
                },
                // {
                //     "id": 2,
                //     "name": "Aoife Murphy",
                //     "date": "12 days ago",
                //     "desc": "Cleanora did an excellent job on my upholstery. My furniture looks brand new.",
                //     "google": true
                // },

                // {
                //     "id": 3,
                //     "name": "Liam Gallagher",
                //     "date": "8 days ago",
                //     "desc": "Impressed with Cleanora's curtain and hallway cleaning. They're now spotless!",
                //     "google": true
                // },

                // {
                //     "id": 4,
                //     "name": "Ciara Byrne",
                //     "date": "14 days ago",
                //     "desc": "Cleanora transformed my leather furniture. It's shining like never before!",
                //     "google": true
                // },

                // {
                //     "id": 5,
                //     "name": "Oisín Kelly",
                //     "date": "11 days ago",
                //     "desc": "Cleanora made my mattresses and stairs look brand new. I'm over the moon!",
                //     "google": true
                // },

                // {
                //     "id": 6,
                //     "name": "Niamh Murphy",
                //     "date": "9 days ago",
                //     "desc": "Cleanora did an outstanding job on my rugs and upholstery. Highly recommended!",
                //     "google": true
                // },

                // {
                //     "id": 7,
                //     "name": "Cillian Doyle",
                //     "date": "13 days ago",
                //     "desc": "Cleanora's curtain and hallway cleaning is top-notch. Very impressed!",
                //     "google": true
                // },

                // {
                //     "id": 8,
                //     "name": "Aoibhinn Ryan",
                //     "date": "7 days ago",
                //     "desc": "Cleanora's carpet and leather furniture cleaning is exceptional. 5 stars!",
                //     "google": true
                // }
            ]
        }
    },
    components: {
        Swiper,
        SwiperSlide,
    },
    setup() {
        const onSwiper = (swiper) => {
            console.log(swiper);
        };
        const onSlideChange = () => {
            console.log('slide change');
        };
        return {
            onSwiper,
            onSlideChange,
            modules: [Navigation, Pagination, Scrollbar, A11y],
        };
    },
};
</script>
<style lang="scss">
.slider-reviews {
}

.slider-reviews-comments__overral-title {
    font-size: 24px;

    @media (max-width: 767px) {
        text-align: center;
    }
}

.slider-reviews-comments-items {
    padding-top: 40px;

    &-item {
        border-radius: 20px;
        color: black;
        background: white;
        box-shadow: #333;
        padding: 15px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;

        &__name {
            color: black;
            font-weight: 900;
            font-size: 24px;
            padding-top: 40px;
            margin-bottom: 40px;
        }

        &__date {
            margin-bottom: 10px;
            color: black;
        }

        &__desc {
            text-align: center;
        }
    }

    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
    grid-gap: clamp(1rem, 3vw, 0rem);
}

.slider-reviews-comments {
    padding-top: 40px;
    display: flex;
    justify-content: space-between;

    @media (max-width: 767px) {
        flex-direction: column;
        justify-content: center;
        align-items: center;
    }
}

.slider-reviews-comments__overral-desc {
    display: flex;
    align-items: center;
    margin: 10px 0px;

    &-text {
        margin-right: 10px;
    }

    span {
        overflow: hidden;
        font-weight: 400;
        line-height: 1.8;
        align-self: flex-end;
        margin-left: 10px;
        font-size: 14px;
        color: #333;
    }
}

.slider-reviews-comments__overral-desc-images {
    svg {
        width: 20px;
    }

    path {
        fill: rgb(252, 191, 2) !important;
    }
}

.swiper-wrapper {
    align-items: center;
    padding-bottom: 50px;
}

.swiper-pagination {
    position: absolute;
    top: 15px;
    height: 50px;

    .swiper-pagination-bullet {
        background: linear-gradient(90deg, #007ADF 0%, #00ECBC 100%);
        transition: 0.6s
    }

    .swiper-pagination-bullet-active {
        width: 44px;
        border-radius: 7.333px;
        background: linear-gradient(90deg, #007ADF 0%, #00ECBC 100%);
    }
}

.slider-reviews {
    &__title {
        b {
            font-size: 40px;
            margin-top: 80px;
            display: flex;
            justify-content: center;
            color: white;
        }

        span {
            margin-top: 20px;
            color: white;
            font-size: 20px;
            display: flex;
            justify-content: center;
        }

        @media (max-width: 1000px) {
            b {
                font-size: 30px;
                margin: 60px auto;
            }

            span {
                font-size: 18px;
            }
        }

        span {
            font-size: 16px;
            text-align: center;
        }
    }

    &__wrap {
        // width: 90%;
        padding-bottom: 50px;
    }

    &-box {
        display: flex;
        align-items: center;
        justify-content: center;

        &-text {
            margin: 25px;
            background: #264F68;
            max-width: 570px;
            width: 100%;
            border-radius: 25px;

            @media (max-width: 767px) {
                margin: 0;
            }

            &__title {
                display: flex;
                justify-content: center;
                margin: 40px 0;
                font-size: 32px;
                color: white;


                @media (max-width: 767px) {
                    font-size: 24px;
                    margin: 10px 20px;
                    margin-top: 40px;

                }

                @media (max-width: 500px) {
                    font-size: 16px;
                    margin: 15px 20px;

                }
            }

            &__desc {
                margin: 20px 20px;
                max-width: 550px;
                font-size: 20px;
                text-align: center;
                color: white;


                @media (max-width: 767px) {
                    font-size: 16px;
                    margin: 10px 20px;
                }

                @media (max-width: 500px) {
                    font-size: 12px;
                    margin: 40px 20px;
                }
            }

            &__date {
                max-width: 170px;
                margin: 80px auto;
                color: white;


                @media (max-width: 500px) {
                    max-width: 135px;
                    font-size: 12px;
                    margin: 20px auto;
                }
            }
        }

        &-img {
            max-width: 470px;
            width: 100%;

            img {
                height: 100%;
                width: 100%;
            }
        }
    }
}

.slider-reviews-comments-items-item {
    -webkit-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    -moz-box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
    box-shadow: 10px 10px 5px 0px rgba(0, 0, 0, 0.75);
}
</style>