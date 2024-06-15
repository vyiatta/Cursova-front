<script setup>
import LeatherContent from '@/components/services//ForHome/Content/LeatherContent.vue'
import Example from '@/components/base/Example.vue'
import TheBanner from '@/components/base/TheBanner.vue'
import TheCompanies from '@/components/main/TheCompanies.vue'
</script>
<template>
    <TheBanner />
    <TheCompanies />
    <LeatherContent />
    <Example />
</template>
<script>
export default {
    data() {
        return {
            pageTitle: 'Professional Upholstery, Rug, Leather, Mattress, Curtains, Hall, Stairs & Carpet Cleaning | Cleanora',
            pageDescription: 'Experience exceptional dry cleaning services for upholstery, rugs, leather, mattresses, curtains, hallways, stairs, and carpets with Cleanora. Enhance the cleanliness and beauty of your space. Contact us for top-quality professional cleaning solutions.',
            pageKeywords: 'professional cleaning services, upholstery cleaning, rug cleaning, leather cleaning, mattress cleaning, curtains cleaning, hall and stairs cleaning, carpet cleaning, Cleanora cleaning, expert cleaners, thorough cleaning solutions',
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