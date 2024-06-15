<template>
    <div class="calc">
        <div class="calc__box">
            <div class="calc-title">
                <h2 style=" text-align: center;">Order Calculator</h2>
            </div>
        </div>
        <div style="display: flex; align-items: center; flex-direction: column;">
            <div>
            </div>
            <div class="confirm-order" style="display: flex; justify-content: center; align-items: center;">
                <div class="totalPrice" style="width: 230px; white-space: pre" @click="userButton = !userButton">Order cost {{ totalSum }} €</div>
                <div class="confirm-order_min">
                </div>
            </div>
        </div>
        <div class="v-desktop">
            <div class="modalWindow">
                <div class="modal-content wrap">
                    <aside>
                        <ul>
                            <li v-for="(tab, index) in serviceTabs" :key="index" style="display: flex; flex-direction: row;"
                                :class="{ 'active-window': currentTab === tab }" @click="switchTab(tab.name)">
                                <span></span>
                                {{ tab.name }}
                            </li>
                        </ul>
                    </aside>
                    <div class="modal-products">
                        <div class="modal-products-content" v-if="currentTab === 'Carpet'">
                            <CarpetTab v-model:sum="tabsSumList.carpetTab" v-model:additional="additional.Carpet"
                                v-model:prices="priceMap" />
                        </div>
                        <div class="modal-products-content" v-if="currentTab === 'Rug'">
                            <RugTab v-model:sum="tabsSumList.rugTab" v-model:additional="additional.Rugs"
                                v-model:prices="priceMap" />
                        </div>
                        <div class="modal-products-content" v-if="currentTab === 'Upholstery'">
                            <UpholsteryTab v-model:sum="tabsSumList.upholsteryTab"
                                v-model:additional="additional.Upholstery" v-model:prices="priceMap"
                                class="modal-products-content__items" />
                        </div>
                        <div class="modal-products-content" v-if="currentTab === 'Leather'">
                            <LeatherTab v-model:sum="tabsSumList.leatherTab" v-model:additional="additional.Leather"
                                v-model:prices="priceMap" class="modal-products-content__items" />
                        </div>
                        <div class="modal-products-content" v-if="currentTab === 'Curtains'">
                            <CurtainsTab v-model:sum="tabsSumList.curtainsTab" v-model:additional="additional.Curtains"
                                v-model:prices="priceMap" />
                        </div>
                        <div class="modal-products-content" v-if="currentTab === 'Hall and Stairs'">
                            <HallStairsTab v-model:sum="tabsSumList.hallStairs"
                                v-model:additional="additional.HallAndStairs" v-model:prices="priceMap" />
                        </div>
                        <div class="modal-products-content" v-if="currentTab === 'Mattress'">
                            <MattressTab v-model:sum="tabsSumList.mattressTab" v-model:additional="additional.Mattress"
                                v-model:prices="priceMap" />
                        </div>
                    </div>
                </div>
            </div>
        </div>
        <div class="v-mobile">
            <div class="modalWindow" style="display: flex; flex-direction: column;">
                <div class="modalWindow-row" style="display: flex; flex-direction: row;">
                    <p :class="{ active: currentTab === 'Carpet' }" @click="currentTab = 'Carpet'">Carpet</p>
                    <p :class="{ active: currentTab === 'Rug' }" @click="currentTab = 'Rug'">Rug</p>
                    <p :class="{ active: currentTab === 'Upholstery' }" @click="currentTab = 'Upholstery'">Upholstery</p>
                </div>
                <div class="modalWindow-row" style="display: flex; flex-direction: row;">
                    <p :class="{ active: currentTab === 'Leather' }" @click="currentTab = 'Leather'">Leather</p>
                    <p :class="{ active: currentTab === 'Curtains' }" @click="currentTab = 'Curtains'">Curtains</p>
                    <p :class="{ active: currentTab === 'Mattress' }" @click="currentTab = 'Mattress'">Mattress</p>
                </div>
                <div class="modalWindow-row" style="display: flex; flex-direction: row;">
                    <p :class="{ active: currentTab === 'Hall and Stairs' }" @click="currentTab = 'Hall and Stairs'">Hall
                        and Stairs</p>
                </div>
            </div>
            <div class="modal-products">
                <div class="modal-products-content" v-if="currentTab === 'Carpet'">
                    <CarpetTab v-model:sum="tabsSumList.carpetTab" v-model:additional="additional.Carpet"
                        v-model:prices="priceMap" />
                </div>
                <div class="modal-products-content" v-if="currentTab === 'Rug'">
                    <RugTab v-model:sum="tabsSumList.rugTab" v-model:additional="additional.Rugs"
                        v-model:prices="priceMap" />
                </div>
                <div class="modal-products-content" v-if="currentTab === 'Upholstery'">
                    <UpholsteryTab v-model:sum="tabsSumList.upholsteryTab" v-model:additional="additional.Upholstery"
                        v-model:prices="priceMap" class="modal-products-content__items" />
                </div>
                <div class="modal-products-content" v-if="currentTab === 'Leather'">
                    <LeatherTab v-model:sum="tabsSumList.leatherTab" v-model:additional="additional.Leather"
                        v-model:prices="priceMap" class="modal-products-content__items" />
                </div>
                <div class="modal-products-content" v-if="currentTab === 'Curtains'">
                    <CurtainsTab v-model:sum="tabsSumList.curtainsTab" v-model:additional="additional.Curtains"
                        v-model:prices="priceMap" />
                </div>
                <div class="modal-products-content" v-if="currentTab === 'Hall and Stairs'">
                    <HallStairsTab v-model:sum="tabsSumList.hallStairs" v-model:additional="additional.HallAndStairs"
                        v-model:prices="priceMap" />
                </div>
                <div class="modal-products-content" v-if="currentTab === 'Mattress'">
                    <MattressTab v-model:sum="tabsSumList.mattressTab" v-model:additional="additional.Mattress"
                        v-model:prices="priceMap" />
                </div>
            </div>
        </div>
    </div>
    <cart v-if="totalSum >= 85" :totalSum="totalSum" :additional="additional"/>
</template>
<script setup>
import { ref, computed, onMounted } from 'vue';
import CarpetTab from './components/CarpetTab.vue'
import RugTab from './components/RugTab.vue'
import MattressTab from './components/MattressTab.vue'
import CurtainsTab from './components/CurtainsTab.vue'
import UpholsteryTab from './components/UpholsteryTab.vue'
import LeatherTab from './components/LeatherTab.vue'
import HallStairsTab from './components/HallStairs.vue'
import cart from './components/cart/cart.vue'
import axios from 'axios'
const fetchedPrices = ref(null);
const priceMap = ref({
    "Armchair": 97.0,
    "Carpets-Shaggy": 25.0,
    "Carpets-handmade": 25.0,
    "Carpets-synthetics": 25.0,
    "Carpets-synthetics-pet-hair-cleaning": 25.0,
    "Carpets-synthetics-wool": 25.0,
    "Carpets-viscose-silk": 25.0,
    "Carpets-wool": 25.0,
    "Carpets-wool-pet-hair-cleaning": 25.0,
    "ChairWithBack": 89.0,
    "ChairWithoutBack": 86.0,
    "ChildrenMattress": 55.0,
    "Curtains": 25.0,
    "CurtainsSevereContamination": 0.0,
    "Deodorization": 0.0,
    "DoubleMattress": 75.0,
    "ExecutiveChair": 85.0,
    "HallAndStairsSevereContamination": 75.0,
    "Hallway": 55.0,
    "Headboard": 64.0,
    "KingSizeMattress": 90.0,
    "KitchenCorner": 86.0,
    "Leather-ottoman-width-40-80cm": 75.0,
    "Leather-ottoman-width-up-to-40cm": 50.0,
    "Leather-pillow-from-30-70cm-Wide": 76.0,
    "Leather-pillow-Up-to-30cm-Wide": 77.0,
    "Leather-seat-(50-60cm)-skin-softening-oil-cleaning": 68.0,
    "Leather-seat-With-silk-viscose-upholstery": 87.0,
    "LeatherArmchair": 81.0,
    "LeatherChair": 64.0,
    "LeatherDeodorization": 0.0,
    "LeatherSevereContamination": 0.0,
    "LeatherSleepingPlace": 81.0,
    "MattressesDeodorization": 69.0,
    "MattressesSevereContamination": 59.0,
    "OfficeArmchair": 65.0,
    "OfficeCarpet": 81.0,
    "OfficeChair": 63.0,
    "Ottoman-width-40-80cm": 69.0,
    "Ottoman-width-up-to-40cm": 92.0,
    "Pillow-from-30-70cm-Wide": 95.0,
    "Pillow-Up-to-30cm-Wide": 70.0,
    "Room-up-to-10m²": 62.0,
    "Room-up-to-20m²": 99.0,
    "Room-up-to-5m²": 87.0,
    "Rugs-from-10m²-to-15m²": 60.0,
    "Rugs-from-15m²-to-20m²": 80.0,
    "Rugs-from-20m²-to-30m²": 120.0,
    "Rugs-from-30m²-to-40m²": 160.0,
    "Rugs-from-40m²-to-50m²": 200.0,
    "Rugs-up-to-10m²": 40.0,
    "Rugs-up-to-3m²": 12.0,
    "Rugs-up-to-5m²": 20.0,
    "Rugs-up-to-7m²": 28.0,
    "RugsSevereContamination": 0.0,
    "Seat-With-silk-viscose-upholstery": 79.0,
    "Seat-With-vandal-proof-fabric": 51.0,
    "SingleMattress": 65.0,
    "SleepingPlace": 83.0,
    "Sofa-2-seats-(100-120cm)": 88.0,
    "Sofa-3-seats-(150-180cm)": 88.0,
    "Sofa-4-seats-corner": 75.0,
    "Sofa-5-seats-corner": 60.0,
    "Sofa-6-seats-(L-shaped)": 76.0,
    "Sofa-leather-2-seats-(100-120cm)": 64.0,
    "Sofa-leather-3-seats-(150-180cm)": 86.0,
    "Sofa-leather-4-seats-corner": 85.0,
    "Stairs": 3.0,
    "UpholsterySevereContamination": 74.0
});
// const priceMap = ref({})
// const instance = axios.create({
//     baseURL: 'http://ec2-18-202-177-29.eu-west-1.compute.amazonaws.com:8080/'
// })
// onMounted(async () => {
// instance
//     .get('/api/price/all')
//     .then(response => {
//         const PriceMap1 = {};
//         response.data.forEach(item => {
//             PriceMap1[item.priceId] = item.price;
//         });
//         priceMap = PriceMap1;
//     });
// });
const totalSum = computed(() => {
    let total = 0;

    for (const key in tabsSumList.value) {
        total += tabsSumList.value[key];
    }

    return total;
});
const tabsSumList = ref({
    carpetTab: 0,
    curtainsTab: 0,
    hallStairs: 0,
    leatherTab: 0,
    mattressTab: 0,
    rugTab: 0,
    upholsteryTab: 0,
})
const additional = ref({
    Rugs: {
        Rugs: [], RugsSevereContamination: 0
    },
    Carpet: { Carpet: [] },
    Upholstery: {
        Sofa: [],
        Seat: [],
        SleepingPlace: 0,
        Armchair: 0,
        ChairWithoutBack: 0,
        ChairWithBack: 0,
        KitchenCorner: 0,
        Headboard: 0,
        Pillow: [],
        Ottoman: [],
        Deodorization: 0,
        UpholsterySevereContamination: 0,
    },
    Leather: {
        SofaLeather: [],
        LeatherSeat: [],
        LeatherSleepingPlace: 0,
        LeatherArmchair: 0,
        LeatherChair: 0,
        LeatherPillow: [],
        LeatherOttoman: [],
        LeatherSevereContamination: 0,
        LeatherDeodorization: 0,
    },
    Curtains: { Curtains: [], },
    HallAndStairs: {
        Stairs: [],
        Hallway: 0,
        HallAndStairsLeatherSevereContamination: 0
    },
    Mattress: {
        ChildrenMattress: 0,
        SingleMattress: 0,
        DoubleMattress: 0,
        KingSizeMattress: 0,
        MattressesSevereContamination: 0,
        MattressesDeodorization: 0,
    },
})
</script>
<script>
import { Swiper, SwiperSlide } from 'swiper/vue';

import 'swiper/css';

import 'swiper/css/scrollbar';

import { Scrollbar } from 'swiper/modules';
export default {
    components: {
        Swiper,
        SwiperSlide,
        cart,
    },
    watch: {

    },
    data() {
        return {
            toggleCarpet: false,
            toggleRug: false,
            toggleUpholstery: false,
            toggleLeather: false,
            toggleCurtains: false,
            toggleHallStairs: false,
            toggleMattress: false,
            isChecked: false,
            confirm: false,
            userButton: false,
            userConfirm: false,

            openModal: false,
            currentTab: 'Upholstery',
            message: '',
            optionShow: false,
            selectedOptions: [],
            blocks: [
                {
                    servicelist: false,
                    selectedOption: '',
                    sliderValue: 0,
                },
            ],

            serviceTabs: [
                {
                    name: 'Upholstery',
                    link: new URL('../../assets/img/png/Services/Upholstery/icons/img-1__blue.svg', import.meta.url)
                },
                {
                    name: 'Leather',
                    link: new URL('../../assets/img/png/Services/Leather/icons/img-2__blue.svg', import.meta.url)
                },
                {
                    name: 'Mattress',
                    link: new URL('../../assets/img/png/Services/Matras/1.svg', import.meta.url)
                },
                {
                    name: 'Carpet',
                    link: new URL('../../assets/img/png/Services/Carpet/icons/img-1__blue.svg', import.meta.url)
                },
                {
                    name: 'Rug',
                    link: new URL('../../assets/img/png/Services/Carpet/icons/img-3__blue.svg', import.meta.url)
                },
                {
                    name: 'Curtains',
                    link: new URL('../../assets/img/png/Services/Curtains/1.svg', import.meta.url)
                },
                {
                    name: 'Hall and Stairs',
                    link: new URL('../../assets/img/png/Services/HallStairs/1.png', import.meta.url)
                },
            ],
            options: {
                Carpet: ['Synthetics', 'Synthetics + wool', 'Wool', 'Viscode + silk', 'Synthetics + pet hair cleaning', 'Wool + pet hair cleaning', 'Shaggy', 'Handmade', 'Carpet on stairs',],
                Rug: ['Up to 3м²', 'Up to 5м²', 'Up to 7м²', 'Up to 10м²', 'from 10м² to 15м²', 'from 15м² to 20м²', 'from 20м² to 30м²', 'from 30м² to 40м²', 'from 40м² to 50м²',],
                Upholstery: ['Sofa 2 seats (100-120cm)', 'Sofa 3 seats (150-180cm)', '4 seats + corner', '5 seats + corner', '6 seats (L-shaped)', 'Seat (50-60cm)', 'Sleeping', 'With vandal-proof fabric', 'With silk, viscose upholstery', 'Armchair (50-60cm)', 'Chair Without a soft backrest', 'Kitchen corner', 'Headboard', 'Pillow up 30cm wide', 'from 30-70 wide', 'Ottoman width up to 40cm', 'Ottoman width 40-80cm'],
                Leather: ['Sofa leather 2 seats (100-120cm)', 'Sofa leather 3 seats (150-180cm)', 'Sofa leather 4 seats + corner', 'Seat (50-60cm)', 'Seat (50-60cm) skin softening oil cleaning', 'Seet (50-60cm) cleaning with color restoration', 'Sleeping place Leather sofa', 'Leather Pillow up to 30cm wide', 'Lether Pillow from 30-70cm wide', 'Leather ottoman width up to 40cm', 'Leather ottoman width 40-80cm', 'Leather armchair (50-60cm)', 'Leather office chair with soft back',],
                Curtains: ['Tulle made of sanitary fabrics', 'Tulle made of natural fabrics', 'Curtains made of santactic fabrics', 'Curtains made of natural fabrics'],
                Mattress: ['Mattress for children 60x120 cm (on one side)', 'Single mattress 90x190 cm (on one side)', 'One-and-a-half mattress 120x190 cm (on one side)', 'Double mattress 160x200 cm (on one side)',],
                'Hall and Stairs': ['Hallway to Stairs', 'Stairs', 'Hallway']
            }
        };
    },
    methods: {
        showCarpetTab() {
            this.toggleCarpet = !this.toggleCarpet
        },
        showRugTab() {
            this.toggleRug = !this.toggleRug
        },
        showUpholsteryTab() {
            this.toggleUpholstery = !this.toggleUpholstery
        },
        showLeatherTab() {
            this.toggleLeather = !this.toggleLeather
        },
        showCurtainsTab() {
            this.toggleCurtains = !this.toggleCurtains
        },
        showHallStairsTab() {
            this.toggleHallStairs = !this.toggleHallStairs
        },
        showMattressTab() {
            this.toggleMattress = !this.toggleMattress
        },

        desktopTabs() {
            const width = window.innerWidth;
            if (width >= 1040) {
                this.currentTab = 'Carpet';
            } else {
                this.currentTab = '';
            }
        },
        openWindow() {
            this.openModal = true;
        },
        closeWindow() {
            this.openModal = false;
        },
        switchTab(tab) {
            this.currentTab = tab;
        },
        serviceToggle(index) {
            this.blocks[index].servicelist = !this.blocks[index].servicelist;
        },
        serviceToggleRug(index) {
            this.blocksRug[index].servicelist = !this.blocksRug[index].servicelist;
        },
        addBlockOption(index, option) {
            this.blocks[index].selectedOption = option;

            const existingOption = this.selectedOptions.find(
                (selectedOption) => Object.keys(selectedOption)[0] === option
            );

            if (existingOption) {
                existingOption[option] = this.blocks[index].sliderValue;
            } else {
                const newOption = {
                    name: option,
                };
                this.selectedOptions.push(newOption);
            }

            this.blocks[index].servicelist = false;
        },
        deleteBlock(index) {
            const priceToRemove = this.selectedOptions[index].sliderValue * 3;
            this.totalSum -= priceToRemove;
            this.selectedOptions.splice(index, 1);
            this.blocks.splice(index, 1)
        },
        addBlock() {
            this.blocks.push({
                servicelist: false,
                selectedOption: '',
                sliderValue: 0,
            });
        },
        totalPrice() {
            let total = 0;

            // Рассчитываем общую сумму
            for (const key in this.tabsSumList) {
                total += this.tabsSumList[key];
            }

            if (this.isChecked) {
                total *= 0.9; // Применить скидку
            }

            this.totalSum = total; // Сохраняем общую сумму в totalSum

            return total;
        }

    },
    setup() {
        return {
            modules: [Scrollbar],

        }
    },
}
</script>

<style lang="scss">
.success-message {
    display: flex;
    flex-direction: column;
    align-items: center;
    color: white;
    padding: 10px 20px;
    border-radius: 5px;
    text-align: center;
    margin-top: 20px;
    position: fixed;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background: #f8f8f8;
    padding: 40px;
    padding-bottom: 60px;

    p {
        background-color: #00C2A7;
        padding: 10px 20px;
        border-radius: 5px;
    }

    img {
        width: 250px;
    }
}

.email {
    background: url('/email.svg');
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    padding: 20px 36px 20px 20px;
    border-radius: 3px;
    margin-bottom: 10px;
    border: 1px solid rgba(92, 142, 133, .1);
    background-repeat: no-repeat;
    background-position: 94% center;
}

.pass {
    background: url('/pass.svg');
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    padding: 20px 36px 20px 20px;
    border-radius: 3px;
    margin-bottom: 10px;
    border: 1px solid rgba(92, 142, 133, .1);
    background-repeat: no-repeat;
    background-position: 94% center;
}

.phone {
    background: url('/phone.svg');
    box-sizing: border-box;
    background-size: 16px;
    width: 16px;
    font-size: 16px;
    padding: 20px 36px 20px 20px;
    border-radius: 3px;
    margin-bottom: 10px;
    border: 1px solid rgba(92, 142, 133, .1);
    background-repeat: no-repeat;
    background-position: 94% center;
}

.name {
    background: url('/name.svg');
    background-size: 16px;
    box-sizing: border-box;
    width: 16px;
    font-size: 16px;
    padding: 20px 36px 20px 20px;
    border-radius: 3px;
    margin-bottom: 10px;
    border: 1px solid rgba(92, 142, 133, .1);
    background-repeat: no-repeat;
    background-position: 94% center;
}

#button-new_user {
    border: 2px solid #00C2A7;
    max-width: 200px;
    width: 100%;
    margin: 0 auto;
    justify-content: center;
    display: flex;
    margin-bottom: 20px;
}

.user-login__forgot-password {
    padding-top: 20px;
    text-decoration: none;
    color: black;
    display: flex;
    justify-content: center;
}

form {
    padding-top: 40px;

    label {
        padding-top: 20px;
    }
}

.user-login {
    width: 400px;
    margin: 0 auto;
    margin-bottom: 50px;
    padding: 50px 30px;
    box-sizing: border-box;
    border-radius: 15px;
    background: #fff;
    box-shadow: 0px 1px 2px rgba(0, 0, 0, .05);
    border: 1px solid #e4e4e4;

    @media (max-width: 570px) {
        width: 300px;
    }
}

.user-login__heading {
    color: black;
    text-align: center;
    font-size: 24px;
}

.user-login__label {
    margin: 0;
    padding: 0;
    border: 0;
    font-size: 100%;
    font: inherit;
    vertical-align: baseline;
    color: black;
}

.user-login__input {
    box-sizing: border-box;
    width: 100%;
    font-size: 16px;
    padding: 20px 36px 20px 20px;
    margin-top: 10px;
    border-radius: 3px;
    margin-bottom: 10px;
    border: 1px solid rgba(92, 142, 133, .1);
    background-repeat: no-repeat;
    background-position: 94% center;
}

.calc {
    position: relative;
}
.totalPrice {
    @media (max-width: 1040px) {
        padding: 10px !important;
        font-size: 14px;
    }
}

.modalWindow-row {
    p {
        margin-right: 10px;
        border: 2px solid #00C2A7;
        padding: 5px;
        border-radius: 10px;
        margin: 5px;
    }
}

.modalWindow-row p.active {
    background: #00C2A7;
    color: white;
}

.calc-title {
    h2 {
        font-size: 32px;
    }

    @media (max-width: 1040px) {
        h2 {
            font-size: 28px;
        }
    }

    @media (max-width: 767px) {
        h2 {
            font-size: 24px;
        }
    }
}

.modal-products-content__items {
    display: grid;
    grid-template-columns: repeat(2, 1fr);
    grid-column-gap: 25px;
    grid-row-gap: 5px;

    @media (max-width: 1040px) {
        display: block;
        width: 90%;
        margin: 0 auto;
    }
}

.buttons-container {
    img {
        margin-left: 10px;
    }

    span {
        margin-left: 10px;
    }
}

.additional-service-container {
    @media (max-width: 1040px) {
        .additional-service-component-name {
            width: 60%;

            img {
                max-width: 24px;
            }

            span {
                font-size: 14px;
            }
        }

        .buttons-container {
            img {
                margin-left: 5px;
                max-width: 24px;
            }

            span {
                margin-left: 5px;
                margin-right: 0;
                width: 35px;
            }
        }
    }
}

.modal-products-content {
    min-height: 370px;

    @media (max-width: 1040px) {
        position: unset;
        min-height: 400px;
    }
}

.calc {
    background: white;
    z-index: 10000;
}

.confirm-order {
    padding-top: 20px;
    display: flex;
    flex-direction: column-reverse;
    align-items: flex-start;

    &_min {
        padding-right: 5px;
        margin-top: 20px;
        margin-bottom: 20px;
    }
}

.min-order {
    border-radius: 20px;
    transition: .7s;

    @media (max-width: 1040px) {
        display: none
    }
}

.totalPrice-none {
    @media (max-width: 767px) {
        display: none !important;
    }
}

.calc {
    user-select: none;

    &-title {
        display: flex;
        justify-content: center;
        font-size: 32px;
        margin-top: 40px;

        @media (max-width: 1040px) {
            font-size: 28px;
        }

        @media (max-width: 767px) {
            font-size: 24px;
        }
    }
}

.modal-products-content__title {
    h1 {
        @media (max-width: 1040px) {
            display: none;
        }
    }
}

.block-text {
    position: relative;
}

.totalPrice {
    margin: 10px 0px;
    background: #00C2A7;
    width: 200px;
    text-align: center;
    padding: 16px;
    border-radius: 15px;
    color: white;
    font-size: 20px;

    @media (max-width: 1040px) {
        margin: 10px auto;
    }
}

.modal-products {
    @media (max-width: 1040px) {
        display: none;
    }
}

.v-mobile {
    display: none;
}

@media (max-width: 1040px) {
    .v {
        &-mobile {
            display: block;
        }

        &-desktop {
            display: none;
        }
    }
}

.selected-option {
    display: flex;
    align-items: center;
}

.selected-option span {
    margin-left: 10px;
    margin-top: 8px;
    border-radius: 5px;
    background: #00C2A7;
    color: white;
    padding: 14px 15px;
}

input[type="range"] {
    -webkit-appearance: none;
    width: 100%;
    margin-top: 10px;
}

/* Определить стили для заполненной части ползунка */
input[type="range"]::-webkit-slider-runnable-track {
    background: #4CAF50;
    height: 8px;
    border-radius: 5px;
}

/* Определить стили для пустой части ползунка */
input[type="range"]::-webkit-slider-thumb {
    -webkit-appearance: none;
    background: #ffffff;
    width: 20px;
    height: 20px;
    border-radius: 50%;
    border: 2px solid #4CAF50;
    margin-top: -7px;
}

/* Изменить внешний вид при наведении */
input[type="range"]::-webkit-slider-thumb:hover {
    background: #4CAF50;
}

/* Изменить внешний вид при активации (нажатии) */
input[type="range"]::-webkit-slider-thumb:active {
    background: #4CAF50;
}

.list-product__config {
    margin-top: 20px;
}

.modal-products {
    @media (max-width: 1040px) {
        display: block !important;
    }
}

.modalWindow {
    z-index: 10;
    // position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100%;
    display: flex;
    justify-content: center;
    align-items: center;
    // background-color: rgba(0, 0, 0, 0.7);
    color: black;
}

.modal-content {
    width: 100%;
    background: unset;
    // border: 2px solid #111B24;
    border-radius: 20px;
    color: #111B24;
    padding: 20px 40px;
    display: flex;
    flex-direction: column;
    // overflow: auto;

    @media (max-width: 1040px) {
        min-width: 300px;
        width: 90%;
        text-align: center;
    }

    button {
        position: absolute;
        top: 10px;
        left: 10px;
        cursor: pointer;
        z-index: 11;
        max-width: 40px;
        width: 100%;
        border: none;
        background: unset;

        img {
            width: 100%;
        }
    }

    aside {
        width: 100%;
        margin-right: 6%;
        box-sizing: border-box;
        padding: 20px;
        background: unset;
        border-radius: 15px 0px 0px 15px;
        color: #111B24;

        @media (max-width: 1040px) {
            width: 100%;
        }

        ul {
            display: flex;
            flex-direction: row;
            padding: 20px;
            list-style: none;
            margin: 0px 60px;
            padding-right: 50px;

            @media (max-width: 1040px) {
                border: unset;
                margin: 20px 20px;
                display: flex;
                justify-content: center;
                flex-direction: column;
                align-items: center;
            }

            li {
                margin-right: 4rem;
                margin-bottom: 15px;
                font-size: 24px;
                cursor: pointer;
                transition: .7s;
                white-space: pre;

                &:hover {
                    color: #00C2A7;
                }
            }
        }
    }
}

.modal-products {
    @media (max-width: 1040px) {
        margin: 1rem 0;
    }

    &-content {

        &__box {
            padding-top: 20px;
            overflow: auto scrol;

            &-button {
                cursor: pointer;
                width: 250px;
                height: 45px;
                border-radius: 15px;
                display: flex;
                justify-content: center;

                p {
                    display: flex;
                    justify-content: center;
                    align-items: center;
                    padding-top: 12.5px;
                }

                &-img {
                    max-width: 30px;
                    margin-top: 7.5px;
                    margin-left: 20px;
                    width: 100%;

                    img {
                        width: 100%;
                    }
                }
            }

            &-list {
                ul {
                    list-style: none;
                    margin-top: 20px;

                    li {
                        margin-bottom: 10px;

                    }
                }
            }
        }
    }
}

.active-window {
    color: #00C2A7;
}

.modal-products-content__box-list {
    ul {
        list-style: none;
        margin-top: 20px;
        margin-left: 10px;

        li {
            margin-bottom: 10px;
            position: relative;
            cursor: pointer;
            font-size: 18px;

            &::before {
                content: '';
                position: absolute;
                top: 50%;
                left: -25px;
                transform: translateY(-50%);
                width: 10px;
                height: 10px;
                rotate: 45deg;
                border-top: 2px solid #00C2A7;
                border-right: 2px solid #00C2A7;
                transition: opacity .7s ease;
                opacity: 0;
            }

            &:hover::before {
                opacity: 1;
                rotate: 45deg;
            }
        }
    }
}

.modal-products-content__box-list.open:hover::before {
    rotate: 90deg;
}
</style>