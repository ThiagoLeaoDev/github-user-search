import 'styled-components'

declare module 'styled-components' {
  export interface DefaultTheme {
    colors: {
      primary: string
      secondary: string
      text: string
      base: string
      baseSecondary: string
      baseTertiary: string
    }
  }
}
