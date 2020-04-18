<template>
  <div class="view">
    <router-link to="/">Home</router-link>
    <router-link to="/target">Target</router-link>

    {{ $store.state.Cart }}
    <router-view></router-view>
  </div>
</template>

<script>
export default {};
</script>

<style lang="scss">
</style>