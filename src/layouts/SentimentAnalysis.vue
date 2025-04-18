<template>
    <div class="w-full max-w-md mx-auto flex flex-col items-center justify-center bg-black text-white p-6 rounded-lg">
        <svg :width="size" :height="size / 2" viewBox="0 0 100 50">
            <path d="M 10 50 A 40 40 0 0 1 90 50" fill="none" stroke="#333" stroke-width="10" />
            <path v-if="data.positive > 0" :d="describeArc(-90, positiveAngle - 90)" fill="none" stroke="#65d68f"
                stroke-width="10" stroke-linecap="butt" />
            <path v-if="data.neutral > 0" :d="describeArc(positiveAngle - 90, positiveAngle + neutralAngle - 90)"
                fill="none" stroke="#f5a623" stroke-width="10" stroke-linecap="butt" />
            <path v-if="data.negative > 0" :d="describeArc(positiveAngle + neutralAngle - 90, 180 - 90)" fill="none"
                stroke="#d9534f" stroke-width="10" stroke-linecap="butt" />
        </svg>

        <div class="text-center mt-4">
            <div class="text-3xl font-bold">
                {{ data.positive }}% Positive
            </div>
            <div class="text-2xl mt-2">😊</div>
        </div>
    </div>
</template>

<script setup lang="ts">
import { computed, defineProps } from 'vue'

const props = defineProps({
    data: {
        type: Object,
        required: true,
        default: () => ({
            positive: 50,
            neutral: 25,
            negative: 25
        })
    }
})

const size = 200

const total = computed(() => {
    const totalValue = props.data.positive + props.data.neutral + props.data.negative
    return totalValue > 0 ? totalValue : 1
})

const positiveAngle = computed(() => (props.data.positive / total.value) * 180)
const neutralAngle = computed(() => (props.data.neutral / total.value) * 180)

function polarToCartesian(cx: number, cy: number, r: number, angleDeg: number) {
    const angleRad = (angleDeg - 90) * (Math.PI / 180)
    return {
        x: cx + r * Math.cos(angleRad),
        y: cy + r * Math.sin(angleRad)
    }
}

function describeArc(startAngle: number, endAngle: number) {
    const r = 40
    const cx = 50
    const cy = 50
    const start = polarToCartesian(cx, cy, r, endAngle)
    const end = polarToCartesian(cx, cy, r, startAngle)
    const largeArcFlag = endAngle - startAngle <= 180 ? "0" : "1"

    return [
        "M", start.x, start.y,
        "A", r, r, 0, largeArcFlag, 0, end.x, end.y
    ].join(" ")
}
</script>