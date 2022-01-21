<>
  <div class="demo-fit">
    <div v-for="fit in fits" :key="fit" class="block">
      <span class="title">{{ fit }}</span>
      <Avatar shape="square" :size="100" :fit="fit" :src="url"></Avatar>
    </div>
  </div>
</>
<script lang="ts" setup>
import { reactive, toRefs } from 'vue'

const state = reactive({
  fits: ['fill', 'contain', 'cover', 'none', 'scale-down'],
  url: 'https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg',
})

const { fits, url } = toRefs(state)
</script>
