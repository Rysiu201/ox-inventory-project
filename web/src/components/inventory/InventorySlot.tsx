import React, { useState } from 'react';

interface Item {
  label: string;
  quantity: number;
  rarity: 'common' | 'rare' | 'epic' | 'mythic';
  weight: number;
}

interface InventorySlotProps {
  item: Item;
  maxWeight: number;
}

const rarityColors: Record<Item['rarity'], string> = {
  common: '#9ca3af',
  rare: '#60a5fa',
  epic: '#a855f7',
  mythic: '#facc15',
};

const InventorySlot: React.FC<InventorySlotProps> = ({ item, maxWeight }) => {
  const [hover, setHover] = useState(false);

  const weightPercent = maxWeight > 0 ? Math.min(100, (item.weight / maxWeight) * 100) : 0;

  return (
    <div
      onMouseEnter={() => setHover(true)}
      onMouseLeave={() => setHover(false)}
      style={{
        position: 'relative',
        width: '72px',
        height: '72px',
        borderRadius: '8px',
        background: 'rgba(0,0,0,0.3)',
        boxShadow: '0 4px 6px rgba(0,0,0,0.5)',
        overflow: 'hidden',
        transition: 'transform 0.2s',
        transform: hover ? 'scale(1.05)' : 'scale(1)',
      }}
    >
      <span
        style={{
          position: 'absolute',
          top: '2px',
          left: '2px',
          fontSize: '0.75rem',
          color: 'white',
        }}
      >
        {item.quantity}
      </span>
      {/* TODO: item icon */}
      <span
        style={{
          position: 'absolute',
          bottom: '2px',
          left: '2px',
          fontSize: '0.75rem',
          textTransform: 'uppercase',
          color: rarityColors[item.rarity],
        }}
      >
        {item.label}
      </span>
      <div
        style={{
          position: 'absolute',
          right: 0,
          top: 0,
          width: '4px',
          height: '100%',
          background: 'rgba(255,255,255,0.1)',
        }}
      >
        <div
          style={{
            width: '100%',
            background: 'rgba(255,255,255,0.6)',
            height: weightPercent + '%',
          }}
        />
      </div>
    </div>
  );
};

export default InventorySlot;
