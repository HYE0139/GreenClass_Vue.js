<template>
  <div class="clearAllContainer">
    <span class="clearAllBtn" @click="clearTodo">Clear All</span>
  </div>
</template>

<script>
export default {
  methods: {
    clearTodo() {
      this.$emit('clearTodo');
    }
  }
}
</script>

<style scoped>
  .clearAllContainer {
    width: 8.5rem; height:50px; line-height:50px; background-color: white;
    border-radius: 5px; margin: 0 auto; cursor: pointer;
  }

  .clearAllBtn { display: block; border-radius: 5px;}
  .clearAllBtn:hover { color: white; background: linear-gradient(to right, #6478FB, #8763FB);}
</style>