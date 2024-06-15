<template>
  <div class="service-content">
    <div class="wrap">
      <div class="service-prices__title">
        <h5>Commercial</h5>
      </div>
      <swiper
        :modules="modules"
        :slides-per-view="2"
        :space-between="5"
        :pagination="{ clickable: true }"
        :breakpoints="{
          '390': {
            slidesPerView: 2,
            spaceBetween: 10
          },

          '768': {
            slidesPerView: 3,
            spaceBetween: 15
          },

          '1100': {
            slidesPerView: 4,
            spaceBetween: 20
          }
        }"
        @swiper="onSwiper"
        @slideChange="onSlideChange"
      >
        <swiper-slide v-for="price in prices" :key="price.id">
          <div class="service-prices-items__item">
            <div class="service-prices-items__item-img" style="max-width: 80px">
              <img :src="price.src" alt="" style="width: 100%" />
            </div>
            <div class="service-prices-items__item-title">
              {{ price.title }}
            </div>
            <div class="service-prices-items__item-desc">
              {{ price.desc }}
            </div>
            <div class="service-prices-items__item-price">
              {{ price.price }}
            </div>
          </div>
        </swiper-slide>
      </swiper>
      <!-- <div class="flex">
        <button @click="toggleElements">
          Commercial
          <img
            class="icons__button"
            v-if="!showElements"
            src="../../assets/img/add-circle.svg"
            alt=""
          />
          <img
            class="icons__button"
            v-if="showElements"
            src="../../assets/img/remove-circle.svg"
            alt=""
          />
        </button>
        <div v-if="showElements">
          <pcsCounter title="Commercial" :models="models" />
        </div>
      </div> -->
    </div>
  </div>
</template>

<script setup>
import { Navigation, Pagination, Scrollbar } from 'swiper/modules'
import { Swiper, SwiperSlide } from 'swiper/vue'
import 'swiper/css'
import 'swiper/css/navigation'
import 'swiper/css/pagination'
import 'swiper/css/scrollbar'


import { ref } from 'vue'

const showElements = ref(false)

const models = [
  {
    name: 'Chair',
    selectableType: false
  },
  {
    name: 'Curtains',
    selectableType: true,
    types: [{ size: 'made of santactic fabrics' }, { size: 'made of natural fabrics' }]
  },
  {
    name: 'Carpet',
    selectableType: true,
    types: [
      { size: 'synthetics' },
      { size: 'synthetics + wool' },
      { size: 'wool' },
      { size: 'viscode, silk' },
      { size: 'synthetics + pet hair cleaning' },
      { size: "'Shaggy'" },
      { size: 'synthetics + pet hair cleaning' },
      { size: 'handmade' },
      { size: 'up to 100m' },
      { size: 'Capet on Stairs' }
    ]
  }
]

const toggleElements = () => {
  showElements.value = !showElements.value
}

const modules = [Navigation, Pagination, Scrollbar]

const onSwiper = (swiper) => {
  console.log(swiper)
}

const onSlideChange = () => {
  console.log('slide change')
}

const prices = [
  {
    id: 1,
    title: 'Office chair',
    desc: '',
    price: '10€',
    src: new URL('../../assets/img/png/Services/Upholstery/icons/img-10.svg', import.meta.url)
  },
  {
    id: 2,
    title: 'Office armchair',
    desc: '',
    price: '10€',
    src: new URL('../../assets/img/png/Services/Upholstery/icons/img-9.svg', import.meta.url)
  },
  {
    id: 3,
    title: 'Executive chair',
    desc: '',
    price: '10€',
    src: new URL('../../assets/img/png/Commercial/icons/img-1.svg', import.meta.url)
  },
  {
    id: 4,
    title: 'Office carpet',
    desc: '',
    price: '10€',
    src: new URL('../../assets/img/png/Commercial/icons/img-2.svg', import.meta.url)
  }
]
</script>

<style scoped lang="scss">
.flex {
  button {
    margin-bottom: 30px;
    border: none;
    background: none;
    display: flex;
    align-items: center;
    font-size: 24px;
    color: white;

    img {
      margin: 0 10px;
    }
  }

  display: flex;
  justify-content: center;
  align-items: flex-start;
  flex-direction: column;
  max-width: 400px;
  width: 100%;
  margin: 0 auto;
}

.service-content {
  .service-article {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;

    &-text {
      &__title {
        font-size: 24px;
      }

      &__slogan {
        position: absolute;
        font-size: 14px;

        &.border-color-bottom::before {
          content: '';
          position: absolute;
          bottom: 0;
          display: block;
          left: 0;
          width: 76px;
          height: 2px;
          background-color: #00c2a7;
        }
      }

      &__desc {
        max-width: 550px;
        padding-top: 20px;
        font-size: 20px;
      }
    }

    &-img {
      max-width: 400px;
      width: 100%;
      margin: 20px;

      img {
        width: 100%;
        border-radius: 15px 0px 15px 0px;
      }
    }

    &:nth-child(2) {
      flex-direction: row-reverse;
    }
  }

  .service-prices {
    padding-top: 100px;
    grid-row-gap: 60px;

    &__title {
      padding-top: 100px;
      font-size: 40px;
      display: flex;
      justify-content: center;
      // padding-right: 75px;
      margin-bottom: 50px;
    }

    &-items {
      &__item {
        height: 360px;
        background: #264f68;
        border-radius: 20px;
        display: flex;
        justify-content: center;
        align-items: center;
        flex-direction: column;
        text-align: center;

        @media (max-width: 768px) {
          height: 320px;
        }

        &-title {
          font-size: 24px;
          color: #00c2a7;
        }

        &-img {
          margin-bottom: 20px;
        }

        &-desc {
          margin: 20px auto;
        }
      }
    }
  }
}
</style>
