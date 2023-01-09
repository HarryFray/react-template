import create from 'zustand'

interface GlobalState {
  userName: string
  setuserName: (userName: string) => void
}

const useGlobalState = create<GlobalState>((set) => ({
  userName: 'Nick Fray',
  setuserName: (userName) => {
    set(() => ({ userName }))
  }
}))

export default useGlobalState
