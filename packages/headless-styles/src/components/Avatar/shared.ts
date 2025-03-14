import type { IconSize } from '../types'
import type { AvatarOptions, AvatarSize, AvatarSentiment } from './types'

export function getDefaultAvatarOptions(options?: AvatarOptions) {
  return {
    label: options?.label ?? '',
    sentiment: options?.sentiment ?? 'default',
    size: options?.size ?? 'm',
    src: options?.src ?? '',
  }
}

export const iconSizeMap: Record<AvatarSize, string> = {
  xs: '1.5rem',
  s: '2.5rem',
  m: '4rem',
  l: '6rem',
  xl: '8rem',
}

export function createAvatarSelectorClasses(
  sentiment: AvatarSentiment,
  size: AvatarSize
) {
  return {
    labelClass: `${size}AvatarLabel` as const,
    sentimentClass: `${sentiment}Avatar` as const,
    sizeClass: `${size}Avatar` as const,
  }
}

interface InitialsProps {
  word: string
  firstLetter: string
  lastLetter?: string
}

function createInitials(word: string): InitialsProps {
  const labelWords = word.split(' ')
  const firstWord = labelWords[0]

  return {
    word,
    firstLetter: formatLetter(firstWord),
    lastLetter: formatLetter(labelWords[1]),
  }
}

function formatLetter(word: string) {
  return word?.slice(0, 1) ?? ''
}

function displayInitials(initialsObj: InitialsProps) {
  const { firstLetter, lastLetter } = initialsObj

  if (lastLetter) {
    return `${firstLetter}${lastLetter}`
  }

  return firstLetter
}

export function createAvatarProps(options: Required<AvatarOptions>) {
  const { label } = options
  const initials = displayInitials(createInitials(label))

  return {
    iconOptions: {
      ariaLabel: label,
      ariaHidden: true,
      customSize: iconSizeMap[options.size] as IconSize,
    },
    wrapper: {},
    label: {
      'aria-label': label,
      value: initials,
    },
    image: {
      alt: label,
      src: options.src,
    },
  }
}
