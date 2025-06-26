<template>
  <div class="item">
    <span class="quantity">{{ item.quantity }}</span>
    <!-- obrazek -->
    <span class="label" :style="{ color: rarityColor }">{{ item.label }}</span>
    <div class="weight">
      <div class="fill" :style="{ height: weightPercent + '%' }"></div>
    </div>
  </div>
</template>

<script setup lang="ts">
import { defineProps, computed } from 'vue';

interface Item {
  label: string;
  quantity: number;
  rarity: 'common' | 'rare' | 'epic' | 'mythic';
  weight: number;
}

const props = defineProps<{ item: Item; maxWeight: number }>();

const weightPercent = computed(() => {
  if (!props.maxWeight) return 0;
  return Math.min(100, (props.item.weight / props.maxWeight) * 100);
});

const rarityColor = computed(() => {
  switch (props.item.rarity) {
    case 'rare':
      return '#60a5fa';
    case 'epic':
      return '#a855f7';
    case 'mythic':
      return '#facc15';
    default:
      return '#9ca3af';
  }
});
</script>

<style scoped>
.item {
  position: relative;
  width: 72px;
  height: 72px;
  background: rgba(0, 0, 0, 0.3);
  border-radius: 0.375rem;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.5);
  overflow: hidden;
  transition: transform 0.2s;
}
.item:hover {
  transform: scale(1.05);
}
.quantity {
  position: absolute;
  top: 2px;
  left: 2px;
  font-size: 0.75rem;
  color: white;
}
.label {
  position: absolute;
  bottom: 2px;
  left: 2px;
  font-size: 0.75rem;
  text-transform: uppercase;
}
.weight {
  position: absolute;
  right: 0;
  top: 0;
  width: 4px;
  height: 100%;
  background: rgba(255, 255, 255, 0.1);
}
.fill {
  width: 100%;
  background: rgba(255, 255, 255, 0.6);
  height: 0;
}
</style>
