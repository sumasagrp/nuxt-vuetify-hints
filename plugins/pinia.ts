import type { PiniaPluginContext } from 'pinia'
import { useRouter } from 'vue-router'

export default defineNuxtPlugin(() => {
  const pinia = usePinia()
  const router = useRouter()

  pinia.use(({ store }: { store: Pick<PiniaPluginContext, 'store'> }) => {
    store.router = markRaw(router)
  })
})
