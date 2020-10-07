import { ThemeProvider, createMuiTheme } from '@material-ui/core/styles'
import themes  from './themes.json'

export const getTheme = (isNvidia) => {
    let colors = themes[0]
    if (isNvidia) {
        colors = themes[1]
    }
    return createMuiTheme(colors)
}