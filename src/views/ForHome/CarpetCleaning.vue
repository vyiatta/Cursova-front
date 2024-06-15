<script setup>
import CarpetContent from '@/components/services/ForHome/Content/CarpetContent.vue'
import TheCompanies from '@/components/main/TheCompanies.vue'

import Example from '@/components/base/Example.vue'
import TheBanner from '@/components/base/TheBanner.vue'
</script>
<template>
    <TheBanner />
    <TheCompanies />
    <CarpetContent />
    <!-- <div class="pdf">
        <div class="pdf-text">
            <div class="pdf-text__title pageName__title" style="display: flex; justify-content: center;">
                <b>Cleaning methods</b>
            </div>
            <div class="pdf-text__desc service-prices__desc" style="margin-top: 20px; margin-bottom: 30px;">
                Click for download pdf files
            </div>
        </div>
        <div class="pdf__files">
            <ul>
                <li>
                    <a href="https://drive.google.com/file/d/1EaDZGUCVF1YqH8m7CQTHDL9YOgc-2T_u/view">
                        <div class="pdf__files-img">
                            <img src="../../assets/img/svg/pdf.svg" alt="">
                        </div>
                        <div class="pdf__files-text">
                            Stain removal
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1E_weNiP__ckRST8sqovO3jPJXqekRgGa/view">
                        <div class="pdf__files-img">
                            <img src="../../assets/img/svg/pdf.svg" alt="">
                        </div>
                        <div class="pdf__files-text">
                            Shampooing and spray extraction
                        </div>
                    </a>
                </li>
                <li>
                    <a href="https://drive.google.com/file/d/1Ec5SmbjeMoESCjWsNhY1cDCu_jhdrDY7/view?usp=drivesdk">
                        <div class="pdf__files-img">
                            <img src="../../assets/img/svg/pdf.svg" alt="">
                        </div>
                        <div class="pdf__files-text">
                            Textile pad
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    </div> -->
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