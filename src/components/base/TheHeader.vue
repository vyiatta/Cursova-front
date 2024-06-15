<template>
  <header class="header">
    <div class="discount-fixed" style="position: fixed; width: 100%; z-index: 100011; background: #00C2A7">
      <div style="display: flex; justify-content: center; align-items: center; padding-top: 2px;">
        <p style="margin-left: 15px; margin-right: 10px; color: white;">Download the App for
          Free</p>
        <div class="mobile-app__downloads" style="margin-top: 10px; margin-bottom: 10px;">
          <div class="mobile-app__download" style=" margin-right: 5px;">
            <img src="@/assets/img/PlayMarket.png" alt="" style="min-width: 40px; min-height: 25px;">
          </div>
          <div class="mobile-app__download" style="margin-right: 12px;">
            <img src="@/assets/img/AppStore.png" alt="" style="min-width: 40px; min-height: 25px;">
          </div>
        </div>
      </div>
    </div>
    <div class="discount-fixed">
      <div class="discount-fixed__text">
        <p>Download the App for Free</p>
      </div>
      <div class="discount-fixed__images">
        <div class="discount-fixed__images-item">
          <img src="" alt="">
        </div>
        <div class="discount-fixed__images-item"></div>
      </div>
    </div>
    <div class="header__wrap wrap" style="position: relative">
      <div class="header__line" v-if="displayBurgerMenu === false" style="padding-top: 30px;">
        <div class="header__logo">

          <a href="/" style="display: flex; align-items: center;">
            <img src="../../assets/img/png/logo2.jpg" alt="" style="max-width: 60px; width: 100%;">
            <div class="logo-text" style="max-width: 120px; width: 100%; padding-top: 10px;">
              <img src="../../assets/img/png/logo.jpg" alt="Логотип Cleanora" style="width: 100%;" />
            </div>
          </a>
        </div>
        <div class="header__contact">
          <!-- Контактная информация -->
          <a href="https://wa.me/+3530871798894" style="text-decoration: none;">
            <div class="header__contact-box">
              <div class="header__contact-img">
                <img src="../../assets/img/svg/WhatsApp.svg" alt="Cleanora" style="width: 40px;">
              </div>
              <div class="header__contact-text" style="margin-left: 15px;">
                <div class="header__contact-text-title">
                  <h3>WhatsApp</h3>
                </div>
                <div class="header__contact-text-phone">
                  <p style="color: #111B24">0871798894</p>
                </div>
              </div>
            </div>
          </a>
          <a href="tel:0871798894" style="text-decoration: none;">
            <div class="header__contact-box">
              <div class="header__contact-img">
                <img src="../../assets/img/svg/Call.svg" alt="Cleanora" style="width: 40px;">
              </div>
              <div class="header__contact-text" style="margin-left: 15px;">
                <div class="header__contact-text-title">
                  <h3>Call a free quote</h3>
                </div>
                <div class="header__contact-text-phone">
                  <p style="color: #111B24">0871798894</p>
                </div>
              </div>
            </div>
          </a>
          <a href="/register" style="text-decoration: none;">
            <div class="header__contact-box">
              <div class="header__contact-img">
                <img src="../../assets/img/svg/account.svg" alt="Cleanora" style="width: 40px;">
              </div>
              <div class="header__contact-text" style="margin-left: 15px;">
                <div class="header__contact-text-title">
                  <h3>Sign Up</h3>
                </div>
                <div class="header__contact-text-phone">
                  <p style="color: #111B24"></p>
                </div>
              </div>
            </div>
          </a>
        </div>
        <!-- Бургер меню для мобильных устройств -->
        <div class="header__burger" @click="this.displayBurgerMenu = !this.displayBurgerMenu"
          :class="{ 'active': displayBurgerMenu }">
          <span></span>
          <span></span>
          <span></span>
        </div>
      </div>
      <div class="header__nav">
        <div class="header__nav-block">
          <div class="header__nav-links">
            <div class="dropdown" @click="this.displayMenu = !this.displayMenu">
              <p style="cursor: pointer">For Home</p>
              <div class="header__nav-links-select" :style="{ display: displayMenu ? 'block' : 'none' }">
                <ul>
                  <li v-for="listHome in forHome" :key="listHome.id" class="header__nav-links-select-item arrow-li">
                    <a :href="listHome.link">{{ listHome.desc }}</a>
                  </li>
                </ul>
              </div>
            </div>
            <a href="/commercial">
              <p>For Commercial</p>
            </a>
            <a href="/price">
              <p>Price</p>
            </a>
            <a href="/About">
              <p>About</p>
            </a>
            <a href="/Contacts">
              <p>Contacts</p>
            </a>
          </div>
          <div class="header__nav-social">
            <a href="https://instagram.com/cleanora_dublin" style="color: black">
              <img src="@/assets/img/svg/Instagram.svg" alt="Instagram Cleanora">
              Instagram
            </a>
            <a href="https://yotubube.com/@cleanora" style="color: black">
              <img src="/youtube.svg" alt="YouTube Cleanora" style="width: 24px">
              YouTube
            </a>
          </div>
        </div>
      </div>
      <div class="burger-menu" v-if="displayBurgerMenu" style="overflow: hidden">
        <div class="header__line" style="padding-top: 30px;">
          <div class="header__logo">

            <a href="/" style="display: flex; align-items: center;">
              <img src="../../assets/img/png/logo2.jpg" alt="" style="max-width: 60px; width: 100%;">
              <div class="logo-text" style="max-width: 120px; width: 100%; padding-top: 10px;">
                <img src="../../assets/img/png/logo.jpg" alt="Логотип Cleanora" style="width: 100%;" />
              </div>
            </a>
          </div>
          <div class="header__contact">
            <!-- Контактная информация -->
            <a href="https://wa.me/+3530871798894" style="text-decoration: none;">
              <div class="header__contact-box">
                <div class="header__contact-img">
                  <img src="../../assets/img/svg/WhatsApp.svg" alt="Cleanora" style="width: 40px;">
                </div>
                <div class="header__contact-text" style="margin-left: 15px;">
                  <div class="header__contact-text-title">
                    <h3>WhatsApp</h3>
                  </div>
                  <div class="header__contact-text-phone">
                    <p style="color: #111B24">0871798894</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="tel:0871798894" style="text-decoration: none;">
              <div class="header__contact-box">
                <div class="header__contact-img">
                  <img src="../../assets/img/svg/Call.svg" alt="Cleanora" style="width: 40px;">
                </div>
                <div class="header__contact-text" style="margin-left: 15px;">
                  <div class="header__contact-text-title">
                    <h3>Call a free quote</h3>
                  </div>
                  <div class="header__contact-text-phone">
                    <p style="color: #111B24">0871798894</p>
                  </div>
                </div>
              </div>
            </a>
            <a href="/register" style="text-decoration: none;">
              <div class="header__contact-box">
                <div class="header__contact-img">
                  <img src="../../assets/img/svg/account.svg" alt="Cleanora" style="width: 40px;">
                </div>
                <div class="header__contact-text" style="margin-left: 15px;">
                  <div class="header__contact-text-title">
                    <h3>Sign Up</h3>
                  </div>
                  <div class="header__contact-text-phone">
                    <p style="color: #111B24"></p>
                  </div>
                </div>
              </div>
            </a>
          </div>
          <!-- Бургер меню для мобильных устройств -->
          <div class="header__burger" @click="this.displayBurgerMenu = !this.displayBurgerMenu"
            :class="{ 'active': displayBurgerMenu }">
            <span></span>
            <span></span>
            <span></span>
          </div>
        </div>
        <div class="header__top-links" style="display: flex">
          <a href="/" @click="toggleBurgerMenu">Main</a>
          <div class="dropdownMenu" @click="toggleMenu" style="text-align: center">
            <p style="cursor: pointer; margin-bottom: 0;">For Home <i class="arrow-icon" :class="{ 'arrow-rotated': displayMenu }"></i></p>
            <div :style="{ display: displayMenu ? 'block' : 'none' }">
              <ul style="list-style-type: none;">
                <li v-for="listHome in forHome" :key="listHome.id" class="arrow-li"
                  style="margin: 14px; color: #737373 !important" @click="toggleBurgerMenu">
                  <a :href="listHome.link">{{ listHome.desc }}</a>
                </li>
              </ul>
            </div>
          </div>
          <a href="/commercial" style="margin-top: 10px" @click="toggleBurgerMenu">For Commercial</a>
          <a href="/Price" @click="toggleBurgerMenu">Price</a>
          <a href="/about" @click="toggleBurgerMenu">About</a>
          <a href="/contacts" @click="toggleBurgerMenu">Contacts</a>
        </div>
        <div class="header__contact-mobile" style="display: flex;">
          <b style="text-align: center;">Account Managment</b>
          <div class="block-linksss" style="display: flex; flex-direction: column; align-items: center;">
            <div>
              <a href="/register" style="text-decoration: none;">
                <div class="header__contact-box"
                  style="    width: 150px !important; margin: 10px auto; margin-top: 15px; text-align: center !important; display: flex !important; justify-content: center !important;">
                  <div class="header__contact-text">
                    <div class="header__contact-text-title">
                      <h3>Sign Up</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
            <div>
              <a href="/login" style="text-decoration: none;">
                <div class="header__contact-box" style="width: 150px !important;
    text-align: center !important;
    display: flex !important;
    justify-content: center !important;">
                  <div class="header__contact-text">
                    <div class=" header__contact-text-title">
                      <h3>Login</h3>
                    </div>
                  </div>
                </div>
              </a>
            </div>
          </div>
          <!-- Ссылка на Instagram для мобильных устройств -->

          <div class="header__nav-social-mobile" style="margin-bottom: 40px; display: flex; flex-direction: column;">
            <b>Follow Us :</b>
            <a href="https://instagram.com/cleanora_dublin">
              <img src="@/assets/img/svg/Instagram.svg" alt="Instagram Cleanora" />
              Instagram
            </a>
            <a href="https://youtube.com/@Cleanora">
              <img src="/youtube.svg" alt="Instagram Cleanora" />
              YouTube
            </a>
          </div>
        </div>
      </div>

    </div>
  </header>
</template>

<script>
export default {
  data() {
    return {
      displayBurgerMenu: false,
      displayMenu: false,
      forHome: [
        {
          id: 1,
          desc: 'Upholstery',
          link: 'upholstery-cleaning'
        },
        {
          id: 2,
          desc: 'Leather',
          link: 'leather-cleaning'
        },
        {
          id: 3,
          desc: 'Mattress',
          link: 'mattress-cleaning'
        },
        {
          id: 4,
          desc: 'Carpet',
          link: 'carpet-cleaning'
        },
        {
          id: 5,
          desc: 'Rug',
          link: 'rug-cleaning'
        },
        {
          id: 6,
          desc: 'Curtains',
          link: 'curtain-and-blind-cleaning'
        },
      ],
    };
  },
  methods: {
    toggleMenu() {
      this.displayMenu = !this.displayMenu;
    },
    toggleMenuMobile() {
      this.displayMenuMobile = !this.displayMenuMobile;
    },
    toggleBurgerMenu() {
      this.displayBurgerMenu = !this.displayBurgerMenu;
    },
  },
};
</script>
<style scoped lang="scss">
.header__nav-social-mobile {
  @media (max-width: 767px) {
    display: flex;
    flex-direction: column !important;
    justify-content: center !important;
    align-items: center;
  }
}

.header__top-links {
  @media (max-width: 767px) {
    padding-top: 25px;

    p,
    a {
      font-size: 24px !important;
      color: #264F68 !important;
    }
  }
}

.dropdownMenu {
  ul {
    li {
      a {
        color: #00C2A7 !important;
      }
    }
  }
}

.header__logo {
  padding-left: 20px;
}

.wrap {
  padding: 0;
}

.burger-menu {
  position: fixed;
  z-index: 10000;
  background: white;
  height: 100vh;
  width: 100%;
}

.discount-fixed {
  font-size: 24px;

  @media (max-width: 767px) {
    font-size: 12px;
  }

}

.header {
  display: flex;
  flex-direction: column;

  &__top {
    &-links {
      flex-direction: column;
      justify-content: center;
      align-items: center;

      p {
        color: #73C1C3;
        text-decoration: none;
        font-size: 20px;
      }

      a {
        font-size: 20px;
        margin-bottom: 10px;
        color: #73C1C3;
        text-decoration: none;
      }

      li {
        margin-top: 15px;

        a {
          color: white;
          font-size: 16px;
        }
      }
    }
  }

  &__line {
    display: flex;
    justify-content: space-between;
    align-items: center;
  }

  &__logo {
    max-width: 350px;
    width: 100%;

    img {
      width: 100%;
    }
  }

  &__contact {
    display: flex;
    align-items: center;

    &-box {
      display: flex;
      align-items: center;
      max-width: 280px;

      &:not(:last-child) {
        margin-right: 20px;
      }
    }

    &-img {
      max-width: 20px;
      width: 100%;
      margin-right: 15px;

      img {
        width: 100%;
      }
    }

    &-text {
      margin-right: 15px;

      &-title {
        color: #1D7C8F;
        margin-bottom: 5px;

        h3 {
          font-size: 16px;
        }
      }
    }
  }
}

.header__nav {
  position: relative;
  max-width: 1920px;
  // width: 95%;
  margin: 0 auto;
  margin-bottom: 50px;

  &-block {
    display: flex;
    justify-content: space-between;
  }

  &-links {
    display: flex;
    align-items: center;

    a {
      text-decoration: none;
    }

    p {
      color: #111B24;
      padding: 20px;
      font-size: 18px;
      transition: .7s;

      &:hover {
        color: white;
        background-color: #32ACB1;
      }
    }

    &-select {
      display: block;

      ul {
        z-index: 10;
        cursor: pointer;
        list-style-type: none;
        position: absolute;
        margin-top: 20px;
        padding-top: 10px;
        left: 0;
        background: #111B24;
        border-radius: 15px;
        max-width: 400px;
        width: 100%;
        font-size: 18px;
        color: white;

        li {
          padding-left: 10px;
          margin-bottom: 20px;
          position: relative;

          a {
            color: white;

            &:hover {
              color: #32ACB1;
            }
          }

          &::before {
            content: '';
            display: inline-block;
            width: 12px;
            height: 12px;
            margin-right: 10px;
            background-image: url("@/assets/img/svg/Arrow.svg");
            background-repeat: no-repeat;
            background-position: center;
            opacity: 0;
            transition: opacity 0.3s;
          }

          &:hover {
            color: #32ACB1;
          }

          &:hover::before {
            opacity: 1;
            padding-left: 10px;
          }
        }
      }
    }
  }

  &-social {
    display: flex;
    align-items: center;

    a {
      padding-right: 20px;
      display: flex;
      align-items: center;
      text-decoration: none;
      color: white;

      img {
        margin-right: 15px;
      }
    }
  }
}

.header__burger {
  display: none;
  cursor: pointer;
  flex-direction: column;
  justify-content: space-between;
  width: 50px;
  height: 24px;
  padding: 5px;
  margin-left: auto;
  position: relative;

  span {
    position: absolute;
    width: calc(100% - 10px);
    height: 4px;
    background-color: #73C1C3;
    // margin-bottom: 2px;
    transition: 0.3s;
    transform: translateY(-50%);

    &:nth-child(1) {
      top: 0;
    }

    &:nth-child(2) {
      top: 50%;
    }

    &:nth-child(3) {
      top: 100%;
    }
  }

  /* Styling the burger icon when the menu is open */
  &.active {
    position: relative;

    span {
      top: 50%;

      &:nth-child(1) {
        transform: rotate(45deg);
        // margin: 0;
      }

      &:nth-child(2) {
        opacity: 0;
        // display: none;
      }

      &:nth-child(3) {
        transform: rotate(-45deg);
        // margin: 0;
      }
    }
  }
}

.header__wrap {
  @media (max-width: 967px) {
    position: absolute;
    background: white;
  }
}

.header__contact-mobile {
  display: none;
  margin-top: 20px;
  padding-top: 20px;
  border-top: 1px solid #73C1C3;
}

.header__nav-social-mobile {
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  grid-column-gap: 10px;
  grid-row-gap: 20px;
  padding-top: 10px;
  border-top: 1px solid #73C1C3;
  padding-left: 5px;

  a {
    text-decoration: none;
    color: black;
    font-size: 16px;
    display: inline-flex;
    align-items: center;

    img {
      margin-right: 10px;
      width: 20px;
      height: 20px;
    }
  }
}

@media (max-width: 968px) {
  .header__nav {
    display: none;
  }

  /* Hide the regular nav links on smaller screens */
  .header__nav-links {
    display: none;
  }

  /* Display the burger menu icon on smaller screens */
  .header__burger {
    display: flex;
    margin-right: 20px;
  }

  /* Display the contact info on mobile when the burger menu is open */
  .header__contact-mobile {
    flex-direction: column;
  }

  /* Hide the regular contact info on smaller screens when the burger menu is open */
  .header__contact {
    display: none;

    &-box {
      width: 280px;

      &:not(:last-child) {
        margin-right: 0;
      }

      &:first-child {
        margin-bottom: 20px;
      }
    }
  }
}

.arrow-icon {
  display: inline-block;
  width: 0;
  height: 0;
  vertical-align: middle;
  border: solid;
  border-width: 4px 4px 0 4px;
  border-color: #73C1C3 transparent transparent transparent;
  transition: transform 0.3s;
}

/* Стили для повернутой стрелки */
.arrow-rotated {
  transform: rotate(180deg);
}

// .header__burger.active span:nth-child(1) {
//   transform: translateY(7px) rotate(45deg);
// }

// .header__burger.active span:nth-child(2) {
//   opacity: 0;
// }

// .header__burger.active span:nth-child(3) {
//   transform: translateY(-7px) rotate(-45deg);
// }</style>
  