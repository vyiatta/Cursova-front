<template>
    <div class="slider-companies">
        <div class="slider-companies__wrap wrap">
            <!-- <swiper 
                :modules="modules" 
                :slides-per-view="2"
                :pagination="true"
                :space-between="10"
                :breakpoints="{
                    '767': {
                        slidesPerView: '3',
                        spaceBetween: '50'
                    },
                    '500': {
                        slidesPerView: '2'
                    }
                }"
                @swiper="onSwiper"
                @slideChange="onSlideChange"
            >
                <swiper-slide v-for="discount in discounts" :key="discount.id">
                    <div class="slider-companies__box">
                        <div class="slider-companies__box-img">
                            <img :src="discount.src" alt="">
                        </div>
                    </div>
                </swiper-slide>
            </swiper> -->
        </div>
    </div>
    <div class="outpartnerts__bg" style="background: white; padding: 30px 0; margin-bottom: 50px;">
        <img src="/OurCompanies.jpg" alt="" style="
    padding: 15px; border-radius: 15px; display: flex; max-width: 800px; width: 100%; margin: 0 auto">
    </div>
</template>
  
<script>
import { Pagination, Scrollbar, A11y } from 'swiper/modules';

// Import Swiper Vue.js components
import { Swiper, SwiperSlide } from 'swiper/vue';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';
import 'swiper/css/scrollbar';

// Import Swiper styles
export default {
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
            modules: [Pagination, Scrollbar, A11y],
        };
    },
    data() {
        return {
            discounts: [
                {
                    id: 1,
                    src: new URL('../../assets/img/png/main/Companies/1.jpg', import.meta.url),
                },
                {
                    id: 2,
                    src: new URL('../../assets/img/png/main/Companies/2.jpg', import.meta.url),
                },
                {
                    id: 3,
                    src: new URL('../../assets/img/png/main/Companies/3.jpg', import.meta.url),
                },
                {
                    id: 4,
                    src: new URL('../../assets/img/png/main/Companies/4.jpg', import.meta.url),
                },
                {
                    id: 5,
                    src: new URL('../../assets/img/png/main/Companies/5.jpg', import.meta.url),
                },
            ],
        }
    }
};
</script>

<style lang="scss">
.swiper-pagination-bullet {
    background: white;
}

.slider-companies {
    height: auto;

    &__title {
        font-size: 40px;
        display: flex;
        justify-content: center;
        // margin: 80px 0;
        margin-bottom: 30px;
        text-align: center;

        @media (max-width: 1000px) {
            font-size: 32px;
            // margin: 80px 40px 0px 0px;
            margin-bottom: 25px;
        }

        @media (max-width: 768px) {
            font-size: 30px;
            margin-bottom: 20px;
            // margin: 80px 20px 0px 0px;
        }
    }

    &__box {
        &-img {
            max-width: 300px;
            width: 100%;
            margin: 20px auto;

            img {
                width: 100%;
            }
        }
    }
}</style>