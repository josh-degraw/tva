// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

import type { GeneratedStyles } from '../../../utils/types'
import keyframes from '.././generated/keyframes.module'
import states from '.././generated/states.module'

export default {
  pandoTooltipWrapper: {
    display: 'inline-block',
    position: 'relative',
    '&:is(:hover, :focus-within) > [data-tooltip]:not([disabled])': {
      display: 'inline-block',
    },
  },
  pandoTooltipBase: {
    ...keyframes.pandoFadeIn,
    display: 'none',
    opacity: '0',
    position: 'absolute',
    '&:not([disabled]):hover': {
      // @ts-ignore
      ...keyframes.pandoFadeIn['&:not([disabled]):hover'],
      display: 'inline-block',
    },
  },
  pandoTooltipContentBase: {
    position: 'relative',
  },
  pandoTooltipTrigger: {
    ...states.pandoDefaultStates,
    cursor: 'pointer',
    display: 'inline-block',
  },
} satisfies GeneratedStyles
