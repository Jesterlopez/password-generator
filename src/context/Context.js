import { createContext } from 'react'

const Context = createContext({
    settings: {},
    updateState: () => {},
})

export default Context