<template>
  <div style="margin-left: 1rem">
    <el-radio-group v-model="size">
      <el-radio :label="'large'">large</el-radio>
      <el-radio :label="'default'">default</el-radio>
      <el-radio :label="'small'">small</el-radio>
    </el-radio-group>
  </div>
  <br />
  <el-form ref="form" :model="sizeForm" label-width="120px" :size="size">
    <el-form-item label="Activity name">
      <el-input v-model="sizeForm.name"></el-input>
    </el-form-item>
    <el-form-item label="Activity zone">
      <el-select
        v-model="sizeForm.region"
        placeholder="please select your zone"
      >
        <el-option label="Zone one" value="shanghai"></el-option>
        <el-option label="Zone two" value="beijing"></el-option>
      </el-select>
    </el-form-item>
    <el-form-item label="Activity time">
      <el-col :span="11">
        <el-date-picker
          v-model="sizeForm.date1"
          type="date"
          placeholder="Pick a date"
          style="width: 100%"
        ></el-date-picker>
      </el-col>
      <el-col class="text-center" :span="1" style="margin: 0 0.5rem">-</el-col>
      <el-col :span="11">
        <el-time-picker
          v-model="sizeForm.date2"
          placeholder="Pick a time"
          style="width: 100%"
        ></el-time-picker>
      </el-col>
    </el-form-item>
    <el-form-item label="Activity type">
      <el-checkbox-group v-model="sizeForm.type">
        <el-checkbox-button
          label="Online activities"
          name="type"
        ></el-checkbox-button>
        <el-checkbox-button
          label="Promotion activities"
          name="type"
        ></el-checkbox-button>
      </el-checkbox-group>
    </el-form-item>
    <el-form-item label="Resources">
      <el-radio-group v-model="sizeForm.resource">
        <el-radio border label="Sponsor"></el-radio>
        <el-radio border label="Venue"></el-radio>
      </el-radio-group>
    </el-form-item>
    <el-form-item>
      <el-button type="primary" @click="onSubmit">Create</el-button>
      <el-button>Cancel</el-button>
    </el-form-item>
  </el-form>
</template>

<script lang="ts" setup>
import { reactive, ref } from 'vue'

const size = ref('default')

const sizeForm = reactive({
  name: '',
  region: '',
  date1: '',
  date2: '',
  delivery: false,
  type: [],
  resource: '',
  desc: '',
})

function onSubmit() {
  console.log('submit!')
}
</script>
