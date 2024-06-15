<template>
    <div class="choose">
        <div class="choose__wrap wrap">
            <div class="choose-items__title title">
                <b>WHY CHOOSE OUR CLEANING SERVICES?</b>
            </div>
            <div class="choose-items">
                <div class="choose-item">
                    <div class="choose-item__img">
                        <img src="../../assets/img/png/main/Choose/Choose1.svg" alt="">
                    </div>
                    <div class="choose-item__title">
                        PROVEN PROFESSIONALISM
                    </div>
                    <div class="choose-item__desc">
                        Since our beginning in 2015, thousands of clients have trusted us with cleaning their carpets and
                        upholstery. Check out our reviews and see what our clients think.
                    </div>
                </div>
                <div class="choose-item">
                    <div class="choose-item__img">
                        <img src="../../assets/img/png/main/Choose/Choose2.svg" alt="">
                    </div>
                    <div class="choose-item__title">
                        COMPETITIVE PRICES AND DEALS
                    </div>
                    <div class="choose-item__desc">
                        Our prices are fixed and transparent for cleaning. See what you pay upfront. Take a look at our
                        Prices page for more info. You won't pay a penny more than our quote.
                    </div>
                </div>
                <div class="choose-item">
                    <div class="choose-item__img">
                        <img src="../../assets/img/png/main/Choose/Choose3.svg" alt="">
                    </div>
                    <div class="choose-item__title">
                        SHORT NOTICE AVAILABILITY
                    </div>
                    <div class="choose-item__desc">
                        We operate 5 days a week, including some evenings. We can usually accommodate clients at a time to
                        suit them. So don't worry if you got a tight schedule or need urgent cleaning assistance; we can
                        help.
                    </div>
                </div>
                <div class="choose-item">
                    <div class="choose-item__img">
                        <img src="../../assets/img/png/main/Choose/Choose4.svg" alt="">
                    </div>
                    <div class="choose-item__title">
                        TOP OF THE RANGE EQUIPMENT

                    </div>
                    <div class="choose-item__desc">
                        Our equipment is the top of the range Commercial Carpet Cleaner, equipment, solutions and training
                        ensure clients get the best results available when cleaning.
                    </div>
                </div>
                <div class="choose-item">
                    <div class="choose-item__img">
                        <img src="../../assets/img/png/main/Choose/Choose5.svg" alt="">
                    </div>
                    <div class="choose-item__title">
                        HASSLE FREE SERVICE

                    </div>
                    <div class="choose-item__desc">
                        We strive to make our customers' lives easier with great services and zero hassle. So when you book
                        with us for cleaning, you can expect the best of the town services at an affordable rate.


                    </div>
                </div>
                <div class="choose-item">
                    <div class="choose-item__img">
                        <img src="../../assets/img/png/main/Choose/Choose6.svg" alt="">
                    </div>
                    <div class="choose-item__title">
                        QUALIFIED AND EXPERIENCED
                    </div>
                    <div class="choose-item__desc">
                        All employees are fully NCCA qualified, trained and have been vetted, and they love what they do
                        when cleaning. Please take a look at the About Us page for more info.
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
.choose-items {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));
    grid-gap: clamp(1rem, 3vw, 10rem);

    &__title {
        display: flex;
        justify-content: center;
        font-size: 32px;
        margin-top: 40px;
        margin-bottom: 60px;

        @media (max-width: 1040px) {
            font-size: 28px;
        }

        @media (max-width: 767px) {
            font-size: 20px;
            text-align: center;
        }
    }

    @media (max-width: 440px) {
        grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
    }
}

.choose-item {
    display: flex;
    justify-content: center;
    align-items: center;
    flex-direction: column;
    text-align: center;
    @media (max-width: 767px) {
        margin-top: 20px;
    }

    &__title {
        margin-top: 20px;
        font-weight: 900;
    }

    &__desc {
        margin-top: 15px;
    }
}</style>