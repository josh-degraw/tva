import { getJSTabsProps } from '../../src'

describe('getJSTabsProps', () => {
  test('should accept no options', () => {
    const props = getJSTabsProps()
    expect(props?.tab.cssProps).toContain('font-size: 1rem')
    expect(props?.tab.styles.fontSize).toEqual('1rem')
  })

  test('should accept a small size option', () => {
    const props = getJSTabsProps({ size: 's' })
    expect(props?.tab.cssProps).toContain('font-size: 0.875rem')
    expect(props?.tab.styles.fontSize).toEqual('0.875rem')
  })
})
