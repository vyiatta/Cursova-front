<template>
    <footer class="footer">
        <div class="footer__wrap wrap">
            <div class="footer-about" style="position: relative;">
                <div class="footer-about__socials" style="display: flex">
                    <div class="footer-about__logo" style="max-width: 140px;">
                        <img src="../../assets/img/png/logo.jpg" alt="" style="width: 100%">
                    </div>
                    <div class="footer-about__social">
                        <a href="https://instagram.com/cleanora_dublin"
                            style="display: flex; align-items: center; text-decoration: none; color: black; margin-bottom: 5px; margin-top: 10px;">
                            <img src="../../assets/img/png/main/Footer/inst.svg" alt="Cleanora"
                                style=" margin-right: 10px;">
                            Instagram
                        </a>
                        <a href="https://youtube.com/@cleanora"
                            style="display: flex; align-items: center; text-decoration: none; color: black">
                            <img src="/youtube.svg" alt="Cleanora" style="width: 16px; margin-right: 10px;">
                            YouTube
                        </a>
                    </div>
                </div>
                <div class="footer-about__desc footer-article-text">
                    <p style="max-width: 360px; margin: 10px 0px;">
                        We, at Cleanora pride ourselves with the service we provide our clients, whether this be a
                        Commercial or Residential customer. We have fixed pricing and use the latest Eco Equipment and
                        chemicals and all operatives are fully trained, qualified and vetted. Call or email us today to make
                        a booking.
                    </p>
                </div>
            </div>
            <div class="footer-img">
                <img src="/footer.jpg" alt="">
            </div>
            <div class="footer-feeback">
                <div class="footer-feedback__title">
                    Account managment
                </div>
                <div class="footer-links">
                    <ul
                        style="display: flex; flex-direction: row; justify-content: center; align-items: center; margin-bottom: 20px;">
                        <li style=" margin-bottom: 0; border-radius: 15px; margin-right: 15px; color: black">
                            <router-link to="/login" @click="scrollToTop"
                                style=" color: #00364b; padding-bottom: 5px;">Login</router-link>
                        </li>
                        <li style=" margin-bottom: 0; color: #00C2A7;">
                            <router-link to="/login" style="padding-bottom: 5px; color: #00364b;" @click="scrollToTop">Sign
                                Up</router-link>
                        </li>
                    </ul>
                </div>
                <div class="footer-article-text" style="margin-bottom: 20px;">
                    Important Customer Alert: Please be aware that there are businesses that are illegally using the
                    <a href="/">Сleanora</a>
                    brand name to mislead and rip off unsuspecting customers. As a precaution, please use only the phone
                    number:
                    <a href="tel:0871798894">0871798894</a>
                    and web address:
                    <a href="/">cleanora.ie</a>
                    when looking for information on our services.
                  <a href="/privacy">Privacy policy</a>
                </div>
                <div class="footer-cards" style="display: flex; flex-direction: column; align-items: center;">
                    <div class="footer-card__text">
                        <div class="footer-cards__title">
                            PAYMENT OPTIONS
                        </div>
                        <div class="footer-card__desc"
                            style="max-width: 300px; color: black; text-align: left; font-size: 12px; padding-top: 10px; text-align: center">
                            We accept most debit and credit cards. Contact us if you have questions.
                        </div>
                    </div>
                    <div class="footer-cards__box-items">
                        <div class="footer-cards__box">
                            <img src="../../assets/img/png/cards/1.png" alt="" style="max-width: 50px; margin-right: 15px;">
                        </div>
                        <div class="footer-card__box" style="display: flex; align-items: center;">
                            <img src="../../assets/img/png/cards/img-2.png" alt="" style="max-width: 50px">
                        </div>
                        <div class="footer-card__box" style="display: flex; align-items: center;">
                            <img src="../../assets/img/png/cards/3.png" alt="" style="max-width: 50px">
                        </div>
                        <div class="footer-card__box" style="display: flex; align-items: center;">
                            <img src="../../assets/img/png/cards/img-4.png" alt="" style="max-width: 50px">
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="all-rights">
            <p>
                All rights reserved by Cleanora 2023©
            </p>


        </div>
    </footer>
</template>
  
<script>
import axios from 'axios';

export default {
    data() {
        return {
            fullName: '',
            phoneNumber: '',
            toggleHomeLinks: false,
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
    },
    setup() {
        const scrollToTop = () => {
            window.scrollTo({
                top: 0,
                behavior: 'smooth',
            });
        };

        return {
            scrollToTop,
        };
    },
};
</script>
  
<style scoped lang="scss">
.footer-article-text {
    a {
        color: rgb(0, 54, 75) !important;
        border-bottom: 1px solid rgb(0, 54, 75);;
    }
}
.footer-cards__title {
    text-align: center;
    color: black;
    font-size: 20px;

    @media (max-width: 767px) {
        font-size: 16px;
    }
}

.footer-feedback__title {
    font-size: 20px !important;
    color: black;

    @media (max-width: 767px) {
        font-size: 16px !important;
        color: black;
    }
}

.footer-feedback__inputs {
    padding-bottom: 0px !important;
}

.all-rights {
    background: #00C2A7;
    padding: 25px;
    position: absolute;
    width: 100%;

    @media (max-width: 767px) {
        padding: 20px;
    }

    p {
        margin-left: 15px;
        margin-right: 10px;
        color: white;
        text-align: center;
    }

    @media (max-width: 767px) {
        padding: 15px;

        p {
            font-size: 14px;
        }
    }
}

#btn-subscribe {
    border: #73C1C3;
}

#mobile {
    display: none;

    @media (max-width: 767px) {
        display: block;
    }
}

#desktop {
    display: block;

    @media (max-width: 767px) {
        display: none
    }
}

.footer-links__margin {
    display: flex;
    flex-direction: column;

    a {
        margin-bottom: 10px;
    }
}

.footer-cards__box-items {
    display: grid;
    grid-template-columns: repeat(4, 1fr);
}

.footer-feedback__inputs {
    .enter {
        margin: unset !important;
    }
}

.footer {
    background: white;
    border-top: 2px solid black;
    padding: 68px 0;
    width: 100%;

    @media (max-width: 767px) {
        margin-bottom: 40px;
    }

    &__wrap {
        display: grid;

        align-items: flex-start;
        grid-template-columns: repeat(3, 1fr);
        // justify-content: space-around;
        flex-direction: row;

        @media (max-width: 1040px) {
            grid-template-columns: repeat(2, 1fr);
        }

        @media (max-width: 767px) {
            grid-template-columns: repeat(1, 1fr);
            grid-row-gap: 20px;
        }

        @media (max-width: 966px) {
            flex-direction: column;
            /* For devices with width below 967px, change to column layout */
            align-items: center;
            /* Center items vertically */
        }
    }

    &-links {
        text-align: center;

        ul {
            cursor: pointer;
            padding-top: 10px;
            /* Updated to reduce padding for smaller screens */
            list-style-type: none;

            li {
                margin-bottom: 20px;

                &:first-child {
                    margin-bottom: 10px;
                }

                a,
                p {
                    color: white;
                    font-size: 20px;
                    transition: .7s;
                    text-decoration: none;

                    @media (max-width: 767px) {
                        font-size: 14px;
                    }

                    &:hover {
                        color: #73C1C3;
                    }
                }
            }

            @media (max-width: 966px) {
                flex-direction: column;
                /* For devices with width below 967px, change to column layout */
            }
        }
    }

    &-feedback {
        display: flex;
        flex-direction: column;
        align-items: center;

        @media (max-width: 966px) {
            padding-top: 30px;
            /* Add some spacing at the top for smaller screens */
        }

        &__title {
            font-size: 24px;
            display: flex;
            justify-content: center;
        }

        &__inputs {
            display: flex;
            flex-direction: column;
            padding: 20px 0;
        }
    }

    &-article {
        padding-right: 25px;
        padding-left: 25px;
        display: flex;
        align-items: center;
        /* Updated to align items at the top */
        max-width: 500px;
        flex-direction: column;
        text-align: center;

        @media (max-width: 966px) {
            margin-bottom: 30px;
            // align-items: center;
            max-width: 100%;
            /* Add some spacing at the bottom for smaller screens */
        }

        &-logo {
            max-width: 190px;
            // margin: 0 auto;
            width: 100%;

            img {
                width: 100%;
                margin-bottom: -30px;
            }
        }

        &-social {
            // max-width: 100px;
            margin: 20px 0;

            a {
                display: flex;
                align-items: center;
                color: #73C1C3;
                text-decoration: unset;

                img {
                    margin-right: 10px;
                }
            }
        }

        &-text {
            // max-width: 300px;
            font-size: 18px;

            @media (max-width: 966px) {
                font-size: 12px;
            }

            a {
                color: #73C1C3;
                text-decoration: unset;
            }
        }
    }
}

.footer-img {
    max-width: 350px;
    width: 100%;
    margin: 0 auto;

    img {
        width: 100%;
    }

    @media (max-width: 767px) {
        max-width: 250px
    }
}</style>