<script setup>
import PriceArticle from '@/components/price/TheArticle.vue'
import CarpetPrice from '@/components/price/CarpetPriceView.vue'
import RugsPrice from '@/components/price/RugsPriceView.vue'
import UpholsteryPrice from '@/components/price/UpholsteryPriceView.vue'
import LeatherPrice from '@/components/price/LeatherPriceView.vue'
import HallStairsPrice from '@/components/price/HallStairsPriceView.vue'
import MattressPrice from '@/components/price/MattressPriceView.vue'
import TheSubscribe from '@/components/main/TheSubscribe.vue'
import CurtainsPrice from '@/components/price/CurtainsPriceView.vue'
import TheBanner from '@/components/base/TheBanner.vue'
import TheCompanies from '@/components/main/TheCompanies.vue'

import CommercialPrice from '@/components/price/CommercialPriceView.vue'
import TheMobileApp from '@/components/main/TheMobile.vue'
import pdf from '@/components/base/pdf.vue'
</script>
<template>
    <TheBanner />
    <TheCompanies />
    <PriceArticle />
    <OrderCalculator />
    <div id="container">
        <CarpetPrice />
        <RugsPrice />
        <UpholsteryPrice />
        <LeatherPrice />
        <MattressPrice style="margin-bottom: 40px;" />
        <HallStairsPrice />
        <CurtainsPrice />
        <CommercialPrice />
        <TheMobileApp style="margin-bottom: 50px;" />
        <!-- <TheDiscount /> -->
    </div>
</template>

<script>
export default {
    data() {
        return {
            pageTitle: 'Affordable Carpet Cleaning Services Pricing | Cleanora',
            pageDescription: '"Explore the transparent and competitive pricing for our professional Dry Cleaning services at Cleanora. Get cost-effective solutions for upholstery, leather, rug, curtains, mattress, hall, and stairs cleaning. Contact us for a quote today',
            pageKeywords: 'cleaning services pricing, affordable cleaning rates, upholstery cleaning cost, leather cleaning price, rug cleaning quote, curtains cleaning rates, mattress cleaning cost, hall and stairs cleaning pricing, professional cleaning pricing, Cleanora pricing, cleaning quote',
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