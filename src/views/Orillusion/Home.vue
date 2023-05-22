<!--
 * @Author: matiastang
 * @Date: 2023-05-22 16:57:39
 * @LastEditors: matiastang
 * @LastEditTime: 2023-05-22 17:09:20
 * @FilePath: /OrillusionLearning/src/views/Orillusion/Home.vue
 * @Description: Orillusion Home
-->
<template>
    <div class="page">{{ text }}</div>
</template>
<script setup lang="ts">
import { ref } from 'vue'

const text = ref('text')
</script>
<style lang="less" scoped>
.page {
    width: 100vw;
    height: 100vh;
}
</style>
