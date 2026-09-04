import React from 'react';

const SIZE_CLASSES = {
  sm: 'text-[10px] px-2 py-0.5 gap-1',
  md: 'text-xs px-2.5 py-1 gap-1.5',
  lg: 'text-sm px-3 py-1.5 gap-2',
};

const DOT_SIZE = {
  sm: 'w-1 h-1',
  md: 'w-1.5 h-1.5',
  lg: 'w-2 h-2',
};

/**
 * AgentIdBadge — displays a Wilkerson Collective Agent ID (WC01, WC02, WC03, etc.)
 * Styled like an inventory SKU / stock number tag.
 *
 * @param {string} agentId - The WC-prefixed ID, e.g. "WC01"
 * @param {string} size - "sm" | "md" | "lg"
 * @param {string} className - extra classes
 */
export default function AgentIdBadge({ agentId, size = 'md', className = '' }) {
  if (!agentId) return null;
  return (
    <span
      className={`inline-flex items-center rounded-md border border-primary/30 bg-primary/10 font-mono font-bold tracking-wider text-primary uppercase ${SIZE_CLASSES[size] || SIZE_CLASSES.md} ${className}`}
      title={`Wilkerson Collective Agent ID: ${agentId}`}
    >
      <span className={`rounded-full bg-primary ${DOT_SIZE[size] || DOT_SIZE.md}`} />
      {agentId}
    </span>
  );
}