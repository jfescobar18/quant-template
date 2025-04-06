<template>
    <div class="w-full h-screen bg-main-bg p-10 pt-5 flex flex-col gap-4">
        <!-- Text, badge and select -->
        <div class="w-full flex flex-wrap items-center justify-between">
            <div class="flex flex-wrap gap-6">
                <span class="text-primary-900 text-lg font-semibold">{{ props.data.title }}</span>
                <PeriodBadge :label="props.data.period"/>
            </div>
            <div>
                <Select v-if="data.filters">
                    <SelectTrigger class="bg-bg-quaternary border-none rounded-md px-3"><SelectValue class="text-fg-secondary-700 font-normal text-xs" :placeholder="props.data.title"></SelectValue></SelectTrigger>
                    <SelectContent v-if="data.filters && data.filters.length>0" class="bg-white"><SelectGroup>
                        <SelectItem v-for="filter in props.data.filters" :value="filter">{{ filter }}</SelectItem>
                    </SelectGroup></SelectContent>
                </Select>
            </div>
        </div>

        <!-- metrics and keys -->
        <div class="w-full flex flex-wrap items-center justify-between">
            <div class="flex flex-wrap items-center gap-2.5 text-primary-900">
                <span v-if="props.data.metric" class="font-semibold text-3xl">{{ props.data.metric }}</span>
                <span v-if="props.data.metricLabel" class="font-normal text-sm">{{ props.data.metricLabel }}</span>
            </div>
            <div class="flex flex-wrap items-end justify-end gap-3 h-full" v-if="props.data.keys">
                <div v-for="(element , index) in props.data.keys" class="flex flex-wrap items-center gap-2">
                    <span class="rounded-full text-test" :class="props.data.title.toLowerCase() !== 'volume by agent' ? 'h-2 w-2' : index === 2 ? 'w-2 h-2' : index === 3 ? 'w-[14px] h-[14px]' : index === 4 ? 'w-6 h-6' : 'w-1 h-1'" :style="{backgroundColor:element.keyColor}"></span>
                    <span class="text-sm text-text-tertiary-600">{{ element.keyName }}</span>
                </div>
            </div>
        </div>

        <div class="w-full h-full overflow-auto grow-0">
            <slot />
        </div>
    </div>
</template>


<script setup>
    import { ref  } from 'vue';
    import Select from '../components/ui/select/Select.vue';
    import SelectTrigger from '../components/ui/select/SelectTrigger.vue';
    import SelectValue from '../components/ui/select/SelectValue.vue';
    import SelectContent from '../components/ui/select/SelectContent.vue';
    import SelectGroup from '../components/ui/select/SelectGroup.vue';
    import SelectItem from '../components/ui/select/SelectItem.vue';
    import PeriodBadge from '@/components/common/PeriodBadge.vue';


    const props = defineProps({
        data:{
            type: Object,
            required:true
        }
    })

</script>

<style scoped>

</style>