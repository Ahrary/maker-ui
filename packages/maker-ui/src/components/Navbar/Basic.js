import React from 'react'
import { Box, Flex } from 'theme-ui'

import { setBreakpoint } from '../../utils/helper'
import { Menu, MenuButton, ColorButton, WidgetArea, Logo } from '../common'

const Basic = React.forwardRef(
  (
    {
      logo = 'Logo',
      menu,
      widgetArea,
      menuToggle,
      colorToggle,
      bp,
      type,
      maxWidth = 'maxWidth_header',
      variant = 'navbar',
      ...props
    },
    ref
  ) => (
    <Flex
      ref={ref}
      variant={variant}
      {...props}
      __css={{
        variant: 'eui_header.default',
        maxWidth,
      }}>
      <Logo>{logo}</Logo>
      <Flex
        sx={{
          alignItems: 'center',
          flex: type === 2 ? 1 : 'initial',
          justifyContent:
            type === 2
              ? setBreakpoint(bp, ['flex-end', 'space-between'])
              : null,
        }}>
        <Menu menuItems={menu} />
        <Flex sx={{ alignItems: 'center' }}>
          <WidgetArea custom={widgetArea} />
          <MenuButton custom={menuToggle} />
          <ColorButton custom={colorToggle} />
        </Flex>
      </Flex>
    </Flex>
  )
)

export default Basic
