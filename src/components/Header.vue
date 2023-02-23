<script lang="ts" setup>
const themeVisible = ref(false)
</script>

<template>
  <div class="w-100% h-48px flex justify-start items-center bg-var(--header-bg-color) text-var(--header-font-color) fixed z-3">
    <div class="w-240px h-full flex items-center justify-between">
      <img src="../assets/images/logo.png" class="h-25px ml-33px" alt="">
      <div class="flex flex-row items-center">
        <div class="mx-5px w-22px h-22px b-rd-50% flex justify-center items-center cursor-pointer hover:bg-#0000001a">
          <div i-carbon-chevron-left />
        </div>
        <div class="mx-5px w-22px h-22px b-rd-50% flex justify-center items-center cursor-pointer hover:bg-#0000001a">
          <div i-carbon-chevron-right />
        </div>
      </div>
    </div>
    <div class="flex-1">
      <div flex flex-row justify-end items-center pr-16px>
        <global-search :theme-visible="themeVisible" />

        <div class="mx-7px p-3px b-rd-50% text-14px hover:bg-#0000001a" @click="themeVisible = !themeVisible">
          <div i="carbon-user-simulation" />
        </div>
        <a
          class="mx-7px p-3px b-rd-50% text-14px hover:bg-#0000001a" rel="noreferrer" href="https://github.com/projects-library/vue3-music" target="_blank"
          title="GitHub"
        >
          <div i-carbon-logo-github />
        </a>
      </div>
    </div>

    <theme v-model="themeVisible" />
  </div>
</template>
