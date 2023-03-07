<script lang="ts" setup>
/**
 * @file 全局搜索组件
 * @author xiatao<1126084777@qq.com>
 */
const props = withDefaults(defineProps<{
  themeVisible: boolean
}>(), {
  themeVisible: false,
})

const visible = ref(false)

// 皮肤选择框显示就隐藏搜索弹窗
watch(() => props.themeVisible, (val) => {
  if (val)
    visible.value = false
})
</script>

<template>
  <div class="width-152px mx-7px p-7px py-4.2px bg-var(--header-input-bgcolor) flex flex-row items-center b-rd-5 text-14px">
    <div i-carbon-search text-14px class="text-var(--header-input-font-color)" />
    <input tid="search-input" class="bg-transparent outline-none h-14px ml-4.2px text-var(--header-input-font-color) global-search" type="text" :placeholder="$t('search.placeholder')" @focus="visible = true">
  </div>

  <div v-show="visible" class="w-100vw fixed top-48px right-0 z-1 search-bg" @click="visible = false">
    <div class="w-338px bg-var(--search-bg-color) search-modal fixed top-48px right-0 z-1 px-25px" @click.stop>
      <div class="my-16px text-#5C5C5C text-12px">
        {{ $t('search.search_hot') }}
      </div>
      <!-- TODO 后续编码填充接口数据 -->
      <div class="flex flex-row flex-wrap">
        <div class="w-86px h-20px flex items-center justify-center text-var(--search-font-color) text-12px border-1 btn-search mr-5px mb-11px">
          他只是经过
        </div>
        <div class="w-86px h-20px flex items-center justify-center text-var(--search-font-color) text-12px border-1 btn-search mr-5px mb-11px">
          他只是经过
        </div>
        <div class="w-86px h-20px flex items-center justify-center text-var(--search-font-color) text-12px border-1 btn-search mr-5px mb-11px">
          他只是经过
        </div>
        <div class="w-86px h-20px flex items-center justify-center text-var(--search-font-color) text-12px border-1 btn-search mr-5px mb-11px">
          他只是经过
        </div>
        <div class="w-86px h-20px flex items-center justify-center text-var(--search-font-color) text-12px border-1 btn-search mr-5px mb-11px">
          他只是经过
        </div>
      </div>
      <div class="my-16px text-#5C5C5C text-12px">
        {{ $t('search.search_history') }}
      </div>
    </div>
  </div>
</template>

<style>
.global-search::placeholder {
color: var(--header-input-font-color);
}
.search-bg {
  height: calc(100vh - 48px - 58px);
}
.search-modal {
  height: calc(100vh - 48px - 58px);
  -webkit-box-shadow: 0 2px 8px 0 rgb(0 0 0 / 20%);
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 20%);
}
.search-modal .btn-search {
  cursor: pointer;
  border-color: var(--search-button-border-color);
}
.search-modal .btn-search:hover {
    background: var(--search-button-hover-color);
  }
</style>
