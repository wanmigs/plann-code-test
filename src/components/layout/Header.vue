<template>
  <header class="has-background-white">
    <router-link to="/" class="img-wrapper has-background-plann is-inline-flex">
      <img src="@/assets/logo.svg" alt="" />
    </router-link>
  </header>
</template>

<style lang="scss" scoped>
header {
  height: 60px;
  position: sticky;
  top: 0;
  box-shadow: 0 1px 2px 0 rgb(0 0 0 / 0.05);

  .img-wrapper {
    padding: 6px;

    img {
      height: 48px;
      width: 48px;
    }
  }
}
</style>
