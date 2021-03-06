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
    bg_sideNav: '#333',
    bg_footer: '#fff',
  },
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'system-ui, sans-serif',
    monospace: 'Menlo, monospace',
  },
  styles: {
    root: {
      fontFamily: 'body',
    },
  },
  // Style the layout with the following variants
  header: {
    p: 2,
    borderBottom: '1px solid',
    borderColor: 'border',
    fontFamily: 'heading',
    logo: {},
    menu: {
      a: {
        display: 'block',
        color: 'navlink',
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
    colorButton: {},
    menuButton: {},
    widgets: {},
  },
  mobileNav: {},
  sideNav: {},
  modal: {},
  main: {},
  footer: {
    p: 4,
    borderTop: '1px solid',
    borderColor: 'border',
  },
}
