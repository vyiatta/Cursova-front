<script setup >
// import OrderCalculator from '@/components/OrderCalculator/OrderCalculator.vue'
</script>
<template>
  <div class="service-content">
    <div class="service-article" v-for="item in items" :key="item.id">
      <div class="service-article-img">
        <img :src="item.src" alt="">
      </div>
      <div class="service-article-text">
        <div class="service-article-text__title">
          <h3>{{ item.title }}</h3>
        </div>
        <div class="service-article-text__desc">
          <p>{{ item.desc }} <br><br> {{ item.desc1 }}</p>
        </div>
      </div>
    </div>
    <TheSubscribe style="margin-bottom: 40px;"/>
    <div class="service-prices__title">
      <b>Upholstery</b>
    </div>
    <div class="service-prices wrap">
      <div class="service-prices-items" v-for="price in prices" :key="price.id">
        <div class="service-prices-items__item">
          <div class="service-prices-items__item-img">
            <img :src="price.src" alt="">
          </div>
          <div class="service-prices-items__item-title">
            {{ price.title }}
          </div>
          <div class="service-prices-items__item-desc" style="color: white">
            {{ price.desc }}
          </div>
          <div class="service-prices-items__item-price" style="color: white">
            {{ price.price }}
          </div>
        </div>
      </div>
    </div>
  </div>
  <TheReviews />
  <calc style="margin-bottom: 50px;" />
</template>

<script>
import calc from '@/components/OrderCalculator/OrderCalculator.vue'
import TheReviews from '@/components/main/TheReviews.vue'
import TheSubscribe from '@/components/main/TheSubscribe.vue'
export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'Cleanora Upholstery Cleaning',
          desc: 'Cleanora guarantees the meticulous removal of stains and dirt from your upholstered furniture while prioritizing its safety. Our expert technicians possess the expertise to tackle upholstery fabric challenges that other companies often shy away from.',
          desc1: 'When it comes to upholstery cleaning, we employ specially formulated Cleanora products, state-of-the-art equipment, and proven methods at every stage. From thorough vacuuming to selecting the most suitable wet or dry cleaning system for your delicate furnishings, we leave no stone unturned.',
          src: new URL('../../../../assets/img/png/Services/Upholstery/img-1.jpg', import.meta.url)
        },
        {
          id: 2,
          title: 'Gentle Upholstery Cleaning Excellence',
          desc: 'Cleanora service ensures the removal of soiling whilst never risking damage to your upholstered furniture. We can often successfully clean upholstery fabric that other companies would decline to attempt.',
          desc1: 'For all upholstery cleaning our technicians use specially designed Cleanora products, equipment and methods every step of the way; from initial vacuuming through to choosing the wet or dry cleaning system most appropriate for your soft furnishings.',
          src: new URL('../../../../assets/img/png/Services/Upholstery/img-2.jpg', import.meta.url)
        },
      ],
      prices: [
        {
          id: 1,
          title: 'Sofa',
          desc: '2 seats (100-120cm)',
          price: '10€',
          src: new URL('../../../../assets/img/svg/SofaCleaning/img-2.svg', import.meta.url)
        },
        {
          id: 2,
          title: 'Sofa',
          desc: '3 seats (150-180cm)',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-1.svg', import.meta.url)
        },
        {
          id: 3,
          title: 'Sofa',
          desc: '4 seats + corner',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-2.svg', import.meta.url)
        },
        {
          id: 4,
          title: 'Sofa',
          desc: '5 seats + corner',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-3.svg', import.meta.url)
        },
        {
          id: 5,
          title: 'Sofa',
          desc: '6 seats (L-shaped)',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-4.svg', import.meta.url)
        },
        {
          id: 6,
          title: 'Seat',
          desc: '(50-60cm)',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-5.svg', import.meta.url)
        },
        {
          id: 7,
          title: 'Sleeping place',
          desc: '',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-6.svg', import.meta.url)
        },
        {
          id: 8,
          title: 'Seat',
          desc: 'With vandal-proof fabric',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-7.svg', import.meta.url)
        },
        {
          id: 9,
          title: 'Seat',
          desc: 'With silk, viscose upholstery',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-8.svg', import.meta.url)
        },
        {
          id: 10,
          title: 'Armchair',
          desc: '(50-60 см)',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-9.svg', import.meta.url)
        },
        {
          id: 11,
          title: 'Chair',
          desc: 'Without a soft backrest',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-10.svg', import.meta.url)
        },
        {
          id: 12,
          title: 'Chair',
          desc: 'With a soft backrest',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-11.svg', import.meta.url)
        },
        {
          id: 13,
          title: 'Kitchen corner',
          desc: '',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-12.svg', import.meta.url)
        },
        {
          id: 14,
          title: 'Headboard',
          desc: '',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-13.svg', import.meta.url)
        },
        {
          id: 15,
          title: ' Pillow',
          desc: 'Up to 30cm Wide',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/pillow.svg', import.meta.url)
        },
        {
          id: 16,
          title: ' Pillow',
          desc: 'from 30-70cm Wide',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/pillow.svg', import.meta.url)
        },
        {
          id: 17,
          title: ' Ottoman',
          desc: 'width up to 40cm',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/ottoman.svg', import.meta.url)
        },
        {
          id: 18,
          title: ' Ottoman',
          desc: 'width 40-80cm',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/ottoman.svg', import.meta.url)
        },
        {
          id: 19,
          title: 'Deodorization',
          desc: 'Additional',
          price: 'Free',
          src: new URL('../../../../assets/img/png/Services/Upholstery/icons/img-14.svg', import.meta.url)
        },
      ]
    };
  }
}
</script>

<style scoped lang="scss">
.invite-button {
  display: none;
  position: fixed;
  bottom: 20px;
  left: 50%;
  transform: translateX(-50%);
  padding: 10px 20px;
  background-color: #00C2A7;
  color: #fff;
  border-radius: 5px;
  cursor: pointer;
  width: 230px;
  z-index: 98;

  p {
    font-size: 16px;
    white-space: pre;
  }

  @media (max-width: 967px) {
    display: block;
  }
}

.service-content {
  width: 95%;
  margin: 0 auto;

  .service-article {
    display: flex;
    flex-direction: row;
    justify-content: space-evenly;
    align-items: center;
    margin-bottom: 50px;

    @media (max-width: 967px) {
      flex-direction: column !important;
    }

    &-text {
      &__title {
        font-size: 24px;

        @media (max-width: 767px) {
          font-size: 14px;
        }
      }

      &__slogan {
        position: absolute;
        font-size: 14px;

        &.border-color-bottom::before {
          content: "";
          position: absolute;
          bottom: 0;
          display: block;
          left: 0;
          width: 76px;
          height: 2px;
          background-color: #00C2A7;
        }
      }

      &__desc {
        max-width: 550px;
        padding-top: 20px;
        font-size: 20px;

        @media (max-width: 767px) {
          font-size: 12px;
        }
      }
    }

    &-img {
      max-width: 400px;
      width: 100%;
      margin: 20px;

      @media (max-width: 967px) {
        order: -1;
      }

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
    padding: 60px 10px;
    display: grid;
    grid-template-columns: repeat(4, 1fr);
    grid-row-gap: 60px;
    grid-gap: 15px;

    @media (max-width: 1200px) {
      grid-template-columns: repeat(2, 1fr);
    }

    &__title {
      padding-top: 100px;
      font-size: 40px;
      display: flex;
      justify-content: center;
      padding-right: 75px;

      @media (max-width: 767px) {
        padding-top: 0;
      }
    }

    &-items {
      &__item {

        &-title {
          font-size: 24px;
          color: #00C2A7;

          @media (max-width: 767px) {
            font-size: 15px;
          }
        }

        &-img {
          margin-bottom: 20px;
          max-width: 112.5px;
          width: 100%;

          img {
            width: 100%;
          }

          @media (max-width: 767px) {
            max-width: 50px;
          }
        }

        &-desc {
          padding: 5px;
          margin: 20px auto;

          @media (max-width: 767px) {
            font-size: 12px;
            margin: 5px auto;
          }
        }
      }
    }
  }
}</style>
