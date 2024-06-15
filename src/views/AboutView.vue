<script setup>
import TheSubscribe from '@/components/main/TheSubscribe.vue'
import Timeline from '@/components/about/AboutTimeline.vue'
import Content from '@/components/about/AboutContent.vue'
import TheBanner from '@/components/base/TheBanner.vue'
import TheCompanies from '@/components/main/TheCompanies.vue'

import TheMobile from '@/components/main/TheMobile.vue'
import present from '@/components/main/ThePresent.vue'

</script>
<template>
    <TheBanner />
    <TheCompanies />
    <div class="video-play">
        <div class="cleanora-about__video" style="padding-top: 0;">
            <iframe width="560" height="315" style="margin: 0 auto" src="https://www.youtube.com/embed/2ZQggMQCB3o"
                title="Cleanora video" frameborder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                allowfullscreen></iframe>
        </div>
        <div class="cleanora-about__text" style="text-align: left; max-width: 100%">
            <textarea name="" id="" cols="80" rows="15" readonly> Welcome to the world of immaculate cleanliness with Carpet Cleaning Service! We are a team of professionals dedicated to creating flawless carpets and clean spaces. Our mission is to bring joy and comfort to your home or office. We understand that each carpet is unique and requires special attention. That's why we use the most advanced technologies and environmentally friendly products to ensure maximum efficiency and safety. Our team consists of true masters of their craft. Experienced and caring Cleanora specialists guarantee that each carpet will be treated with love and attention to detail. We offer not only cleanliness but also reliability. Each job is carried out with trust in our professional team and with consideration of all your wishes. Transforming your carpet is our passion. We believe that a carpet is not just a surface; it's a part of your home that deserves the best care. Invite Cleanora Carpet Cleaning Service to your home, and you'll feel the difference! Leave a request on our website or call us now. Trust the professionals and enjoy the beauty and freshness of your carpets for many years to come!
            </textarea>
        </div>
    </div>
    <Content style="margin-top: 50px; margin-bottom: 40px;" />
    <present />
    <TheMobile style="margin-bottom: 50px;" />
    <!-- <Timeline /> -->
</template>
<script>
export default {
    data() {
        return {
            pageTitle: 'About Cleanora - Your Trusted Carpet Cleaning Services Partner',
            pageDescription: 'Learn about Cleanora, a reputable provider of professional upholstery, leather, rug, curtains, mattress, hall, and stairs cleaning services. Discover our commitment to quality, expertise, and customer satisfaction. Transform your space with Cleanora.',
            pageKeywords: 'about Cleanora, professional cleaning services, upholstery cleaning expertise, leather cleaning company, rug cleaning professionals, curtains cleaning specialists, mattress cleaning experts, hall and stairs cleaning team, Cleanora mission, customer satisfaction',
        };
    },
    mounted() {
        document.title = this.pageTitle;

        const descriptionMeta = document.querySelector('meta[name="description"]');
        if (descriptionMeta) {
            descriptionMeta.setAttribute('content', this.pageDescription);
        }

        const keywordsMeta = document.querySelector('meta[name="keywords"]');
        if (keywordsMeta) {
            keywordsMeta.setAttribute('content', this.pageKeywords);
        }
    }
}
</script>
<style lang="scss">
.video-play {
    display: flex;
    flex-direction: row;
    align-items: center;

    @media (max-width: 1040px) {
        flex-direction: column;
    }
}

.cleanora-about {
    &__video {
        padding-top: 60px;
        margin-bottom: 40px;
        max-width: 142px;
        width: 100%;
        margin: 0 auto;
        @media (max-width: 1100px) {
            max-width: 300px;
        }

        iframe {
            @media (max-width: 1550px) {
                width: 400px;
                height: 250px;
            }
            @media (max-width: 1100px) {
                width: 300px;
                height: 200px;
            }
        }
    }

    &__text {
        textarea {
            user-select: none;
            max-width: 500px;
            width: 100%;
            border: none;
            font-family: Monserrat;

            font-size: 16px;
             @media (max-width: 1550px) {
                font-size: 14px;
                max-width: 400px;
             }
        }

        max-width: 900px;
        margin: 40px auto;
        text-align: center;
        font-size: 18px;

        @media (max-width: 1550px) {
            max-width: 500px;
        }

        @media (max-width: 767px) {
            width: 90%;
        }

        a {
            text-decoration: none;
            color: #00C2A7;
        }

        @media (max-width: 920px) {
            max-width: 570px;
            font-size: 14px;
        }

        @media (max-width: 610px) {
            max-width: 300px;
            font-size: 12px;
        }
    }
}</style>