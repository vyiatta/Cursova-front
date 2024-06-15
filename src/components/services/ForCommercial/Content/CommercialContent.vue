<script setup>
import calc from '@/components/OrderCalculator/OrderCalculator.vue'
import TheReviews from '@/components/main/TheReviews.vue'
</script>
<template>
    <div class="service-content">
        <div style="position: relative;">
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
        </div>
        <TheInvite />
        <TheSubscribe style="margin-bottom: 40px;" />
        <div class="service-prices__title">
            <b>For Commercial</b>
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
import TheSubscribe from '@/components/main/TheSubscribe.vue'
import TheInvite from '@/components/main/TheInvite.vue'
export default {
    data() {
        return {
            items: [
                {
                    id: 1,
                    title: 'clean and hygienic commercial setting',
                    desc: 'not only creates a good impression for potential commercial interests or clients but also promotes a productive environment for employees. At the start of every job our qualified carpet cleaning Dublin technicians will visit your commercial premises to assess problem areas and advise you on how we can best clean your soft furnishings. ',
                    desc1: '',
                    src: new URL('../../../../assets/img/png/Commercial/img-1.jpg', import.meta.url)
                },
                {
                    id: 2,
                    title: 'Guarantee',
                    desc: 'We offer a 100% money back guarantee with all our services for total peace of mind. If you would like to see how well your office carpets will come up call us and we will organise a site visit and carry out a demonstration for you with no obligation. We are confident you will like the results.',
                    desc1: '',
                    src: new URL('../../../../assets/img/png/Commercial/img-2.jpg', import.meta.url)
                },
            ],
            prices: [
                {
                    id: 1,
                    title: 'Office chair',
                    desc: '',
                    price: '10€',
                    src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-10.svg', import.meta.url)
                },
                {
                    id: 2,
                    title: 'Office armchair',
                    desc: '',
                    price: '10€',
                    src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-9.svg', import.meta.url)
                },
                {
                    id: 3,
                    title: 'Executive chair',
                    desc: '',
                    price: '10€',
                    src: new URL('../../../../assets/img/png/Commercial/icons/img-1.svg', import.meta.url)
                },
                {
                    id: 4,
                    title: 'Office carpet',
                    desc: '',
                    price: '10€',
                    src: new URL('../../../../assets/img/png/Commercial/icons/img-2.svg', import.meta.url)
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
