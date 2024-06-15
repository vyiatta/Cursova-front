<template>
  <div class="service-content">
    <div class="wrap">
      <div class="service-prices__title">
        <h5>Curtains</h5>
      </div>
      <swiper :modules="modules" :slides-per-view="2" :space-between="5" :pagination="{ clickable: true }" :breakpoints="{
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
      }" @swiper="onSwiper" @slideChange="onSlideChange">
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
          Curtains
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
          <pcsCounter title="Curtains" :models="models" />
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
    name: 'Tulle',
    selectableType: true,
    types: [{ size: 'made of sanitary fabrics' }, { size: 'made of natural fabrics' }]
  },
  {
    name: 'Curtains',
    selectableType: true,
    types: [{ size: 'made of santactic fabrics' }, { size: 'made of natural fabrics' }]
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
    title: 'Tulle',
    desc: 'made of sanitary fabrics',
    price: '25€/1 sq.meter',
    src: new URL('../../assets/img/png/Services/Curtains/icons/img-1.svg', import.meta.url)
  },
  {
    id: 2,
    title: 'Tulle',
    desc: 'made of natural fabrics',
    price: '25€/1 sq.meter',
    src: new URL('../../assets/img/png/Services/Curtains/icons/img-1.svg', import.meta.url)
  },
  {
    id: 3,
    title: 'Curtains',
    desc: 'made of santactic fabrics',
    price: '25€/1 sq.meter',
    src: new URL('../../assets/img/png/Services/Curtains/icons/img-2.svg', import.meta.url)
  },
  {
    id: 4,
    title: 'Curtains',
    desc: 'made of natural fabrics',
    price: '25€/1 sq.meter',
    src: new URL('../../assets/img/png/Services/Curtains/icons/img-3.svg', import.meta.url)
  },
  {
    id: 5,
    title: 'Velvet',
    desc: 'or silk curtains²',
    price: '25€/1 sq.meter',
    src: new URL('../../assets/img/png/Services/Curtains/icons/img-4.svg', import.meta.url)
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
        -webkit-box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;
        -moz-box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;
        box-shadow: 5px 5px 5px 0px rgb(189, 188, 188) !important;
        background: unset !important;

        @media (max-width: 767px) {
          -webkit-box-shadow: 3px 3px 3px 0px rgb(189, 188, 188) !important;
          -moz-box-shadow: 3px 3px 3px 0px rgb(189, 188, 188) !important;
          box-shadow: 3px 5px 3px 0px rgb(189, 188, 188) !important;
          height: 240px !important;

          &-desc {
            margin: 10px auto !important;
            font-size: 14px !important;
          }

          &-title {
            font-size: 20px !important;
          }
        }

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
