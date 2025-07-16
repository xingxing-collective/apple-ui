<script setup lang="ts">
import { type ActionSheetProps, ActionSheet } from "../packages/core/src/ActionSheet";
import { ref } from "vue";

// 基本 ActionSheet
const basicActions = [
  { text: 'Share', click: () => console.log('Share clicked') },
  { text: 'Move', click: () => console.log('Move clicked') },
  { text: 'Delete', type: 'destructive', click: () => console.log('Delete clicked') }
] as ActionSheetProps['actions']
const showBasic = ref(false)

// 复杂 ActionSheet
const complexActions = [
  { 
    text: 'Share via Message',
    click: () => console.log('Share via Message clicked'),
    as: 'a',
  },
  { 
    text: 'Share via Email',
    click: () => console.log('Share via Email clicked'),
    as: 'a',
  },
  { 
    text: 'Share via AirDrop',
    type: 'disabled',
    click: () => console.log('Share via AirDrop clicked')
  },
  { 
    text: 'Delete Permanently',
    type: 'destructive',
    click: () => console.log('Delete clicked')
  }
] as ActionSheetProps['actions']
const showComplex = ref(false)

// 自定义内容 ActionSheet
const customActions = [
  { 
    text: 'Custom Action 1',
    click: () => console.log('Custom 1 clicked')
  },
  { 
    text: 'Custom Action 2',
    click: () => console.log('Custom 2 clicked')
  }
] as ActionSheetProps['actions']
const showCustom = ref(false)

// 自定义样式 ActionSheet
const styledActions = [
  { text: 'Option 1' },
  { text: 'Option 2' },
  { text: 'Option 3' }
] as ActionSheetProps['actions']
const showStyled = ref(false)

// 带回调的 ActionSheet
const withCallbackActions = [
  { text: 'Confirm', click: () => console.log('Confirmed') },
  { text: 'Cancel', type: 'destructive' }
] as ActionSheetProps['actions']
const showCallback = ref(false)

const handleBeforeClose = () => {
  console.log('About to close')
  return true
}

const customStyles = {
  overlay: 'bg-black/40',
  wrapper: 'items-center',
  container: 'max-w-md mx-auto',
  content: 'bg-gray-50',
  header: 'bg-gray-50'
}
</script>

<template>
  <div class="p-4 space-y-4">
    <div class="space-y-2">
      <h2 class="text-lg font-medium">基本用法</h2>
      <button class="px-4 py-2 border rounded w-full" @click="showBasic = true">
        显示基本 Action Sheet
      </button>
      <ActionSheet
        v-model="showBasic"
        title="选择操作"
        description="请选择要执行的操作"
        :actions="basicActions"
      />
    </div>

    <div class="space-y-2">
      <h2 class="text-lg font-medium">复杂用法</h2>
      <button class="px-4 py-2 border rounded w-full" @click="showComplex = true">
        显示复杂 Action Sheet
      </button>
      <ActionSheet
        v-model="showComplex"
        title="分享到"
        description="选择分享方式"
        :actions="complexActions"
        cancel-text="取消分享"
      />
    </div>

    <div class="space-y-2">
      <h2 class="text-lg font-medium">自定义内容</h2>
      <button class="px-4 py-2 border rounded w-full" @click="showCustom = true">
        显示自定义 Action Sheet
      </button>
      <ActionSheet
        v-model="showCustom"
        :actions="customActions"
      >
        <template #title>
          <div class="flex items-center gap-2">
            <span class="w-4 h-4 bg-blue-500 rounded-full"></span>
            <span>自定义标题</span>
          </div>
        </template>
        <template #description>
          <div class="text-sm text-gray-500">
            这是一个<span class="text-blue-500">自定义</span>的描述
          </div>
        </template>
      </ActionSheet>
    </div>

    <div class="space-y-2">
      <h2 class="text-lg font-medium">自定义样式</h2>
      <button class="px-4 py-2 border rounded w-full" @click="showStyled = true">
        显示自定义样式 Action Sheet
      </button>
      <ActionSheet
        v-model="showStyled"
        title="自定义样式"
        :actions="styledActions"
        :ui="customStyles"
      />
    </div>

    <div class="space-y-2">
      <h2 class="text-lg font-medium">关闭回调</h2>
      <button class="px-4 py-2 border rounded w-full" @click="showCallback = true">
        显示带回调的 Action Sheet
      </button>
      <ActionSheet
        v-model="showCallback"
        title="确认操作"
        description="该操作不可撤销"
        :actions="withCallbackActions"
        :before-close="handleBeforeClose"
      />
    </div>
  </div>
</template>

<style>
.demo-section {
  margin-bottom: 2rem;
}

.demo-section h3 {
  margin-bottom: 1rem;
  font-weight: 500;
}

.demo-button {
  margin-right: 1rem;
}
</style>