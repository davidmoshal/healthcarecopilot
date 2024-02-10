<script setup lang="ts">
defineProps<{
  label: string
}>()
</script>


<template>
    <div>
        <label>{{ label }}</label>
        <input />
    </div>
</template>


<style scoped>
  label {
    display: block;
  }

  input {
    height: 40px;
    width: 300px;
    border-radius: 8px;
    padding-left: 10px;
  }
</style>