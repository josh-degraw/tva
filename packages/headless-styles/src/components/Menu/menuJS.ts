import { createJSProps, transformStyles } from '../../utils/helpers'
import {
  createMenuProps,
  getDefaultMenuOptions,
  getDefaultMenuItemOptions,
  createMenuItemProps,
} from './shared'
import type { MenuOptions, MenuItemOptions } from './types'
import styles from './generated/menuCSS.module'

export function getJSMenuProps(options?: MenuOptions) {
  const defaultOptions = getDefaultMenuOptions(options)
  const props = createMenuProps(defaultOptions)
  const baseProps = {
    ...props,
    menu: {
      a11yProps: props.menu,
    },
    trigger: {
      a11yProps: props.trigger,
    },
  }
  const jsStyles = {
    menu: {
      ...styles.menu,
      '&[data-expanded="true"]': styles.menu_data_expanded__true,
    },
  }

  return {
    ...baseProps,
    wrapper: {
      ...baseProps.wrapper,
      ...createJSProps(transformStyles(styles.menuWrapper), styles.menuWrapper),
    },
    menu: {
      ...baseProps.menu,
      ...createJSProps(transformStyles(jsStyles.menu), jsStyles.menu),
      keyframes: {
        ...createJSProps(
          transformStyles(styles.keyframesFadeIn),
          styles.keyframesFadeIn
        ),
      },
    },
  }
}

export function getJSMenuItemProps(options?: MenuItemOptions) {
  const defaultOptions = getDefaultMenuItemOptions(options)
  const props = createMenuItemProps(defaultOptions)

  const baseProps = {
    ...props,
    menuListItem: {
      a11yProps: props.menuListItem,
    },
    menuItem: {
      a11yProps: props.menuItem,
    },
  }

  const jsStyles = {
    menuListItem: {
      ...styles.menuListItem,
      ...styles.menuListItem____menuListItem,
    },
    menuItem: {
      ...styles.menuItem,
      '& > *': styles.menuItem___all_children,
      '& > svg': styles.menuItem___svg,
      '&[aria-expanded="true"]': styles.menuItem_aria_expanded__true,
      '&[aria-haspopup="true"]': styles.menuItem_aria_haspopup__true,
    },
  }

  return {
    ...baseProps,
    menuListItem: {
      ...baseProps.menuListItem,
      ...createJSProps(
        transformStyles(jsStyles.menuListItem),
        jsStyles.menuListItem
      ),
    },
    menuItem: {
      ...baseProps.menuItem,
      ...createJSProps(transformStyles(jsStyles.menuItem), jsStyles.menuItem),
    },
  }
}
