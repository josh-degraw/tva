// This file is generated by running the Vite dev sever via
// 'yarn start:sandbox' and **visiting localhost:3000**
//
// Manual changes will be lost - proceed with caution!


export default {
  "base": {
    "alignItems": "center",
    "display": "flex",
    "position": "relative",
    "width": "100%"
  },
  "container": {
    "display": "inline-block",
    "lineHeight": "0",
    "position": "relative",
    "verticalAlign": "middle"
  },
  "input": {
    "border": "0",
    "clip": "rect(0, 0, 0, 0)",
    "height": "1px",
    "margin": "-1px",
    "overflow": "hidden",
    "padding": "0",
    "position": "absolute",
    "whiteSpace": "nowrap",
    "width": "1px",
    "&:focus + .track": {
      "boxShadow": "0 0 0 3px hsl(249deg 63% 34% / 100%)"
    }
  },
  "label": {
    "display": "block",
    "fontFamily": "'PS TT Commons Roman', 'Gotham SSm A', 'Gotham SSm B', Arial,\n    sans-serif",
    "fontSize": "1rem",
    "fontVariationSettings": "\"'wght' 400\"",
    "fontWeight": "400",
    "marginBottom": "0",
    "marginInlineEnd": "0.625rem",
    "opacity": "1",
    "textAlign": "start",
    "transitionDuration": "200ms",
    "transitionProperty": "background-color, border-color, color, fill, stroke,\n    opacity, box-shadow, transform"
  },
  "thumb": {
    "background": "white",
    "borderRadius": "inherit",
    "height": "undefined",
    "transitionDuration": "200ms",
    "transitionProperty": "transform",
    "width": "undefined"
  },
  "track": {
    "-PsThumbSize": "1.25rem",
    "-PsTrackHeight": "1.5rem",
    "-PsTrackWidth": "3rem",
    "background": "hsl(240deg 31% 25% / 100%)",
    "borderRadius": "1000px",
    "cursor": "pointer",
    "display": "inline-flex",
    "flexShrink": "0",
    "height": "undefined",
    "justifyContent": "flex-start",
    "padding": "2px",
    "transitionDuration": "150ms",
    "transitionProperty": "background-color, border-color, transform",
    "width": "undefined"
  },
  "thumb_data_checked__true": {
    "transform": "translateX(calc(undefined - undefined))"
  },
  "thumb_data_disabled__true": {
    "background": "hsl(235deg 30% 78% / 100%)"
  },
  "track_data_checked__true": {
    "background": "hsl(249deg 63% 51% / 100%)"
  },
  "track_data_invalid__true": {
    "background": "hsl(336deg 100% 36% / 100%)",
    "cursor": "default"
  },
  "track_data_disabled__true": {
    "cursor": "default"
  },
  "sLabel": {
    "composes": "label",
    "fontSize": "0.75rem"
  },
  "mLabel": {
    "composes": "label"
  },
  "sTrack": {
    "composes": "track",
    "-PsThumbSize": "0.75rem",
    "-PsTrackHeight": "1rem",
    "-PsTrackWidth": "2rem"
  },
  "mTrack": {
    "composes": "track"
  }
}