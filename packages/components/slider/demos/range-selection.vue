<template>
  <div class="slider-demo-block">
    <el-slider v-model="value" range show-stops :max="10"> </el-slider>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value = ref([4, 8])
</script>
