<script setup>
import Header from '@/components/base/TheHeader.vue'
import Footer from '@/components/base/TheFooter.vue'
import { RouterView } from 'vue-router'
import scroll from './components/base/scrollToUp.vue'
import Benefits from './components/main/TheBenefits.vue'
</script>

<template>
  <Header />
  <RouterView />
  <Footer />
  <scroll />
  <div class="fixed-buttons">
    <div class="fixed-buttons__box">
      <div class="fixed-buttons__box-link">
        <a href="tel:0871798894" style="height: 100%; border-right: 1px solid white; padding-right: 20px; width: 75px">
          <img src="./assets/img/svg/CallFixed.svg" alt="">
          <b>Call</b>
        </a>
      </div>
      <div class="fixed-buttons__box-link">
        <a href="https://api.whatsapp.com/send/?phone=%2B3530871798894&text&type=phone_number&app_absent=0">
          <img src="./assets/img/svg/wappFixed.svg" alt="">
          <b>WhatsApp</b>
        </a>
      </div>
      <div class="fixed-buttons__box-link" style="height: 100%; border-left: 1px solid white; padding-left: 20px; width: 75px">
        <a href="https://mail.google.com/mail/u/0/#sent">
          <svg viewBox="-0.5 0 25 25" fill="none" xmlns="http://www.w3.org/2000/svg" style="width: 24px;">
            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
            <g id="SVGRepo_iconCarrier">
              <path
                d="M9.00977 21.39H19.0098C20.0706 21.39 21.0881 20.9685 21.8382 20.2184C22.5883 19.4682 23.0098 18.4509 23.0098 17.39V7.39001C23.0098 6.32915 22.5883 5.31167 21.8382 4.56152C21.0881 3.81138 20.0706 3.39001 19.0098 3.39001H7.00977C5.9489 3.39001 4.93148 3.81138 4.18134 4.56152C3.43119 5.31167 3.00977 6.32915 3.00977 7.39001V12.39"
                stroke="#ffffff" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round"></path>
              <path d="M1.00977 18.39H11.0098" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path d="M1.00977 15.39H5.00977" stroke="#ffffff" stroke-width="1.5" stroke-linecap="round"
                stroke-linejoin="round"></path>
              <path d="M22.209 5.41992C16.599 16.0599 9.39906 16.0499 3.78906 5.41992" stroke="#ffffff" stroke-width="1.5"
                stroke-linecap="round" stroke-linejoin="round"></path>
            </g>
          </svg>
          <b>E-mail</b>
        </a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  data() {
    return {
      fullName: '',
      phoneNumber: '',
      toggleHomeLinks: false,
      showScrollButton: false,
    }
  },
  methods: {
    async submitForm() {
      // Existing code for form submission...

      // Отправка сообщения в Telegram
      const telegramBotToken = '6565401181:AAFP5d0XZKie6oMUzEK34_XyImL3I-2ZACk';
      const chatId = '5807785203';
      const message = `🌐FeedBack Form (website)\n👨 Name: ${this.fullName}\n📞 Phone: ${this.phoneNumber}`;

      try {
        await axios.get(`https://api.telegram.org/bot${telegramBotToken}/sendMessage`, {
          params: {
            chat_id: chatId,
            text: message,
          },
        });

        // Успешно отправлено в Telegram
        console.log('Сообщение успешно отправлено в Telegram');
      } catch (error) {
        // Обработка ошибок при отправке в Telegram
        console.error('Ошибка при отправке сообщения в Telegram', error);
      }
    },
    toggleLinks() {
      this.toggleHomeLinks = !this.toggleHomeLinks;
    },
    scrollToTop() {
      window.scrollTo({
        top: 0,
        behavior: 'smooth',
      });
    },
    checkScrollPosition() {
      const scrollY = window.scrollY;
      const windowHeight = window.innerHeight;
      const pageHeight = document.documentElement.scrollHeight;

      this.showScrollButton = scrollY > pageHeight * 0.3;
    },
  },
  mounted() {
    // Add the scroll event listener when the component is mounted
    window.addEventListener('scroll', this.checkScrollPosition);
  },
  beforeUnmount() {
    // Remove the scroll event listener when the component is unmounted to prevent memory leaks
    window.removeEventListener('scroll', this.checkScrollPosition);
  },
}
</script>
<style lang="scss">
.service-prices-items__item {
  min-width: 140px;
}
.service-prices-items__item {
  @media (max-width: 767px) {
    -webkit-box-shadow: 5px 5px 5px 0px #00c2a7 !important;
    -moz-box-shadow: 5px 5px 5px 0px #00c2a7 !important;
    box-shadow: 5px 5px 5px 0px #00c2a7 !important;
  }
}
.enter {
  @media (max-width: 1040px) {
    
  }
}
.service-prices-items__item-desc {
  color: black !important;
}
.service-prices-items__item-price {
  color: black !important;
}
.additional-service-component-name img {
  margin-right: 10px;
}
.buttons-container {
  span {
    width: 60px;
  }
}
.article-text p {
  @media (max-width: 767px) {
    font-size: 14px !important;
  }
}
.fixed-buttons {
  display: none;
  position: fixed;
  background: #73C1C3;
  width: 100%;
  height: 60px;
  bottom: 0vh;
  z-index: 12300;
  @media (max-width: 767px) {
    display: block;
  }
  &__box {
    display: flex;
    justify-content: space-evenly;
    align-items: center;
    padding: 7px;
    &-link {
      a {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        color: white;
        b {
          font-size: 14px;
        }
        img {
          width: 24px;
        }
      }
    }
  }
}

@media (max-width: 767px) {
  .modal-products-content__box {
    padding-top: 0;
  }
}

// slider-styles
.swiper-button-prev,
.swiper-button-next {
  color: #00C2A7 !important;
}

.service-content {
  margin-top: 50px;
}

.pdf__files {
  ul {
    flex-direction: column;
    display: flex;
    align-items: flex-start;
    justify-content: center;
    padding-left: 12%;
    list-style: none;

    li {
      margin-bottom: 15px;

      a {
        display: flex;
        justify-content: flex-start;
        align-items: center;
        text-decoration: none;
        color: white;
      }
    }
  }

  &-img {
    max-width: 45px;
    width: 100%;
    margin-right: 20px;

    img {
      width: 100%;
    }
  }

  &-text {
    font-size: 20px;
  }
}

.service-prices__desc {
  display: flex;
  justify-content: center;
}

.service-prices-items__item-desc {
  text-align: center;
}

.service-prices__title {
  padding: 0 !important;

  b {
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media (max-width: 1000px) {
    b {
      font-size: 32px;
    }
  }

  @media (max-width: 768px) {
    b {
      font-size: 24px;
    }
  }
}

.service-prices-items__item {
  border-radius: 15px;
  background: #264F68;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 350px;

  &-img {
    margin-top: 20px;
  }

  &-price {
    margin-bottom: 20px;
  }

  @media (max-width: 570px) {
    max-width: 150px;
    width: 100%;
  }

  @media (max-width: 968px) {
    height: 230px;
  }
}

.enter {
  display: flex;
  flex-direction: column;


  input {
    font-size: 18px;
    margin-bottom: 15px;
    padding: 20px 35px;
    border-radius: 15px;


    &:hover {
      border: 2px solid #00C2A7;
    }


    &:focus {
      border: 2px solid #00C2A7;
      outline: none;
    }


    @media (max-width: 767px) {
      padding: 14px 24px;
    }
  }
}

.service-prices-items__item-title {
  text-align: center;
}

.width {
  width: 120px !important;
}

.left {
  left: 30% !important;
}

.call-me {
  left: 70% !important;
}

.flex {
  button {
    margin: 0 auto;
  }
}

.swiper-pagination-bullet-active {
  background: #00C2A7 !important;
}

// container-style
.wrap {
  max-width: 1440px;
  width: 100%;
  margin: 0 auto;
  padding-right: 20px;
  padding-left: 20px;
}

.swiper-button-prev,
.swiper-button-next {
  /* Set the desired width and height for the arrows */
  width: 10px !important;
  height: 0px !important;
}

.swiper-button-prev,
.swiper-button-next {
  /* Set the desired width and height for the arrows */
  width: 10px !important;
  height: 0px !important;
}

// Кнопка
.include_button {
  cursor: pointer;
  height: 50px;
  width: 200px;
  margin: 0 auto;
  text-align: center;
  padding: 15px;
  background: #00C2A7;
  border-radius: 5px;
  color: white;
  transition: .7s;

  &:hover {
    background: unset;
    border: 2px solid #00C2A7;
    color: #00C2A7;
  }


  a {
    text-decoration: none;
    color: white;


    &:hover {
      color: #00C2A7
    }
  }
}</style>

