<script lang="ts" setup>
const { t, availableLocales, locale } = useI18n()

const toggleLocales = () => {
  // change to some real logic
  const locales = availableLocales
  locale.value = locales[(locales.indexOf(locale.value) + 1) % locales.length]
}
</script>

<template>
  <div class="h-3.57rem flex justify-start items-center bg-#262626">
    <div class="w-17.8rem bg-#292929 h-full">
      left
    </div>
    <div class="flex-1">
      <nav text-xl leading-3 float-right pr-10>
        <RouterLink class="icon-btn mx-2" to="/" :title="t('button.home')">
          <div i-carbon-color-palette />
        </RouterLink>

        <button class="icon-btn mx-2 !outline-none" :title="t('button.toggle_dark')" @click="toggleDark()">
          <div i="carbon-sun dark:carbon-moon" />
        </button>

        <a class="icon-btn mx-2" :title="t('button.toggle_langs')" @click="toggleLocales()">
          <div i-carbon-language />
        </a>

        <RouterLink class="icon-btn mx-2" to="/about" :title="t('button.about')">
          <div i-carbon-dicom-overlay />
        </RouterLink>

        <a
          class="icon-btn mx-2" rel="noreferrer" href="https://github.com/antfu/vitesse" target="_blank"
          title="GitHub"
        >
          <div i-carbon-logo-github />
        </a>
      </nav>
    </div>
  </div>
</template>
