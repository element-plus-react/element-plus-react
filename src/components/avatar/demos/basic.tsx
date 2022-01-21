import React
<>
  <el-row class="demo-avatar demo-basic">
    <el-col :span="12">
      <div class="sub-title">circle</div>
      <div class="demo-basic--circle">
        <div class="block">
          <Avatar :size="50" :src="circleUrl"></Avatar>
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <Avatar :size="size" :src="circleUrl"></Avatar>
        </div>
      </div>
    </el-col>
    <el-col :span="12">
      <div class="sub-title">square</div>
      <div class="demo-basic--circle">
        <div class="block">
          <Avatar shape="square" :size="50" :src="squareUrl"></Avatar>
        </div>
        <div v-for="size in sizeList" :key="size" class="block">
          <Avatar shape="square" :size="size" :src="squareUrl"></Avatar>
        </div>
      </div>
    </el-col>
  </el-row>
</>

const state = reactive({
  circleUrl:
    'https://cube.elemecdn.com/3/7c/3ea6beec64369c2642b92c6726f1epng.png',
  squareUrl:
    'https://cube.elemecdn.com/9/c2/f0ee8a3c7c9638a54940382568c9dpng.png',
  sizeList: ['large', 'default', 'small'],
})
