<template>
    <div>
        <div class="col">
            <div>
                <div>
                    <div class="additional-service-container" style="flex: 1">
                        <div class="additional-service-component-name">
                            <img src="/sofaLight.png" style="max-height:40px" />
                            <span class="additional-service-name">Sofa</span>
                        </div>
                        <div class="buttons-container" style="display: flex; align-items: center;">
                            <img src="../../../assets/img/remove-circle.svg" alt="" @click="removeCarpet(), priceTotal()"
                                style="width: 36px" />
                            <span>{{ this.additional.Sofa.length }} pcs</span>
                            <img src="../../../assets/img/add-circle.svg" alt="" @click="addCarpet(), priceTotal()"
                                style="width: 36px" />
                        </div>
                    </div>

                    <div v-for="(carpet, index) in this.additional.Sofa" :key="index" class="carpet-section">
                        <div class="carpet-picker">
                            <select v-model="carpet.Size" @change="priceTotal()">
                                <option disabled value="">Select a type</option>
                                <option v-for="(item, i) in dataCarpet" :key="i" :value="item.value">{{ item.label }}
                                </option>
                            </select>
                            <ion-icon name="chevron-down-outline" size="24" color="#888" class="icon-picker"></ion-icon>
                        </div>
                    </div>
                </div>
            </div>
            <div>
                <div class="additional-service-container">
                    <div class="additional-service-component-name">
                        <img src="/seatLight.png" style="max-height:40px" />
                        <span class="additional-service-name">Seat (50-60cm)</span>
                    </div>
                    <div class="buttons-container" style="display: flex; align-items: center;">
                        <img src="../../../assets/img/remove-circle.svg" alt="" @click="removeSeat(), priceTotal()"
                            style="width: 36px; ;" />
                        <span style=";">{{ this.additional.Seat.length }} pcs</span>
                        <img src="../../../assets/img/add-circle.svg" alt="" @click="addSeat(), priceTotal()"
                            style="width: 36px; ;" />
                    </div>
                </div>

                <div v-for="(carpet, index) in additional.Seat" :key="index" class="carpet-section">
                    <div class="carpet-picker">
                        <select v-model="carpet.Size" @change="priceTotal()">
                            <option disabled value="">Select a type</option>
                            <option v-for="(item, i) in dataSeat" :key="i" :value="item.value">{{ item.label }}</option>
                        </select>
                        <ion-icon name="chevron-down-outline" size="24" color="#888" class="icon-picker"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="additional-service-container" style="padding-top: 20px;">
                <div class="additional-service-component-name">
                    <img src="/SleepingPlaceLight.png" style="max-height:40px" />
                    <span class="additional-service-name">Sleeping Place</span>
                </div>
                <div class="buttons-container" style="display: flex; align-items: center;">
                    <img :disabled="additional.SleepingPlace >= 0" src="../../../assets/img/remove-circle.svg" alt=""
                        @click="() => { if (this.additional.SleepingPlace > 0) { this.additional.SleepingPlace -= 1; priceTotal() } }"
                        style="width: 36px; ;" />
                    <span style=";">{{ this.additional.SleepingPlace }} pcs</span>
                    <img src="../../../assets/img/add-circle.svg" alt=""
                        @click="() => { this.additional.SleepingPlace += 1; priceTotal() }" style="width: 36px; ;" />
                </div>
            </div>
            <div class="additional-service-container" style="padding-top: 20px;">
                <div class="additional-service-component-name">
                    <img src="/armchairLight.png" style="max-height:40px" />
                    <span class="additional-service-name">Armchair</span>
                </div>
                <div class="buttons-container" style="display: flex; align-items: center;">
                    <img :disabled="this.additional.Armchair >= 0" src="../../../assets/img/remove-circle.svg" alt=""
                        @click="() => { if (this.additional.Armchair > 0) { this.additional.Armchair -= 1; priceTotal() } }"
                        style="width: 36px; ;" />
                    <span style=";">{{ this.additional.Armchair }} pcs</span>
                    <img src="../../../assets/img/add-circle.svg" alt=""
                        @click="() => { this.additional.Armchair += 1; priceTotal() }" style="width: 36px; ;" />
                </div>
            </div>
            <div class="additional-service-container" style="padding-top: 20px;">
                <div class="additional-service-component-name">
                    <img src="/LeatherChairWithoutBackLight.png" style="max-height:40px" />
                    <span class="additional-service-name">Chair (without a soft backrest)</span>
                </div>
                <div class="buttons-container" style="display: flex; align-items: center;">
                    <img :disabled="this.additional.ChairWithoutBack >= 0" src="../../../assets/img/remove-circle.svg"
                        alt=""
                        @click="() => { if (this.additional.ChairWithoutBack > 0) { this.additional.ChairWithoutBack -= 1; priceTotal() } }"
                        style="width: 36px; ;" />
                    <span style=";">{{ this.additional.ChairWithoutBack }} pcs</span>
                    <img src="../../../assets/img/add-circle.svg" alt=""
                        @click="() => { this.additional.ChairWithoutBack += 1; priceTotal() }" style="width: 36px; ;" />
                </div>
            </div>
            <div class="additional-service-container" style="padding-top: 20px;">
                <div class="additional-service-component-name">
                    <img src="/LeatherChairBLight.png" style="max-height:40px" />
                    <span class="additional-service-name">Chair (with a soft backrest)</span>
                </div>
                <div class="buttons-container" style="display: flex; align-items: center;">
                    <img :disabled="this.additional.ChairWithBack >= 0" src="../../../assets/img/remove-circle.svg" alt=""
                        @click="() => { if (this.additional.ChairWithBack > 0) { this.additional.ChairWithBack -= 1; priceTotal() } }"
                        style="width: 36px; ;" />
                    <span style=";">{{ this.additional.ChairWithBack }} pcs</span>
                    <img src="../../../assets/img/add-circle.svg" alt=""
                        @click="() => { this.additional.ChairWithBack += 1; priceTotal() }" style="width: 36px; ;" />
                </div>
            </div>
        </div>
        <div class="col">
            <div class="additional-service-container" style="padding-top: 20px;">
                <div class="additional-service-component-name">
                    <img src="/kitchenCornerLight.png" style="max-height:40px" />
                    <span class="additional-service-name">Kitchen Corner</span>
                </div>
                <div class="buttons-container" style="display: flex; align-items: center;">
                    <img :disabled="this.additional.KitchenCorner >= 0" src="../../../assets/img/remove-circle.svg" alt=""
                        @click="() => { if (this.additional.KitchenCorner > 0) { this.additional.KitchenCorner -= 1; priceTotal() } }"
                        style="width: 36px; ;" />
                    <span style=";">{{ this.additional.KitchenCorner }} pcs</span>
                    <img src="../../../assets/img/add-circle.svg" alt=""
                        @click="() => { this.additional.KitchenCorner += 1; priceTotal() }" style="width: 36px; ;" />
                </div>
            </div>
            <div class="additional-service-container" style="padding-top: 20px;">
                <div class="additional-service-component-name">
                    <img src="/HeadboardLight.png" style="max-height:40px" />
                    <span class="additional-service-name">Headboard</span>
                </div>
                <div class="buttons-container" style="display: flex; align-items: center;">
                    <img :disabled="this.additional.Headboard >= 0" src="../../../assets/img/remove-circle.svg" alt=""
                        @click="() => { if (this.additional.Headboard > 0) { this.additional.Headboard -= 1; priceTotal() } }"
                        style="width: 36px; ;" />
                    <span style=";">{{ this.additional.Headboard }} pcs</span>
                    <img src="../../../assets/img/add-circle.svg" alt=""
                        @click="() => { this.additional.Headboard += 1; priceTotal() }" style="width: 36px; ;" />
                </div>
            </div>
            <div>
                <div class="additional-service-container" style="flex: 1">
                    <div class="additional-service-component-name">
                        <img src="/pillowLight.png" style="max-height:40px" />
                        <span class="additional-service-name">Pillow</span>
                    </div>
                    <div class="buttons-container" style="display: flex; align-items: center;">
                        <img src="../../../assets/img/remove-circle.svg" alt="" @click="removePillow(), priceTotal()"
                            style="width: 36px; ;" />
                        <span style=";">{{ this.additional.Pillow.length }} pcs</span>
                        <img src="../../../assets/img/add-circle.svg" alt="" @click="addPillow(), priceTotal()"
                            style="width: 36px; ;" />
                    </div>
                </div>
                <div v-for="(carpet, index) in additional.Pillow" :key="index" class="carpet-section">
                    <div class="carpet-picker">
                        <select v-model="carpet.Size" @change="priceTotal()">
                            <option disabled value="">Select a type</option>
                            <option v-for="(item, i) in dataPillow" :key="i" :value="item.value">{{ item.label }}</option>
                        </select>
                        <ion-icon name="chevron-down-outline" size="24" color="#888" class="icon-picker"></ion-icon>
                    </div>
                </div>
            </div>
            <div>
                <div class="additional-service-container" style="flex: 1">
                    <div class="additional-service-component-name">
                        <img src="/ottomanLight.png" style="max-height:40px" />
                        <span class="additional-service-name">Ottoman</span>
                    </div>
                    <div class="buttons-container" style="display: flex; align-items: center;">
                        <img src="../../../assets/img/remove-circle.svg" alt="" @click="removeOttoman(), priceTotal()"
                            style="width: 36px; ;" />
                        <span style=";">{{ this.additional.Ottoman.length }} pcs</span>
                        <img src="../../../assets/img/add-circle.svg" alt="" @click="addOttoman(), priceTotal()"
                            style="width: 36px; ;" />
                    </div>
                </div>
                <div v-for="(carpet, index) in additional.Ottoman" :key="index" class="carpet-section">
                    <div class="carpet-picker">
                        <select v-model="carpet.Size" @change="priceTotal()">
                            <option disabled value="">Select a type</option>
                            <option v-for="(item, i) in dataOttoman" :key="i" :value="item.value">{{ item.label }}</option>
                        </select>
                        <ion-icon name="chevron-down-outline" size="24" color="#888" class="icon-picker"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="additional-service-container" style="padding-top: 20px;">
                <div class="additional-service-component-name">
                    <img src="/DeodorizationLight.png" style="max-height:40px" />
                    <span class="additional-service-name">Deodorization</span>
                </div>
                <div class="buttons-container free" style="display: flex; align-items: center;">
                    <span>Free</span>
                </div>
            </div>
            <div class="additional-service-container">
                <div class="additional-service-component-name">
                    <img src="/cleanLight.png" style="max-height:40px" />
                    <span class="additional-service-name">Severe Contamination</span>
                </div>
                <div class="buttons-container free" style="display: flex; align-items: center;">
                    <span>Free</span>
                </div>
            </div>
        </div>
    </div>
</template>
  
<script>
export default {
    props: {
        sum: {
            type: Number,
            default: 0,
        },
        additional: Object,
        prices: Object
    },
    data() {
        return {
            currentTab: '',
            totalSum: 0,
            additional: { ...this.additional },
            emits: ["update:sum", "update:additional"],
            dataCarpet: [
                { label: '2 seats (100-120cm)', value: 'Sofa-2-seats-(100-120cm)' },
                { label: '3 seats (150-180cm)', value: 'Sofa-3-seats-(150-180cm)' },
                { label: '4 seats + corner', value: 'Sofa-4-seats-corner' },
                { label: '5 seats + corner', value: 'Sofa-5-seats-corner' },
                { label: '6 seats (L-shaped)', value: 'Sofa-6-seats-(L-shaped)' },
            ],
            dataPillow: [
                { label: 'Up to 30cm Wide', value: 'Pillow-Up-to-30cm-Wide' },
                { label: 'from 30-70cm Wide', value: 'Pillow-from-30-70cm-Wide' },
            ],
            dataSeat: [
                { label: 'With vandal-proof fabric', value: 'Seat-With-vandal-proof-fabric' },
                { label: 'With silk, viscose upholstery', value: 'Seat-With-silk-viscose-upholstery' },
            ],
            dataOttoman: [
                { label: 'width up to 40cm', value: 'Ottoman-width-up-to-40cm' },
                { label: 'width 40-80cm', value: 'Ottoman-width-40-80cm' }
            ],
        };
    },
    methods: {
        removeCarpet(index) {
            this.additional.Sofa.splice(index, 1);
        },
        addSevere() {
            this.additional.RugsSevereContamination += 1;
        },
        removeSevere() {
            if (
                this.additional.RugsSevereContamination > 0
            ) { this.additional.RugsSevereContamination -= 1; }
        },
        addCarpet() {
            this.additional.Sofa.push({ Size: '' });
        },
        addSeat() {
            this.additional.Seat.push({ Size: '' });
        },
        removeSeat(index) {
            this.additional.Seat.splice(index, 1);
        },
        addPillow() {
            this.additional.Pillow.push({ Size: '' });
        },
        removePillow(index) {
            this.additional.Pillow.splice(index, 1);
        },
        addOttoman() {
            this.additional.Ottoman.push({ Size: '' });
        },
        removeOttoman(index) {
            this.additional.Ottoman.splice(index, 1);
        },
        priceTotal() {
            this.totalSum = 0
            for (let i = 0; i < this.additional.Sofa.length; i++) {
                if (this.additional.Sofa[i].Size != '') {
                    this.totalSum += this.prices[this.additional.Sofa[i].Size]
                }
            }
            for (let i = 0; i < this.additional.Seat.length; i++) {
                if (this.additional.Seat[i].Size != '') {
                    this.totalSum += this.prices[this.additional.Seat[i].Size]
                }
            }
            this.totalSum += this.prices['SleepingPlace'] * this.additional.SleepingPlace;
            this.totalSum += this.prices['Armchair'] * this.additional.Armchair;
            this.totalSum += this.prices['ChairWithoutBack'] * this.additional.ChairWithoutBack;
            this.totalSum += this.prices['ChairWithBack'] * this.additional.ChairWithBack;
            this.totalSum += this.prices['KitchenCorner'] * this.additional.KitchenCorner;
            this.totalSum += this.prices['Headboard'] * this.additional.Headboard;
            for (let i = 0; i < this.additional.Pillow.length; i++) {
                if (this.additional.Pillow[i].Size != '') {
                    this.totalSum += this.prices[this.additional.Pillow[i].Size]
                }
            }
            for (let i = 0; i < this.additional.Ottoman.length; i++) {
                if (this.additional.Ottoman[i].Size != '') {
                    this.totalSum += this.prices[this.additional.Ottoman[i].Size]
                }
            }
            this.totalSum += this.prices['Deodorization'] * this.additional.Deodorization;
            this.totalSum += this.prices['UpholsterySevereContamination'] * this.additional.UpholsterySevereContamination;


            this.$emit("update:sum", this.totalSum)

        }
    },
};
</script>
  
<style scoped lang="scss">
.carpet-section {
    display: flex;
    flex-direction: row;
}
.carpet-section {
    align-items: flex-end;
    justify-content: right;
    padding-right: 20px;
}

.buttons-container span {
    font-size: 20px;

    @media (max-width: 767px) {
        font-size: 14px;
        white-space: pre;
    }
}

.additional-service-container {
    @media (max-width: 767px) {
        display: flex;
        justify-content: center;
    }
}

.carpet-picker {
    padding-top: 20px;

    &__input {
        max-width: 100px;
        width: 100%;
        margin-left: 20px;
        color: #111B24;
        font-size: 14;
        font-weight: 400;
        justify-content: center;
        align-items: left;
        padding-right: 24px;
        padding-bottom: 0;
        width: 100%;
        border: none;
        background: unset;
        border-bottom: 2px solid #111B24;
    }
}

.additional-service-container {
    display: flex;
    justify-content: space-around;
    padding-top: 20px;
}

.additional-service-component-name {
    display: flex;
    align-items: center;

    span {
        font-size: 24px;
        min-width: 380px;

        @media (max-width: 767px) {
            font-size: 18px;
            min-width: 100px;
        }
    }
}
</style>