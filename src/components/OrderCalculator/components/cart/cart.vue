<template>
    <div class="cart">
        <div class="cart-icon" @click="toggleCartModal">
            <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                <g id="SVGRepo_iconCarrier">
                    <path
                        d="M3.86376 16.4552C3.00581 13.0234 2.57684 11.3075 3.47767 10.1538C4.3785 9 6.14721 9 9.68462 9H14.3153C17.8527 9 19.6214 9 20.5222 10.1538C21.4231 11.3075 20.9941 13.0234 20.1362 16.4552C19.5905 18.6379 19.3176 19.7292 18.5039 20.3646C17.6901 21 16.5652 21 14.3153 21H9.68462C7.43476 21 6.30983 21 5.49605 20.3646C4.68227 19.7292 4.40943 18.6379 3.86376 16.4552Z"
                        stroke="#1C274C" stroke-width="1.5"></path>
                    <path opacity="0.5"
                        d="M19.5 9.5L18.7896 6.89465C18.5157 5.89005 18.3787 5.38775 18.0978 5.00946C17.818 4.63273 17.4378 4.34234 17.0008 4.17152C16.5619 4 16.0413 4 15 4M4.5 9.5L5.2104 6.89465C5.48432 5.89005 5.62128 5.38775 5.90221 5.00946C6.18199 4.63273 6.56216 4.34234 6.99922 4.17152C7.43808 4 7.95872 4 9 4"
                        stroke="#1C274C" stroke-width="1.5"></path>
                    <path
                        d="M9 4C9 3.44772 9.44772 3 10 3H14C14.5523 3 15 3.44772 15 4C15 4.55228 14.5523 5 14 5H10C9.44772 5 9 4.55228 9 4Z"
                        stroke="#1C274C" stroke-width="1.5"></path>
                    <path opacity="0.5" d="M8 13V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    <path opacity="0.5" d="M16 13V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                    <path opacity="0.5" d="M12 13V17" stroke="#1C274C" stroke-width="1.5" stroke-linecap="round"
                        stroke-linejoin="round"></path>
                </g>
            </svg>
        </div>
        <div class="cart-modal" :class="{ 'cart-modal-open': cart_modal }">

            <div class="cart-content">
                <p>{{ totalSum }}</p>
                {{ additional }}
                <div class="close-btn" @click="toggleCartModal">
                    <svg viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                        <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g>
                        <g id="SVGRepo_iconCarrier">
                            <path fill-rule="evenodd" clip-rule="evenodd"
                                d="M8.4 3h11.2A2.4 2.4 0 0 1 22 5.4v11.2a2.4 2.4 0 0 1-2.4 2.4H8.4A2.4 2.4 0 0 1 6 16.6V5.4A2.4 2.4 0 0 1 8.4 3Zm3.479 4.464a1 1 0 1 0-1.415 1.415L12.586 11l-2.122 2.121a1 1 0 0 0 1.415 1.415L14 12.414l2.121 2.122a1 1 0 1 0 1.415-1.415L15.414 11l2.122-2.121a1 1 0 0 0-1.415-1.415l-2.12 2.122-2.122-2.122Z"
                                fill="#00C2A7"></path>
                            <path
                                d="M4 5a1 1 0 0 0-2 0v11.6C2 20.132 4.868 23 8.4 23H20a1 1 0 1 0 0-2H8.4A4.403 4.403 0 0 1 4 16.6V5Z"
                                fill="#00C2A7"></path>
                        </g>
                    </svg>
                </div>
                <div class="cart-items" :style="getCartModalPosition">
                    <div class="cart-items__item" v-for="(category, categoryName) in additional" :key="categoryName">
                        <h2>{{ categoryName }}</h2>
                        <div v-for="(subCategory, subCategoryName) in category" :key="subCategoryName">
                            <h3>{{ subCategoryName }}</h3>
                            <div v-for="(value, valueName) in subCategory" :key="valueName">
                                <p>{{ valueName }}: {{ value }}</p>
                            </div>
                        </div>
                    </div>
                    <div class="cart-items__item">
                        <div class="cart-items__item-img">
                            <img src="/cart.png" alt="">
                        </div>
                        <div class="cart-items__item-text">
                            <p>Ottoman</p>
                        </div>
                        <div class="cart-items__item-buttons">
                            <img src="@/assets/img/add-circle.svg" alt="">
                            <input type="number" name="" id="" max="100" min="0">
                            <img src="@/assets/img/remove-circle.svg" alt="">
                        </div>
                    </div>
                    <div class="cart-items__item">
                        <div class="cart-items__item-img">
                            <img src="/cart.png" alt="">
                        </div>
                        <div class="cart-items__item-text">
                            <p>Ottoman</p>
                        </div>
                        <div class="cart-items__item-buttons">
                            <img src="@/assets/img/add-circle.svg" alt="">
                            <input type="number" name="" id="">
                            <img src="@/assets/img/remove-circle.svg" alt="">
                        </div>
                    </div>
                    <div class="cart-items__item">
                        <div class="cart-items__item-img">
                            <img src="/cart.png" alt="">
                        </div>
                        <div class="cart-items__item-text">
                            <p>Ottoman</p>
                        </div>
                        <div class="cart-items__item-buttons">
                            <img src="@/assets/img/add-circle.svg" alt="">
                            <input type="number" name="" id="">
                            <img src="@/assets/img/remove-circle.svg" alt="">
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        totalSum: Number,
        additional: Object,
    },
    data() {
        return {
            cart_modal: false,
        };
    },
    methods: {
        toggleCartModal() {
            this.cart_modal = !this.cart_modal;
        },
    },
    computed: {
        getCartModalPosition() {
            if (this.cart_modal) {
                if (window.innerWidth <= 768) {
                    return {
                        transform: 'translateY(0)',
                    };
                } else {
                    return {
                        transform: 'translateX(0)',
                        right: 'initial',
                        left: 'calc(100% - 300px)',
                    };
                }
            } else {
                return {
                    transform: '',
                    right: '',
                    left: '',
                };
            }
        },
    },
};
</script>
  
<style lang="scss">
.close-btn {
    max-width: 32px;
    margin-right: auto;
    cursor: pointer;
}

.cart {
    &-icon {
        position: fixed;
        right: 20px;
        bottom: 20px;
        background: #00C2A7;
        border-radius: 25px;
        padding: 10px;
        z-index: 100000;

        svg {
            width: 65px;
        }

        @media (max-width: 1200px) {
            svg {
                width: 40px;
            }
        }

        @media (max-width: 600px) {
            bottom: 70px;

            svg {
                width: 32px;
            }
        }
    }
}

.cart-icon {
    cursor: pointer;
}

.cart-modal {
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    background-color: rgba(0, 0, 0, 0.5);
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0;
    visibility: hidden;
    transition: opacity 0.3s, visibility 0.3s, transform 0.3s;
    z-index: 100000;
}

.cart-modal-open {
    opacity: 1;
    visibility: visible;
}

.cart-content {
    position: fixed;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    background-color: white;
    width: 300px;
    max-width: 100%;
    border-radius: 8px;
    box-shadow: 0 2px 8px rgba(0, 0, 0, 0.2);
}

.cart-items {
    padding: 16px;
    display: flex;
    flex-direction: column;
    align-items: center;
    flex-wrap: nowrap;

    &__item {
        display: flex;
        flex-direction: row;
        align-items: center;

        &-text {
            p {
                margin: 0;
            }
        }

        &-img {
            max-width: 40px;
            width: 100%;

            img {
                width: 100%;
            }
        }

        &-buttons {
            display: flex;
            flex-direction: row;

            input {
                max-width: 50px;
                height: 30px;
                border: none;
                background: none;
                text-align: center;
                padding-left: 5px;
                font-size: 18px;
            }

            img {
                width: 35px;
            }
        }
    }
}

/* Добавьте медиа-запросы для адаптивного дизайна на телефоне и ПК */
@media (max-width: 768px) {
    .cart-modal {
        justify-content: flex-end;
        align-items: flex-start;
    }
}
</style>