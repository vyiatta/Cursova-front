<script setup >
import TheSubscribe from '@/components/main/TheSubscribe.vue'
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
      <b>Carpet</b>
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

export default {
  data() {
    return {
      items: [
        {
          id: 1,
          title: 'ALLERGEN REMOVAL',
          desc: 'Your carpet can harbor allergens, bacteria, and pollutants, posing health risks to your family, especially children, the elderly, pets, or those allergic to dust. Regular cleaning by Cleanora helps mitigate these risks, ensuring a healthier indoor environment.',
          desc1: "PREVENT INSECT INFESTATION Carpets often become a breeding ground for mites and cockroaches, leading to infestations and rapid spreading. Cleanora's consistent cleaning practices help eliminate insects and deter potential infestations, safeguarding your home from unwanted pests.",
          src: new URL('../../../../assets/img/png/Services/Carpet/img-2.jpg', import.meta.url)
        },
        {
          id: 2,
          title: '',
          desc: 'Experience the transformation of your carpets with Cleanora\'s professional carpet cleaning services. Tailored for households with children and pets, our specialized solutions cater to both residential and commercial clients in Dublin. Our cutting-edge equipment and skilled professionals ensure effective stain removal, rejuvenating your carpets to their original vibrancy. Say goodbye to tough stains and unpleasant odors, and welcome fresh, like-new carpets that enhance your living space.',
          desc1: "ELEVATE YOUR UPHOLSTERY Cleanora goes beyond ordinary cleaning for your leather upholstery. Our exclusive Cleanora products, state-of-the-art techniques, and meticulous care bring out the best in your leather furniture. Whether it\'s thorough cleaning, conditioning, or restoring its natural shine, Cleanora's expertise guarantees exceptional results that exceed your expectations.",
          src: new URL('../../../../assets/img/png/Services/Carpet/img-1.jpg', import.meta.url)
        },
      ],
      prices: [
        {
          id: 1,
          title: 'Carpets',
          desc: 'synthetics',
          price: '3€/1 sq.meter',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-1.svg', import.meta.url)
        },
        {
          id: 2,
          title: 'Carpets',
          desc: 'synthetics + wool',
          price: '3€/1 sq.meter',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-2.svg', import.meta.url)
        },
        {
          id: 3,
          title: 'Carpets',
          desc: 'wool',
          price: '3€/1 sq.meter',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-3.svg', import.meta.url)
        },
        {
          id: 4,
          title: 'Carpets',
          desc: 'viscose, silk',
          price: '3€/1 sq.meter',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-4.svg', import.meta.url)
        },
        {
          id: 5,
          title: 'Carpets',
          desc: 'synthetics + pet hair cleaning',
          price: '3€/1 sq.meter',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-5.svg', import.meta.url)
        },
        {
          id: 6,
          title: 'Carpets',
          desc: 'wool + pet hair cleaning',
          price: '3€/1 sq.meter',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-6.svg', import.meta.url)
        },
        {
          id: 7,
          title: 'Carpets',
          desc: '"Shaggy"',
          price: '3€/1 sq.meter',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-7.svg', import.meta.url)
        },
        {
          id: 8,
          title: 'Carpets',
          desc: 'handmade',
          price: '3€/1 sq.meter',
          src: new URL('../../../../assets/img/png/Services/Carpet/icons/img-8.svg', import.meta.url)
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
