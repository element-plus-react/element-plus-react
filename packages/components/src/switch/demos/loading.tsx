<template>
  <el-switch v-model="value1" loading />
  <el-switch v-model="value2" loading />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(false)
</script>
