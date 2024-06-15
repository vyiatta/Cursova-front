<template>
    <div>
        <div class="additional-service-container" style="flex: 1">
            <div class="additional-service-component-name">
                <img src="/rugsLight.png" style="max-height:40px" />
                <span class="additional-service-name">Rug</span>
            </div>
            <div class="buttons-container" style="display: flex; align-items: center;">
                <img src="../../../assets/img/remove-circle.svg" alt="" @click="removeCarpet()"
                    style="width: 36px; margin-left: 10px;" />
                <span style="margin-left: 10px;">{{ additional.Rugs.length }} pcs</span>
                <img src="../../../assets/img/add-circle.svg" alt="" @click="addCarpet()"
                    style="width: 36px; margin-left: 10px;" />
            </div>
        </div>

        <div v-for="(carpet, index) in additional.Rugs" :key="index" class="carpet-section">
            <div class="carpet-picker">
                <select v-model="carpet.Size" @change="totalPrice()">
                    <option disabled value="">Select a type</option>
                    <option v-for="(item, i) in dataCarpet" :key="i" :value="item.value">{{ item.label }}</option>
                </select>
                <ion-icon name="chevron-down-outline" size="24" color="#888" class="icon-picker"></ion-icon>
            </div>
        </div>
        <div class="additional-service-container" style="padding-top: 20px;">
            <div class="additional-service-component-name">
                <img src="/cleanLight.png" style="max-height:40px" />
                <span class="additional-service-name">Severe Contamination</span>
            </div>
            <div class="buttons-container free" style="display: flex; align-items: center;">
                <span>Free</span>
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
            prices: { ...this.prices },
            dataCarpet: [
                { label: 'up to 3m²', value: 'Rugs-up-to-3m²' },
                { label: 'up to 5m² + wool ', value: 'Rugs-up-to-5m²' },
                { label: 'up to 7m²', value: 'Rugs-up-to-7m²' },
                { label: 'up to 10m²', value: 'Rugs-up-to-10m²' },
                { label: 'from 10m² to 15m²', value: 'Rugs-from-10m²-to-15m²' },
                { label: 'from 15m² to 20m²', value: 'Rugs-from-15m²-to-20m²' },
                { label: 'from 20m² to 30m²', value: 'Rugs-from-20m²-to-30m²' },
                { label: 'from 30m² to 40m²', value: 'Rugs-from-30m²-to-40m²' },
                { label: 'from 40m² to 50m²', value: 'Rugs-from-40m²-to-50m²' },
            ],
            totalSum: 0,
            additional: { ...this.additional },

            emits: ["update:sum", "update:additional"],

        };
    },
    methods: {
        removeCarpet(index) {
            this.additional.Rugs.splice(index, 1);
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
            this.additional.Rugs.push({ Size: '' });

        },
        handleCarpetSizeInputChange(index, newSize) {
            this.additional.Rugs[index].size = newSize;
        },
        totalPrice() {
            this.totalSum = 0
            for (let i = 0; i < this.additional.Rugs.length; i++) {
                if (this.additional.Rugs[i].Size != '') {
                    this.totalSum += this.prices[this.additional.Rugs[i].Size]
                }
            }
            this.totalSum += this.prices['RugsSevereContamination'] * this.additional.RugsSevereContamination
            this.$emit("update:sum", this.totalSum)

        },
    },
};

</script>
  
<style scoped lang="scss">
.carpet-section {
    display: flex;
    flex-direction: row;
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