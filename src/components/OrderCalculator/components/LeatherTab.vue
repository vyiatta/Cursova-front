<template>
    <div>
        <div class="col">
            <div>
                <div class="additional-service-container" style="flex: 1">
                    <div class="additional-service-component-name">
                        <img src="/sofaLight.png" style="max-height:40px" />
                        <span class="additional-service-name">Leather Sofa</span>
                    </div>
                    <div class="buttons-container" style="display: flex; align-items: center;">
                        <img src="../../../assets/img/remove-circle.svg" alt="" @click="removeCarpet(), totalPrice()"
                            style="width: 36px; margin-left: 10px;" />
                        <span style="margin-left: 10px;">{{ additional.SofaLeather.length }} pcs</span>
                        <img src="../../../assets/img/add-circle.svg" alt="" @click="addCarpet(), totalPrice()"
                            style="width: 36px; margin-left: 10px;" />
                    </div>
                </div>
                <div v-for="(carpet, index) in additional.SofaLeather" :key="index" class="carpet-section">
                    <div class="carpet-picker">
                        <select v-model="carpet.Size" @change="totalPrice()">
                            <option disabled value="">Select size</option>
                            <option v-for="(item, i) in dataCarpet" :key="i" :value="item.value">{{ item.label }}</option>
                        </select>
                        <ion-icon name="chevron-down-outline" size="24" color="#888" class="icon-picker"></ion-icon>
                    </div>
                </div>
            </div>
            <div>
                <div class="additional-service-container" style="flex: 1">
                    <div class="additional-service-component-name">
                        <img src="/seatLight.png" style="max-height:40px" />
                        <span class="additional-service-name">Leather Seat</span>
                    </div>
                    <div class="buttons-container" style="display: flex; align-items: center;">
                        <img src="../../../assets/img/remove-circle.svg" alt="" @click="removeSeat(), totalPrice()"
                            style="width: 36px; margin-left: 10px;" />
                        <span style="margin-left: 10px;">{{ additional.LeatherSeat.length }} pcs</span>
                        <img src="../../../assets/img/add-circle.svg" alt="" @click="addSeat(), totalPrice()"
                            style="width: 36px; margin-left: 10px;" />
                    </div>
                </div>
                <div v-for="(carpet, index) in additional.LeatherSeat" :key="index" class="carpet-section">
                    <div class="carpet-picker">
                        <select v-model="carpet.Size" @change="totalPrice()">
                            <option disabled value="">Select size</option>
                            <option v-for="(item, i) in dataSeat" :key="i" :value="item.value">{{ item.label }}</option>
                        </select>
                        <ion-icon name="chevron-down-outline" size="24" color="#888" class="icon-picker"></ion-icon>
                    </div>
                </div>
            </div>
            <div class="additional-service-container">
                <div class="additional-service-component-name">
                    <img src="/SleepingPlaceLight.png" style="max-height:40px" />
                    <span class="additional-service-name">Leather Sleeping Place</span>
                </div>
                <div class="buttons-container" style="display: flex; align-items: center;">
                    <img src="../../../assets/img/remove-circle.svg" alat=""
                        @click="() => { if (this.additional.LeatherSleepingPlace > 0) { this.additional.LeatherSleepingPlace -= 1; totalPrice() } }"
                        style="width: 36px; margin-left: 10px;" />
                    <span style="margin-left: 10px;">{{ this.additional.LeatherSleepingPlace }} pcs</span>
                    <img src="../../../assets/img/add-circle.svg" alt=""
                        @click="() => { this.additional.LeatherSleepingPlace += 1; totalPrice() }"
                        style="width: 36px; margin-left: 10px;" />
                </div>
            </div>
            <div class="additional-service-container">
                <div class="additional-service-component-name">
                    <img src="/armchairLight.png" style="max-height:40px" />
                    <span class="additional-service-name">Leather Armchair</span>
                </div>
                <div class="buttons-container" style="display: flex; align-items: center;">
                    <img src="../../../assets/img/remove-circle.svg" alat=""
                        @click="() => { if (this.additional.LeatherArmchair > 0) { this.additional.LeatherArmchair -= 1; totalPrice() } }"
                        style="width: 36px; margin-left: 10px;" />
                    <span style="margin-left: 10px;">{{ this.additional.LeatherArmchair }} pcs</span>
                    <img src="../../../assets/img/add-circle.svg" alt=""
                        @click="() => { this.additional.LeatherArmchair += 1; totalPrice() }"
                        style="width: 36px; margin-left: 10px;" />
                </div>
            </div>
            <div class="additional-service-container">
                <div class="additional-service-component-name">
                    <img src="/LeatherChairBLight.png" style="max-height:40px" />
                    <span class="additional-service-name">Leather Chair</span>
                </div>
                <div class="buttons-container" style="display: flex; align-items: center;">
                    <img src="../../../assets/img/remove-circle.svg" alat="" @click="() => {
                        if (this.additional.LeatherChair > 0) { this.additional.LeatherChair -= 1; totalPrice() }
                    }" style="width: 36px; margin-left: 10px;" />
                    <span style="margin-left: 10px;">{{ this.additional.LeatherChair }} pcs</span>
                    <img src="../../../assets/img/add-circle.svg" alt=""
                        @click="() => { this.additional.LeatherChair += 1; totalPrice() }"
                        style="width: 36px; margin-left: 10px;" />
                </div>
            </div>
        </div>
        <div class="col">
            <div>
                <div class="additional-service-container" style="flex: 1">
                    <div class="additional-service-component-name">
                        <img src="/pillowLight.png" style="max-height:40px" />
                        <span class="additional-service-name">Leather Pillow</span>
                    </div>
                    <div class="buttons-container" style="display: flex; align-items: center;">
                        <img src="../../../assets/img/remove-circle.svg" alt="" @click="removePillow(), totalPrice()"
                            style="width: 36px; margin-left: 10px;" />
                        <span style="margin-left: 10px;">{{ additional.LeatherPillow.length }} pcs</span>
                        <img src="../../../assets/img/add-circle.svg" alt="" @click="addPillow(), totalPrice()"
                            style="width: 36px; margin-left: 10px;" />
                    </div>
                </div>
                <div v-for="(carpet, index) in additional.LeatherPillow" :key="index" class="carpet-section">
                    <div class="carpet-picker">
                        <select v-model="carpet.Size" @change="totalPrice()">
                            <option disabled value="">Select size</option>
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
                        <span class="additional-service-name">Leather Ottoman</span>
                    </div>
                    <div class="buttons-container" style="display: flex; align-items: center;">
                        <img src="../../../assets/img/remove-circle.svg" alt="" @click="removeOttoman(), totalPrice()"
                            style="width: 36px; margin-left: 10px;" />
                        <span style="margin-left: 10px;">{{ additional.LeatherOttoman.length }} pcs</span>
                        <img src="../../../assets/img/add-circle.svg" alt="" @click="addOttoman(), totalPrice()"
                            style="width: 36px; margin-left: 10px;" />
                    </div>
                </div>
                <div v-for="(carpet, index) in additional.LeatherOttoman" :key="index" class="carpet-section">
                    <div class="carpet-picker">
                        <select v-model="carpet.Size" @change="totalPrice()">
                            <option disabled value="">Select size</option>
                            <option v-for="(item, i) in dataOttoman" :key="i" :value="item.value">{{ item.label }}</option>
                        </select>
                        <ion-icon name="chevron-down-outline" size="24" color="#888" class="icon-picker"></ion-icon>
                    </div>
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
            <div class="additional-service-container">
                <div class="additional-service-component-name">
                    <img src="/DeodorizationLight.png" style="max-height:40px" />
                    <span class="additional-service-name">Deodorization</span>
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
            prices: { ...this.prices },
            dataCarpet: [
                { label: '2 seats (100-120cm)', value: 'Sofa-leather-2-seats-(100-120cm)' },
                { label: '3 seats (150-180cm)', value: 'Sofa-leather-3-seats-(150-180cm)' },
                { label: '4 seats + corner', value: 'Sofa-leather-4-seats-corner' },
            ],
            dataOttoman: [
                { label: 'width up to 40cm', value: 'Leather-ottoman-width-up-to-40cm' },
                { label: 'width 40-80cm', value: 'Leather-ottoman-width-40-80cm' },
            ],
            dataSeat: [
                { label: '(50-60cm) skin softening oil cleaning ', value: 'Leather-seat-(50-60cm)-skin-softening-oil-cleaning' },
                { label: '(50-60 cm) with color restoration', value: 'Leather-seat-With-silk-viscose-upholstery' },],
            dataPillow: [
                { label: 'Up to 30cm Wide', value: 'Leather-pillow-Up-to-30cm-Wide' },

                { label: 'from 30-70cm Wide', value: 'Leather-pillow-from-30-70cm-Wide' },
            ],

        };
    },
    methods: {
        removeCarpet(index) {
            this.additional.SofaLeather.splice(index, 1);
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
            this.additional.SofaLeather.push({ Size: '' });
        },
        addSeat() {
            this.additional.LeatherSeat.push({ Size: '' });
        },
        removeSeat(index) {
            this.additional.LeatherSeat.splice(index, 1);
        },
        addPillow() {
            this.additional.LeatherPillow.push({ Size: '' });
        },
        removePillow(index) {
            this.additional.LeatherPillow.splice(index, 1);
        },
        addOttoman() {
            this.additional.LeatherOttoman.push({ Size: '' });
        },
        removeOttoman(index) {
            this.additional.LeatherOttoman.splice(index, 1);
        },
        totalPrice() {
            this.totalSum = 0
            for (let i = 0; i < this.additional.SofaLeather.length; i++) {
                if (this.additional.SofaLeather[i].Size != '') {
                    this.totalSum += this.prices[this.additional.SofaLeather[i].Size]
                }
            }
            for (let i = 0; i < this.additional.LeatherSeat.length; i++) {
                if (this.additional.LeatherSeat[i].Size != '') {
                    this.totalSum += this.prices[this.additional.LeatherSeat[i].Size]
                }
            }
            this.totalSum += this.prices['LeatherSleepingPlace'] * this.additional.LeatherSleepingPlace;
            this.totalSum += this.prices['LeatherArmchair'] * this.additional.LeatherArmchair;
            this.totalSum += this.prices['LeatherChair'] * this.additional.LeatherChair;
            for (let i = 0; i < this.additional.LeatherPillow.length; i++) {
                if (this.additional.LeatherPillow[i].Size != '') {
                    this.totalSum += this.prices[this.additional.LeatherPillow[i].Size]
                }
            }
            for (let i = 0; i < this.additional.LeatherOttoman.length; i++) {
                if (this.additional.LeatherOttoman[i].Size != '') {
                    this.totalSum += this.prices[this.additional.LeatherOttoman[i].Size]
                }
            }
            this.totalSum += this.prices['LeatherDeodorization'] * this.additional.LeatherDeodorization;
            this.totalSum += this.prices['LeatherSevereContamination'] * this.additional.LeatherSevereContamination;
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