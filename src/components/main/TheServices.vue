<template>
    <div class="services">
        <div class="services__wrap wrap">
            <div class="title services__title">
                <b>Services</b>
            </div>
            <ul class="tab-items">
                <li class="tab" @click="handleTabClick('tab-1')" :class="{ 'tab--active': activeTab === 'tab-1' }">
                    Upholstered furniture</li>
                <li class="tab" @click="handleTabClick('tab-2')" :class="{ 'tab--active': activeTab === 'tab-2' }">Carpets
                </li>
                <li class="tab" @click="handleTabClick('tab-3')" :class="{ 'tab--active': activeTab === 'tab-3' }">Curtains
                </li>
            </ul>
            <div class="tab-items-content">
                <div class="tab-items-content-item">
                    <div class="tab-pane" v-if="activeTab === 'tab-1'">
                        <div class="tab-pane__box">
                            <div class="tab-pane__box-item" v-for="item in upholstereds" :key="item.id">
                                <router-link @click="scrollToTop" :to="item.link"
                                    style="color: white; text-decoration: none;">
                                    <div class="tab-pane__box-item-img">
                                        <img :src="item.src" alt="">
                                    </div>
                                    <div class="tab-pane__box-item-text">
                                        <p style="width: 90%; text-align: left;">{{ item.title }}</p>
                                        <svg style="max-width: 20px; width: 100%;" fill="#00C2A7" version="1.1" id="Capa_1"
                                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 895.401 895.4" xml:space="preserve">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                            </g>
                                            <g id="SVGRepo_iconCarrier">
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M328.177,875.4c0,11,9,20,20,20h295.599c11,0,20-9,20-20V829.6H328.177V875.4z">
                                                        </path>
                                                        <path
                                                            d="M321.477,322.9l0.101-146.3c0-16.9,6.399-32.7,18.1-44.5c13-13,31.6-20.4,51.2-20.4c15.3,0,30,4.7,41.399,13.1 c13.801,10.2,22.4,25.6,24.2,43.2c0,0.4,7.9,76.7,15,145c49.7-29.2,83.2-83.2,83.2-145c0-92.8-75.2-168-168-168 c-92.8,0-168,75.2-168,168C218.577,237.6,260.977,297.4,321.477,322.9z">
                                                        </path>
                                                        <path
                                                            d="M716.176,513.801c0-19.5-12.5-36.801-31.1-42.801c-55.5-18.1-167.5-54.2-184.601-57.6c-5.3-1-10.5-1.5-15.5-1.5 c-13.5,0-25.3,3.7-32.399,10h-0.101c0,0,0,0,0-0.1c-0.1-0.801-25.899-250.3-25.899-250.7c-2.101-20-18.7-29.5-35.801-29.5 c-19.399,0-39.399,12.2-39.3,34.9l-0.2,404.301c0,4.799-3.5,8.799-8.3,9.5c-0.1,0-0.1,0-0.2,0c-0.399,0.1-0.899,0.1-1.3,0.1 c-0.1,0-0.2,0-0.3,0c-13.6-0.4-44.3-0.801-74.2-44.1c-4-5.701-7.6-10.9-10.9-15.701c-10.4-14.9-24.3-21.299-37.4-21.299 c-23,0-43.7,19.898-38.7,49.6c7.2,43.299,54.6,144.199,148,238.799h335.6l33.899-57.299c12.101-20.301,18.5-43.5,18.5-67.201 L716.176,513.801z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" v-if="activeTab === 'tab-2'">
                        <div class="tab-pane__box">
                            <div class="tab-pane__box-item" v-for="item in carpets" :key="item.id">
                                <router-link @click="scrollToTop" :to="item.link"
                                    style="color: white; text-decoration: none;">
                                    <div class="tab-pane__box-item-img">
                                        <img :src="item.src" alt="">
                                    </div>
                                    <div class="tab-pane__box-item-text">
                                        <p style="width: 90%; text-align: left;">{{ item.title }}</p>
                                        <svg style="max-width: 20px; width: 100%;" fill="#00C2A7" version="1.1" id="Capa_1"
                                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 895.401 895.4" xml:space="preserve">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                            </g>
                                            <g id="SVGRepo_iconCarrier">
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M328.177,875.4c0,11,9,20,20,20h295.599c11,0,20-9,20-20V829.6H328.177V875.4z">
                                                        </path>
                                                        <path
                                                            d="M321.477,322.9l0.101-146.3c0-16.9,6.399-32.7,18.1-44.5c13-13,31.6-20.4,51.2-20.4c15.3,0,30,4.7,41.399,13.1 c13.801,10.2,22.4,25.6,24.2,43.2c0,0.4,7.9,76.7,15,145c49.7-29.2,83.2-83.2,83.2-145c0-92.8-75.2-168-168-168 c-92.8,0-168,75.2-168,168C218.577,237.6,260.977,297.4,321.477,322.9z">
                                                        </path>
                                                        <path
                                                            d="M716.176,513.801c0-19.5-12.5-36.801-31.1-42.801c-55.5-18.1-167.5-54.2-184.601-57.6c-5.3-1-10.5-1.5-15.5-1.5 c-13.5,0-25.3,3.7-32.399,10h-0.101c0,0,0,0,0-0.1c-0.1-0.801-25.899-250.3-25.899-250.7c-2.101-20-18.7-29.5-35.801-29.5 c-19.399,0-39.399,12.2-39.3,34.9l-0.2,404.301c0,4.799-3.5,8.799-8.3,9.5c-0.1,0-0.1,0-0.2,0c-0.399,0.1-0.899,0.1-1.3,0.1 c-0.1,0-0.2,0-0.3,0c-13.6-0.4-44.3-0.801-74.2-44.1c-4-5.701-7.6-10.9-10.9-15.701c-10.4-14.9-24.3-21.299-37.4-21.299 c-23,0-43.7,19.898-38.7,49.6c7.2,43.299,54.6,144.199,148,238.799h335.6l33.899-57.299c12.101-20.301,18.5-43.5,18.5-67.201 L716.176,513.801z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                    <div class="tab-pane" v-if="activeTab === 'tab-3'">
                        <div class="tab-pane__box">
                            <div class="tab-pane__box-item" v-for="item in curtains" :key="item.id">
                                <router-link @click="scrollToTop" :to="item.link"
                                    style="color: white; text-decoration: none;">
                                    <div class="tab-pane__box-item-img">
                                        <img :src="item.src" alt="">
                                    </div>
                                    <div class="tab-pane__box-item-text">
                                        <p style="width: 90%; text-align: left;">{{ item.title }}</p>
                                        <svg style="max-width: 20px; width: 100%;" fill="#00C2A7" version="1.1" id="Capa_1"
                                            xmlns="http://www.w3.org/2000/svg" xmlns:xlink="http://www.w3.org/1999/xlink"
                                            viewBox="0 0 895.401 895.4" xml:space="preserve">
                                            <g id="SVGRepo_bgCarrier" stroke-width="0"></g>
                                            <g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round">
                                            </g>
                                            <g id="SVGRepo_iconCarrier">
                                                <g>
                                                    <g>
                                                        <path
                                                            d="M328.177,875.4c0,11,9,20,20,20h295.599c11,0,20-9,20-20V829.6H328.177V875.4z">
                                                        </path>
                                                        <path
                                                            d="M321.477,322.9l0.101-146.3c0-16.9,6.399-32.7,18.1-44.5c13-13,31.6-20.4,51.2-20.4c15.3,0,30,4.7,41.399,13.1 c13.801,10.2,22.4,25.6,24.2,43.2c0,0.4,7.9,76.7,15,145c49.7-29.2,83.2-83.2,83.2-145c0-92.8-75.2-168-168-168 c-92.8,0-168,75.2-168,168C218.577,237.6,260.977,297.4,321.477,322.9z">
                                                        </path>
                                                        <path
                                                            d="M716.176,513.801c0-19.5-12.5-36.801-31.1-42.801c-55.5-18.1-167.5-54.2-184.601-57.6c-5.3-1-10.5-1.5-15.5-1.5 c-13.5,0-25.3,3.7-32.399,10h-0.101c0,0,0,0,0-0.1c-0.1-0.801-25.899-250.3-25.899-250.7c-2.101-20-18.7-29.5-35.801-29.5 c-19.399,0-39.399,12.2-39.3,34.9l-0.2,404.301c0,4.799-3.5,8.799-8.3,9.5c-0.1,0-0.1,0-0.2,0c-0.399,0.1-0.899,0.1-1.3,0.1 c-0.1,0-0.2,0-0.3,0c-13.6-0.4-44.3-0.801-74.2-44.1c-4-5.701-7.6-10.9-10.9-15.701c-10.4-14.9-24.3-21.299-37.4-21.299 c-23,0-43.7,19.898-38.7,49.6c7.2,43.299,54.6,144.199,148,238.799h335.6l33.899-57.299c12.101-20.301,18.5-43.5,18.5-67.201 L716.176,513.801z">
                                                        </path>
                                                    </g>
                                                </g>
                                            </g>
                                        </svg>
                                    </div>
                                </router-link>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'Services',
    data() {
        return {
            activeTab: 'tab-1',
            upholstereds: [
                {
                    id: 1,
                    src: new URL('../../assets/img/png/main/Services/Uphoslered/img-1.jpg', import.meta.url),
                    title: 'Upholstery',
                    price: 'from 10€',
                    link: '/upholstery-cleaning'
                },
                {
                    id: 2,
                    src: new URL('../../assets/img/png/main/Services/Uphoslered/img-2.jpg', import.meta.url),
                    title: 'Upholstered furniture',
                    price: 'from 10€',
                    link: '/upholstery-cleaning'
                },
                {
                    id: 3,
                    src: new URL('../../assets/img/png/main/Services/Uphoslered/img-3.jpg', import.meta.url),
                    title: 'Leather furtniure',
                    price: 'from 10€',
                    link: '/leather-cleaning'
                },
                {
                    id: 4,
                    src: new URL('../../assets/img/png/main/Services/Uphoslered/img-4.jpg', import.meta.url),
                    title: 'Mattress cleaning',
                    price: 'from 10€',
                    link: '/mattress-cleaning'
                },
            ],
            carpets: [
                {
                    id: 1,
                    src: new URL('../../assets/img/png/main/Services/Carpets/img-2.jpg', import.meta.url),
                    title: 'Carpet Cleaning',
                    price: 'from 20€',
                    link: '/carpet-cleaning'
                },
                {
                    id: 2,
                    src: new URL('../../assets/img/png/main/Services/Carpets/img-1.jpg', import.meta.url),
                    title: 'Rugs Cleaning',
                    price: 'from 30€',
                    link: '/rug-cleaning'
                },
            ],
            curtains: [
                {
                    id: 1,
                    src: new URL('../../assets/img/png/main/Services/Curtains/img-1.jpg', import.meta.url),
                    title: 'Curtain Cleaning',
                    price: 'from 15€',
                    link: '/curtain-and-blind-cleaning'
                },
            ],
        };
    },
    methods: {
        handleTabClick(tab) {
            this.activeTab = tab;
        }
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

<style lang="scss">
.services {
    text-align: center;

    &__title {
        font-size: 30px;
        margin-bottom: 30px;
    }

    &__wrap {
        padding-top: 20px;
        padding-bottom: 0px;
    }
}

.tab {
    display: inline-block;
    border-radius: 15px;
    padding: 10px 20px;
    border: 2px solid #ccc;
    cursor: pointer;
    height: 40px;

    &:not(:last-child) {
        margin: 10px 10px 0 0;
    }

    @media (max-width: 500px) {
        &:not(:last-child) {
            margin-right: 0;
            margin-bottom: 10px;
            margin-top: 0;
        }
    }

    &.active {
        background-color: #00C2A7;
        border-color: #00C2A7;
        color: #fff;

        &:hover {
            color: #fff;
        }
    }

    &.tab--active {
        background-color: #00C2A7;
        border-color: #00C2A7;
        color: white;

        &:hover {
            color: #fff;
        }
    }

    &-items {
        list-style-type: none;
        margin: 0;
        padding: 0;

        @media (max-width: 500px) {
            display: flex;
            flex-direction: column;
            align-items: stretch;
        }
    }

    &-content {
        &-items {
            &-content {
                &-item {
                    display: block;
                }
            }
        }
    }

    &-pane {

        &__box {
            display: grid;
            grid-template-columns: repeat(2, 1fr);
            grid-gap: 40px;
            padding-top: 40px;

            @media (max-width: 767px) {
                grid-gap: 15px;
            }

            @media (max-width: 500px) {
                grid-template-columns: repeat(1, 1fr);
            }

            &-item {
                &-img {
                    margin-bottom: 5px;
                    width: 100%;
                    object-fit: cover;
                    height: 300px;

                    img {
                        max-width: 100%;
                        width: 570px;
                        object-fit: cover;
                        height: 100%;
                        width: 100%;
                        border-radius: 15px 15px 0px 0px;
                    }
                }

                &-text {
                    display: flex;
                    background: unset;
                    border: 3px solid #111B24;
                    border-radius: 0px 0 15px 15px;
                    font-size: 18px;
                    color: #111B24;
                    // height: 50px;
                    display: flex;
                    align-items: center;
                    padding: 15px;

                    @media (max-width: 767px) {
                        font-size: 12px;
                    }
                }

                @media (max-width: 767px) {
                    &-img {
                        height: 180px;
                    }

                    &-text {
                        height: auto;
                        padding: 10px;
                    }
                }

                // @media (max-width: 1200px) {
                //     max-width: 470px;

                //     &-img {
                //         margin-bottom: 5px;
                //         opacity: .8;
                //         max-height: 240px;
                //         max-width: 470px;
                //         width: 100%;
                //         height: 100%;
                //         object-fit: cover;

                //         img {
                //             max-width: 100%;
                //             width: 470px;
                //             object-fit: cover;
                //             max-height: 240px;
                //             height: 100%;
                //             border-radius: 15px 15px 0px 0px;
                //         }
                //     }
                //     &-text {
                //         font-size: 16px;
                //     }
                // }
                // @media (max-width: 968px) {
                //     max-width: 370px;

                //     &-img {
                //         margin-bottom: 5px;
                //         opacity: .8;
                //         max-height: 240px;
                //         max-width: 370px;
                //         width: 100%;
                //         height: 100%;
                //         object-fit: cover;

                //         img {
                //             max-width: 100%;
                //             width: 370px;
                //             object-fit: cover;
                //             max-height: 240px;
                //             height: 100%;
                //             border-radius: 15px 15px 0px 0px;
                //         }
                //     }
                //     &-text {
                //         font-size: 12px;
                //     }
                // }
                // @media (max-width: 670px) {
                //     max-width: 270px;

                //     &-img {
                //         margin-bottom: 5px;
                //         opacity: .8;
                //         max-height: 240px;
                //         max-width: 270px;
                //         width: 100%;
                //         height: 100%;
                //         object-fit: cover;

                //         img {
                //             max-width: 100%;
                //             width: 270px;
                //             object-fit: cover;
                //             max-height: 240px;
                //             height: 100%;
                //             border-radius: 15px 15px 0px 0px;
                //         }
                //     }
                //     &-text {
                //         font-size: 12px;
                //     }
                // }
                // @media (max-width: 540px) {
                //     max-width: 230px;

                //     &-img {
                //         margin-bottom: 5px;
                //         opacity: .8;
                //         max-height: 240px;
                //         max-width: 230px;
                //         width: 100%;
                //         height: 100%;
                //         object-fit: cover;

                //         img {
                //             max-width: 100%;
                //             width: 230px;
                //             object-fit: cover;
                //             max-height: 240px;
                //             height: 100%;
                //             border-radius: 15px 15px 0px 0px;
                //         }
                //     }
                //     &-text {
                //         font-size: 12px;
                //     }
                // }
                // @media (max-width: 440px) {
                //     max-width: 170px;

                //     &-img {
                //         margin-bottom: 5px;
                //         opacity: .8;
                //         max-height: 240px;
                //         max-width: 170px;
                //         width: 100%;
                //         height: 100%;
                //         object-fit: cover;

                //         img {
                //             max-width: 100%;
                //             width: 170px;
                //             object-fit: cover;
                //             max-height: 240px;
                //             height: 100%;
                //             border-radius: 15px 15px 0px 0px;
                //         }
                //     }
                //     &-text {
                //         font-size: 12px;
                //     }
                // }
                // @media (max-width: 370px) {
                //     max-width: 120px;

                //     &-img {
                //         margin-bottom: 5px;
                //         opacity: .8;
                //         max-height: 240px;
                //         max-width: 170px;
                //         width: 100%;
                //         height: 100%;
                //         object-fit: cover;

                //         img {
                //             max-width: 100%;
                //             width: 170px;
                //             object-fit: cover;
                //             max-height: 240px;
                //             height: 100%;
                //             border-radius: 15px 15px 0px 0px;
                //         }
                //     }
                //     &-text {
                //         font-size: 8px;
                //     }
                // }
            }
        }

        &.active {
            display: block;
        }
    }

    &:hover {
        color: #00C2A7;
        border: 2px solid #00C2A7;
    }
}
</style>
