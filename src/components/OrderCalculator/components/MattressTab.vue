<template>
  <div>
    <div class="additional-service-container" style="padding-top: 20px;">
      <div class="additional-service-component-name">
        <img src="/mattressLight.png" style="max-height:40px" />
        <span class="additional-service-name">Children's mattress (60x120 cm )</span>
      </div>
      <div class="buttons-container" style="display: flex; align-items: center;">
        <img src="../../../assets/img/remove-circle.svg" alt="" @click="() => {
          if (this.additional.ChildrenMattress > 0) {
            this.additional.ChildrenMattress -= 1;
            totalPrice()
          }
        }" style="width: 36px; margin-left: 10px;" />
        <span style="margin-left: 10px;">{{ this.additional.ChildrenMattress }} pcs</span>
        <img src="../../../assets/img/add-circle.svg" alt="" @click="() => {
          this.additional.ChildrenMattress += 1
            , totalPrice()
        }" style="width: 36px; margin-left: 10px;" />
      </div>
    </div>
    <div class="additional-service-container" style="padding-top: 20px;">
      <div class="additional-service-component-name">
        <img src="/mattressLight.png" style="max-height:40px" />
        <span class="additional-service-name">Single mattress (90x190 cm)</span>
      </div>
      <div class="buttons-container" style="display: flex; align-items: center;">
        <img src="../../../assets/img/remove-circle.svg" alt="" @click="() => {
          if (this.additional.SingleMattress > 0) {
            this.additional.SingleMattress -= 1
              , totalPrice()
          }
        }" style="width: 36px; margin-left: 10px;" />
        <span style="margin-left: 10px;">{{ this.additional.SingleMattress }} pcs</span>
        <img src="../../../assets/img/add-circle.svg" alt="" @click="() => {
          this.additional.SingleMattress += 1
            , totalPrice()
        }" style="width: 36px; margin-left: 10px;" />
      </div>
    </div>
    <div class="additional-service-container" style="padding-top: 20px;">
      <div class="additional-service-component-name">
        <img src="/mattressLight.png" style="max-height:40px" />
        <span class="additional-service-name">Double mattress (135x190 cm)</span>
      </div>
      <div class="buttons-container" style="display: flex; align-items: center;">
        <img src="../../../assets/img/remove-circle.svg" alt="" @click="() => {
          if (this.additional.DoubleMattress > 0) {
            this.additional.DoubleMattress -= 1;
            totalPrice()
          }
        }" style="width: 36px; margin-left: 10px;" />
        <span style="margin-left: 10px;">{{ this.additional.DoubleMattress }} pcs</span>
        <img src="../../../assets/img/add-circle.svg" alt="" @click="() => {
          this.additional.DoubleMattress += 1
            , totalPrice()
        }" style="width: 36px; margin-left: 10px;" />
      </div>
    </div>
    <div class="additional-service-container" style="padding-top: 20px;">
      <div class="additional-service-component-name">
        <img src="/mattressLight.png" style="max-height:40px" />
        <span class="additional-service-name">King Size (150x200 cm)</span>
      </div>
      <div class="buttons-container" style="display: flex; align-items: center;">
        <img src="../../../assets/img/remove-circle.svg" alt="" @click="() => {
          if (this.additional.KingSizeMattress > 0) {
            this.additional.KingSizeMattress -= 1
              , totalPrice()
          }
        }" style="width: 36px; margin-left: 10px;" />
        <span style="margin-left: 10px;">{{ this.additional.KingSizeMattress }} pcs</span>
        <img src="../../../assets/img/add-circle.svg" alt="" @click="() => {
          this.additional.KingSizeMattress += 1
            , totalPrice()

        }" style="width: 36px; margin-left: 10px;" />
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
    prices: Object,

    emits: ["update:sum", "update:additional"],
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

    addSevere() {
      this.additional.MattressesSevereContamination += 1;
    },
    removeSevere() {
      if (
        this.additional.MattressesSevereContamination > 0
      ) { this.additional.MattressesSevereContamination -= 1; }
    },
    totalPrice() {
      this.totalSum = 0
      this.totalSum += this.prices['ChildrenMattress'] * this.additional.ChildrenMattress
      this.totalSum += this.prices['SingleMattress'] * this.additional.SingleMattress
      this.totalSum += this.prices['DoubleMattress'] * this.additional.DoubleMattress
      this.totalSum += this.prices['KingSizeMattress'] * this.additional.KingSizeMattress
      this.totalSum += this.prices['MattressesSevereContamination'] * this.additional.MattressesSevereContamination
      this.totalSum += this.prices['MattressesDeodorization'] * this.additional.MattressesDeodorization

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
}</style>