<template>
    <div class="subscribe">
        <div class="subscribe__wrap wrap">
            <!-- <div class="subscribe-text">
                <h2>Register to order</h2>
            </div>
            <button class="include_button"
                style="border-radius: 10px; padding-top: 10px; margin: 10px auto; border: 2px solid #00C2A7; margin-top: 10px;"
                id="btn-subscribe">Registration</button> -->
                <div class="present-text">
                    <a href="https://drive.google.com/file/d/1Sa74-T0K-IAMBPpLb0OVJvLW_egjU8vs/view?usp=drivesdk" class="include_button" style="background: #00C2A7;">
                        Company Presentation
                    </a>
                </div>
        </div>
    </div>
</template>

<script>
export default {
}
</script>

<style scoped lang="scss">
.present-text {
    padding-right: 900px;
    padding-top: 200px;
    a {
        text-decoration: none;
    }
    @media (max-width: 1340px) {
        padding-right: 750px;
    }
    @media (max-width: 1024px) {
        padding-right: 550px;
    }
    @media (max-width: 850px) {
        padding-right: 460px;
        padding-top: 120px;
    }
    @media (max-width: 700px) {
        padding-right: 350px;
        padding-top: 100px;
    }
    @media (max-width: 570px) {
        padding-right: 200px;
        padding-top: 110px;
    }
    @media (max-width: 440px) {
        padding-right: 38%;
    }
    @media (max-width: 350px) {
        padding-right: 27%;
    }
}
.mobile-app__download {
    max-width: 120px;
    width: 100%;

    img {
        width: 100%;
    }
}

.subscribe {

    background: url('../../assets/img/png/main/Present/dog.jpg');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center;

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
}</style>