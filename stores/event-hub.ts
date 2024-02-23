export const useEventHubStore = defineStore('global-event-hub', {
  // Configuration for state persistence using Pinia's `persist` plugin.
  // This ensures that the specified state paths will be automatically persisted and rehydrated
  // across page reloads or browser sessions. When the store is created, the initial state is
  // loaded from the persisted data, and any changes to the specified state paths will be saved
  // to the storage for future use.

  state: () => ({
    events: null,
  }),

  getters: {},

  actions: {
    async createRealtimeEventHubSnapshot(activeOrgId) {
      const eventsRef = doc(db, 'eventHub', activeOrgId)

      onSnapshot(eventsRef, (snapshot) => {
        this.events = snapshot.data() || null
      })
    },
  },
})
