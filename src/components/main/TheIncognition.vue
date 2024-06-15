<template>
    <div class="incognition">
        <div class="incognition__wrap wrap">
            <div class="incognition__title">
                <b>Independent recognition</b>
            </div>
            <div class="incognition__items">
                <div class="incognition__items-item">
                    <img src="../../assets/img/png/main/Incognition/img-1.png" alt="">
                </div>
                <div class="incognition__items-item">
                    <img src="../../assets/img/png/main/Incognition/img-2.png" alt="">
                </div>
                <div class="incognition__items-item">
                    <img src="../../assets/img/png/main/Incognition/img-3.png" alt="">
                </div>
            </div>
        </div>
    </div>
</template>
<style lang="scss">
.incognition {
    margin-bottom: 40px;

    &__title {
        b {
            font-size: 40px;
        }

        display: flex;
        justify-content: center;
        margin: 80px auto;

        @media (max-width: 1000px) {
            b {
                font-size: 32px;
            }
        }

        @media (max-width: 768px) {
            b {
                font-size: 20px;
            }
        }
    }

    &__items {
        display: flex;
        justify-content: space-evenly;

        &-item {
            max-width: 110px;
            width: 100%;

            img {
                width: 100%;
            }
        }
    }
}
</style>