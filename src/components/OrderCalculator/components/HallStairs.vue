<template>
  <div>
    <div class="additional-service-container" style="flex: 1">
      <div class="additional-service-component-name">
        <img src="/stairsLight.png" style="max-height:40px" />
        <span class="additional-service-name">Stairs</span>
      </div>
      <div class="buttons-container" style="display: flex; align-items: center;">
        <img src="../../../assets/img/remove-circle.svg" alt="" @click="removeStairs(), totalPrice()"
          style="width: 36px; margin-left: 10px;" />
        <span style="margin-left: 10px;">{{ additional.Stairs.length }} pcs</span>
        <img src="../../../assets/img/add-circle.svg" alt="" @click="addStairs(), totalPrice()"
          style="width: 36px; margin-left: 10px;" />
      </div>
    </div>

    <div v-for="(carpet, index) in additional.Stairs" :key="index" class="carpet-picker">
      <input class="carpet-picker__input" v-model="carpet.size" @input="handleCarpetSizeInputChange(index, carpet.size)"
        style="padding-bottom: 15px;" placeholder="Steps" @change="totalPrice()" />
    </div>
    <div class="additional-service-container">
      <div class="additional-service-component-name">
        <img src="/HallwayLight.png" style="max-height:40px" />
        <span class="additional-service-name">HallWay</span>
      </div>
      <div class="buttons-container" style="display: flex; align-items: center;">
        <img src="../../../assets/img/remove-circle.svg" alat="" @click="() => {
          if (this.additional.Hallway > 0) { this.additional.Hallway -= 1; totalPrice() }
        }" style="width: 36px; margin-left: 10px;" />
        <span style="margin-left: 10px;">{{ this.additional.Hallway }} pcs</span>
        <img src="../../../assets/img/add-circle.svg" alt="" @click="() => { this.additional.Hallway += 1; totalPrice() }"
          style="width: 36px; margin-left: 10px;" />
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
</template>

<script>
export default {
  props: {
    sum: {
      type: Number,
      default: 0,
    },
    prices: Object,
    additional: Object,
  },
  data() {
    return {
      currentTab: '',
      totalSum: 0,
      additional: { ...this.additional },
      prices: { ...this.prices },
      emits: ["update:sum", "update:additional"],
    };
  },
  methods: {
    removeCarpet(index) {
      this.additional.Hallway.splice(index, 1);
    },
    addSevere() {
      this.additional.HallAndStairsLeatherSevereContamination += 1;
    },
    removeSevere() {
      if (
        this.additional.HallAndStairsLeatherSevereContamination > 0
      ) { this.additional.HallAndStairsLeatherSevereContamination -= 1; }
    },
    addCarpet() {
      this.additional.Hallway.push({ Size: '' });
    },
    handleCarpetSizeInputChange(index, newSize) {
      this.additional.Hallway[index].size = newSize;
    },
    removeStairs(index) {
      this.additional.Stairs.splice(index, 1);
    },
    addStairs() {
      this.additional.Stairs.push({ size: '' });
    },
    handleStairsSizeInputChange(index, newSize) {
      this.additional.Stairs[index].size = newSize;
    },
    totalPrice() {
      this.totalSum = 0;
      for (let i = 0; i < this.additional.Stairs.length; i++) {
        if (this.additional.Stairs[i].size !== '') {
          this.totalSum += this.prices['Stairs'] * this.additional.Stairs[i].size;
        }
      }

      this.totalSum += this.prices['Hallway'] * this.additional.Hallway;
      this.totalSum += this.prices['HallAndStairsLeatherSevereContamination'] * this.additional.HallAndStairsLeatherSevereContamination;


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