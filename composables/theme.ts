// composables/useCustomTheme.ts
export function useCustomTheme() {
  const colorMode = useColorMode()

  return { colorMode }
}
