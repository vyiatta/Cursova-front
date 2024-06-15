<template>
    <div class="slider-discount">
        <div class="slider-discount__wrap wrap">
            <div class="slider-discount__title">
                <b>Special offers</b>
            </div>
            <swiper :modules="modules" :slides-per-view=1 :space-between="50" :navigation="true" :arrow="{ none }"
                :breakpoints="{
                    '1200': {
                        slidesPerView: 3,
                        spaceBetween: 20,
                    },
                }" @swiper="onSwiper" @slideChange="onSlideChange">
                <swiper-slide v-for="(discount, index) in discounts" :key="discount.id">
                    <div class="slider-discount__box">
                        <div class="slider-discount__box-img">
                            <img :src="discount.src" alt="">
                        </div>
                        <div class="slider-discount__box-text">
                            <div class="slider-discount__box-text__title">
                                <h4 v-if="index === 0">
                                    <span class="golden-text">Golden</span> <span class="ticket-text">Ticket</span>
                                </h4>
                                <h4 v-else>{{ discount.title }}</h4>
                            </div>
                            <div class="slider-discount__box-text__desc">
                                <p>{{ discount.desc }}</p>
                            </div>
                        </div>
                    </div>
                </swiper-slide>
            </swiper>
        </div>
    </div>
</template>
  
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';
import 'swiper/css';
import 'swiper/css/navigation';

import { Navigation } from 'swiper/modules';

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
            modules: [Navigation],
        };
    },
    data() {
        return {
            discounts: [
                {
                    id: 2,
                    title: 'Golden Ticket',
                    desc: "We give golden tickets to all clients. Book 4 orders get the 5th free. (5th order up to 100€)",
                    src: new URL('../../assets/img/png/main/Discounts/img-1.jpg', import.meta.url),
                },
                {
                    id: 1,
                    title: "Discount Card",
                    desc: 'All customers 10% discount card',
                    src: new URL('../../assets/img/png/main/Discounts/img-2.png', import.meta.url),
                },
                {
                    id: 3,
                    title: 'Reffer and Earn',
                    desc: "Get -10€ off each Friend you Reffer. You'll both receive the -10€ discount when referred person sign up",
                    src: new URL('../../assets/img/png/main/Discounts/img-3.png', import.meta.url),
                },
            ],
        };
    },
};
</script>
  
<style lang="scss">
.slider-discount {
    &__title {
        b {
            font-size: 40px;
        }

        display: flex;
        justify-content: center;
        // margin: 80px 0;
        margin-bottom: 60px;

        @media (max-width: 1000px) {
            b {
                font-size: 32px;
            }

            margin-bottom: 40px;
        }

        @media (max-width: 768px) {
            b {
                font-size: 30px;
            }
            margin-bottom: 20px;
        }
    }

    &__wrap {
        padding-top: 80px;
        @media (max-width: 767px) {
            padding-top: 40px;
        }
    }

    &__box {
        &-img {
            max-width: 300px;
            width: 100%;
            margin: 0 auto;
            max-height: 240px;

            img {
                width: 100%;
            }
        }

        &-text {
            &__title {
                padding: 40px 0;
                text-align: center;
                font-size: 24px;
                line-height: 27.6px;
            }

            &__desc {
                text-align: center;
                font-size: 18px;
                max-width: 290px;
                margin: 0 auto;
            }
        }
    }
}

.golden-text {
    color: gold;
}

.ticket-text {
    color: white;
}
</style>
  