<template>
  <div class="service-content">
    <div class="wrap">
      <div class="service-prices__title">
        <h5>Mattress</h5>
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
          Mattress
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
          <pcsCounter
            :models="models"
            :selectableType="true"
            title="Mattress"
            :contamination="true"
          />
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

const models = [
  {
    name: 'Rugs',
    selectableType: true,
    types: [
      { size: '60x120 cm (on one side)' },
      { size: '90x190 cm (on one side)' },
      { size: '120x190 cm (on one side)' },
      { size: '160x200 cm (on one side)' }
    ]
  },
  { name: 'Deodorization', selectableType: false }
]

const showElements = ref(false)

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
    title: 'Children mattress',
    desc: '60x120 cm',
    price: '55€',
    src: new URL('../../assets/img/png/Services/Matras/icons/img-1.svg', import.meta.url)
  },
  {
    id: 2,
    title: 'Single mattress',
    desc: '90x190 cm',
    price: '65€',
    src: new URL('../../assets/img/png/Services/Matras/icons/img-2.svg', import.meta.url)
  },
  {
    id: 3,
    title: 'Double mattress',
    desc: '135x190 cm',
    price: '75€',
    src: new URL('../../assets/img/png/Services/Matras/icons/img-3.svg', import.meta.url)
  },
  {
    id: 4,
    title: 'King mattress',
    desc: '150x200 cm',
    price: '90€',
    src: new URL('../../assets/img/png/Services/Matras/icons/img-4.svg', import.meta.url)
  },
  {
    id: 5,
    title: 'Deodorization',
    desc: 'Additional',
    price: 'Free',
    src: new URL('../../assets/img/png/Services/Upholstery/icons/img-14.svg', import.meta.url)
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
