<script lang="ts" setup>
// const { t, availableLocales, locale } = useI18n()

// const toggleLocales = () => {
//   // change to some real logic
//   const locales = availableLocales
//   locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
// }

const themeVisible = ref(false)
</script>

<template>
  <div class="h-48px flex justify-start items-center bg-var(--header-bg-color) text-var(--header-font-color)">
    <div class="w-240px h-full flex items-center">
      left
    </div>
    <div class="flex-1">
      <div flex flex-row justify-end items-center pr-10>
        <div class="width-152px mx-7px p-7px py-4.2px bg-var(--header-input-bgcolor) flex flex-row items-center b-rd-5 text-14px">
          <div i-carbon-search text-14px class="text-var(--header-input-font-color)" />
          <input class="bg-transparent outline-none h-14px ml-4.2px text-var(--header-input-font-color)" type="text">
        </div>

        <div class="icon-btn mx-7px text-14px hover:bg-rgba(0,0,0,0.3)" @click="themeVisible = !themeVisible">
          <div i="carbon-user-simulation" />
        </div>
        <a
          class="icon-btn mx-7px text-14px" rel="noreferrer" href="https://github.com/projects-library/vue3-music" target="_blank"
          title="GitHub"
        >
          <div i-carbon-logo-github />
        </a>
      </div>
    </div>

    <theme v-model="themeVisible" />
  </div>
</template>
