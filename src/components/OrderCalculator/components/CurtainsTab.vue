<template>
  <div>
    <div>
      <div class="additional-service-container" style="flex: 1">
        <div class="additional-service-component-name">
          <img src="/tuleLight.png" style="max-height:40px" />
          <span class="additional-service-name">Curtains</span>
        </div>
        <div class="buttons-container" style="display: flex; align-items: center;">
          <img src="../../../assets/img/remove-circle.svg" alt="" @click="removeCarpet()"
            style="width: 36px; margin-left: 10px;" />
          <span style="margin-left: 10px;">{{ additional.Curtains.length }} pcs</span>
          <img src="../../../assets/img/add-circle.svg" alt="" @click="addCarpet()"
            style="width: 36px; margin-left: 10px;" />
        </div>
      </div>

      <div v-for="(carpet, index) in additional.Curtains" :key="index" class="carpet-picker">
        <input class="carpet-picker__input" @change="totalPrice()" v-model="carpet.size"
          @input="handleCarpetSizeInputChange(index, carpet.size)" style="padding-bottom: 15px;" placeholder="Enter м²" />
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
      totalSum: 0,
      additional: { ...this.additional },
      prices: { ...this.prices },
      emits: ["update:sum", "update:additional"],

    };
  },
  methods: {
    removeCarpet(index) {
      this.additional.Curtains.splice(index, 1);
    },
    addCarpet() {
      this.additional.Curtains.push({ size: '' });
    },
    handleCarpetSizeInputChange(index, newSize) {
      this.additional.Curtains[index].size = newSize;
    },

    totalPrice() {
      this.totalSum = 0;
      for (let i = 0; i < this.additional.Curtains.length; i++) {
        if (this.additional.Curtains[i].size != '') {
          this.totalSum += this.additional.Curtains[i].size * this.prices["Curtains"]
        }
      }
      this.$emit("update:sum", this.totalSum)

    },
  },
};
</script>

<style scoped lang="scss">
.carpet-picker {
  display: flex;
  flex-direction: row;
  display: flex;
  flex-direction: row;
  justify-content: right !important;
  padding-right: 14.5%;

  @media (max-width: 1040px) {
    padding-right: 5%;
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
