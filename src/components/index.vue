
<template>
  <div>
    <button @click="handleClick">{{ label }}</button>
    <hr />
    <ul>
      <li v-for="i in list" :key="i">{{i}}</li>
    </ul>
  </div>
</template>

<script>
export default {
  props: {
    label: {
      type: String,
    },
  },
  data() {
    return {
      list: [],
    };
  },
  methods: {
    handleClick() {
      this.list.push(Math.random());
    },
  },
};
</script>

<style>
</style>
