export const defaultTheme = {
  color: {
    background100: '#FFFFFF',
    background90: '#e1e7ea',
    background80: '#c4cfd4',
    background70: '#a5b7c0',
    background60: '#879fab',
    primary100: '#fb9644',
    primary80: '#fa811e',
    primary60: '#e56a05',
    border: '#879fab',
    textPrimary: '#212121',
    textSecondary: '#878787',
    buttonHover: '#3f515a26',
    buttonActive: '#3f515a4d',
  },
  shadow: {
    low: '0 2px 4px rgba(0,0,0,0.12), 0 3px 6px rgba(0,0,0,0.19)',
    mid: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.23)',
    high: '0 14px 28px rgba(0,0,0,0.25), 0 10px 10px rgba(0,0,0,0.22)'
  }
}

export type DefaultThemeType = typeof defaultTheme;
