<template>
    <div class="banner">
        <div class="wrap banner__wrap">

            <!-- <div class="banner-img">
                <img src="../../assets/img/png/banners/Carpet.jpg" alt="">
            </div> -->

            <div class="banner-text">
                <div class="banner-text_title">
                    <p>Professional <b>residential & commercial</b> <br>carpet, rug and upholstery cleaning <br>services in Dublin,
                        Ireland</p>
                    <ul>
                        <li v-for="item in banner" :key="item.id">
                            <img src="../../assets/img/svg/radio.svg" alt="">
                            {{ item.text }}
                        </li>
                    </ul>
                </div>
            </div>
        </div>
        <!-- <div class="banner-img">
            <img src="../../assets/img/png/banners/MobileBannerCarpet.jpg" alt="">
        </div> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            banner: [
                {
                    id: 1,
                    text: 'Fully certified and insured'
                },
                {
                    id: 2,
                    text: 'Non-toxic, eco friendly solutions'
                },
                {
                    id: 3,
                    text: 'Advanced cleaning technology'
                },
                {
                    id: 4,
                    text: 'Quick drying time'
                },
                {
                    id: 5,
                    text: 'Available weekends and evenings'
                },
                {
                    id: 6,
                    text: 'FREE antiviral sanitation'
                },
                {
                    id: 7,
                    text: 'Removing common stains and odours'
                },
                {
                    id: 8,
                    text: '100% satisfaction guaranteed'
                },
            ]
        };
    }
}
</script>

<style lang="scss">
@media (max-width: 800px) {
    .banner-text_title {
        ul {
            display: none;
        }
        p {
            margin-bottom: 500px;
        }
    }
}
.banner {
    background-image: url('../../assets/img/png/banners/Carpet.png');
    background-size: cover;
    background-repeat: no-repeat;
    @media (max-width: 800px) {
        background-image: url('../../assets/img/png/banners/banners-mobile.jpg');
        background-position: left;
    }

    @media (max-width: 500px) {
        &__wrap {
            padding-bottom: 70px;
        }
    }
    &-text {
        &_title {
            padding: 40px 0;
            font-size: 18px;
            // margin-left: 10%;

            p {
                color: white;
                line-height: 150%;
                padding: 15px; 
                border-radius: 15px 0px 15px 0px;
                @media(max-width: 767px) {
                    background: #111B24; 
                }
            }

            b {
                color: white;
            }

            ul {
                margin-top: 30px;
                list-style-type: none;

                li {
                    margin-bottom: 20px;
                    display: flex;
                    align-items: center;
                    color: white;
                    font-size: 18px;

                    img {
                        margin-right: 10px;
                        // border-radius: 50%;
                    }
                }
            }
        }
    }

    &-download {
        max-width: 1920px;
        width: 100%;
        margin: 0 auto;

        &_block {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            align-items: center;
        }

        &-text {
            font-size: 32px;
            color: black;
        }
    }

    @media (max-width: 768px) {

        /* Стили для мобильных устройств (ширина экрана до 768 пикселей) */
        &-text {
            &_title {
                padding: 20px 0;
                font-size: 14px;
                margin-left: 0;
                p {
                    font-size: 18px;
                }
            }

            &-download {
                &_block {
                    grid-template-columns: 1fr;
                    text-align: center;
                }

                &-text {
                    font-size: 24px;
                }
            }
        }
    }
}
</style>
