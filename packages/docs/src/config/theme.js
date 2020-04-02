export default {
  initialColorModeName: 'light',
  colors: {
    text: '#333',
    background: '#fff',
    primary: '#1858dc',
    secondary: '#355cac',
    accent: '#1858dc',
    muted: '#f6f6f6',
    border: '#e6e6e6',
    bg_topbar: '#355cac',
    bg_header: '#fff',
    bg_mobileNav: 'rgba(0, 0, 0, 0.9)',
    bg_sideNav: '#eee',
    bg_footer: '#fff',
    modes: {
      dark: {
        text: '#fff',
        background: '#000',
        primary: '#1858dc',
        secondary: '#355cac',
        accent: '#1858dc',
        muted: '#f6f6f6',
        border: '#e6e6e6',
        bg_topbar: '#355cac',
        bg_header: '#000',
        bg_mobileNav: 'rgba(0, 0, 0, 0.9)',
        bg_sideNav: '#eee',
        bg_footer: '#fff',
      },
    },
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  breakpoints: ['768px', '960px', '1240px'],
  // Maker UI layout variants
  header: {
    py: [2, '10px'],
    borderBottom: '1px solid',
    borderColor: 'border',
    fontFamily: 'heading',
    logo: {},
    menu: {
      px: 60,
      a: {
        fontSize: 2,
        fontWeight: 700,
        display: 'block',
        color: 'primary',
        textDecoration: 'none',
        py: 3,
        px: 3,
      },
    },
    navbar: {},
    submenu: {
      bg: 'background',
      boxShadow:
        'rgba(46, 41, 51, 0.08) 0px 4px 16px, rgba(71, 63, 79, 0.16) 0px 8px 24px',
      a: {
        px: 30,
        transition: 'all ease .3s',
        '&:hover': {
          bg: 'muted',
        },
      },
      'a:not(last-of-type)': {
        borderBottom: t => `1px solid ${t.colors.border}`,
      },
    },
    colorButton: {
      border: t => `3px solid ${t.colors.primary}`,
      color: 'primary',
      bg: 'transparent',
      py: '7px',
      px: 3,
      ml: 3,
      borderRadius: 3,
      fontSize: 2,
      fontWeight: 700,
    },
    menuButton: {},
    widgets: {},
  },
  mobileNav: {},
  sideNav: {},
  main: {},
}
