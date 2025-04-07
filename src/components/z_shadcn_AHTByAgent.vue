<template>
    <ChartContainer :data="data">
        <BarChart 
            index="agentName" 
            :data="data.chart.data" 
            :categories="['asa' , 'aht']" 
            :type="'stacked'"
            :colors="['#FFFFFF' , '#A0A0A0']"
            :show-grid-line="false"
            :show-legend="false"
            :x-formatter="(tick,i)=>{
                return data.chart.data[i].aiAgent ? '[AI] '+data.chart.data[i].agentName : '[HU] '+data.chart.data[i].agentName
            }"
        />
    </ChartContainer>
</template>

<script setup>
    import ChartContainer from '@/layouts/ChartContainer.vue';
    import { ref } from 'vue';
    import BarChart from './ui/chart-bar/BarChart.vue';

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
                { agentName: "John D.", asa:3.2, aht: 120 , aiAgent: true,},
                { agentName: "Rob W.", asa:1.2, aht: 130 , aiAgent: true,},
                { agentName: "Mike B.", asa:4.2, aht: 230 , aiAgent: false,},
                { agentName: "Tom R.", asa:3, aht: 220 , aiAgent: false,}
            ],
        }
    })
</script>

<style lang="scss" scoped>

</style>