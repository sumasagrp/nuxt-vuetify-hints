// composables/useCustomTheme.ts
export function useCustomTheme() {
  const theme = useTheme()

  const isDark = useDark({
    onChanged(dark: boolean) {
      theme.global.name.value = dark ? 'dark' : 'light'
    },
  })

  const toggleDark = useToggle<true, false | null>(isDark)

  return { isDark, toggleDark }
}
