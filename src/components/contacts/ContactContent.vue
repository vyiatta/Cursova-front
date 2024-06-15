<template>
    <div class="contacts">
        <div class="contacts__wrap wrap">
            <div class="contacts__form">
                <div class="contacts__form-desc" style="color: black;"> Tell us </div>
                <div class="contacts__form-title"> Contacts Us </div>
                <div class="contacts__feedback" style="color: black;">
                    <form action=""><input type="text" placeholder="name"><input type="text"
                            placeholder="email adress"><input type="text" placeholder="tell us all about it"></form>
                    <div class="contacts__feedback-button"><button class="include_button">send</button></div>
                </div>
            </div>
            <div class="contacts__data">
                <div class="contacts__data-opening">
                    <div class="contacts__data-opening__title"> Speak to Us </div>
                    <div class="contacts__data-opening__desc">
                        <ul>
                            <li class="copyText" style="font-size: 20px">
                                <img src="../../assets/img/svg/email.svg" alt="" style="margin-right: 12px;">
                                cleanoraie@gmail.com
                            </li>
                            <a href="tel:0871798894" style="text-decoration: none;">
                                <li class="copyText" style="font-size: 20px; padding-right: 45px;">
                                    <img src="../../assets/img/svg/phone.svg" alt="" style="margin-right: 12px;">
                                    0871798894
                                </li>
                            </a>
                            <li class="copyText" style="font-size: 20px">
                                <svg fill="#00C2A7" viewBox="0 0 512 512" id="_x30_1" version="1.1" xml:space="preserve"
                                style="max-width: 32px; margin-right: 20px;"
                                    xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink">
                                    <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                    <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                                    <g id="SVGRepo_iconCarrier">
                                        <path
                                            d="M256,0C114.615,0,0,114.615,0,256s114.615,256,256,256s256-114.615,256-256S397.385,0,256,0z M418.275,146h-46.667 c-5.365-22.513-12.324-43.213-20.587-61.514c15.786,8.776,30.449,19.797,43.572,32.921C403.463,126.277,411.367,135.854,418.275,146 z M452,256c0,17.108-2.191,33.877-6.414,50h-64.034c1.601-16.172,2.448-32.887,2.448-50s-0.847-33.828-2.448-50h64.034 C449.809,222.123,452,238.892,452,256z M256,452c-5.2,0-21.048-10.221-36.844-41.813c-6.543-13.087-12.158-27.994-16.752-44.187 h107.191c-4.594,16.192-10.208,31.1-16.752,44.187C277.048,441.779,261.2,452,256,452z M190.813,306 c-1.847-16.247-2.813-33.029-2.813-50s0.966-33.753,2.813-50h130.374c1.847,16.247,2.813,33.029,2.813,50s-0.966,33.753-2.813,50 H190.813z M60,256c0-17.108,2.191-33.877,6.414-50h64.034c-1.601,16.172-2.448,32.887-2.448,50s0.847,33.828,2.448,50H66.414 C62.191,289.877,60,273.108,60,256z M256,60c5.2,0,21.048,10.221,36.844,41.813c6.543,13.087,12.158,27.994,16.752,44.187H202.404 c4.594-16.192,10.208-31.1,16.752-44.187C234.952,70.221,250.8,60,256,60z M160.979,84.486c-8.264,18.301-15.222,39-20.587,61.514 H93.725c6.909-10.146,14.812-19.723,23.682-28.593C130.531,104.283,145.193,93.262,160.979,84.486z M93.725,366h46.667 c5.365,22.513,12.324,43.213,20.587,61.514c-15.786-8.776-30.449-19.797-43.572-32.921C108.537,385.723,100.633,376.146,93.725,366z M351.021,427.514c8.264-18.301,15.222-39,20.587-61.514h46.667c-6.909,10.146-14.812,19.723-23.682,28.593 C381.469,407.717,366.807,418.738,351.021,427.514z">
                                        </path>
                                    </g>
                                </svg>
                                www.cleanora.ie
                            </li>
                        </ul>
                    </div>
                </div>
                <div class="contacts__data-opening">
                    <div class="contacts__data-opening__title"> opening hours </div>
                    <div class="contacts__data-opening__desc">
                        <ul style="margin-bottom: 0;">
                            <li>Monday - Friday</li>
                            <li>09 am - 08 pm</li>
                            <li>Weekend opened</li>
                            <li>09 am - 10 pm</li>
                        </ul>
                    </div>
                </div>
                <div class="contacts__data-opening">
                    <div class="contacts__data-opening__title"> Openeded Bank Holidays </div>
                    <div class="contacts__data-opening__desc" style="max-width: 400px">
                        <p>
                            Balbriggan,Ballyfermot, Blanchardstown,
                            Cabra, Clondalkin,Clontarf
                            Coolock, Donabate,Drumcondra Dublin City,
                            Dun Laoghaire,Finglas,
                            Glasnevin, Howth,Inchicore,
                            Lucan,Malahide,Palmerstown,
                            Portmarnock,Ranelagh,Rathcoole,
                            Rathfarnham Rathmines,Rush,Santry
                            Shankill, Skerries,Stillorgan
                            Swords,Tallaght,Terenure, Walkinstown
                        </p>
                    </div>
                </div>
            </div>
        </div>
        <div v-if="showCopied" class="copied-tooltip">Copied!</div>
    </div>
</template>

<script>
export default {
    data() {
        return {
            showCopied: false,
        };
    },
    mounted() {
        const copyTextItems = document.querySelectorAll(".copyText");
        copyTextItems.forEach((item) => {
            item.addEventListener("click", this.copyToClipboard);
        });
    },
    methods: {
        copyToClipboard(event) {
            const textToCopy = event.target.textContent.trim();
            const tempInput = document.createElement("input");
            tempInput.value = textToCopy;
            document.body.appendChild(tempInput);
            tempInput.select();
            document.execCommand("copy");
            document.body.removeChild(tempInput);

            this.showCopied = true;
            setTimeout(() => {
                this.showCopied = false;
            }, 1500); //
        },
    },
};
</script >

<style lang="scss">
.contacts__feedback input {
    color: black;
}

.copyText {
    display: flex;
    align-items: center;

    @media (max-width: 1100px) {
        justify-content: center;
    }

    img {
        max-width: 40px;
        width: 100%;

    }
}

.contacts {
    &__wrap {
        padding: 1rem;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: flex-start;
        margin-top: 100px;

        @media (max-width: 1100px) {
            flex-direction: column;
            margin-top: 50px;
        }
    }

    &__form {
        max-width: 400px;
        width: 100%;

        &-desc {
            font-size: 20px;
            color: #fff;
        }

        &-title {
            font-size: 48px;
            color: #32acb1;
        }
    }

    &__feedback {
        display: flex;
        flex-direction: column;

        input {
            width: 80%;
            font-size: 20px;
            background: none;
            border: none;
            border-bottom: 2px solid #333;
            margin-top: 35px;
            transition: .7s ease-in;
            margin-bottom: 35px;

            &:focus {
                width: 100%;
                border: none;
                outline: none;
                border-bottom: 2px solid #333;
            }
        }

        &-button {
            max-width: 200px;
            margin: 0 auto;

            button {
                font-family: Monserrat;
                font-size: 20px;
                padding: 12px 70px;
                border: none;
                color: #fff;
            }
        }
    }

    &__data {
        @media (max-width: 1100px) {
            text-align: center;
            margin-top: 30px;
        }

        &-opening {
            &__title {
                margin-bottom: 15px;
                color: #32acb1;
                font-size: 24px;
            }

            ul {
                list-style: none;
                margin-bottom: 40px;

                li {
                    color: black;
                    cursor: pointer;
                    margin-bottom: 10px;
                }
            }
        }
    }
}

.copied-tooltip {
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: #00C2A7;
    color: black;
    padding: 8px 16px;
    border-radius: 4px;
    font-size: 14px;
    z-index: 9999;
    pointer-events: none;
}</style>
