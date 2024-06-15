<template>
    <div class="about">
        <div class="about__wrap wrap">
            <div class="about__box">
                <div class="about-img">
                    <img src="../../assets/img/png/about/img-1.jpg" alt="" style="border-radius: 15px;">
                </div>
            </div>
        </div>
    </div>
</template>
<script>
</script>
<style lang="scss">
.about {
    &__box {
        max-width: 600px;
        margin: 0 auto;
    }

    &-text {
        max-width: 700px;
        ul {
            list-style: none;
            li {
                margin-bottom: 54px;
            }
        }
    }

    &-img {
        max-width: 600px;
        width: 100%;

        img {
            width: 100%;
        }
    }
}
</style>