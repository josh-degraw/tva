// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!

export default {
  container: {
    display: 'inline-block',
    lineHeight: '0',
    position: 'relative',
    verticalAlign: 'middle',
  },
  input: {
    border: '0',
    clip: 'rect(0, 0, 0, 0)',
    height: '1px',
    margin: '-1px',
    overflow: 'hidden',
    padding: '0',
    position: 'absolute',
    whiteSpace: 'nowrap',
    width: '1px',
    '&:focus + .track': {
      outline: '3px solid var(--ps-info-border)',
      outlineOffset: '2px',
    },
    '&:focus:not(:focus-visible) + .track': {
      boxShadow: 'none',
      outline: 'none',
    },
  },
  thumb: {
    background: 'var(--ps-action-text)',
    borderRadius: 'inherit',
    height: 'var(--ps-thumb-size)',
    transitionDuration: '200ms',
    transitionProperty: 'transform',
    width: 'var(--ps-thumb-size)',
  },
  track: {
    '-PsThumbSize': '1.25rem',
    '-PsTrackHeight': '1.5rem',
    '-PsTrackWidth': '3rem',
    background: 'var(--ps-background)',
    borderRadius: '1000px',
    boxSizing: 'border-box',
    cursor: 'pointer',
    display: 'inline-flex',
    flexShrink: '0',
    height: 'var(--ps-track-height)',
    justifyContent: 'flex-start',
    padding: '2px',
    transitionDuration: '150ms',
    transitionProperty: 'background, background-color, border-color, transform',
    width: 'var(--ps-track-width)',
    '&:hover': {
      background: 'var(--ps-background-hover)',
    },
  },
  thumb_data_checked__true: {
    transform:
      'translateX(calc(var(--ps-track-width) - var(--ps-track-height)))',
  },
  track_data_checked__true: {
    background: 'var(--ps-action-background)',
    '&:hover': {
      background: 'var(--ps-action-background-hover)',
    },
  },
  track_data_disabled__true: {
    cursor: 'not-allowed',
    '&:hover': {
      background: 'var(--ps-background)',
    },
  },
  track_data_readonly__true: {
    cursor: 'not-allowed',
  },
  track_data_invalid__true: {
    background: 'var(--ps-danger-surface)',
    '&:hover': {
      background: 'var(--ps-danger-surface)',
    },
  },
  sTrack: {
    composes: 'track',
    '-PsThumbSize': '0.75rem',
    '-PsTrackHeight': '1rem',
    '-PsTrackWidth': '2rem',
  },
  mTrack: {
    composes: 'track',
  },
}
