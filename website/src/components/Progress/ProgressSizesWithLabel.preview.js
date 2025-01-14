import React from 'react'
import CodeBlock from '@theme/CodeBlock'

export function ProgressSizesPreview() {
  return (
    <CodeBlock>{`const xsProgress = getProgressProps({
  ariaLabel: 'extra small (xs) progress example',
  size: 'xs',
  now: 50
})
const progress = getProgressProps({
  ariaLabel: 'small (s) progress example',
  size: 's',
  now: 60
})

<div {...xsProgress.wrapper}>
  <div {...xsProgress.bar} />
</div>
<div {...progress.wrapper}>
  <div {...progress.bar} />
</div>`}</CodeBlock>
  )
}

export function ProgressSizesFullPreview() {
  return (
    <CodeBlock>{`import { getProgressProps } from '@pluralsight/headless-styles';

export default function Progress(props) {
  const xsProgress = getProgressProps({...props, size: 'xs'})

  return (
    <div {...xsProgress.wrapper}>
      <div {...xsProgress.bar} />
    </div>
  );
}`}</CodeBlock>
  )
}
