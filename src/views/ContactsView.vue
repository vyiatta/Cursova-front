<script setup>
import ContactsContent from '@/components/contacts/ContactContent.vue'
import TheSubscribe from '@/components/main/TheSubscribe.vue'
import TheMobileApp from '@/components/main/TheMobile.vue'
import TheCompanies from '@/components/main/TheCompanies.vue'
import TheBanner from '@/components/base/TheBanner.vue'

</script>
<template>
    <TheBanner />
    <TheCompanies />
    <ContactsContent />
    <TheMobileApp style="margin-bottom: 50px;"/>
</template>
<script>
export default {
    data() {
        return {
            pageTitle: 'Contact Cleanora - Reach Out for Quality Carpet Cleaning Services',
            pageDescription: "Contact Cleanora to experience superior upholstery, leather, rug, curtains, mattress, hall, and stairs cleaning services. Get in touch for inquiries, appointments, and quotes. Enhance your space's hygiene and aesthetics with Cleanora.",
            pageKeywords: 'contact Cleanora, cleaning services contact, upholstery cleaning inquiry, leather cleaning appointment, rug cleaning quote, curtains cleaning contact, mattress cleaning information, hall and stairs cleaning services, professional cleaning contact, Cleanora contact details',
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