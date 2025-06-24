import { create } from 'zustand'
import { persist } from 'zustand/middleware'

const useUiStore = create(
  persist(
    (set) => ({
      cartIsOpen: false,
      setCartIsOpen: (payload) => set({ cartIsOpen: payload }),
    }),
    {
      name: 'ui-storage',
    }
  )
)

export default useUiStore