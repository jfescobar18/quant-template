<template>
    <ChartContainer :data="data">
        <table class="table-auto w-full">
            <thead>
                <tr class="bg-bg-secondary text-text-brand-secondary-700 font-semibold text-xs">
                    <th class="p-3">Type</th>
                    <th class="p-3">Agent Name</th>
                    <th class="p-3">State</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="agent in data.chart.data" class="border-b-[1px] border-b-border-secondary">
                    <td class="text-primary-900 text-sm font-medium py-2 flex justify-center gap-3">
                        <Badge class="text-utility-gray-700 font-medium text-xs bg-utility-gray-50 border-[1px] border-utility-gray-200 rounded-md px-2 py-0.5">{{agent.aiAgent ? "AI" : "HA"}}</Badge>
                    </td>
                    <td class="text-center">
                        <div class="flex flex-wrap justify-center gap-2 text-primary-900">
                            <img src="../assets/icon/Avatar.png" alt="avatar">
                            {{ agent.agentName }}
                        </div>
                    </td>
                    <td class="flex flex-wrap justify-center">
                        <PeriodBadge :label="agent.state"/>
                    </td>
                </tr>
            </tbody>
        </table>
    </ChartContainer>
</template>

<script setup>
    import ChartContainer from '@/layouts/ChartContainer.vue';
    import { ref } from 'vue';
import PeriodBadge from './common/PeriodBadge.vue';

    const data = ref({
        title : "Live Agents List",
        period : "Live",
        chart : {
            data:[
                {agentName : "John D.", aiAgent:true, state:"LIVE"},
                {agentName : "Rob W.", aiAgent:true, state:"CRITICAL"},
                {agentName : "Mike B.", aiAgent:false, state:"STALLED"},
                {agentName : "Tom R.", aiAgent:false, state:"LIVE"},
            ],
        },
    })

</script>

<style lang="scss" scoped>

</style>