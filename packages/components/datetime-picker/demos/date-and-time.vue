<template>
  <div class="flex">
    <div class="block">
      <span class="demonstration">Default</span>
      <el-date-picker
        v-model="value1"
        type="datetime"
        placeholder="Select date and time"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">With shortcuts</span>
      <el-date-picker
        v-model="value2"
        type="datetime"
        placeholder="Select date and time"
        :shortcuts="shortcuts"
      >
      </el-date-picker>
    </div>
    <div class="block">
      <span class="demonstration">With default time</span>
      <el-date-picker
        v-model="value3"
        type="datetime"
        placeholder="Select date and time"
        :default-time="defaultTime"
      >
      </el-date-picker>
    </div>
  </div>
</template>

<script lang="ts" setup>
import { ref } from 'vue'

const value1 = ref('')
const value2 = ref('')
const value3 = ref('')
const defaultTime = new Date(2000, 1, 1, 12, 0, 0)

const shortcuts = [
  {
    text: 'Today',
    value: new Date(),
  },
  {
    text: 'Yesterday',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24)
      return date
    },
  },
  {
    text: 'A week ago',
    value: () => {
      const date = new Date()
      date.setTime(date.getTime() - 3600 * 1000 * 24 * 7)
      return date
    },
  },
]
</script>
