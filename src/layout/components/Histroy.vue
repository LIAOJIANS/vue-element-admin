<template>
  <el-tabs v-model="editableTabsValue" type="card" editable @tab-remove="removeTab" @tab-click="goRouter()">
    <el-tab-pane
      v-for="(item, index) in this.$store.getters.history"
      :key="index"
      :label="item.title"
      :name="index.toString()"
    >
    </el-tab-pane>
  </el-tabs>
</template>

<script>
export default {
  data() {
    return {
      editableTabsValue: '0',
    }
  },
  methods: {
    goRouter() {
      const path = this.$store.getters.history[this.editableTabsValue].path
      this.$router.push(path)
    },

    removeTab(targetName) {
      this.$store.dispatch('delHistory', targetName)
    }
  }
}
</script>

<style scoped>

</style>
