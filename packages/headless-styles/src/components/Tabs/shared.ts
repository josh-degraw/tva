import type { TabsSize, TabsOptions } from './types'

export function getDefaultTabsOptions(options?: TabsOptions) {
  return {
    size: options?.size ?? 'm',
  }
}

export function createTabsClasses(size: TabsSize) {
  return {
    sizeClass: `${size}Tab` as const,
  }
}

export function createTabsProps() {
  return {
    tabList: {
      role: 'tablist',
    },
    tab: {
      'aria-selected': false,
      role: 'tab',
      tabIndex: -1,
    },
    tabPanel: {
      'aria-expanded': true,
      'aria-hidden': false,
      role: 'tabpanel',
    },
    panelWrapper: {},
    wrapper: {},
  }
}
