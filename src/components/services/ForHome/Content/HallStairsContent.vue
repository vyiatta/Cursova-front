<script setup >
// import OrderCalculator from '@/components/OrderCalculator/OrderCalculator.vue'
</script>
<template>
    <div class="service-content">
        <div class="service-article" v-for="item in items" :key="item.id">
            <div class="service-article-img">
                <img :src="item.src" alt="">
            </div>
            <div class="service-article-text">
                <div class="service-article-text__title">
                    <h3>{{ item.title }}</h3>
                </div>
                <div class="service-article-text__desc">
                    <p>{{ item.desc }} <br><br> {{ item.desc1 }}</p>
                </div>
            </div>
        </div>
        <TheSubscribe style="margin-bottom: 40px;" />
        <div class="service-prices__title">
            <b>Hall and Stairs</b>
        </div>
        <div class="service-prices wrap">
            <div class="service-prices-items" v-for="price in prices" :key="price.id">
                <div class="service-prices-items__item">
                    <div class="service-prices-items__item-img">
                        <img :src="price.src" alt="">
                    </div>
                    <div class="service-prices-items__item-title">
                        {{ price.title }}
                    </div>
                    <div class="service-prices-items__item-desc" style="color: white">
                        {{ price.desc }}
                    </div>
                    <div class="service-prices-items__item-price" style="color: white">
                        {{ price.price }}
                    </div>
                </div>
            </div>
        </div>
    </div>
    <TheReviews />
    <calc style="margin-bottom: 50px;" />
</template>
  
<script>
import calc from '@/components/OrderCalculator/OrderCalculator.vue'
import TheReviews from '@/components/main/TheReviews.vue'
import TheSubscribe from '@/components/main/TheSubscribe.vue'

export default {
    data() {
        return {
            items: [
                {
                    id: 3,
                    title: 'Stairs and Hallway Deep Cleaning',
                    desc: 'At Cleanora, we specialize in providing top-notch chemical cleaning services for stairs and hallways, ensuring a pristine and inviting atmosphere in your home. Our dedicated team of experts is well-equipped to handle various surfaces and materials, delivering a thorough cleaning experience.',
                    desc1: 'When it comes to stairs and hallway cleaning, we utilize advanced Cleanora cleaning solutions that effectively remove dirt, stains, and pollutants. Our professional technicians are skilled in using safe and efficient cleaning techniques, leaving your staircases and hallways refreshed and revitalized.',
                    src: new URL('../../../../assets/img/png/Services/HallStairs/img-2.jpg', import.meta.url)
                },
                {
                    id: 4,
                    title: 'Expert Chemical Cleaning for Stairs and Hallway',
                    desc: 'Cleanora offers expert chemical cleaning services designed specifically for stairs and hallways. Our team of experienced technicians understands the unique cleaning challenges these areas present and is dedicated to delivering exceptional results.',
                    desc1: 'Using our specialized Cleanora cleaning products and state-of-the-art equipment, we target tough stains, grime, and allergens, ensuring a deep and thorough clean. Whether you have carpeted stairs or hard flooring in your hallway, we restore the cleanliness and hygiene of these high-traffic zones.',
                    src: new URL('../../../../assets/img/png/Services/HallStairs/img-1.jpg', import.meta.url)
                }

            ],
            prices: [

                {
                    id: 2,
                    title: 'Stairs',
                    desc: 'Universaly (steps)',
                    price: '3€/1 step',
                    src: new URL('/HallAndStairs.svg', import.meta.url)
                },
                {
                    id: 3,
                    title: 'Hallway',
                    desc: 'Fixed Price',
                    price: '55€',
                    src: new URL('/hallway.svg', import.meta.url)
                },
            ]
        };
    }
}
</script>
  
<style scoped lang="scss">
.invite-button {
    display: none;
    position: fixed;
    bottom: 20px;
    left: 50%;
    transform: translateX(-50%);
    padding: 10px 20px;
    background-color: #00C2A7;
    color: #fff;
    border-radius: 5px;
    cursor: pointer;
    width: 230px;
    z-index: 98;

    p {
        font-size: 16px;
        white-space: pre;
    }

    @media (max-width: 967px) {
        display: block;
    }
}

.service-content {
    width: 95%;
    margin: 0 auto;

    .service-article {
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;
        margin-bottom: 50px;

        @media (max-width: 967px) {
            flex-direction: column !important;
        }

        &-text {
            &__title {
                font-size: 24px;

                @media (max-width: 767px) {
                    font-size: 14px;
                }
            }

            &__slogan {
                position: absolute;
                font-size: 14px;

                &.border-color-bottom::before {
                    content: "";
                    position: absolute;
                    bottom: 0;
                    display: block;
                    left: 0;
                    width: 76px;
                    height: 2px;
                    background-color: #00C2A7;
                }
            }

            &__desc {
                max-width: 550px;
                padding-top: 20px;
                font-size: 20px;

                @media (max-width: 767px) {
                    font-size: 12px;
                }
            }
        }

        &-img {
            max-width: 400px;
            width: 100%;
            margin: 20px;

            @media (max-width: 967px) {
                order: -1;
            }

            img {
                width: 100%;
                border-radius: 15px 0px 15px 0px;
            }
        }

        &:nth-child(2) {
            flex-direction: row-reverse;
        }
    }

    .service-prices {
        padding: 60px 10px;
        display: grid;
        grid-template-columns: repeat(4, 1fr);
        grid-row-gap: 60px;
        grid-gap: 15px;

        @media (max-width: 1200px) {
            grid-template-columns: repeat(2, 1fr);
        }

        &__title {
            padding-top: 100px;
            font-size: 40px;
            display: flex;
            justify-content: center;
            padding-right: 75px;

            @media (max-width: 767px) {
                padding-top: 0;
            }
        }

        &-items {
            &__item {

                &-title {
                    font-size: 24px;
                    color: #00C2A7;

                    @media (max-width: 767px) {
                        font-size: 15px;
                    }
                }

                &-img {
                    margin-bottom: 20px;
                    max-width: 112.5px;
                    width: 100%;

                    img {
                        width: 100%;
                    }

                    @media (max-width: 767px) {
                        max-width: 50px;
                    }
                }

                &-desc {
                    padding: 5px;
                    margin: 20px auto;

                    @media (max-width: 767px) {
                        font-size: 12px;
                        margin: 5px auto;
                    }
                }
            }
        }
    }
}
</style>
