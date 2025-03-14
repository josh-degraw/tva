// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'
import tooltip from '../../shared/generated/tooltip.module'

export default {
  tooltipBase: {
    ...tooltip.pandoTooltipBase,
  },
  tooltipWrapper: {
    ...tooltip.pandoTooltipWrapper,
  },
  tooltip: {
    ...tooltip.pandoTooltipBase,
    animationDelay: '500ms',
    filter: 'drop-shadow(0 0 6px rgb(0 0 0 / 50%))',
    fontSize: '0.75rem',
    fontVariationSettings: "'wght' 500",
    fontWeight: '500',
    lineHeight: '1.25',
    minWidth: '10em',
    zIndex: '1700',
  },
  tooltipContent: {
    ...tooltip.pandoTooltipContentBase,
    backgroundColor: 'var(--ps-surface-inverse)',
    borderRadius: '4px',
    color: 'var(--ps-text-inverse)',
    padding: '0.5rem',
    textAlign: 'start',
    '&::after': {
      // @ts-ignore
      ...tooltip.pandoTooltipContentBase['&::after'],
      backgroundColor: 'var(--ps-surface-inverse)',
      content: "''",
      display: 'block',
      fontSize: '0.71em',
      height: '1em',
      position: 'absolute',
      width: '1em',
    },
  },
  tooltipTrigger: {
    ...tooltip.pandoTooltipTrigger,
    borderRadius: '4px',
  },
} satisfies GeneratedStyles
