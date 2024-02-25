export function useFormFields(store, propertyPath) {
  const propertyPathParts = propertyPath.split('.')

  const data = propertyPathParts.reduce((obj: any, part: string) => obj && obj[part], store)

  const formFields = reactive({
    names: { ...data },
  })

  const { reset: resetForm, hasNewValues: changed, syncInitialValues: sync } = useResetRef(formFields)

  const formRef = ref()

  function reset() {
    formRef.value.resetValidation()

    // Reset form to initial values.
    resetForm()
  }

  return { formFields, formRef, reset, changed, sync }
}
