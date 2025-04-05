<template>
    <ChartContainer :data="data">
        <table class="table-auto w-full">
            <thead>
                <tr>
                    <th></th>
                    <th v-for="(date , index) in selectedDates" :class="index % 2 === 0 ? 'text-text-tertiary-600 font-normal text-xs' : 'invisible'">{{ date }}</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="agent in data.chart.data" class="border-b-[1px] border-b-border-secondary">
                    <td class="text-primary-900 text-sm font-medium py-2 flex gap-3">
                        <Badge variant="" class="text-utility-gray-700 font-medium text-xs bg-utility-gray-50 border-[1px] border-utility-gray-200 rounded-full">AI</Badge>
                        {{ agent.agentName }}
                    </td>
                    <td v-for="score in agent.scores"><div class="w-2.5 h-6 rounded-lg m-auto" :class="score > 700 ? 'bg-utility-success-400' : score > 500 ? 'bg-utility-warning-600' : 'bg-utility-error-500'"></div></td>
                </tr>
            </tbody>
        </table>
    </ChartContainer>
</template>

<script setup>
    import ChartContainer from '@/layouts/ChartContainer.vue';
    import { ref , onMounted } from 'vue';
import Badge from './ui/badge/Badge.vue';

    const selectedDates = ref([]);

    const generateSelectedDates = () => {
        const now = new Date();
        const dates = [];

        // Loop through the last 30 days
        for (let i = 30; i >= 0; i--) {
            const date = new Date();
            date.setDate(now.getDate() - i);

            const formattedDate = `${date.getMonth() + 1}/${date.getDate()}`;
            dates.push(formattedDate);
        }

        selectedDates.value = dates;
    };


    const data = ref({
        title : "NPS by Agent",
        period : "Last 30 Days",
        metric : 752,
        metricLabel : "AverageNPS",
        keys : [
            {keyName : "Total Volume", keyColor : "#A4A7AE"},
            {keyName : "Positive NPS", keyColor : "#17B26A"},
            {keyName : "Negative NPS", keyColor : "#F04438"},
        ],
        chart : {
            model : "NPS",
            dates:[
                { agentName : "John Doe", scores:["3/15","3/16","3/17","3/18","3/19"]}
            ],
            data:[
                {agentName : "John D.", scores : [850,804,801,450,300]},
                {agentName : "Rob W.", scores : [850,804,200,450,300]},
                {agentName : "Mike B.", scores : [200,560,801,450,300]},
                {agentName : "Tom R.", scores : [850,300,600,200,300]}
            ],
        },
        filters:[],
    })

    onMounted(() => {
        generateSelectedDates();
    });
</script>

<style lang="scss" scoped>

</style>