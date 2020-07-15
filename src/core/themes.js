// Colors Theming for App

export const DayTheme = {
  dark: false,
  colors: {
    // react-navigation defaults
    primary: 'rgb(255, 59, 40)',
    background: 'rgb(245, 245, 245)',
    card: 'rgb(255, 255, 255)',
    text: 'rgba(0,0,0,0.87)',
    border: 'rgba(0,0,0,0.12)',

    // ui colors
    status_bar: 'rgb(189, 189, 189)',  
    tab_bar: 'rgb(250, 250, 250)',
    icon: 'rgba(0,0,0,0.54)',
  }
}

export const NightTheme = {
  dark: true,

  colors: {
    // react-navigation defaults
    primary: 'rgb(255, 69, 58)',
    background: 'rgb(18, 18, 18)',
    card: 'rgb(28, 28, 30)',
    text: 'rgb(255,255,255)',
    border: 'rgb(99, 99, 102)',

    // ui colors
    status_bar: 'rgb(33, 33, 33)',
    tab_bar: 'rgb(0, 0, 0)',
    icon: 'rgba(255,255,255,0.54)',
  }
}