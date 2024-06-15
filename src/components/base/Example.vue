<script setup>
import TheMobileApp from '@/components/main/TheMobile.vue'
import pdf from '@/components/base/pdf.vue'
import benefits from '@/components/main/TheBenefits.vue'
</script>
<template>
    <div id="container">
        <ArticlesSofa />
        <benefits />
        <TheMobileApp style="margin-bottom: 50px;"/>
        <pdf />
    </div>
</template>