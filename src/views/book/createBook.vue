<template>
  <div>
    <el-upload
      class="upload-demo"
      drag
      :action="action"
      :headers="headers"
      :multiple="false"
      :limit="1">
      <i class="el-icon-upload"></i>
      <div class="el-upload__text">将文件拖到此处，或<em>点击上传</em></div>
      <div class="el-upload__tip" slot="tip">只能上传jpg/png文件，且不超过500kb</div>
    </el-upload>
  </div>
</template>

<script>
import { getToken } from '../../utils/auth'
export default {
  name: "createBook",
  data() {
    return {
      action: `${ process.env.VUE_APP_BASE_API }/book/upload`
    }
  },
  computed: {
    headers() {
      return {
        Authorization: `Bearer ${ getToken() }`
      }
    }
  }
}
</script>

<style scoped>

</style>
