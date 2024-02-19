function getThemeValues(theme: string, obj: object) {
  return Object.fromEntries(Object.entries(obj).map(([key, values]) => [key, values[theme]]))
}

export const getColorValues = (theme: string, colors: object) => getThemeValues(theme, colors)

export const getVariableValues = (theme: string, variables: object) => getThemeValues(theme, variables)
