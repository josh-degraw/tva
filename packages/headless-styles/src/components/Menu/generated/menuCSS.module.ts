// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  menu: {
    backgroundColor: 'var(--ps-surface-strong)',
    borderColor: 'var(--ps-border)',
    borderRadius: '6px',
    borderStyle: 'solid',
    borderWidth: '1px',
    boxShadow:
      '0 4px 6px -1px rgb(0 0 0 / 10%), 0 2px 4px -1px rgb(0 0 0 / 6%)',
    listStyle: 'none',
    margin: '0',
    padding: '4px',
    width: '14rem',
  },
  menuListItem: {
    margin: '0',
    padding: '0',
    position: 'relative',
  },
  menuListItem____menuListItem: {
    margin: '2px 0 0',
    padding: '0',
  },
  menuItem: {
    appearance: 'none',
    background: 'transparent',
    border: '0',
    borderRadius: '3px',
    color: 'var(--ps-text)',
    cursor: 'pointer',
    display: 'block',
    fontFamily: 'inherit',
    fontVariationSettings: "'wght' 500",
    fontWeight: '500',
    lineHeight: '1.5',
    overflow: 'hidden',
    paddingBlock: '0.5rem',
    paddingInline: '0.5rem',
    textAlign: 'start',
    textDecoration: 'none',
    textOverflow: 'ellipsis',
    transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
    whiteSpace: 'nowrap',
    width: '100%',
    '&:any-link': {
      appearance: 'none',
      background: 'transparent',
      border: '0',
      borderRadius: '3px',
      color: 'var(--ps-text)',
      cursor: 'pointer',
      display: 'block',
      fontFamily: 'inherit',
      fontVariationSettings: "'wght' 500",
      fontWeight: '500',
      lineHeight: '1.5',
      overflow: 'hidden',
      paddingBlock: '0.5rem',
      paddingInline: '0.5rem',
      textAlign: 'start',
      textDecoration: 'none',
      textOverflow: 'ellipsis',
      transition: 'background-color 250ms ease-in-out, color 250ms ease-in-out',
      whiteSpace: 'nowrap',
      width: '100%',
    },
    '&:active': {
      background: 'var(--ps-action-background)',
      color: 'var(--ps-action-text)',
    },
    "&:hover:not([aria-expanded='true'])": {
      background: 'var(--ps-background-hover)',
      color: 'var(--ps-text)',
    },
    "&:focus:not([aria-expanded='true'])": {
      outline: '3px solid var(--ps-action-border-focus)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible)': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  menuItem_aria_haspopup__true: {
    alignItems: 'center',
    display: 'flex',
    justifyContent: 'space-between',
  },
  menuItem___all_children: {
    overflow: 'hidden',
    textOverflow: 'ellipsis',
  },
  menuItem___svg: {
    flex: '0 0 auto',
  },
  menuItem____menu: {
    display: 'none',
    left: '100%',
    marginLeft: '0.625rem',
    position: 'absolute',
    top: '0',
    zIndex: '1000',
  },
  menuItem_aria_expanded__true______menu: {
    display: 'block',
  },
  menuItem_aria_expanded__true: {
    background: 'var(--ps-action-background)',
    color: 'var(--ps-action-text)',
  },
}
