import { type PropsWithChildren } from 'react'
import { render, screen, userEvent } from 'test-utils'
import { useSubmenuInteraction } from '../../src'

interface MenuProps extends PropsWithChildren {
  label: string
}

describe('useSubmenuInteraction', () => {
  const submenuLabel = 'Submenu'
  const firstSubmenuLabel = 'Submenu item 1'

  function MenuItem(props: MenuProps) {
    return (
      <li role="presentation">
        <button tabIndex={-1} role="menuitem">
          {props.label}
        </button>
      </li>
    )
  }

  function Submenu(props: MenuProps) {
    const submenuNavProps = useSubmenuInteraction()

    return (
      <li role="presentation">
        <button
          role="menuitem"
          aria-haspopup="true"
          aria-expanded="false"
          tabIndex={-1}
          {...submenuNavProps?.trigger}
        >
          {props.label}
        </button>
        <menu
          aria-label={props.label}
          data-expanded="false"
          role="menu"
          {...submenuNavProps?.menu}
        >
          {props.children}
        </menu>
      </li>
    )
  }

  function Menu(props: MenuProps) {
    return (
      <div>
        <menu data-expanded="true" role="menu">
          {props.children}
        </menu>
      </div>
    )
  }

  function MenuTest() {
    return (
      <>
        <Menu label="Menu">
          <Submenu label={submenuLabel}>
            <MenuItem label={firstSubmenuLabel} />
            <MenuItem label="Submenu item 2" />
            <MenuItem label="Submenu item 3" />
          </Submenu>
        </Menu>

        <button>button after menu</button>
      </>
    )
  }

  function getTestElements() {
    return {
      submenu: screen.getByRole('menu', { name: submenuLabel }),
      submenuTrigger: screen.getByRole('menuitem', {
        name: submenuLabel,
      }),
      firstSubmenuItem: screen.getByRole('menuitem', {
        name: firstSubmenuLabel,
      }),
    }
  }

  function getSubmenuItems() {
    return screen.getAllByRole('menuitem', { name: /submenu item/i })
  }

  const triggerExpanded = 'aria-expanded'
  const menuExpanded = 'data-expanded'
  const arrowRight = '{ArrowRight}'
  const arrowLeft = '{ArrowLeft}'
  const arrowUp = '{ArrowUp}'
  const arrowDown = '{ArrowDown}'
  const esc = '{Escape}'

  beforeEach(async () => {
    render(<MenuTest />)
  })

  test.todo('should close when focus moves outside the menu and trigger')

  test('should display submenu when corresponding trigger clicked', async () => {
    const user = userEvent.setup()
    const { submenu, submenuTrigger } = getTestElements()

    await user.click(submenuTrigger)

    expect(submenu).toHaveAttribute(menuExpanded, 'true')
    expect(submenuTrigger).toHaveAttribute(triggerExpanded, 'true')
    expect(submenuTrigger).toHaveFocus()
  })

  test('should display submenu when trigger focused and left arrow pressed', async () => {
    const user = userEvent.setup()
    const { submenu, submenuTrigger } = getTestElements()

    submenuTrigger.focus()
    await user.keyboard(arrowLeft)

    expect(submenu).toHaveAttribute(menuExpanded, 'true')
    expect(submenuTrigger).toHaveAttribute(triggerExpanded, 'true')
    expect(submenuTrigger).toHaveFocus()
  })

  test('should display submenu and focus on first item when trigger focused and enter pressed', async () => {
    const user = userEvent.setup()
    const { submenu, submenuTrigger, firstSubmenuItem } = getTestElements()

    submenuTrigger.focus()
    await user.keyboard('{Enter}')

    expect(submenu).toHaveAttribute(menuExpanded, 'true')
    expect(submenuTrigger).toHaveAttribute(triggerExpanded, 'true')
    expect(firstSubmenuItem).toHaveFocus()
  })

  test('should display submenu and focus on first item when trigger focused and spacebar pressed', async () => {
    const user = userEvent.setup()
    const { submenu, submenuTrigger, firstSubmenuItem } = getTestElements()

    submenuTrigger.focus()
    await user.keyboard(' ')

    expect(submenu).toHaveAttribute(menuExpanded, 'true')
    expect(submenuTrigger).toHaveAttribute(triggerExpanded, 'true')
    expect(firstSubmenuItem).toHaveFocus()
  })

  test('should display submenu and focus on first item when trigger focused and right arrow pressed', async () => {
    const user = userEvent.setup()
    const { submenu, submenuTrigger, firstSubmenuItem } = getTestElements()

    submenuTrigger.focus()
    await user.keyboard(arrowRight)

    expect(submenu).toHaveAttribute(menuExpanded, 'true')
    expect(submenuTrigger).toHaveAttribute(triggerExpanded, 'true')
    expect(firstSubmenuItem).toHaveFocus()
  })

  test('should close submenu and focus on trigger item when escape pressed within submenu', async () => {
    const user = userEvent.setup()
    const { submenu, submenuTrigger } = getTestElements()

    submenuTrigger.focus()
    await user.keyboard(arrowRight)
    await user.keyboard(esc)

    expect(submenu).toHaveAttribute(menuExpanded, 'false')
    expect(submenuTrigger).toHaveAttribute(triggerExpanded, 'false')
    expect(submenuTrigger).toHaveFocus()
  })

  test('should close submenu and focus on trigger item when left arrow pressed within submenu', async () => {
    const user = userEvent.setup()
    const { submenu, submenuTrigger } = getTestElements()

    submenuTrigger.focus()
    await user.keyboard(arrowRight)
    await user.keyboard(arrowLeft)

    expect(submenu).toHaveAttribute(menuExpanded, 'false')
    expect(submenuTrigger).toHaveAttribute(triggerExpanded, 'false')
    expect(submenuTrigger).toHaveFocus()
  })

  test('should move focus to next item when down arrow pressed', async () => {
    const user = userEvent.setup()
    const items = getSubmenuItems()

    items[0].focus()
    await user.keyboard(arrowDown)

    expect(items[1]).toHaveFocus()
  })

  test('should move focus to first item when down arrow pressed on last item', async () => {
    const user = userEvent.setup()
    const items = getSubmenuItems()

    items[items.length - 1].focus()
    await user.keyboard(arrowDown)

    expect(items[0]).toHaveFocus()
  })

  test('should move focus to previous item when up arrow pressed', async () => {
    const user = userEvent.setup()
    const items = getSubmenuItems()

    items[1].focus()
    await user.keyboard(arrowUp)

    expect(items[0]).toHaveFocus()
  })

  test('should move focus to last item when up arrow pressed on first item', async () => {
    const user = userEvent.setup()
    const items = getSubmenuItems()

    items[0].focus()
    await user.keyboard(arrowUp)

    expect(items[items.length - 1]).toHaveFocus()
  })

  test('should move focus to first item when home key pressed', async () => {
    const user = userEvent.setup()
    const items = getSubmenuItems()

    items[1].focus()
    await user.keyboard('{Home}')

    expect(items[0]).toHaveFocus()
  })

  test('should move focus to last item when end key pressed', async () => {
    const user = userEvent.setup()
    const items = getSubmenuItems()

    items[1].focus()
    await user.keyboard('{End}')

    expect(items[items.length - 1]).toHaveFocus()
  })

  test.todo(
    'should move to the menu next item starting with the same letter as the key pressed'
  )
})
