<template>
    <div class="subscribe">
        <div class="subscribe__wrap wrap">
            <!-- <div class="subscribe-text">
                <h2>Register to order</h2>
            </div>
            <button class="include_button"
                style="border-radius: 10px; padding-top: 10px; margin: 10px auto; border: 2px solid #00C2A7; margin-top: 10px;"
                id="btn-subscribe">Registration</button> -->
            <div class="subscribe-text">
                <h2>Cleanora: Where Clean Begins</h2>
            </div>
            <div class="mobile-app__downloads" style="margin-top: 10px; margin-bottom: 10px;">
                <div class="mobile-app__download" style=" margin-right: 5px;">
                    <img src="@/assets/img/PlayMarket.png" alt="" style="min-width: 40px; min-height: 25px;">
                </div>
                <div class="mobile-app__download" style="margin-right: 12px;">
                    <img src="@/assets/img/AppStore.png" alt="" style="min-width: 40px; min-height: 25px;">
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.mobile-app__download {
    max-width: 120px;
    width: 100%;
    img {
        width: 100%;
    }
}
.subscribe {

    background: url('../../assets/img/png/Expert-Carpet-Cleaning-Services.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 30% 30%;

    &__wrap {
        display: flex;
        justify-content: center;
        align-items: center;
        padding: 80px 0px;
        flex-direction: column;

        @media (max-width: 767px) {
            padding: 30px 0;
        }
    }

    &-text {
        color: white;
        border: 2px solid #00C2A7;
        background: #00C2A7;
        border-radius: 15px;
        padding: 15px;
        text-transform: uppercase;

        h2 {
            font-size: 32px;
            background: #00C2A7;
            color: white !important;
            padding: 7px;
            border-radius: 15px;
            @media (max-width: 767px) {
                font-size: 14px;
                white-space: pre;
                margin-bottom: 10px;
            }
        }

        @media (max-width: 767px) {
            margin-right: 0;
            padding: 2px;
            border: none;
            background: unset;

            h2 {
                color: #333;
            }
        }
    }

    &-input {
        max-width: 350px;
        width: 100%;

        input {
            width: 100%;
            padding: 16px 0px;
            padding-left: 10px;
            font-size: 20px;
        }
    }
}

button {

    max-width: 200px;
    border-radius: 0px 10px 10px 0px;
    border: 2px solid #00C2A7;
    height: 53.8px !important;
    margin-left: -4px;
    font-size: 20px;

    @media (max-width: 767px) {
        font-size: 14px;
        height: 40px !important;
        padding-top: 12px;
    }
}
</style>