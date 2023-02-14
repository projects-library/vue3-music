<script setup lang='ts'>
import useAppStore from '../../modules/pinia/modules/app'
import { RedVariables, whiteVariables } from '../theme/variables'

defineProps({
  modelValue: Boolean,
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
    <div class="popover transition-all" :style="{ opacity: modelValue ? 1 : 0 }">
      <div class="flex flex-row justify-center items-center">
        <div v-for="item, index in themes" :key="item.color" class="mx-0.5rem flex flex-col items-center cursor-pointer" @click="changeTheme(index)">
          <div class="w-1.9rem h-1.9rem b-rd-5 flex border-1 border-#ebeaea" :style="{ backgroundColor: item.color }" />
          <span class="text-0.9rem pt-0.5rem">{{ item.name }}</span>
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
  top: 3.2rem;
  right: 3.43rem;
  background: #fff;
  color: #606266;
  padding: 0.8rem;
  box-shadow: 0 0.14286rem 0.57143rem 0 rgb(0 0 0 / 20%);

}
.popover::before{
  content: '';
  width: 0;
  height: 0;
  border: 0.45rem solid;
  position: absolute;
  top: -13px;
  right: 32px;
  border-color: transparent transparent #fff;
}
</style>
