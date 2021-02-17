<template>
  <div class="demo-image">
    <div class="block">
      <el-image style="width: 100%; height: 600px" :src="iUrl" :fit="iFit"
        ><div slot="placeholder" class="image-slot">
          加载中<span class="dot">...</span>
        </div>
        <div slot="error" class="image-slot">
          <i class="el-icon-picture-outline"></i></div
      ></el-image>
    </div>
  </div>
</template>

<script>
	export default {
		props: {
			iUrl: {
				type: String,
				default: ""
				// default: "https://fuss10.elemecdn.com/e/5d/4a731a90594a4af544c0c25941171jpeg.jpeg"
			},
			iFit: {
				type: String,
				default: "none"
			}
		}
	}
</script>

<style lang="scss" scoped>
</style>