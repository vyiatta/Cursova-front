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
    <TheSubscribe style="margin-bottom: 40px;" />
    <div class="service-prices__title">
      <b>Leather</b>
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
          title: 'Cleanora Leather Upholstery Cleaning',
          desc: 'Cleanora specializes in leather upholstery cleaning, ensuring the meticulous removal of stains and dirt without compromising the integrity of your furniture. Our expert technicians possess the expertise to handle leather fabric challenges that other companies often avoid.',
          desc1: 'When it comes to leather upholstery cleaning, we utilize advanced equipment, and proven methods at every step. From gentle cleaning to conditioning and protecting your valuable leather furniture, we take every measure to deliver exceptional results.',
          src: new URL('../../../../assets/img/png/Services/Leather/img-1.jpg', import.meta.url)
        },
        {
          id: 2,
          title: 'Premium Leather Cleaning Service',
          desc: 'Cleanora provides a premium leather upholstery cleaning service, ensuring the removal of dirt and stains while preserving the beauty and quality of your leather furniture. Our skilled technicians are experienced in handling delicate leather fabrics and can successfully clean what other companies may refuse to attempt.',
          desc1: 'With our specialized Cleanora products, state-of-the-art equipment, and meticulous techniques, we deliver unmatched care for your leather upholstery. From thorough cleaning and conditioning to restoring its natural luster, we go above and beyond to exceed your expectations.',
          src: new URL('../../../../assets/img/png/Services/Leather/img-2.jpg', import.meta.url)
        },
      ],
      prices: [
        {
          id: 1,
          title: 'Sofa leather',
          desc: '2 seats (100-120cm)',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Leather/icons/img-1.svg', import.meta.url)
        },
        {
          id: 2,
          title: 'Sofa leather',
          desc: '3 seats (150-180cm)',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Leather/icons/img-2.svg', import.meta.url)
        },
        {
          id: 3,
          title: 'Sofa leather',
          desc: '4 seats + corner',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Leather/icons/img-3.svg', import.meta.url)
        },
        {
          id: 4,
          title: 'Seat',
          desc: '(50-60cm)',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Leather/icons/img-4.svg', import.meta.url)
        },
        {
          id: 5,
          title: 'Seat',
          desc: '(50-60cm) skin softening oil cleaning',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Leather/icons/img-5.svg', import.meta.url)
        },
        {
          id: 6,
          title: 'Seet',
          desc: '(50-60cm) (50-60 cm) cleaning with color restoration',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Leather/icons/img-6.svg', import.meta.url)
        },
        {
          id: 7,
          title: 'Sleeping place',
          desc: 'Leather sofa',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Leather/icons/img-7.svg', import.meta.url)
        },
        {
          id: 8,
          title: 'Leather armchair',
          desc: '(50-60cm)',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Leather/icons/img-8.svg', import.meta.url)
        },
        {
          id: 9,
          title: 'Leather office chair',
          desc: 'With soft back',
          price: '10€',
          src: new URL('../../../../assets/img/png/Services/Leather/icons/img-9.svg', import.meta.url)
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
}
</style>
