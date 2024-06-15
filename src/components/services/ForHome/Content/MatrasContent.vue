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
            <b>Mattresses</b>
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
                    id: 1,
                    title: 'Cleanora Mattresses Cleaning',
                    desc: 'Cleanora specializes in mattresses cleaning, ensuring the thorough removal of stains, dust, and allergens, while maintaining the integrity of your mattresses. Our expert technicians possess the expertise to handle various types of mattresses and deliver exceptional cleaning results.',
                    desc1: 'When it comes to mattresses cleaning, we utilize specialized Cleanora products, advanced equipment, and proven methods to ensure deep cleaning and sanitation. From mattress surface cleaning to thorough removal of debris, we provide a hygienic sleeping environment for you and your family.',
                    src: new URL('../../../../assets/img/png/Services/Matras/img-1.jpg', import.meta.url)
                },
                {
                    id: 2,
                    title: 'Professional Mattresses Cleaning Service',
                    desc: 'Cleanora offers professional mattresses cleaning service that goes beyond surface cleaning. Our skilled technicians are experienced in handling different mattress materials and effectively removing deep-seated dirt, stains, and odors.',
                    desc1: 'With our specialized Cleanora products and state-of-the-art equipment, we ensure a thorough and hygienic cleaning process. From steam cleaning to deodorizing, we revitalize your mattresses, promoting better sleep and a healthier living environment.',
                    src: new URL('../../../../assets/img/png/Services/Matras/img-2.jpg', import.meta.url)
                },
            ],
            prices: [
                {
                    id: 1,
                    title: 'Mattress for children',
                    desc: '60x120 cm',
                    price: '55€',
                    src: new URL('../../../../assets/img/png/Services/Matras/icons/img-1.svg', import.meta.url)
                },
                {
                    id: 2,
                    title: 'Single mattress',
                    desc: '90x190 cm',
                    price: '65€',
                    src: new URL('../../../../assets/img/png/Services/Matras/icons/img-2.svg', import.meta.url)
                },
                {
                    id: 3,
                    title: 'Double mattress',
                    desc: '135x190 cm',
                    price: '75€',
                    src: new URL('../../../../assets/img/png/Services/Matras/icons/img-3.svg', import.meta.url)
                },
                {
                    id: 4,
                    title: 'King mattress',
                    desc: '150x200 cm',
                    price: '90€',
                    src: new URL('../../../../assets/img/png/Services/Matras/icons/img-4.svg', import.meta.url)
                },
                {
                    id: 5,
                    title: 'Deodorization',
                    desc: 'Additional',
                    price: 'Free',
                    src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-14.svg', import.meta.url)
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
