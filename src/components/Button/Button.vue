<template>
  <button class="btn-send" @click="$emit('click')">{{ text }}</button>
</template>

<script>
  export default {
    name: 'tdd-button',
    props: ['text']
  }
</script>

<style scoped>
.btn-send {
  background-color: #43a047;
  border: 1px solid #8ec490;
  border-radius: 2px;
  color: white;
}
</style>
