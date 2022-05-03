import React from 'react'
import Container from '../Container/Container'
import { getProgressProps } from '@pluralsight/headless-styles'

const { classes, ...a11yProps } = getProgressProps({ size: 'xs', now: 50 })
const { classes: insetClasses, ...insetA11yProps } = getProgressProps({
  now: 60,
})

export default function ProgressSizes() {
  return (
    <Container column>
      <div {...classes.wrapper} style={{ marginBottom: '1rem' }}>
        <div {...a11yProps} {...classes.bar} />
      </div>
      <div {...insetClasses.wrapper}>
        <div {...insetA11yProps} {...insetClasses.bar} />
      </div>
    </Container>
  )
}