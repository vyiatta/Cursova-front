<template>
  <div class="price-article">
    <div class="price-article-text">
      <div class="price-article-text__title">
        <b>Price of Cleanora</b>
      </div>
      <div class="price-article-text__desc">
        Cleanora provides in-home dry cleaning services, our services include upholstery, Leather,
        mattress, Carpet, Rug, Curtain, Hall and Stairs cleaning. <br /><br />
        On our Price page you can find a complete list of our services that we can offer.
        <br /><br />
        <span>Minimum order value is 85€</span>
        <br /><br />
        Book through out free mobile app: <br /><br />
        <span>search CLEANORA</span>
      </div>
    </div>
  </div>

  <BasketPrice />
</template>
<style lang="scss">
.price-article {
  display: flex;
  justify-content: center;
  &-text {
    &__title {
      display: flex;
      justify-content: center;
      b {
        font-size: 40px;
        @media (max-width: 767px) {
          font-size: 32px;
        }
        @media (max-width: 570px) {
          font-size: 24px;
        }
      }
    }
    &__desc {
      margin: 40px auto;
      text-align: center;
      max-width: 90%;
      span {
        color: #121d26;
        font-size: 16px;
        border: 2px solid #00C2A7;
        padding: 5px;
        white-space: pre;
        border-radius: 10px;
      }
    }
  }
}
</style>
