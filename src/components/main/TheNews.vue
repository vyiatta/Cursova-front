<!-- <template>
    <div class="news">
        <div class="news-title">
            Latest News
        </div>
        <div class="news__wrap wrap">
            <div class="news-slider">
                <swiper :modules="modules" :slides-per-view="slidesPerView" :space-between="1" @swiper="onSwiper" @slideChange="onSlideChange"> <swiper-slide
                        v-for="news in newsItems" :key="news.id">
                        <div class="news-slider__box">
                            <div class="news-slider__box-content">
                                <div class="news-slider__box-text">
                                    <div class="news-slider__box-text__title">
                                        <h4>{{ news.title }}</h4>
                                    </div>
                                    <div class="news-slider__box-text__desc">
                                        <p>{{ news.desc }}</p>
                                    </div>
                                    <div class="news-slider__box__button">
                                        <a :href="news.link">
                                            Read More
                                        </a>
                                    </div>
                                </div>
                                <div class="news-slider__box-img">
                                    <img :src="news.src" alt="">
                                </div>
                            </div>
                        </div>
                    </swiper-slide>
                </swiper>
            </div>
        </div>
    </div>
</template>
<script>
import { Navigation, Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
    components: {
        Swiper,
        SwiperSlide,
    },
    computed: {
        slidesPerView() {
            // Set slidesPerView to 2 when screen width is 768px or below
            if (window.innerWidth <= 967) {
                // Set slidesPerView to 1 when screen width is 570px or below
                return window.innerWidth <= 570 ? 1 : 1;
            }
            return 2; // Default: 3 slides visible;
        },
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
    data() {
        return {
            newsItems: [
                {
                    id: 1,
                    title: 'Cleanora launches in Dublin',
                    desc: 'Cleanora is a cleaning service that has been on the market for more than 7 years, initially Cleanora was developed in Ukraine...',
                    link: 'http://cleanora.ie/news/4',
                    src: 'https://firebasestorage.googleapis.com/v0/b/cleanora-1d242.appspot.com/o/photo_2023-07-13_12-50-34.jpg?alt=media&token=f2ef5b97-e0e6-4c3c-be0f-8a15ed7d1d25',
                },
                {
                    id: 2,
                    title: 'Cleanora - Special offers',
                    desc: 'Thanks to our invaluable work experience, we decided to add special offers so that our customers can always enjoy the beauty and order in their premises!',
                    link: 'http://cleanora.ie/news/3',
                    src: 'https://firebasestorage.googleapis.com/v0/b/cleanora-1d242.appspot.com/o/photo_2023-07-13_00-01-08.jpg?alt=media&token=7a30b63f-8ac6-45ec-b181-b2c754d71c36',
                },
                {
                    id: 3,
                    title: 'Coming soon: Cleanora Mobile App',
                    desc: 'Cleanora presents a mobile application designed specifically for the simplicity and convenience of ordering company services...',
                    link: 'http://cleanora.ie/news/2',
                    src: 'https://firebasestorage.googleapis.com/v0/b/cleanora-1d242.appspot.com/o/photo_2023-07-12_23-47-14.jpg?alt=media&token=56c97b91-4861-4e9a-b0d5-ea180ed85851',
                },
                {
                    id: 4,
                    title: 'Cleanora Launches Website',
                    desc: 'Cleanora, having extensive experience in the market, decided to launch a website for the convenience of placing and receiving orders...',
                    link: 'http://cleanora.ie/news/1',
                    src: 'https://firebasestorage.googleapis.com/v0/b/cleanora-1d242.appspot.com/o/photo_2023-07-13_00-17-00%201.png?alt=media&token=18454d2d-db77-4a41-886b-821ac80410f6',
                },
            ],
        };
    },
};
</script>
<style lang="scss">
.news {
    &-title {
        font-size: 40px;
        display: flex;
        justify-content: center;
        margin: 80px 0;

        @media (max-width: 1000px) {
            font-size: 32;
            margin: 80px 40px 0px 0px;
        }

        @media (max-width: 768px) {
            font-size: 24px;
            margin: 80px 20px 40px 0px;
        }
    }

    &__wrap {
        width: 95%;
    }

    &-slider {
        &__box {
            border-radius: 25px;
            background: #264F68;
            margin-right: 20px;
            max-width: 650px;
            max-height: 275px;
            height: 275px;
            display: flex;
            justify-content: center;
            width: 100%;

            &-content {
                display: flex;
                justify-content: center;
                align-items: center;
                padding: 25px;
                @media (max-width: 767px) {
                    padding: 0px;
                } 
            }

            &-text {
                &__title {
                    h4 {
                        font-size: 24px;
                    }
                    @media (max-width: 767px) {
                        h4 {
                            font-size: 16px;
                        }
                    }
                }

                &__desc {
                    margin: 40px 0px;
                    font-size: 16px;
                    max-width: 70%;
                    @media (max-width: 767px) {
                        margin: 20px 0px;
                        font-size: 12px;
                    }
                }
            }

            &__button {
                a {
                    text-decoration: none;
                    color: #00C2A7;
                }
            }

            &-img {
                max-width: 150px;
                width: 100%;
                img {
                    width: 100%;
                    border-radius: 15px;
                }
            }

            @media (max-width: 967px) {
                flex-wrap: wrap-reverse;
                height: 430px;

                &-content {
                    flex-direction: column;
                }

                &-img {
                    max-width: 80px;
                    order: -1;
                }

                &-text {
                    text-align: center;
                    font-size: 18px;
                    max-width: 250px;
                    margin: 0 auto;
                    margin-bottom: 25px;
                    &__desc {
                        margin: 10px auto;

                    }
                    h4 {
                        font-size: 14px;
                        max-width: 250px;
                        margin: 0 auto;
                        margin-bottom: 25px;
                    }
                }
            }
        }
    }
}
.swiper-slide {
    display: flex !important;
    justify-content: center !important;
}
</style> -->