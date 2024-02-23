export function useSelectImage() {
  /**
   * Reference to the currently selected file.
   * @type {Ref<null | File>}
   */
  const selectedFile = ref(null)

  /**
   * Reference to the base64 representation of the uploaded image.
   * @type {Ref<null | string>}
   */
  const base64 = ref(null)

  /**
   * Function to handle image upload.
   */
  const uploadImage = () => {
    const reader = new FileReader()

    /**
     * Callback for when the file is read.
     */
    reader.onload = () => {
      // Set the base64 to the data URL of the uploaded image.
      base64.value = reader.result.toString()
    }

    // Read the contents of the selected file as a data URL.
    reader.readAsDataURL(selectedFile.value)
  }

  /**
   * Function to handle file selection.
   *
   * @param {Event} event - The input change event containing the selected file.
   */
  const handleFileChange = (event) => {
    const file = event.target.files[0]
    if (file) {
      selectedFile.value = file
      // Call a function to handle the file upload.
      uploadImage()
    }
  }

  /**
   * Computed property to ensure reactivity when base64 changes.
   * @type {ComputedRef<null | string>}
   */
  const displayImage = computed(() => base64.value)

  return {
    selectedFile,
    base64,
    handleFileChange,
    displayImage,
  }
}
