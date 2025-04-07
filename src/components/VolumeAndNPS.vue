<template>
    <ChartContainer :data="data">
        <AreaChart 
            :data="test" 
            :categories="['volume','positive' , 'negative']" 
            index="name" 
            :show-grid-line="false" 
            :colors="['#949494','#019B0F','#F43131']"
            :show-legend="false"
        />
    </ChartContainer>
</template>

<script setup>
    import { ref } from 'vue';
    import ChartContainer from '@/layouts/ChartContainer.vue';
    import AreaChart from './ui/chart-area/AreaChart.vue';
    
    const data = ref({
        title : "Volume + NPS",
        period : "Last 30 Days",
        metric : "",
        metricLabel : "",
        keys:[
            { keyName : "Total Volume", keyColor : "#A4A7AE" },
            { keyName : "Positive NPS", keyColor : "#17B26A" },
            { keyName : "Negative NPS", keyColor : "#F04438" },
        ],
        chart:{
            model : "NPS",
            chartData : [  
                { day: '3/14', volume: 80, positive: 40, negative: 5 },  
                { day: '3/15', volume: 100, positive: 60, negative: 4 },  
                { day: '3/16', volume: 150, positive: 90, negative: 3 },  
                { day: '3/17', volume: 186, positive: 80, negative: 20 }
            ]
        }
    })

    const test = [
        { name : '3/14', volume : 80, positive : 40, negative : 5 },  
        { name : '3/15', volume : 100, positive : 60, negative : 4 },  
        { name : '3/16', volume : 150, positive : 90, negative : 3 },  
        { name : '3/17', volume : 186, positive : 80, negative : 20 }
    ]

</script>

<style lang="scss" scoped>

</style>