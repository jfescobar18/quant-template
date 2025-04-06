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
                        <Badge variant="" class="text-utility-gray-700 font-medium text-xs bg-utility-gray-50 border-[1px] border-utility-gray-200 rounded-full">{{agent.aiAgent ? "AI" : "HA"}}</Badge>
                        {{ agent.agentName }}
                    </td>
                    <td v-for="volume in agent.volume">
                        <div class="w-6 h-6 flex flex-wrap items-center justify-center">
                            <div class="rounded-full m-auto bg-[#B7B7B7]" :class="volume === 0 ? 'w-1 h-1 bg-black' : volume < 5 ? 'w-1 h-1' : volume < 10 ? 'w-2 h-2' : volume < 50 ? 'w-[14px] h-[14px]' : 'w-6 h-6'">
                            </div>
                        </div>
                    </td>
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
        title : "Volume by Agent",
        period : "Last 30 Days",
        metric : 2095,
        metricLabel : "Handled Tasks",
        keys : [
            {keyName : "0", keyColor : "#000000"},
            {keyName : "< 5", keyColor : "#B7B7B7"},
            {keyName : "< 10", keyColor : "#B7B7B7"},
            {keyName : "< 50", keyColor : "#B7B7B7"},
            {keyName : "< 80", keyColor : "#B7B7B7"},
        ],
        chart:{
            model : "VolumeAgent",
            dates:["3/15","3/16","3/17","3/18","3/19"],
            data:[
                {agentName : "John D.", aiAgent:true, volume:[5,4,5,1,1,12,21,1,6,57,60,1,34,3,55,1,1,22,34,12,1,1,4,1,1,4,1,1,1,1,1]},
                {agentName : "Rob W.", aiAgent:true, volume:[5,4,5,1,1,12,21,1,6,57,60,1,34,3,55,1,55,22,34,12,1,1,4,1,1,4,50,1,1,1,1]},
                {agentName : "Mike B.", aiAgent:false, volume:[5,4,5,1,1,12,21,1,6,1,60,1,34,3,55,1,1,22,34,12,1,1,4,1,1,4,50,1,1,1,1]},
                {agentName : "Tom R.", aiAgent:false, volume:[5,4,5,1,20,12,21,1,6,57,60,1,34,3,55,1,1,22,34,12,55,1,4,1,1,4,50,1,1,1,1]},
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