<template>
  <div class="page">
    <h1>
      this is home page
      <span>1</span>
    </h1>
    <jsxComp />
  </div>
</template>

<script>
const jsxComp = {
  render() {
    return <h2> jsxComp </h2>;
  },
};
export default {
  components: {
    jsxComp,
  },
};
</script>

<style>
</style>
