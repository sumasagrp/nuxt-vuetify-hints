import { colors } from './palette/theme-colors'
import { variables } from './palette/theme-variables'
import { getColorValues, getVariableValues } from './theme-factory'

export function commonThemeStructure(theme: string) {
  return {
    dark: theme === 'dark',
    colors: getColorValues(theme, colors),
    variables: getVariableValues(theme, variables),
  }
}
