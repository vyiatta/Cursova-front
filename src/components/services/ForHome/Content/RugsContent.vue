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
      <b>Rugs</b>
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
  <calc style="margin-bottom: 50px;"/>
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
          title: 'Cleanora Rug Cleaning Services!',
          desc: 'Rugs Cleaning services for Your Home or Business Do you find it difficult to choose the right Dublin area rug cleaner? Are you often bothered by the stubborn stains and seemingly impossible-to-remove odors or pet dander off of the surface of your favorite area rugs? Did you know that dirty rugs transform into hotbeds for the breeding of harmful microbes? Is your allergy starting to worsen recently?',
          desc1: 'Could it be because of an unclean area rug? area rug cleaning There is more than one reason why you need to consider professional Cleanora rug cleaning. It is crucial not only for the strength of your rugs but for your own well- being too. In the absence of regular area rug Rugs cleaning, the quality and strength of the rug fibres starts to deteriorate. And before you know it, a simple home rug cleaning in Dublin can start to take a toll on the fabric. In other words, it gets easier for the fabric to be damaged when it is overloaded with debris.',
          src: new URL('../../../../assets/img/png/Services/Rugs/img-1.jpg', import.meta.url)
        },
        {
          id: 2,
          title: '',
          desc: 'Our master rug cleaners are dedicated to ensuring that you don’t have to go through such a tough time where you have to watch your expensive rugs undergo irreparable damage just because they were not maintained properly. Not only do we take care of all kinds of rug cleaning in Dublin, we also provide you with a rug cleaning drop off as per your convenience.',
          desc1: '',
          src: new URL('../../../../assets/img/png/Services/Rugs/img-2.jpg', import.meta.url)
        },
      ],
      prices: [
        {
          id: 1,
          title: 'Rugs',
          desc: 'up to 3m²',
          price: '12€',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-1.svg', import.meta.url)
        },
        {
          id: 2,
          title: 'Rugs',
          desc: 'up to 5m²',
          price: '20€',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-2.svg', import.meta.url)
        },
        {
          id: 3,
          title: 'Rugs',
          desc: 'up to 7m²',
          price: '28€',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-3.svg', import.meta.url)
        },
        {
          id: 4,
          title: 'Rugs',
          desc: 'up to 10m²',
          price: '40€',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-4.svg', import.meta.url)
        },
        {
          id: 5,
          title: 'Rugs',
          desc: 'from 10m² to 15m²',
          price: '60€',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-5.svg', import.meta.url)
        },
        {
          id: 6,
          title: 'Rugs',
          desc: 'from 15m² to 20m²',
          price: '80€',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-6.svg', import.meta.url)
        },
        {
          id: 7,
          title: 'Rugs',
          desc: 'from 20m² to 30m²',
          price: '120€',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-7.svg', import.meta.url)
        },
        {
          id: 8,
          title: 'Rugs',
          desc: 'from 30m² to 40m²',
          price: '160€',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-8.svg', import.meta.url)
        },
        {
          id: 9,
          title: 'Rugs',
          desc: 'from 40m² to 50m²',
          price: '200€',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-9.svg', import.meta.url)
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
