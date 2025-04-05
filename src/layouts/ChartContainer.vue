<template>
    <div class="w-full h-screen bg-main-bg p-10 pt-5 flex flex-col gap-4">
        <!-- Text, badge and select -->
        <div class="w-full flex flex-wrap items-center justify-between">
            <div class="flex flex-wrap gap-6">
                <span class="text-primary-900 text-lg font-semibold">{{ data.title }}</span>
                <Badge :class="['flex flex-wrap items-center font-medium text-xs px-1.5 py-0.5 rounded-md' , data.period.toLowerCase() === 'live' ? 'text-utility-success-700 border-utility-success-200 bg-utility-success-50' : 'text-utility-gray-700 border-utility-gray-200 bg-utility-gray-50']">
                    <span :class="['h-2 w-2 rounded-full text-test' , data.period.toLowerCase() === 'live' ? 'bg-utility-success-500' : 'bg-utility-gray-500' ]"></span>
                    {{data.period}}
                </Badge>
            </div>
            <div>
                <Select>
                    <SelectTrigger class="bg-bg-quaternary border-none rounded-md px-3"><SelectValue class="text-fg-secondary-700 font-normal text-xs" :placeholder="data.title"></SelectValue></SelectTrigger>
                    <SelectContent class="bg-white"><SelectGroup>
                        <SelectItem v-for="filter in data.filters" :value="filter">{{ filter }}</SelectItem>
                    </SelectGroup></SelectContent>
                </Select>
            </div>
        </div>

        <!-- metrics and keys -->
        <div class="w-full flex flex-wrap items-center justify-between">
            <div class="flex flex-wrap items-center gap-2.5 text-primary-900">
                <span class="font-semibold text-3xl">{{ data.metric }}</span>
                <span class="font-normal text-sm">{{ data.metricLabel }}</span>
            </div>
            <div class="flex flex-wrap items-end justify-end gap-3 h-full ">
                <div v-for="element in data.keys" class="flex flex-wrap items-center gap-2">
                    <span class="h-2 w-2 rounded-full text-test" :style="{backgroundColor:element.keyColor}"></span>
                    <span class="text-sm text-text-tertiary-600">{{ element.keyName }}</span>
                </div>
            </div>
        </div>

        <div class="bg-[#FF6C6C] w-full h-full overflow-auto grow-0">
            <slot />
        </div>
    </div>
</template>


<script setup>
    import { ref } from 'vue';
    import Badge from '../components/ui/badge/Badge.vue'
    import Select from '../components/ui/select/Select.vue';
    import SelectTrigger from '../components/ui/select/SelectTrigger.vue';
    import SelectValue from '../components/ui/select/SelectValue.vue';
    import SelectContent from '../components/ui/select/SelectContent.vue';
    import SelectGroup from '../components/ui/select/SelectGroup.vue';
    import SelectItem from '../components/ui/select/SelectItem.vue';


    const data = ref({
        title : "NPS by Agent",
        period : "Last 7 Days",
        metric : 752,
        metricLabel : "AverageNPS",
        keys:[
            {keyName : "Total Volume", keyColor : "#A4A7AE"},
            {keyName : "Positive NPS", keyColor : "#17B26A"},
            {keyName : "Negative NPS", keyColor : "#F04438"},
        ],
        chart : {},
        filters : [],
    })

</script>

<style scoped>

</style>