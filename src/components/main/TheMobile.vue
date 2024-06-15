<template>
    <div class="mobile-app">
        <div class="mobile-app__wrap wrap">
            <div class="mobile-app__text">
                <div class="mobile-app__text-title">
                    <h3><span>Download</span> Cleanora Mobile App</h3>
                </div>
                <div class="mobile-app__text-desc">
                    <p>Cleanora's mobile app has been launched to make it easier than ever to book a cleaning service. With
                        just two simple steps, you can have your home cleaned from top to bottom.
                        <br><br><b>Step 1: </b> Quick Registration
                        <br><br>
                        Create an account on Cleanora - it only takes 5 minutes. After that, you can instantly order a
                        professional dry cleaning service that will bring incredible freshness back to your home.
                        <br><br>
                        <b>Step 2: </b>Order a quality dry cleaner
                        <br><br>
                        Choose a convenient date, time and necessary services: dry cleaning of carpets, furniture,
                        mattresses, curtains, leather goods, as well as cleaning the hall and stairs. Complete the order
                        with special wishes.
                        <br><br>
                        <b>Ready!</b>
                        <br><br>
                        Your order for professional dry cleaning has been completed. Our experienced professionals will
                        arrive on time and leave your home in perfect cleanliness and comfort.
                    </p>
                </div>
                <div class="mobile-app__downloads">
                    <div class="mobile-app__download">
                        <img src="@/assets/img/png/main/MobileApp/DownloadAppStore.png" alt="" style="max-width: 130px">
                    </div>
                    <div class="mobile-app__download">
                        <img src="@/assets/img/png/main/MobileApp/DownloadPlayMarket.png" alt="">
                    </div>
                </div>
            </div>
            <div class="mobile-app__video">
                <img src="../../assets/img/png/main/Usage.png" alt="">
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
        return {
            benefits: [
                {
                    id: 1,
                    desc: "It's easy to use."
                },
                {
                    id: 2,
                    desc: "It's convenient."
                },
                {
                    id: 3,
                    desc: "It's affordable."
                },
                {
                    id: 4,
                    desc: "You can book a cleaning service at any time of day or night."
                },
                {
                    id: 5,
                    desc: "You can track your cleaning history."
                },
            ]
        }
    }
}
</script>
<style lang="scss">
.mobile-app__wrap {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    flex-direction: row;
    padding-top: 100px;

    @media (max-width: 967px) {
        flex-direction: column;
        padding-top: 40px;
    }
}

.mobile-app__video {
    display: flex;
    justify-content: center;
    align-items: center;
    padding-bottom: 40px;

    img {
        max-width: 410px;
        width: 100%;
        margin: 0 auto;
        padding-right: 60px;
    }

    @media (max-width: 967px) {
        order: -1;

        img {
            max-width: 320px;
            width: 100%;
            margin: 0 auto;
            padding-right: 0;
        }
    }
}

.mobile-app__downloads {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
}

.mobile-app__download {
    max-width: 150px;
    width: 100%;

    img {
        width: 100%;
    }
}

.mobile-app__text {
    &-title {
        font-size: 28px;
        display: flex;
        flex-direction: column;
        align-items: center;
        justify-content: center;
        text-align: center;

        h3 {
            margin-bottom: 20px;
        }

        span {
            color: #00C2A7;
            margin-right: 7px;
        }

        @media (max-width: 1000px) {
            // font-size: 24px;
            // margin: 80px 40px 0px 0px;
            margin-bottom: 30px;
            margin-top: 50px;
        }

        @media (max-width: 768px) {
            font-size: 24px;
            margin-top: 30px;
            margin-bottom: 0px;
        }

        @media (max-width: 500px) {
            font-size: 18px;
        }
    }

    &-desc {
        margin-top: 40px;
        max-width: 600px;
        width: 100%;
        margin: 0 auto;

        p {
            font-size: 14px;
            width: 100%;
            text-align: center;

            b {
                font-size: 20px;
                color: #00C2A7;
            }
        }

        @media (max-width: 968px) {
            max-width: 520px;
            width: 100%;
            margin: 0 auto;
        }

        @media (max-width: 500px) {
            p {
                font-size: 14px;

                b {
                    font-size: 16px;
                }
            }
        }
    }
}
</style>