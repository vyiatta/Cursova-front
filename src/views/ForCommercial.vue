<script setup>
import Content from '@/components/services/ForCommercial/Content/CommercialContent.vue'
import pdf from '@/components/base/pdf.vue'
import TheBanner from '@/components/base/TheBanner.vue'
import TheCompanies from '@/components/main/TheCompanies.vue'
import benefits from '@/components/main/TheBenefits.vue'
import present from '@/components/main/ThePresent.vue'

</script>
<template>
    <TheBanner />
    <TheCompanies/>
    <Content />
    <benefits style="margin-bottom: 60px;"/>
    <present style="margin-bottom: 40px;"/>
    <pdf />
</template>
<script>
export default {
    data() {
        return {
            pageTitle: 'Tailored Commercial Carpet Cleaning Solutions | Cleanora',
            pageDescription: 'Discover customized commercial Carpet Cleaning services by Cleanora. Elevate your business environment with professional upholstery, leather, rug, curtains, mattress, hall, and stairs cleaning. Contact us to discuss your commercial cleaning needs.',
            pageKeywords: 'commercial cleaning solutions, professional cleaning services, tailored cleaning packages, upholstery cleaning for businesses, leather cleaning for commercial spaces, rug cleaning for offices, curtains cleaning for establishments, mattress cleaning for hotels, hall and stairs cleaning for offices, Cleanora commercial services',
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