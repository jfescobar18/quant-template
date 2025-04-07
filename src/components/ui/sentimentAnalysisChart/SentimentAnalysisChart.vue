<template>
  <RadialBarChart :data="chartData" :endAngle="180" :innerRadius="80" :outerRadius="130">
    <PolarRadiusAxis :tick="false" :tickLine="false" :axisLine="false">
      <template #label="{ viewBox }">
        <text
          v-if="viewBox && 'cx' in viewBox && 'cy' in viewBox"
          :x="viewBox.cx"
          :y="viewBox.cy"
          text-anchor="middle"
        >
          <tspan :x="viewBox.cx" :y="viewBox.cy - 16" class="fill-foreground text-2xl font-bold">
            {{ totalVisitors.toLocaleString() }}
          </tspan>
          <tspan :x="viewBox.cx" :y="viewBox.cy + 4" class="fill-muted-foreground">
            Visitors
          </tspan>
        </text>
      </template>
    </PolarRadiusAxis>

    <RadialBar
      dataKey="desktop"
      stackId="a"
      :cornerRadius="5"
      fill="var(--color-desktop)"
      class="stroke-transparent stroke-2"
    />
    <RadialBar
      dataKey="mobile"
      stackId="a"
      :cornerRadius="5"
      fill="var(--color-mobile)"
      class="stroke-transparent stroke-2"
    />
  </RadialBarChart>
</template>

<script setup>
import { RadialBarChart, RadialBar, PolarRadiusAxis } from 'recharts'

const chartData = [{ name: 'Group A', desktop: 30, mobile: 70 }]

const totalVisitors = chartData.reduce((sum, entry) => sum + entry.desktop + entry.mobile, 0)
</script>

<style scoped></style>
