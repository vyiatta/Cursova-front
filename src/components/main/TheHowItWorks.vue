<template>
    <div class="works">
        <div class="works__wrap wrap" style="padding-top: 50px; padding-bottom: 120px;">
            <div class="works-items__title title">
                Special offers
            </div>
            <div class="works-items">
                <div class="works-item img-1">
                    <div class="works-item__img">
                        <img src="../../assets/img/png/main/Works/works4.svg" alt="">
                    </div>
                    <div class="works-item__title">
                        GOLDEN TICKET
                    </div>
                    <div class="works-item__desc">
                        We give golden tickets to all clients. Book 4 orders get the 5th free. (5th order up to 100€)
                    </div>
                </div>
                <div class="works-item img-2">
                    <div class="works-item__img">
                        <img src="../../assets/img/png/main/Works/works2.svg" alt="">
                    </div>
                    <div class="works-item__title">
                        REFFER AND EARN
                    </div>
                    <div class="works-item__desc">
                        Get -10€ off each Friend you Reffer. You'll both receive the -10€ discount when referred person sign
                        up
                    </div>
                </div>
                <!-- <div class="works-item img-3">
                    <div class="works-item__img">
                        <img src="../../assets/img/png/main/Works/works3.svg" alt="">
                    </div>
                    <div class="works-item__title">
                        MEET GRANT OR SHAUN YOUR CARPET CLEAN EXPERT
                    </div>
                    <div class="works-item__desc">
                        Let your carpet cleaner in your property and show him where the areas to be cleaned are. Point out
                        any trouble areas, stains etc.
                    </div>
                </div> -->
                <div class="works-item img-4">
                    <div class="works-item__img">
                        <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                            <g id="SVGRepo_iconCarrier">
                                <path
                                    d="M18 3.91992H6C3.79086 3.91992 2 5.71078 2 7.91992V17.9199C2 20.1291 3.79086 21.9199 6 21.9199H18C20.2091 21.9199 22 20.1291 22 17.9199V7.91992C22 5.71078 20.2091 3.91992 18 3.91992Z"
                                    stroke="#00C2A7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path d="M7 17.9199L17 7.91992" stroke="#00C2A7" stroke-width="1.5" stroke-linecap="round"
                                    stroke-linejoin="round"></path>
                                <path
                                    d="M8 11.9199C9.10457 11.9199 10 11.0245 10 9.91992C10 8.81535 9.10457 7.91992 8 7.91992C6.89543 7.91992 6 8.81535 6 9.91992C6 11.0245 6.89543 11.9199 8 11.9199Z"
                                    stroke="#00C2A7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                                <path
                                    d="M16 17.9199C17.1046 17.9199 18 17.0245 18 15.9199C18 14.8154 17.1046 13.9199 16 13.9199C14.8954 13.9199 14 14.8154 14 15.9199C14 17.0245 14.8954 17.9199 16 17.9199Z"
                                    stroke="#00C2A7" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
                                </path>
                            </g>
                        </svg>
                    </div>
                    <div class="works-item__title">
                        DISCOUNT CARD
                    </div>
                    <div class="works-item__desc">
                        All customers 10% discount card
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {

}
</script>

<style lang="scss">
.works-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: clamp(1rem, 1vw, 10rem);
    justify-content: center;

    &__title {
        display: flex;
        justify-content: center;
        font-size: 32px;
        margin-top: 40px;
        margin-bottom: 60px;
        text-transform: uppercase;

        font-weight: 900;

        @media (max-width: 1040px) {
            font-size: 28px;
        }

        @media (max-width: 767px) {
            font-size: 24px;
        }
    }

    @media (max-width: 767px) {
        grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));

    }
}

.works-item {
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    padding: 40px;

    &__title {
        margin: 20px 0;
        font-weight: 900;
        color: black;

        @media (max-width: 767px) {
            margin: 10px 0px;
        }
    }

    &__desc {
        color: black;

    }

    &__img {
        max-width: 80px;
        width: 100%;

        img {
            width: 100%;
        }

        @media (max-width: 767px) {
            max-width: 60px;
        }
    }
}

.img {
    &-1 {
        -webkit-box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;
        -moz-box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;
        box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;

        @media (max-width: 767px) {
            -webkit-box-shadow: 3px 3px 3px 0px rgb(189, 188, 188) !important;
            -moz-box-shadow: 3px 3px 3px 0px rgb(189, 188, 188) !important;
            box-shadow: 3px 5px 3px 0px rgb(189, 188, 188) !important;
        }
    }

    &-2 {
        -webkit-box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;
        -moz-box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;
        box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;

        @media (max-width: 767px) {
            -webkit-box-shadow: 3px 3px 3px 0px rgb(189, 188, 188) !important;
            -moz-box-shadow: 3px 3px 3px 0px rgb(189, 188, 188) !important;
            box-shadow: 3px 5px 3px 0px rgb(189, 188, 188) !important;
        }
    }

    &-3 {
        -webkit-box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;
        -moz-box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;
        box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;

        @media (max-width: 767px) {
            -webkit-box-shadow: 3px 3px 3px 0px rgb(189, 188, 188) !important;
            -moz-box-shadow: 3px 3px 3px 0px rgb(189, 188, 188) !important;
            box-shadow: 3px 5px 3px 0px rgb(189, 188, 188) !important;
        }
    }

    &-4 {
        -webkit-box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;
        -moz-box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;
        box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;

        @media (max-width: 767px) {
            -webkit-box-shadow: 3px 3px 3px 0px rgb(189, 188, 188) !important;
            -moz-box-shadow: 3px 3px 3px 0px rgb(189, 188, 188) !important;
            box-shadow: 3px 5px 3px 0px rgb(189, 188, 188) !important;
        }
    }
}
</style>