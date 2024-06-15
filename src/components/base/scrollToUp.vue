<template>
    <div>
        <!-- Content of your page goes here -->
        <!-- ... -->

        <!-- Scroll-up button -->
        <div v-if="showScrollButton" class="scroll-up" @click="scrollToTop">
            <img src="../../assets/img/png/scrollToUp.png" alt="">
        </div>
    </div>
</template>
  
<script setup>
import { ref, onMounted, onBeforeUnmount } from 'vue';

const showScrollButton = ref(false);

const handleScroll = () => {
    const windowHeight = window.innerHeight;
    const scrollThreshold = 0.4 * windowHeight;
    showScrollButton.value = window.scrollY > scrollThreshold;
};

const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
};

onMounted(() => {
    window.addEventListener('scroll', handleScroll);
});

onBeforeUnmount(() => {
    window.removeEventListener('scroll', handleScroll);
});
</script>
  
<style lang="scss">
.scroll-up {
    position: fixed;
    top: 55%;
    transform: translate(-50%);
    right: 10px;
    /* Adjust the position as needed */
    max-width: 40px;
    width: 100%;
    opacity: .7;
    z-index: 1000;
    cursor: pointer;

    img {
        width: 100%;
    }
}
</style>
  