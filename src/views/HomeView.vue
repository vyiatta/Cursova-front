<script setup>
import TheServices from '@/components/main/TheServices.vue'
import TheWorks from '@/components/main/TheWorks.vue'
import TheHowItWorks from '@/components/main/TheHowItWorks.vue'
import TheReviews from '@/components/main/TheReviews.vue'
import TheFAQ from '@/components/main/TheFAQ.vue'
import TheMobileApp from '@/components/main/TheMobile.vue'
import TheChoose from '@/components/main/TheChoose.vue'
import TheBanner from '@/components/base/TheBanner.vue'
import TheSubscribe from '@/components/main/TheSubscribe.vue'
import OrderCalculator from '@/components/OrderCalculator/OrderCalculator.vue'
import TheCompanies from '@/components/main/TheCompanies.vue'
import benefits from '@/components/main/TheBenefits.vue'


</script>
<template>
    <TheBanner />
    <TheCompanies />
    <div id="container">
        <TheWorks />
        <TheSubscribe />
        <TheServices style="margin-bottom: 100px;" />
        <TheChoose style="margin-bottom: 70px;" />
        <OrderCalculator style="margin-top: 100px;" />
        <TheFAQ style="margin-top: 120px;" />
        <benefits style="margin: 40px auto;"/>
        <TheReviews />
        <TheMobileApp style="margin-bottom: 40px;" />
        <TheHowItWorks />
        <!-- <TheDiscount />
         <TheIncognition /> -->
    </div>
</template>
<script>
export default {
    data() {
        return {
            pageTitle: 'Professional Carpet Cleaning in Dublin | Cleanora',
            pageDescription: 'Cleanora – experts in carpet, rug, upholstery, leather, mattress, curtain, hall, and stairs cleaning in Dublin. Refresh your home with us!',
            pageKeywords: 'cleaning, carpet, upholstery, Dublin, professional',
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
.pageName {
    display: none;

    @media (max-width: 570px) {
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    max-width: 200px;
    width: 100%;
    margin: 0 auto;

    &__title {
        font-size: 24px;
        padding-left: 10px;
    }

    &__img {
        margin-left: 15px;
        max-width: 50px;
        width: 100%;

        img {
            width: 100%;
        }
    }
}
</style>