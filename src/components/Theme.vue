<script setup lang='ts'>
/**
 * @file 皮肤切换弹窗
 * @author xiatao<1126084777@qq.com>
 */
import useAppStore from '../modules/pinia/modules/app'
import { BlackVariables, RedVariables, whiteVariables } from '../config/variables'

withDefaults(defineProps<{ modelValue: boolean }>(), {
  modelValue: false,
})

const emmits = defineEmits(['update:modelValue'])

const appStore = useAppStore()

const { t } = useI18n()
interface ThemeData {
  name: string
  key: string
  color: string
  variables: {
    [key in string]: string
  }
}

const themes: ThemeData[] = [
  {
    name: t('theme.white'),
    key: 'white',
    color: '#F9F9F9',
    variables: whiteVariables,
  },
  {
    name: t('theme.red'),
    key: 'red',
    color: '#d33a31',
    variables: RedVariables,
  },
  {
    name: t('theme.black'),
    key: 'black',
    color: '#202020',
    variables: BlackVariables,
  },
]

const changeTheme = (index: number) => {
  const variables = themes[index].variables
  appStore.setTheme(themes[index].key)
  Object.keys(variables).forEach((key) => {
    document.documentElement.style.setProperty(key, variables[key])
  })
}
</script>

<template>
  <div class="popover-modal" :class="[!modelValue && 'hide']" @click.self="emmits('update:modelValue', !modelValue)">
    <div class="popover transition-all bg-var(--popover-bg-color)" :style="{ opacity: modelValue ? 1 : 0 }">
      <div class="flex flex-row justify-center items-center">
        <div v-for="item, index in themes" :key="item.color" class="mx-7px flex flex-col items-center cursor-pointer" @click="changeTheme(index)">
          <div class="w-27px h-27px b-rd-5 flex border-1 border-#ebeaea" :style="{ backgroundColor: item.color }" />
          <span class="text-12.5px pt-7px">{{ item.name }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<style scoped>
.popover-modal {
  position: fixed;
  width: 100vw;
  height: 100vh;
  top: 0;
  left: 0;
  overflow: hidden;
}
.popover-modal.hide {
  width: 0;
  height: 0;
}
.popover{
  width: 200px;
  border-radius: 7px;
  position: absolute;
  top: 49px;
  right: 25px;
  color: #606266;
  padding: 11px;
  box-shadow: 0 2px 8px 0 rgb(0 0 0 / 20%);

}
.popover::before{
  content: '';
  width: 0;
  height: 0;
  border: 6.3px solid;
  position: absolute;
  top: -13px;
  right: 41px;
  border-color: transparent transparent var(--popover-bg-color);
}
</style>
