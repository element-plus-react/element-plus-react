<template>
  <el-switch
    v-model="value1"
    active-text="Pay by month"
    inactive-text="Pay by year"
  >
  </el-switch>
  <br />
  <el-switch
    v-model="value2"
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="Pay by month"
    inactive-text="Pay by year"
  />
  <br />
  <el-switch v-model="value3" inline-prompt active-text="是" inactive-text="否">
  </el-switch>
  <el-switch
    v-model="value4"
    inline-prompt
    active-color="#13ce66"
    inactive-color="#ff4949"
    active-text="Y"
    inactive-text="N"
  />
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref(true)
const value2 = ref(true)
const value3 = ref(true)
const value4 = ref(true)
</script>
