import { useEffect, useState } from 'react'
import Context from './Context'

const GlobalState = ({ children }) => {

    const [settings, setSettings] = useState({
        numbers: true,
        lower: false,
        upper: false,
        symbols: true,
        length: 8
    })

    const updateState = (option, value) => {
        return settings[option] = value
    }

    return (<Context.Provider value={{ settings, updateState }}>
        {children}
    </Context.Provider>
    )
}

export default GlobalState