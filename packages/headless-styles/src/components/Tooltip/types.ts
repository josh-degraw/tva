import { Tech } from '../types'

export interface TooltipOptions {
  id: string
  position?: Position
  tech?: Tech
}

export type Position =
  | 'topStart'
  | 'top'
  | 'topEnd'
  | 'rightStart'
  | 'right'
  | 'rightEnd'
  | 'bottomStart'
  | 'bottom'
  | 'bottomEnd'
  | 'leftStart'
  | 'left'
  | 'leftEnd'