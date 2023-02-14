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
  <div class="h-3.43rem flex justify-start items-center bg-var(--header-bg-color) text-var(--header-font-color)">
    <div class="w-17.2rem h-full flex items-center">
      left
    </div>
    <div class="flex-1">
      <div flex flex-row justify-end items-center pr-10>
        <div class="width-10.28rem mx-2 p-0.5rem py-0.3rem bg-var(--header-input-bgcolor) flex flex-row items-center b-rd-5 text-1rem">
          <div i-carbon-search text-1rem class="text-var(--header-input-font-color)" />
          <input class="bg-transparent outline-none h-1rem ml-0.3rem text-var(--header-input-font-color)" type="text">
        </div>

        <div class="icon-btn mx-2 text-1rem hover:bg-rgba(0,0,0,0.3)" @click="themeVisible = !themeVisible">
          <div i="carbon-user-simulation" />
        </div>
        <a
          class="icon-btn mx-2 text-1rem" rel="noreferrer" href="https://github.com/projects-library/vue3-music" target="_blank"
          title="GitHub"
        >
          <div i-carbon-logo-github />
        </a>
      </div>
    </div>

    <theme v-model="themeVisible" />
  </div>
</template>
