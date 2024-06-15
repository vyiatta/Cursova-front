<template>
    <div class="how-works">
        <div class="how-works__wrap wrap" style="padding-top: 20px;">
            <!-- <div class="how-works__title">
                <b>How we are work</b>
            </div> -->
            <div class="how-works__box">
                <div class="how-works__why">
                    <p class="how-works__why-up">WHY WE ARE THE</p><br><br>
                    <span>#1</span> <br><br>
                    <p class="how-works__why-down"> CARPET CLEANING <br>
                        SERVICE IN DUBLIN?</p>
                </div>
                <div class="how-works__answer">
                    We use state of the art steam cleaning equipment. We use Prochem and Xtract, both leaders in carpet
                    cleaning
                    machines. Our chemicals are completely safe for people, pets and the environment, and are great for
                    fabrics. <br> <br>
                    We use hot steam extraction cleaning (recommended by carpet manufacturers) and dry composition
                    treatment. <br> <br>

                    However, the extraction is the last step, the most important step that most of our competitors miss, is
                    the
                    agitation of the solution, working it through the fibers of the carpet for the best result. For the
                    campaigning phase we use an United Kingdom machine worth over $4k, the best money to spend when you clean your
                    carpets in Dublin. In addition, our work is backed by a 100% customer satisfaction guarantee, otherwise
                    we'll
                    clean carpets or furniture in your home.
                </div>
            </div>
            <!-- <div class="how-works__items">
                <div class="how-works__items-item">
                    <div class="how-works__items-item-img">
                        <img src="../../assets/img/svg/HWAWorks/img-1.svg" alt="">
                    </div>
                    <div class="how-works__items-item-text">
                        <div class="how-works__items-item-text_title">
                            <h4>Appointment</h4>
                        </div>
                        <div class="how-works__items-item-text_desc">
                            <p>Make a booking for a date and time you prefer</p>
                        </div>
                    </div>
                </div>
                <div class="how-works__items-item" style="padding-right: 15px;">
                    <div class="how-works__items-item-img">
                        <img src="../../assets/img/svg/HWAWorks/img-2.svg" alt="">
                    </div>
                    <div class="how-works__items-item-text" style="padding-left: 15px;">
                        <div class="how-works__items-item-text_title">
                            <h4>We come</h4>
                        </div>
                        <div class="how-works__items-item-text_desc">
                            <p>A fully staffed carpet cleaning specialist will come to you</p>
                        </div>
                    </div>
                </div>
                <div class="how-works__items-item" style="padding-right: 15px;">
                    <div class="how-works__items-item-img">
                        <img src="../../assets/img/svg/HWAWorks/img-3.svg" alt="">
                    </div>
                    <div class="how-works__items-item-text" style="padding-left: 15px;">
                        <div class="how-works__items-item-text_title">
                            <h4>We co cleanliness</h4>
                        </div>
                        <div class="how-works__items-item-text_desc">
                            <p>It will apply the most suitable cleaning method</p>
                        </div>
                    </div>
                </div>
                <div class="how-works__items-item">
                    <div class="how-works__items-item-img">
                        <img src="../../assets/img/svg/HWAWorks/img-4.svg" alt="">
                    </div>
                    <div class="how-works__items-item-text">
                        <div class="how-works__items-item-text_title">
                            <h4>We are finishing work</h4>
                        </div>
                        <div class="how-works__items-item-text_desc">
                            <p>Enjoy</p>
                        </div>
                    </div>
                </div>
            </div> -->
        </div>
    </div>
</template>

<style lang="scss">
.how-works {
    &__box {
        display: flex;
        flex-direction: row;
        align-items: center;
        justify-content: space-evenly;

        @media (max-width: 1040px) {
            flex-direction: column;
        }
    }

    &__why {
        @media (max-width: 1040px) {
            margin-bottom: 40px;
        }

        &-up {
            margin-bottom: -138px;

            @media (max-width: 1080px) {
                margin-bottom: -80px;
            }
        }

        &-down {
            margin-top: -90px;

            @media (max-width: 1080px) {
                margin-top: -50px;
            }
        }

        color: #00C2A7;
        font-size: 38px;
        font-weight: 900;
        text-transform: uppercase;

        @media (max-width: 1080px) {
            font-size: 24px;
        }

        span {
            color: white;
            font-size: 200px;
            font-family: Impact, Haettenschweiler, 'Arial Narrow Bold', sans-serif;
            font-weight: 900;
            text-transform: uppercase;
            color: #00364b;

            @media (max-width: 1080px) {
                font-size: 100px;
            }
        }
    }

    &__answer {
        max-width: 650px;
        color: black;
        font-size: 18px;

        @media (max-width: 540px) {
            font-size: 14px;
        }
    }

    &__wrap {
        padding-top: 100px;
        padding-bottom: 50px;

        @media (max-width: 1200px) {
            padding-top: 60px;
        }

        @media (max-width: 768px) {
            // padding-top: 40px;
            padding-bottom: 20px;
        }
    }

    &__title {
        b {
            font-size: 40px;
        }

        margin-bottom: 120px;
        display: flex;
        justify-content: center;

        @media (max-width: 1000px) {
            b {
                font-size: 32px;
            }

            margin-bottom: 60px;
        }

        @media (max-width: 767px) {
            b {
                font-size: 30px;
            }

            margin-bottom: 30px;
        }
    }

    &__items {
        display: grid;
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));

        &-item {
            display: flex;
            align-items: center;
            justify-content: center;
            margin-bottom: 10px;

            &-img {
                margin-right: 10px;
                display: flex;
                align-items: center;

                img {
                    width: 100%;
                }
            }

            &-text {
                width: 170px;

                &_title {
                    font-size: 18px;

                    @media (max-width: 1000px) {
                        font-size: 14px;
                    }

                    @media (max-width: 520px) {
                        font-size: 10px;
                    }

                    text-transform: uppercase;
                }

                &_desc {
                    font-size: 14px;


                    @media (max-width: 1000px) {
                        font-size: 12px;
                    }

                    @media (max-width: 520px) {
                        font-size: 10px;
                    }
                }
            }
        }
    }
}</style>
  