<template>
    <div>
        <div>
            <div class="additional-service-container" style="color: #111B24;">
                <div class="additional-service-component-name">
                    <img src="/carpet.png" style="max-height:40px" />
                    <span class="additional-service-name">Carpet</span>
                </div>
                <div class="buttons-container" style="display: flex; align-items: center;">
                    <img src="../../../assets/img/remove-circle.svg" alt="" @click="removeCarpet(), priceTotal()"
                        style="width: 36px; margin-left: 10px;" />
                    <span style="margin-left: 10px;">{{ this.additional.Carpet.length }} pcs</span>
                    <img src="../../../assets/img/add-circle.svg" alt="" @click="addCarpet(), priceTotal()"
                        style="width: 36px; margin-left: 10px;" />
                </div>
            </div>

            <div v-for="(carpet, index) in this.additional.Carpet" :key="index" class="carpet-section">
                <div class="carpet-picker">
                    <select v-model="carpet.carpetType" @change="priceTotal()">
                        <option disabled value="">Select a type</option>
                        <option v-for="(item, i) in dataCarpet" :key="i" :value="item.value">{{ item.label }}</option>
                    </select>
                </div>
                <input class="carpet-picker__input" v-model="carpet.size"
                    @input="handleCarpetSizeInputChange(index, carpet.size)" @change="priceTotal()"
                    placeholder="Enter м²" />
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
                { label: 'synthetics', value: 'Carpets-synthetics' },
                { label: 'synthetics + wool', value: 'Carpets-synthetics-wool' },
                { label: 'wool', value: 'Carpets-wool' },
                { label: 'viscose, silk', value: 'Carpets-viscose-silk' },
                { label: 'synthetics + pet hair cleaning', value: 'Carpets-synthetics-pet-hair-cleaning' },
                { label: 'wool + pet hair cleaning', value: 'Carpets-wool-pet-hair-cleaning' },
                { label: 'Shaggy', value: 'Carpets-"Shaggy"' },
                { label: 'handmade', value: 'Carpets-handmade' },
            ],
        };
    },
    methods: {
        removeCarpet(index) {
            this.additional.Carpet.splice(index, 1);
        },
        addCarpet() {
            this.additional.Carpet.push({ carpetType: '', size: '' });
        },
        handleCarpetSizeInputChange(index, newSize) {
            this.additional.Carpet[index].size = newSize;
        },
        priceTotal() {
            this.totalSum = 0;
            for (let i = 0; i < this.additional.Carpet.length; i++) {
                if (this.additional.Carpet[i].carpetType != '' && this.additional.Carpet[i].size != '') {
                    this.totalSum += this.prices[this.additional.Carpet[i].carpetType] * this.additional.Carpet[i].size
                }
            }
            this.$emit("update:sum", this.totalSum)

        }
    },
};
</script>
  
<style lang="scss">
.free {
    width: 140px;
    @media (max-width: 1040px) {
        width: 100px;
    }
}
.carpet-section {
    display: flex;
    flex-direction: row;
    justify-content: right;
    padding-right: 14.5%;
    @media (max-width: 1040px) {
        padding-right: 10%;
    }
}
.carpet-picker__input {
    @media (max-width: 1040px) {
        max-width: 75px !important;
    }
}
.carpet-picker {
    @media (max-width: 1040px) {
        select {
            max-width: 150px;
        }
    }
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

    select {
        // Общие стили для элемента select
        padding: 10px;
        border: 1px solid #ccc;
        border-radius: 5px;
        font-size: 14px;
        color: #333;
        background-color: #fff;
        cursor: pointer;
        transition: border-color 0.3s, box-shadow 0.3s;

        &:hover {
            border-color: #aaa;
        }

        &:focus {
            border-color: #111B24;
            box-shadow: 0 0 5px #111B24;
        }

        // Стили для стрелки внутри select
        &::-ms-expand {
            display: none;
        }

        // Стили для опций внутри select
        option {
            font-size: 16px;
            color: #333;

            &:hover {
                background: transparent !important;
            }
        }
    }

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
  