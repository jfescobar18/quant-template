<template>
    <ChartContainer :data="data">
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th class="w-[20%]"></th>
                    <th class="flex justify-between">
                        <span v-for="i in 11" class="text-text-tertiary-600 font-normal text-xs">{{ i === 1 ? 0+"s" : i === 11 ? (maxAHTAgent.aht + 60) + "s" : (((maxAHTAgent.aht + 60)/10)*(i-1))+'s' }}</span>
                    </th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="agent in data.chart.data" class="border-b-[1px] border-b-border-secondary">
                    <td class="text-primary-900 text-sm font-medium py-2 flex gap-3">
                        <Badge variant="" class="text-utility-gray-700 font-medium text-xs bg-utility-gray-50 border-[1px] border-utility-gray-200 rounded-full">{{agent.aiAgent ? "AI" : "HA"}}</Badge>
                        {{ agent.agentName }}
                    </td>
                    <td>
                        <div class="flex items-center">
                            <div class="bg-white h-1.5" :style="{width : (agent.asa * 100) / (maxAHTAgent.aht + 60) + '%'}"></div>
                            <div class="bg-[#A0A0A0] h-1.5" :style="{width : (agent.aht * 100) / (maxAHTAgent.aht + 60) + '%'}"></div>
                        </div>
                    </td>
                </tr>
            </tbody>
        </table>
    </ChartContainer>
</template>

<script setup>
    import ChartContainer from '@/layouts/ChartContainer.vue';
    import { ref , computed } from 'vue';

    const data = ref({
        title : "AHT by Agent",
        period : "Last 30 Days",
        metricLabel : "0.2m ASA 2.8m AHT",
        keys:[
            { keyName : "ASA-AI Agent", keyColor : "#07FFF3" },
            { keyName : "ASA-Human Agent", keyColor : "#3A96FF" },
            { keyName : "AHT", keyColor : "#C1C1C1" },
        ],
        chart : {
            model : "AHTagent",
            data : [
                { agentName: "John D.", asa:3.2, aht: 120 , aiAgent: true},
                { agentName: "Rob W.", asa:1.2, aht: 130 , aiAgent: true},
                { agentName: "Mike B.", asa:4.2, aht: 230 , aiAgent: false},
                { agentName: "Tom R.", asa:3, aht: 220 , aiAgent: false},
            ],
        }
    })

    const maxAHTAgent = computed(() => {
        return data.value.chart.data.reduce((max, agent) => agent.aht > max.aht ? agent : max, data.value.chart.data[0]);
    });

</script>

<style lang="scss" scoped>

</style>