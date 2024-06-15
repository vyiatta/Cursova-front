<template>
    <div class="article">
        <div class="article__wrap wrap">
            <div class="article-text">
                <div class="cleanora-about__video"
                    style="padding-top: 10px; display: flex; justify-content: center; margin-bottom: 20px;">
                    <iframe width="560" height="315" style="margin: 0 auto" src="https://www.youtube.com/embed/2ZQggMQCB3o"
                        title="Cleanora video" frameborder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                        allowfullscreen></iframe>
                </div>
                <p style="color: black">Cleanora are experts in commercial cleaning of carpets, upholstery and upholstery. Trust us if you are
                    looking for impeccable cleanliness for your carpets and textiles. Thanks to many years of experience, we
                    guarantee an exceptional quality of service. Our experienced team restores carpets to their original
                    condition. Based in Dublin, Cleanora is your choice for impeccable cleanliness. Contact us now and
                    transform your space into radiant purity.
                </p>
            </div>
        </div>
    </div>
</template>
<script>
export default {
    data() {
    }
}
</script>
<style lang="scss">
.article {

    &__wrap {
        padding-top: 100px;
        padding-bottom: 50px;

        @media (max-width: 670px) {
            padding-top: 50px;
        }
    }

    &-text {
        color: #FFF;
        text-align: left;
        line-height: 27.6px;
        display: flex;
        flex-direction: row;
        justify-content: space-evenly;
        align-items: center;

        p {
            font-size: 24px;
            text-align: left;
            margin-left: 50px;
        }

        @media (max-width: 967px) {
            flex-direction: column;

            p {
                margin-left: 0;
                font-size: 20px;
                text-align: center
            }
        }

        @media (max-width: 680px) {
            p {
                font-size: 16px;
            }
        }

        @media (max-width: 570px) {
            p {
                font-size: 14px;
            }
        }
    }
}</style>