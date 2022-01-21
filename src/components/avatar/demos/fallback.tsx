<>
  <div class="demo-type">
    <Avatar :size="60" src="https://empty" @error="errorHandler">
      <img
        src="https://cube.elemecdn.com/e/fd/0fc7d20532fdaf769a25683617711png.png"
      />
    </Avatar>
  </div>
</>

<script lang="ts" setup>
const errorHandler = () => true
</script>
